import { BuffettScore, LynchScore, GreenblattScore, TalebWarnings, MarksContext } from '@/types/sage'
import { TechnicalSignals } from '@/types/indicators'
import { FMPFundamentals } from '@/types/data'

export interface VerdictCallInput {
  fundamentals: FMPFundamentals
  buffett: BuffettScore
  lynch: LynchScore
  greenblatt: GreenblattScore
  taleb: TalebWarnings
  marks: MarksContext
  technical: TechnicalSignals
}

export const VERDICT_SYSTEM_PROMPT = `You are the Chairman of an investment boardroom. You have heard from five legendary investors and a technical analyst. Your job is to deliver the final investment verdict.

RULES:
- The verdict must be data-driven and objective — no bias, no sentiment
- Long-term verdict: based primarily on fundamental analysis (12-24 month horizon)
- Short-term verdict: based primarily on technical analysis (timing of entry)
- Price targets must be grounded in the data (use ATR for stop-loss placement)
- The "chairman" summary quote should be decisive, authoritative, 3-4 sentences
- Return ONLY valid JSON. No markdown. No text outside JSON.`

export function buildVerdictPrompt(input: VerdictCallInput): string {
  const { fundamentals: f, buffett, lynch, greenblatt, taleb, marks, technical: t } = input
  const ti = t.indicators

  return `Deliver the final boardroom verdict for ${f.name} (${f.ticker}).

SAGE OPINIONS:
- Buffett (${buffett.moatRating} moat, quality ${buffett.qualityScore}/100): "${buffett.quote}"
- Lynch (PEG ${lynch.pegRatio.toFixed(2)}, ${lynch.stockCategory}, ${lynch.recommendation}): "${lynch.quote}"
- Greenblatt (earnings yield ${(greenblatt.earningsYield * 100).toFixed(2)}%, ROC ${(greenblatt.returnOnCapital * 100).toFixed(1)}%): "${greenblatt.quote}"
- Taleb (${taleb.fragilityLevel}, ${taleb.blackSwanRisk} black swan risk, ${taleb.warnings.length} warnings): "${taleb.quote}"
- Marks (${marks.cyclePosition} cycle, ${marks.riskLevel} risk, requires ${marks.requiredMarginOfSafety}% margin of safety): "${marks.quote}"

TECHNICAL PICTURE:
- Current price: $${ti.currentPrice.toFixed(2)}
- Trend: ${t.trend} | Momentum: ${t.momentum} | Volume: ${t.volume} | Overall: ${t.overall}
- RSI(14): ${ti.rsi14.toFixed(1)} | ADX(14): ${ti.adx14.toFixed(1)} (${ti.adxTrend} trend)
- Price vs SMA50: ${ti.priceVsSma50.toFixed(1)}% | vs SMA200: ${ti.priceVsSma200.toFixed(1)}%
- ATR(14): $${ti.atr14.toFixed(2)} (${ti.atrPercent.toFixed(1)}% of price)
- Koncorde: ${ti.koncorde.latestSignal} | OBV: ${ti.obvTrend}
- Bollinger %B: ${(ti.bollingerPercentB * 100).toFixed(0)}%
${ti.goldenCross ? '- GOLDEN CROSS detected' : ''}${ti.deathCross ? '- DEATH CROSS detected' : ''}

VALUATION CONTEXT:
- Current P/E: ${f.pe.toFixed(1)} | EV/EBITDA: ${f.evEbitda.toFixed(1)}
- FCF Yield: ${(f.freeCashFlowYield * 100).toFixed(2)}%

Return this exact JSON structure:
{
  "overallRating": "strong-buy" | "buy" | "watch" | "hold" | "avoid" | "sell",
  "confidence": number (0-100),
  "longTerm": {
    "horizon": "12-24 months",
    "action": "buy" | "accumulate" | "hold" | "reduce" | "avoid",
    "priceTarget": number,
    "stopLoss": number,
    "targetUpside": number,
    "riskReward": number,
    "rationale": "string (2-3 sentences)"
  },
  "shortTerm": {
    "horizon": "1-3 months" | "1-4 weeks",
    "action": "buy" | "accumulate" | "hold" | "reduce" | "avoid",
    "priceTarget": number,
    "stopLoss": number,
    "targetUpside": number,
    "riskReward": number,
    "rationale": "string (2-3 sentences)"
  },
  "sageConsensus": "string (1-2 sentences describing how the sages align or conflict)",
  "narratives": {
    "buffett": "final closing line from Buffett",
    "lynch": "final closing line from Lynch",
    "greenblatt": "final closing line from Greenblatt",
    "taleb": "final closing line from Taleb",
    "marks": "final closing line from Marks",
    "chairman": "chairman final verdict summary (3-4 sentences)"
  }
}`
}
