/**
 * Koncorde indicator (Enzo Gallo)
 * Separates institutional ("strong hands") from retail flow.
 *
 * Azul (blue / strong hands):
 *   medio = (H + L + C*2) / 4
 *   bn    = (medio - L) / (H - L) * V    [when H != L]
 *   azul  = EMA(bn, 13) - EMA(bn, 26)    [MACD-style of bn]
 *
 * Verde (green / retail):
 *   verde = OBV-style oscillator of retail pressure
 *   retail = (2C - H - L) / (H - L) * V  [when H != L]
 *   verde = EMA(retail, 5)
 */

import { OHLCVCandle } from '@/types/data'
import { KoncordeResult } from '@/types/indicators'

function ema(values: number[], period: number): number[] {
  const k = 2 / (period + 1)
  const result: number[] = []
  let prev = values[0]
  for (const v of values) {
    const cur = v * k + prev * (1 - k)
    result.push(cur)
    prev = cur
  }
  return result
}

function trend(series: number[], lookback = 5): 'rising' | 'falling' | 'flat' {
  if (series.length < lookback + 1) return 'flat'
  const recent = series.slice(-lookback)
  const diffs = recent.slice(1).map((v, i) => v - recent[i])
  const avg = diffs.reduce((a, b) => a + b, 0) / diffs.length
  if (avg > 0.005 * Math.abs(recent[0])) return 'rising'
  if (avg < -0.005 * Math.abs(recent[0])) return 'falling'
  return 'flat'
}

export function computeKoncorde(candles: OHLCVCandle[]): KoncordeResult {
  const bn: number[] = []
  const retail: number[] = []

  for (const c of candles) {
    const range = c.high - c.low
    if (range === 0) {
      bn.push(0)
      retail.push(0)
      continue
    }
    const medio = (c.high + c.low + c.close * 2) / 4
    bn.push(((medio - c.low) / range) * c.volume)
    retail.push(((2 * c.close - c.high - c.low) / range) * c.volume)
  }

  const ema13 = ema(bn, 13)
  const ema26 = ema(bn, 26)
  const strongHandsLine = ema13.map((v, i) => v - ema26[i])
  const retailLine = ema(retail, 5)

  const latest = strongHandsLine[strongHandsLine.length - 1]
  const latestRetail = retailLine[retailLine.length - 1]
  const strongTrend = trend(strongHandsLine)

  let latestSignal: KoncordeResult['latestSignal'] = 'neutral'
  if (latest > 0 && strongTrend === 'rising') latestSignal = 'accumulation'
  else if (latest < 0 && strongTrend === 'falling') latestSignal = 'distribution'

  return {
    strongHandsLine,
    retailLine,
    latestSignal,
    strongHandsTrend: strongTrend,
  }
}
