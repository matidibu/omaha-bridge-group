import { FMPFundamentals } from '@/types/data'
import { GreenblattScore } from '@/types/sage'

export function computeGreenblattScore(f: FMPFundamentals): GreenblattScore {
  return {
    sage: 'greenblatt',
    earningsYield: f.earningsYield,
    returnOnCapital: f.returnOnCapital,
    earningsYieldRank: 0,   // set by rankAll()
    rocRank: 0,              // set by rankAll()
    combinedRank: 0,         // set by rankAll()
    magicFormulaScore: 0,    // set by rankAll()
    quote: '',
    isMeaningful: false,     // becomes true in comparison mode
  }
}

export interface GreenblattInput {
  ticker: string
  earningsYield: number
  returnOnCapital: number
}

export function rankAll(stocks: GreenblattInput[]): Map<string, Partial<GreenblattScore>> {
  const n = stocks.length
  if (n === 0) return new Map()

  // Rank by earnings yield (descending — higher is better)
  const byEY = [...stocks].sort((a, b) => b.earningsYield - a.earningsYield)
  const eyRankMap = new Map(byEY.map((s, i) => [s.ticker, i + 1]))

  // Rank by ROC (descending)
  const byROC = [...stocks].sort((a, b) => b.returnOnCapital - a.returnOnCapital)
  const rocRankMap = new Map(byROC.map((s, i) => [s.ticker, i + 1]))

  const result = new Map<string, Partial<GreenblattScore>>()
  for (const s of stocks) {
    const eyRank = eyRankMap.get(s.ticker)!
    const rocRank = rocRankMap.get(s.ticker)!
    const combined = eyRank + rocRank
    const score = Math.round(((n * 2 - combined) / (n * 2 - 2)) * 100)
    result.set(s.ticker, {
      earningsYieldRank: eyRank,
      rocRank,
      combinedRank: combined,
      magicFormulaScore: score,
      isMeaningful: n > 1,
    })
  }
  return result
}
