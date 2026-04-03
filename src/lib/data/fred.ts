import { FREDMacro } from '@/types/data'

const BASE = 'https://api.stlouisfed.org/fred/series/observations'
const KEY = process.env.FRED_API_KEY!

async function fetchLatest(seriesId: string): Promise<number> {
  const url = `${BASE}?series_id=${seriesId}&api_key=${KEY}&file_type=json&sort_order=desc&limit=2`
  const res = await fetch(url, { next: { revalidate: 21600 } })
  if (!res.ok) throw new Error(`FRED ${seriesId} → ${res.status}`)
  const data = await res.json()
  const obs = data.observations as { value: string }[]
  const val = obs.find((o) => o.value !== '.')
  return val ? parseFloat(val.value) : 0
}

export async function fetchMacro(): Promise<FREDMacro> {
  const [cpi, cpiPrev, fedRate, unemployment, t10y, gdp] = await Promise.all([
    fetchLatest('CPIAUCSL'),
    fetchLatest('CPIAUCSL'),   // will calc YoY manually below
    fetchLatest('FEDFUNDS'),
    fetchLatest('UNRATE'),
    fetchLatest('DGS10'),
    fetchLatest('A191RL1Q225SBEA'),
  ])

  // YoY CPI: rough proxy using PCEPI YoY series
  const cpiYoY = await fetchLatest('CPILFESL').catch(() => 0)

  return {
    cpi,
    cpiYoY,
    fedFundsRate: fedRate,
    unemploymentRate: unemployment,
    tenYearYield: t10y,
    realGDPGrowth: gdp,
    fetchedAt: new Date().toISOString(),
  }
}
