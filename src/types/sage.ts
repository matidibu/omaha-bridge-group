export type SageId = 'buffett' | 'lynch' | 'greenblatt' | 'taleb' | 'marks' | 'fink'

export interface BuffettScore {
  sage: 'buffett'
  passed: boolean
  moatRating: 'wide' | 'narrow' | 'none'
  qualityScore: number
  failReasons: string[]
  quote: string
  keyMetrics: {
    roe: number
    roic: number
    debtToEquity: number
    grossMarginStability: number
    fcfYield: number
    consistentFCF: number
  }
}

export interface LynchScore {
  sage: 'lynch'
  pegRatio: number
  garpScore: number
  stockCategory: 'slow-grower' | 'stalwart' | 'fast-grower' | 'cyclical' | 'turnaround' | 'asset-play'
  quote: string
  recommendation: 'strong-buy' | 'buy' | 'hold' | 'avoid'
}

export interface GreenblattScore {
  sage: 'greenblatt'
  earningsYield: number
  returnOnCapital: number
  earningsYieldRank: number
  rocRank: number
  combinedRank: number
  magicFormulaScore: number
  quote: string
  isMeaningful: boolean
}

export interface TalebWarning {
  category: 'debt' | 'leverage' | 'concentration' | 'liquidity' | 'dilution' | 'macro' | 'competition'
  severity: 'minor' | 'moderate' | 'severe'
  description: string
}

export interface TalebWarnings {
  sage: 'taleb'
  fragilityLevel: 'fragile' | 'robust' | 'antifragile'
  warnings: TalebWarning[]
  quote: string
  blackSwanRisk: 'low' | 'medium' | 'high' | 'extreme'
}

export interface FinkAnalysis {
  sage: 'fink'
  institutionalGrade: 'D' | 'C' | 'B' | 'A' | 'A+'
  capitalReturnsScore: number
  governanceScore: number
  longTermScore: number
  totalShareholderYield: number
  esgProxy: 'poor' | 'moderate' | 'good' | 'excellent'
  quote: string
}

export interface MarksContext {
  sage: 'marks'
  cyclePosition: 'early' | 'mid' | 'late' | 'peak' | 'trough' | 'recovery'
  sentiment: 'euphoric' | 'optimistic' | 'neutral' | 'cautious' | 'fearful' | 'panic'
  valuationVsHistory: 'expensive' | 'fair' | 'cheap'
  quote: string
  riskLevel: 'low' | 'moderate' | 'elevated' | 'high'
  marketNote: string
  requiredMarginOfSafety: number
}
