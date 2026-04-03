import { FMPFundamentals } from '@/types/data'
import { LynchScore } from '@/types/sage'

export function computeLynchScore(f: FMPFundamentals): LynchScore {
  const pegRatio = f.peg > 0 ? f.peg : (f.epsGrowth5y > 0 ? f.pe / (f.epsGrowth5y * 100) : 99)

  // PEG-based GARP score 0-100
  let pegScore: number
  if (pegRatio <= 0.5) pegScore = 100
  else if (pegRatio <= 1.0) pegScore = 80
  else if (pegRatio <= 1.5) pegScore = 55
  else if (pegRatio <= 2.0) pegScore = 30
  else pegScore = 10

  // Category classification
  const epsGrowthPct = f.epsGrowth5y * 100
  let stockCategory: LynchScore['stockCategory']
  if (epsGrowthPct < 5) stockCategory = 'slow-grower'
  else if (epsGrowthPct >= 5 && epsGrowthPct < 12) stockCategory = 'stalwart'
  else if (epsGrowthPct >= 12 && epsGrowthPct < 25) stockCategory = 'fast-grower'
  else if (f.pe < 0) stockCategory = 'turnaround'
  else stockCategory = 'fast-grower'

  // Adjust score by category (cyclicals need lower PEG target)
  const garpScore = pegScore

  let recommendation: LynchScore['recommendation']
  if (garpScore >= 80) recommendation = 'strong-buy'
  else if (garpScore >= 55) recommendation = 'buy'
  else if (garpScore >= 30) recommendation = 'hold'
  else recommendation = 'avoid'

  return {
    sage: 'lynch',
    pegRatio,
    garpScore,
    stockCategory,
    quote: '', // filled by Claude
    recommendation,
  }
}
