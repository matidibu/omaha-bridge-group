import { FMPFundamentals, FREDMacro, CEDEARData } from './data'
import { TechnicalSignals } from './indicators'
import { BuffettScore, LynchScore, GreenblattScore, TalebWarnings, MarksContext } from './sage'

export type AnalysisMode = 'single' | 'compare'
export type OverallRating = 'strong-buy' | 'buy' | 'watch' | 'hold' | 'avoid' | 'sell'

export interface AnalysisRequest {
  mode: AnalysisMode
  tickers: string[]
  includeArgentine?: boolean
  forceRefresh?: boolean
}

export interface VerdictOutput {
  horizon: '12-24 months' | '1-3 months' | '1-4 weeks'
  action: 'buy' | 'accumulate' | 'hold' | 'reduce' | 'avoid'
  priceTarget: number
  stopLoss: number
  targetUpside: number
  riskReward: number
  rationale: string
}

export interface SageNarratives {
  buffett: string
  lynch: string
  greenblatt: string
  taleb: string
  marks: string
  chairman: string
}

export interface AnalysisVerdict {
  longTerm: VerdictOutput
  shortTerm: VerdictOutput
  overallRating: OverallRating
  confidence: number
  sageConsensus: string
  narratives: SageNarratives
}

export interface SingleStockAnalysis {
  id: string
  ticker: string
  name: string
  analyzedAt: string
  mode: 'single'

  buffettGate: BuffettScore
  passed: boolean

  sageScores: {
    lynch: LynchScore | null
    greenblatt: GreenblattScore | null
    taleb: TalebWarnings | null
    marks: MarksContext | null
  } | null

  technical: TechnicalSignals | null
  verdict: AnalysisVerdict | null

  fundamentals: FMPFundamentals
  macro: FREDMacro
  cedear?: CEDEARData
}

export interface GreenblattRanking {
  ticker: string
  name: string
  earningsYieldRank: number
  rocRank: number
  combinedRank: number
  score: number
}

export interface ComparisonAnalysis {
  id: string
  mode: 'compare'
  analyzedAt: string
  tickers: string[]
  analyses: SingleStockAnalysis[]
  greenblattRanking: GreenblattRanking[]
  winner: string
  winnerRationale: string
}

// SSE streaming event types
export type StreamEventType =
  | 'start'
  | 'buffett_gate'
  | 'data_fetched'
  | 'indicators_ready'
  | 'sage_scores'
  | 'technical_ready'
  | 'verdict_ready'
  | 'complete'
  | 'error'

export interface StreamEvent {
  type: StreamEventType
  ticker: string
  data?: Partial<SingleStockAnalysis>
  error?: string
  progress?: number
}
