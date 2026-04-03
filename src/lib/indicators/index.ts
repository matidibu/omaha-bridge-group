import {
  RSI,
  EMA,
  SMA,
  BollingerBands,
  OBV,
  ADX,
  ATR,
} from 'technicalindicators'
import { OHLCVCandle } from '@/types/data'
import { TechnicalIndicators, TechnicalSignals, IndicatorSignal } from '@/types/indicators'
import { computeKoncorde } from './koncorde'

export function computeAllIndicators(candles: OHLCVCandle[]): TechnicalSignals {
  const closes = candles.map((c) => c.close)
  const highs = candles.map((c) => c.high)
  const lows = candles.map((c) => c.low)
  const volumes = candles.map((c) => c.volume)
  const currentPrice = closes[closes.length - 1]

  // RSI 14
  const rsiValues = RSI.calculate({ values: closes, period: 14 })
  const rsi14 = rsiValues[rsiValues.length - 1] ?? 50

  // EMA 21
  const ema21Values = EMA.calculate({ values: closes, period: 21 })
  const ema21 = ema21Values[ema21Values.length - 1] ?? currentPrice

  // SMA 50 & 200
  const sma50Values = SMA.calculate({ values: closes, period: 50 })
  const sma50 = sma50Values[sma50Values.length - 1] ?? currentPrice
  const sma200Values = SMA.calculate({ values: closes, period: 200 })
  const sma200 = sma200Values[sma200Values.length - 1] ?? currentPrice

  // Bollinger Bands (20, 2)
  const bbValues = BollingerBands.calculate({ values: closes, period: 20, stdDev: 2 })
  const bb = bbValues[bbValues.length - 1] ?? { upper: currentPrice, middle: currentPrice, lower: currentPrice }
  const bollingerPercentB = bb.lower !== bb.upper
    ? (currentPrice - bb.lower) / (bb.upper - bb.lower)
    : 0.5

  // OBV
  const obvValues = OBV.calculate({ close: closes, volume: volumes })
  const obvCurrent = obvValues[obvValues.length - 1] ?? 0
  const obvPrev = obvValues[obvValues.length - 6] ?? obvCurrent
  const obvTrend: 'rising' | 'falling' | 'flat' =
    obvCurrent > obvPrev * 1.01 ? 'rising' : obvCurrent < obvPrev * 0.99 ? 'falling' : 'flat'

  // ADX 14
  const adxValues = ADX.calculate({ high: highs, low: lows, close: closes, period: 14 })
  const adxCurrent = adxValues[adxValues.length - 1]?.adx ?? 20
  const adxTrend: 'strong' | 'weak' = adxCurrent >= 25 ? 'strong' : 'weak'

  // ATR 14
  const atrValues = ATR.calculate({ high: highs, low: lows, close: closes, period: 14 })
  const atr14 = atrValues[atrValues.length - 1] ?? 0
  const atrPercent = currentPrice > 0 ? (atr14 / currentPrice) * 100 : 0

  // Koncorde
  const koncorde = computeKoncorde(candles)

  // % vs moving averages
  const priceVsSma50 = sma50 > 0 ? ((currentPrice - sma50) / sma50) * 100 : 0
  const priceVsSma200 = sma200 > 0 ? ((currentPrice - sma200) / sma200) * 100 : 0

  // Golden/Death cross
  const sma50Prev = sma50Values.length > 2 ? sma50Values[sma50Values.length - 2] : sma50
  const sma200Prev = sma200Values.length > 2 ? sma200Values[sma200Values.length - 2] : sma200
  const goldenCross = sma50Prev <= sma200Prev && sma50 > sma200
  const deathCross = sma50Prev >= sma200Prev && sma50 < sma200

  const indicators: TechnicalIndicators = {
    rsi14,
    ema21,
    sma50,
    sma200,
    bollingerUpper: bb.upper,
    bollingerMiddle: bb.middle,
    bollingerLower: bb.lower,
    bollingerPercentB,
    koncorde,
    obv: obvCurrent,
    obvTrend,
    adx14: adxCurrent,
    adxTrend,
    atr14,
    atrPercent,
    currentPrice,
    priceVsSma50,
    priceVsSma200,
    goldenCross,
    deathCross,
    candles: candles.slice(-100),
  }

  // Derive signals
  const trend = deriveTrendSignal(indicators)
  const momentum = deriveMomentumSignal(indicators)
  const volume = deriveVolumeSignal(indicators)
  const volatility = deriveVolatilitySignal(indicators)
  const overall = deriveOverall(trend, momentum, volume)

  return { trend, momentum, volume, volatility, overall, indicators }
}

function deriveTrendSignal(i: TechnicalIndicators): IndicatorSignal {
  const bullPoints =
    (i.currentPrice > i.sma200 ? 1 : 0) +
    (i.currentPrice > i.sma50 ? 1 : 0) +
    (i.sma50 > i.sma200 ? 1 : 0) +
    (i.goldenCross ? 1 : 0) +
    (i.deathCross ? -2 : 0)
  if (bullPoints >= 3) return 'bullish'
  if (bullPoints <= 0) return 'bearish'
  return 'neutral'
}

function deriveMomentumSignal(i: TechnicalIndicators): IndicatorSignal {
  if (i.rsi14 >= 70) return 'neutral' // overbought = caution
  if (i.rsi14 <= 30) return 'bullish' // oversold = opportunity
  if (i.rsi14 >= 50 && i.koncorde.latestSignal === 'accumulation') return 'bullish'
  if (i.rsi14 < 45 || i.koncorde.latestSignal === 'distribution') return 'bearish'
  return 'neutral'
}

function deriveVolumeSignal(i: TechnicalIndicators): IndicatorSignal {
  if (i.obvTrend === 'rising' && i.koncorde.latestSignal === 'accumulation') return 'bullish'
  if (i.obvTrend === 'falling' && i.koncorde.latestSignal === 'distribution') return 'bearish'
  return 'neutral'
}

function deriveVolatilitySignal(i: TechnicalIndicators): IndicatorSignal {
  if (i.bollingerPercentB < 0.2) return 'bullish'  // near lower band = possible bounce
  if (i.bollingerPercentB > 0.85) return 'bearish' // near upper band = extended
  return 'neutral'
}

function deriveOverall(
  trend: IndicatorSignal,
  momentum: IndicatorSignal,
  volume: IndicatorSignal,
): IndicatorSignal {
  const score = [trend, momentum, volume].reduce((acc, s) => {
    return acc + (s === 'bullish' ? 1 : s === 'bearish' ? -1 : 0)
  }, 0)
  if (score >= 2) return 'bullish'
  if (score <= -2) return 'bearish'
  return 'neutral'
}
