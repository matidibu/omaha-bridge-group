import { fetchFundamentals } from '@/lib/data/fmp'
import { fetchOHLCV } from '@/lib/data/yahoo'
import { runBuffettGate } from '@/lib/sages/buffett'
import { computeLynchScore } from '@/lib/sages/lynch'
import { computeGreenblattScore, rankAll, GreenblattInput } from '@/lib/sages/greenblatt'
import { computeTalebWarnings } from '@/lib/sages/taleb'
import { computeAllIndicators } from '@/lib/indicators'

// Pool of high-quality candidates across sectors
const CANDIDATES = [
  // Technology
  'AAPL', 'MSFT', 'GOOGL', 'META', 'ADBE', 'ORCL', 'INTU',
  // Payments & Financial
  'V', 'MA', 'AXP', 'JPM', 'SPGI', 'MCO',
  // Consumer Staples
  'KO', 'PEP', 'PG', 'CL', 'COST',
  // Consumer Discretionary
  'MCD', 'NKE', 'SBUX',
  // Healthcare
  'UNH', 'TMO', 'ISRG', 'ABT',
  // Industrial & Other
  'HON', 'ITW', 'AMZN',
]

export interface ScreenerStock {
  ticker: string
  name: string
  sector: string
  currentPrice: number
  compositeScore: number
  buffettQuality: number
  moatRating: string
  roe: number
  roic: number
  grossMargin: number
  debtToEquity: number
  peg: number
  magicFormulaScore: number
  fragilityLevel: string
  technicalSignal: 'bullish' | 'neutral' | 'bearish'
  lynchCategory: string
  earningsYield: number
  returnOnCapital: number
}

// Server-side in-memory cache (4-hour TTL — fundamentals are stable intraday)
let _cache: ScreenerStock[] | null = null
let _cacheAt = 0
const TTL = 4 * 60 * 60 * 1000

export function getCachedScreener(): ScreenerStock[] | null {
  if (_cache && Date.now() - _cacheAt < TTL) return _cache
  return null
}

export async function runScreener(): Promise<ScreenerStock[]> {
  const cached = getCachedScreener()
  if (cached) return cached

  // Step 1: Fetch fundamentals for all candidates in parallel, skip failures
  const fundamentalResults = await Promise.allSettled(
    CANDIDATES.map(async (ticker) => ({ ticker, fundamentals: await fetchFundamentals(ticker) }))
  )

  const passing: Array<{ ticker: string; fundamentals: ReturnType<typeof fetchFundamentals> extends Promise<infer T> ? T : never }> = []

  for (const result of fundamentalResults) {
    if (result.status !== 'fulfilled') continue
    const { ticker, fundamentals } = result.value
    const gate = runBuffettGate(fundamentals)
    if (gate.passed) passing.push({ ticker, fundamentals })
  }

  if (passing.length === 0) {
    _cache = []
    _cacheAt = Date.now()
    return []
  }

  // Step 2: Greenblatt ranking across all passing stocks (this is the real Magic Formula)
  const greenblattInputs: GreenblattInput[] = passing.map(({ ticker, fundamentals }) => ({
    ticker,
    earningsYield: fundamentals.earningsYield,
    returnOnCapital: fundamentals.returnOnCapital,
  }))
  const greenblattRankings = rankAll(greenblattInputs)

  // Step 3: Fetch OHLCV + compute technicals for all passing stocks in parallel
  const technicalResults = await Promise.allSettled(
    passing.map(async ({ ticker }) => {
      const candles = await fetchOHLCV(ticker, 300)
      const tech = computeAllIndicators(candles)
      return { ticker, tech }
    })
  )
  const technicalMap = new Map<string, ReturnType<typeof computeAllIndicators>>()
  for (const r of technicalResults) {
    if (r.status === 'fulfilled') technicalMap.set(r.value.ticker, r.value.tech)
  }

  // Step 4: Compute composite scores and filter bearish technicals
  const screened: ScreenerStock[] = []

  for (const { ticker, fundamentals } of passing) {
    const gate = runBuffettGate(fundamentals)
    const lynch = computeLynchScore(fundamentals)
    const greenblatt = computeGreenblattScore(fundamentals)
    const taleb = computeTalebWarnings(fundamentals)
    const tech = technicalMap.get(ticker)

    if (!tech) continue

    const technicalSignal = tech.overall
    // Exclude bearish technicals — Bridge Boys only sit down when the technicals agree
    if (technicalSignal === 'bearish') continue

    const gRank = greenblattRankings.get(ticker)
    const magicFormulaScore = gRank?.magicFormulaScore ?? 0

    const talebScore =
      taleb.fragilityLevel === 'antifragile' ? 100
      : taleb.fragilityLevel === 'robust' ? 60
      : 20

    const techScore = technicalSignal === 'bullish' ? 100 : 50

    const compositeScore = Math.round(
      gate.qualityScore    * 0.35 +
      magicFormulaScore    * 0.25 +
      lynch.garpScore      * 0.20 +
      talebScore           * 0.10 +
      techScore            * 0.10
    )

    screened.push({
      ticker,
      name: fundamentals.name,
      sector: fundamentals.sector,
      currentPrice: fundamentals.currentPrice,
      compositeScore,
      buffettQuality: gate.qualityScore,
      moatRating: gate.moatRating,
      roe: fundamentals.roe,
      roic: fundamentals.roic,
      grossMargin: fundamentals.grossMargin,
      debtToEquity: fundamentals.debtToEquity,
      peg: fundamentals.peg,
      magicFormulaScore,
      fragilityLevel: taleb.fragilityLevel,
      technicalSignal,
      lynchCategory: lynch.stockCategory,
      earningsYield: fundamentals.earningsYield,
      returnOnCapital: fundamentals.returnOnCapital,
    })
  }

  // Top 5 by composite score
  const top5 = screened.sort((a, b) => b.compositeScore - a.compositeScore).slice(0, 5)

  _cache = top5
  _cacheAt = Date.now()
  return top5
}
