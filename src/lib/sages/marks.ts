import { FREDMacro } from '@/types/data'
import { MarksContext } from '@/types/sage'

export function computeMarksContext(macro: FREDMacro): MarksContext {
  // Assess rate environment
  const ratesHigh = macro.fedFundsRate > 4.0
  const ratesRising = macro.fedFundsRate > 2.5
  const inflationHot = macro.cpiYoY > 4.0
  const unemploymentLow = macro.unemploymentRate < 4.0
  const yieldCurveFlat = macro.tenYearYield < macro.fedFundsRate + 0.5

  // Cycle position heuristic
  let cyclePosition: MarksContext['cyclePosition']
  let sentiment: MarksContext['sentiment']

  if (ratesHigh && inflationHot) {
    cyclePosition = 'late'
    sentiment = 'cautious'
  } else if (ratesHigh && !inflationHot) {
    cyclePosition = 'mid'
    sentiment = 'neutral'
  } else if (!ratesHigh && unemploymentLow) {
    cyclePosition = 'peak'
    sentiment = 'optimistic'
  } else if (!ratesHigh && !unemploymentLow) {
    cyclePosition = 'early'
    sentiment = 'cautious'
  } else {
    cyclePosition = 'recovery'
    sentiment = 'neutral'
  }

  // Valuation vs history (using 10Y yield as proxy for discount rate)
  let valuationVsHistory: MarksContext['valuationVsHistory']
  if (macro.tenYearYield > 5.0) valuationVsHistory = 'cheap'   // high rates = lower multiples justified
  else if (macro.tenYearYield < 3.0) valuationVsHistory = 'expensive'
  else valuationVsHistory = 'fair'

  // Risk level
  let riskLevel: MarksContext['riskLevel']
  if (cyclePosition === 'peak' || cyclePosition === 'late') riskLevel = 'elevated'
  else if (ratesHigh && yieldCurveFlat) riskLevel = 'high'
  else if (cyclePosition === 'early' || cyclePosition === 'recovery') riskLevel = 'low'
  else riskLevel = 'moderate'

  // Required margin of safety adjustment
  const requiredMarginOfSafety =
    riskLevel === 'high' ? 35 :
    riskLevel === 'elevated' ? 25 :
    riskLevel === 'moderate' ? 15 : 10

  const marketNote = buildMarketNote(macro, cyclePosition, riskLevel)

  return {
    sage: 'marks',
    cyclePosition,
    sentiment,
    valuationVsHistory,
    quote: '',
    riskLevel,
    marketNote,
    requiredMarginOfSafety,
  }
}

function buildMarketNote(
  m: FREDMacro,
  cycle: MarksContext['cyclePosition'],
  risk: MarksContext['riskLevel'],
): string {
  return `Fed funds at ${m.fedFundsRate}%, CPI ${m.cpiYoY.toFixed(1)}% YoY, unemployment ${m.unemploymentRate}%. ` +
    `Cycle: ${cycle}. Risk environment: ${risk}. ` +
    `10Y yield ${m.tenYearYield.toFixed(2)}% provides competition for equities.`
}
