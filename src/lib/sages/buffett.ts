import { FMPFundamentals } from '@/types/data'
import { BuffettScore } from '@/types/sage'

/**
 * Buffett gate: pure deterministic filter.
 * NO Claude call. Runs first, cheaply.
 * If passed = false, the pipeline stops entirely.
 */
export function runBuffettGate(f: FMPFundamentals): BuffettScore {
  const failReasons: string[] = []

  // 1. ROE > 15% (ideally > 20%)
  const roeOk = f.roe >= 0.15
  if (!roeOk) failReasons.push(`ROE ${(f.roe * 100).toFixed(1)}% por debajo del umbral del 15%`)

  // 2. ROIC > 12%
  const roicOk = f.roic >= 0.12
  if (!roicOk) failReasons.push(`ROIC ${(f.roic * 100).toFixed(1)}% por debajo del umbral del 12%`)

  // 3. Consistent FCF (at least 70% of available years positive)
  const totalFCFYears = f.cashFlowStatements.length
  const positiveFCFYears = f.cashFlowStatements.filter((s) => s.freeCashFlow > 0).length
  const fcfThreshold = Math.max(Math.round(totalFCFYears * 0.7), 1)
  const fcfOk = positiveFCFYears >= fcfThreshold
  if (!fcfOk) failReasons.push(`Solo ${positiveFCFYears}/${totalFCFYears} años con flujo de caja libre positivo`)

  // 4. Debt/Equity < 2.0 — Buffett cares about manageable debt, not a hard 1.0 cutoff.
  // Companies like KO and AAPL carry D/E > 1.0 due to capital-efficient buyback programs
  // while generating dominant FCF. The meaningful threshold is 2.0.
  const debtOk = f.debtToEquity < 2.0
  if (!debtOk) failReasons.push(`Deuda/Patrimonio ${f.debtToEquity.toFixed(2)} supera el límite de 2.0`)

  // 5. Gross margin stability: avg > 35% and not deteriorating
  const margins = f.incomeStatements.map((s) =>
    s.revenue > 0 ? s.grossProfit / s.revenue : 0
  )
  const avgMargin = margins.length > 0
    ? margins.reduce((a, b) => a + b, 0) / margins.length
    : 0
  const marginOk = avgMargin >= 0.35
  if (!marginOk) failReasons.push(`Margen bruto promedio ${(avgMargin * 100).toFixed(1)}% por debajo del umbral del 35%`)

  // Moat rating
  let moatRating: BuffettScore['moatRating'] = 'none'
  if (failReasons.length === 0) {
    moatRating = f.roe >= 0.25 && f.roic >= 0.20 && avgMargin >= 0.50 ? 'wide' : 'narrow'
  }

  // Quality score 0-100
  const qualityScore = Math.round(
    (roeOk ? 20 : f.roe / 0.15 * 20) +
    (roicOk ? 20 : f.roic / 0.12 * 20) +
    (fcfOk ? 20 : positiveFCFYears / fcfThreshold * 20) +
    (debtOk ? 20 : Math.max(0, (2.0 - f.debtToEquity) / 2.0 * 20)) +
    (marginOk ? 20 : avgMargin / 0.35 * 20)
  )

  const passed = failReasons.length === 0

  return {
    sage: 'buffett',
    passed,
    moatRating,
    qualityScore,
    failReasons,
    quote: '',  // filled by Claude Call 1
    keyMetrics: {
      roe: f.roe,
      roic: f.roic,
      debtToEquity: f.debtToEquity,
      grossMarginStability: avgMargin,
      fcfYield: f.freeCashFlowYield,
      consistentFCF: positiveFCFYears,
    },
  }
}
