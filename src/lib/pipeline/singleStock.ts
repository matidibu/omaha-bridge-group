import { AnalysisRequest, SingleStockAnalysis, StreamEvent } from '@/types/analysis'
import { fetchFundamentals } from '@/lib/data/fmp'
import { fetchOHLCV } from '@/lib/data/yahoo'
import { fetchMacro } from '@/lib/data/fred'
import { runBuffettGate } from '@/lib/sages/buffett'
import { computeLynchScore } from '@/lib/sages/lynch'
import { computeGreenblattScore } from '@/lib/sages/greenblatt'
import { computeTalebWarnings } from '@/lib/sages/taleb'
import { computeMarksContext } from '@/lib/sages/marks'
import { computeAllIndicators } from '@/lib/indicators'
import { callClaude, extractJSON } from '@/lib/claude/client'
import {
  FUNDAMENTAL_SYSTEM_PROMPT,
  buildFundamentalPrompt,
  FundamentalCallInput,
} from '@/lib/claude/prompts/fundamental'
import {
  VERDICT_SYSTEM_PROMPT,
  buildVerdictPrompt,
  VerdictCallInput,
} from '@/lib/claude/prompts/verdict'
import { BuffettScore, LynchScore, GreenblattScore, TalebWarnings, MarksContext } from '@/types/sage'
import { AnalysisVerdict } from '@/types/analysis'

export async function* analyzeSingleStock(
  ticker: string,
): AsyncGenerator<StreamEvent> {
  const id = crypto.randomUUID()
  const t = ticker.toUpperCase()

  yield { type: 'start', ticker: t, progress: 5 }

  // Step 1: Fast Buffett pre-screen (no Claude)
  const [fundamentals, macro] = await Promise.all([
    fetchFundamentals(t),
    fetchMacro(),
  ])

  const buffettGateRaw = runBuffettGate(fundamentals)

  if (!buffettGateRaw.passed) {
    const result: SingleStockAnalysis = {
      id,
      ticker: t,
      name: fundamentals.name,
      analyzedAt: new Date().toISOString(),
      mode: 'single',
      buffettGate: { ...buffettGateRaw, quote: `I wouldn't touch ${fundamentals.name}. The numbers simply don't justify it — ${buffettGateRaw.failReasons[0]?.toLowerCase()}.` },
      passed: false,
      sageScores: null,
      technical: null,
      verdict: null,
      fundamentals,
      macro,
    }
    yield { type: 'buffett_gate', ticker: t, data: result, progress: 100 }
    yield { type: 'complete', ticker: t, data: result, progress: 100 }
    return
  }

  yield { type: 'buffett_gate', ticker: t, progress: 20 }

  // Step 2: Fetch OHLCV and compute indicators
  const candles = await fetchOHLCV(t, 500)
  const technical = computeAllIndicators(candles)

  yield { type: 'indicators_ready', ticker: t, progress: 40 }

  // Step 3: Compute deterministic sage scores
  const lynchRaw = computeLynchScore(fundamentals)
  const greenblattRaw = computeGreenblattScore(fundamentals)
  const talebRaw = computeTalebWarnings(fundamentals)
  const marksRaw = computeMarksContext(macro)

  // Step 4: Claude Call 1 — sage quotes
  const fundamentalInput: FundamentalCallInput = {
    fundamentals,
    buffettScore: buffettGateRaw,
    lynchScore: lynchRaw,
    greenblattScore: greenblattRaw,
    talebWarnings: talebRaw,
    marksContext: marksRaw,
  }

  const fundamentalRaw = await callClaude(
    FUNDAMENTAL_SYSTEM_PROMPT,
    buildFundamentalPrompt(fundamentalInput),
    1500,
  )

  const sageQuotes = extractJSON<{
    buffett: { quote: string }
    lynch: { quote: string }
    greenblatt: { quote: string }
    taleb: { quote: string }
    marks: { quote: string; adjustedMarginOfSafety: number }
  }>(fundamentalRaw)

  const buffettScore: BuffettScore = { ...buffettGateRaw, quote: sageQuotes.buffett.quote }
  const lynchScore: LynchScore = { ...lynchRaw, quote: sageQuotes.lynch.quote }
  const greenblattScore: GreenblattScore = { ...greenblattRaw, quote: sageQuotes.greenblatt.quote }
  const talebWarnings: TalebWarnings = { ...talebRaw, quote: sageQuotes.taleb.quote }
  const marksContext: MarksContext = { ...marksRaw, quote: sageQuotes.marks.quote }

  const sageScores = { lynch: lynchScore, greenblatt: greenblattScore, taleb: talebWarnings, marks: marksContext }

  yield { type: 'sage_scores', ticker: t, data: { buffettGate: buffettScore, sageScores }, progress: 65 }

  // Step 5: Claude Call 2 — final verdict
  const verdictInput: VerdictCallInput = {
    fundamentals,
    buffett: buffettScore,
    lynch: lynchScore,
    greenblatt: greenblattScore,
    taleb: talebWarnings,
    marks: marksContext,
    technical,
  }

  const verdictRaw = await callClaude(
    VERDICT_SYSTEM_PROMPT,
    buildVerdictPrompt(verdictInput),
    2500,
  )

  const verdict = extractJSON<AnalysisVerdict>(verdictRaw)

  yield { type: 'verdict_ready', ticker: t, progress: 90 }

  const result: SingleStockAnalysis = {
    id,
    ticker: t,
    name: fundamentals.name,
    analyzedAt: new Date().toISOString(),
    mode: 'single',
    buffettGate: buffettScore,
    passed: true,
    sageScores,
    technical,
    verdict,
    fundamentals,
    macro,
  }

  yield { type: 'complete', ticker: t, data: result, progress: 100 }
}
