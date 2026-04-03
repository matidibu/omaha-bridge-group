import { FMPFundamentals } from '@/types/data'
import { BuffettScore, LynchScore, GreenblattScore, TalebWarnings, MarksContext } from '@/types/sage'

export interface FundamentalCallInput {
  fundamentals: FMPFundamentals
  buffettScore: BuffettScore
  lynchScore: LynchScore
  greenblattScore: GreenblattScore
  talebWarnings: TalebWarnings
  marksContext: MarksContext
}

export const FUNDAMENTAL_SYSTEM_PROMPT = `You are the moderator of an investment boardroom meeting. Five legendary investors are present, each analyzing the same stock. Your job is to capture each investor's authentic voice and perspective based on pre-calculated quantitative data.

RULES:
- Each investor speaks ONLY in their established style and philosophy
- Base ALL quotes on the quantitative data provided — no invented facts
- Quotes must be 2-4 sentences max, first-person, authentic to each investor's real communication style
- Warren Buffett: folksy, plain-English, Nebraska wisdom, long-term focus
- Peter Lynch: enthusiastic, story-based, relatable analogies, "the average investor can understand this"
- Joel Greenblatt: precise, formula-focused, ranking-obsessed, slightly academic
- Nassim Taleb: provocative, contrarian, risk-focused, uses terms like "fragile" and "Black Swan"
- Howard Marks: philosophical, cyclical thinking, "second-level thinking", measured and wise

Return ONLY valid JSON. No markdown. No explanation outside the JSON.`

export function buildFundamentalPrompt(input: FundamentalCallInput): string {
  const { fundamentals: f, buffettScore, lynchScore, greenblattScore, talebWarnings, marksContext } = input

  return `Analyze ${f.name} (${f.ticker}) for the boardroom meeting.

QUANTITATIVE DATA:
${JSON.stringify({
  company: { name: f.name, sector: f.sector, industry: f.industry, marketCap: (f.marketCap / 1e9).toFixed(2) + 'B' },
  valuation: { pe: f.pe, forwardPE: f.forwardPE, peg: f.peg, evEbitda: f.evEbitda, pbv: f.pbv },
  quality: { roe: (f.roe * 100).toFixed(1) + '%', roic: (f.roic * 100).toFixed(1) + '%', grossMargin: (f.grossMargin * 100).toFixed(1) + '%', operatingMargin: (f.operatingMargin * 100).toFixed(1) + '%' },
  growth: { revenueGrowth5y: (f.revenueGrowth5y * 100).toFixed(1) + '%', epsGrowth5y: (f.epsGrowth5y * 100).toFixed(1) + '%' },
  balance: { debtToEquity: f.debtToEquity.toFixed(2), debtToEbitda: f.debtToEbitda.toFixed(1), currentRatio: f.currentRatio.toFixed(2), interestCoverage: f.interestCoverageRatio.toFixed(1) },
  buffettGate: { passed: buffettScore.passed, moatRating: buffettScore.moatRating, qualityScore: buffettScore.qualityScore, failReasons: buffettScore.failReasons },
  lynch: { pegRatio: lynchScore.pegRatio.toFixed(2), garpScore: lynchScore.garpScore, stockCategory: lynchScore.stockCategory },
  greenblatt: { earningsYield: (greenblattScore.earningsYield * 100).toFixed(2) + '%', returnOnCapital: (greenblattScore.returnOnCapital * 100).toFixed(1) + '%' },
  taleb: { fragilityLevel: talebWarnings.fragilityLevel, warnings: talebWarnings.warnings, blackSwanRisk: talebWarnings.blackSwanRisk },
  marks: { cyclePosition: marksContext.cyclePosition, riskLevel: marksContext.riskLevel, requiredMarginOfSafety: marksContext.requiredMarginOfSafety + '%', marketNote: marksContext.marketNote },
}, null, 2)}

Return this exact JSON structure:
{
  "buffett": { "quote": "string" },
  "lynch": { "quote": "string" },
  "greenblatt": { "quote": "string" },
  "taleb": { "quote": "string" },
  "marks": { "quote": "string", "adjustedMarginOfSafety": number }
}`
}
