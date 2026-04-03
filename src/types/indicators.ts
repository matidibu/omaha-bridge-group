import { OHLCVCandle } from './data'

export interface KoncordeResult {
  strongHandsLine: number[]
  retailLine: number[]
  latestSignal: 'accumulation' | 'distribution' | 'neutral'
  strongHandsTrend: 'rising' | 'falling' | 'flat'
}

export interface TechnicalIndicators {
  rsi14: number
  ema21: number
  sma50: number
  sma200: number
  bollingerUpper: number
  bollingerMiddle: number
  bollingerLower: number
  bollingerPercentB: number
  koncorde: KoncordeResult
  obv: number
  obvTrend: 'rising' | 'falling' | 'flat'
  adx14: number
  adxTrend: 'strong' | 'weak'
  atr14: number
  atrPercent: number
  currentPrice: number
  priceVsSma50: number
  priceVsSma200: number
  goldenCross: boolean
  deathCross: boolean
  candles: OHLCVCandle[]
}

export type IndicatorSignal = 'bullish' | 'neutral' | 'bearish'

export interface TechnicalSignals {
  trend: IndicatorSignal
  momentum: IndicatorSignal
  volume: IndicatorSignal
  volatility: IndicatorSignal
  overall: IndicatorSignal
  indicators: TechnicalIndicators
}
