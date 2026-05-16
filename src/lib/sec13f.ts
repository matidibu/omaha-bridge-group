import { unstable_cache } from 'next/cache'

export interface Holding {
  rank: number
  name: string
  ticker: string | null
  cusip: string
  value: number      // USD (actual dollars as reported in 13F XML)
  shares: number
  portfolioPct: number
}

export interface InvestorPortfolio {
  id: string
  name: string
  fund: string
  cik: string
  color: string
  symbol: string
  description: string
  strategy: string
  filingDate: string
  reportPeriod: string
  totalValue: number // USD (actual dollars)
  holdings: Holding[]
  error?: string
}

const SUPERINVESTORS = [
  {
    id: 'buffett',
    name: 'Warren Buffett',
    fund: 'Berkshire Hathaway',
    cik: '1067983',
    color: '#C9A84C',
    symbol: '♥',
    description: 'El Oráculo de Omaha',
    strategy: 'Empresas excepcionales a precios razonables. Moat amplio, ROIC alto, gestión honesta.',
  },
  {
    id: 'ackman',
    name: 'Bill Ackman',
    fund: 'Pershing Square Capital',
    cik: '1336528',
    color: '#60A5FA',
    symbol: '♣',
    description: 'Activista de alta convicción',
    strategy: 'Posiciones muy concentradas en negocios predecibles. Activismo para desbloquear valor.',
  },
  {
    id: 'burry',
    name: 'Michael Burry',
    fund: 'Scion Asset Management',
    cik: '1649339',
    color: '#F87171',
    symbol: '♠',
    description: 'El contrario del mercado',
    strategy: 'Value profundo con sesgo contrarian. Conocido por predecir la crisis hipotecaria de 2008.',
  },
]

const SEC_HEADERS = {
  'User-Agent': 'OmahaBridgeGroup diburzimatias@gmail.com',
}

function extractTag(xml: string, tag: string): string {
  const m = xml.match(new RegExp(`<${tag}[^>]*>([^<]*)<\/${tag}>`, 'i'))
  return m ? m[1].trim() : ''
}

function parseInfoTable(xml: string): Array<{ name: string; cusip: string; value: number; shares: number; putCall: string }> {
  const holdings: Array<{ name: string; cusip: string; value: number; shares: number; putCall: string }> = []
  const blockRegex = /<infoTable>([\s\S]*?)<\/infoTable>/gi
  let match
  while ((match = blockRegex.exec(xml)) !== null) {
    const block = match[1]
    const name = extractTag(block, 'nameOfIssuer')
    const cusip = extractTag(block, 'cusip')
    const value = parseInt(extractTag(block, 'value'), 10) || 0
    const shares = parseInt(extractTag(block, 'sshPrnamt'), 10) || 0
    const putCall = extractTag(block, 'putCall')
    if (name && value > 0) holdings.push({ name, cusip, value, shares, putCall })
  }
  return holdings
}

async function resolveTickersViaBatch(cusips: string[]): Promise<Map<string, string>> {
  const result = new Map<string, string>()
  const unique = [...new Set(cusips)].filter(Boolean)
  for (let i = 0; i < unique.length; i += 10) {
    const batch = unique.slice(i, i + 10)
    try {
      const res = await fetch('https://api.openfigi.com/v3/mapping', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(batch.map(c => ({ idType: 'ID_CUSIP', idValue: c }))),
        next: { revalidate: 86400 },
      })
      if (!res.ok) continue
      const data: Array<{ data?: Array<{ ticker?: string; securityType?: string }> }> = await res.json()
      data.forEach((item, j) => {
        if (!item.data?.length) return
        const stock = item.data.find(d => d.securityType === 'Common Stock') ?? item.data[0]
        if (stock?.ticker) result.set(batch[j], stock.ticker)
      })
    } catch { /* ignore batch errors */ }
    if (i + 10 < unique.length) await new Promise(r => setTimeout(r, 300))
  }
  return result
}

async function _fetchPortfolio(investor: typeof SUPERINVESTORS[number]): Promise<InvestorPortfolio> {
  const base: InvestorPortfolio = {
    ...investor,
    filingDate: '',
    reportPeriod: '',
    totalValue: 0,
    holdings: [],
  }

  try {
    const paddedCik = investor.cik.padStart(10, '0')
    const subRes = await fetch(
      `https://data.sec.gov/submissions/CIK${paddedCik}.json`,
      { headers: SEC_HEADERS, next: { revalidate: 86400 } }
    )
    if (!subRes.ok) return { ...base, error: `SEC submissions error ${subRes.status}` }
    const sub = await subRes.json()

    const r = sub.filings.recent
    const forms: string[] = r.form
    const accessions: string[] = r.accessionNumber
    const dates: string[] = r.filingDate
    const reportDates: string[] = r.reportDate ?? []
    const idx = forms.findIndex(f => f === '13F-HR')
    if (idx === -1) return { ...base, error: 'No 13F-HR filing found' }

    const accession: string = accessions[idx]
    const filingDate: string = dates[idx]
    const reportPeriod: string = reportDates[idx] ?? ''
    const accNoDashes = accession.replace(/-/g, '')

    // Parse HTML filing index to find the raw infotable XML filename
    let infotableFile = 'infotable.xml'
    try {
      const idxRes = await fetch(
        `https://www.sec.gov/Archives/edgar/data/${investor.cik}/${accNoDashes}/${accession}-index.html`,
        { headers: SEC_HEADERS, next: { revalidate: 86400 } }
      )
      if (idxRes.ok) {
        const html = await idxRes.text()
        // Match raw XML link (no subdirectory) followed by INFORMATION TABLE in the same table row
        const m = html.match(
          /href="\/Archives\/edgar\/data\/\d+\/\d+\/([^/\s"]+\.xml)"[^>]*>[^<]+<\/a>\s*<\/td>\s*<td[^>]*>\s*INFORMATION TABLE/i
        )
        if (m) infotableFile = m[1]
      }
    } catch { /* use default infotable.xml */ }

    const xmlRes = await fetch(
      `https://www.sec.gov/Archives/edgar/data/${investor.cik}/${accNoDashes}/${infotableFile}`,
      { headers: SEC_HEADERS, next: { revalidate: 86400 } }
    )
    if (!xmlRes.ok) return { ...base, filingDate, reportPeriod, error: `Infotable error ${xmlRes.status}` }
    const xml = await xmlRes.text()

    const raw = parseInfoTable(xml)
    const equities = raw
      .filter(h => !h.putCall || h.putCall.trim() === '')
      .sort((a, b) => b.value - a.value)
    const top10 = equities.slice(0, 10)
    const totalValue = equities.reduce((s, h) => s + h.value, 0)

    const tickerMap = await resolveTickersViaBatch(top10.map(h => h.cusip))

    const holdings: Holding[] = top10.map((h, i) => ({
      rank: i + 1,
      name: h.name,
      ticker: tickerMap.get(h.cusip) ?? null,
      cusip: h.cusip,
      value: h.value,
      shares: h.shares,
      portfolioPct: totalValue > 0 ? (h.value / totalValue) * 100 : 0,
    }))

    return { ...base, filingDate, reportPeriod, totalValue, holdings }
  } catch (err) {
    return { ...base, error: err instanceof Error ? err.message : 'Error desconocido' }
  }
}

export const fetchAllPortfolios = unstable_cache(
  async (): Promise<InvestorPortfolio[]> =>
    Promise.all(SUPERINVESTORS.map(_fetchPortfolio)),
  ['superinvestors-13f'],
  { revalidate: 86400, tags: ['superinvestors'] }
)
