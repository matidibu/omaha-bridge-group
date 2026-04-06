import { analyzeSingleStock } from './singleStock'
import { SingleStockAnalysis } from '@/types/analysis'

/**
 * Runs the full analysis pipeline and returns the final result.
 * Unlike analyzeSingleStock (SSE streaming), this collects all events
 * and returns the complete SingleStockAnalysis — suitable for server-side rendering.
 */
export async function analyzeToCompletion(ticker: string): Promise<SingleStockAnalysis | null> {
  try {
    for await (const event of analyzeSingleStock(ticker)) {
      if (event.type === 'complete' && event.data) {
        return event.data as SingleStockAnalysis
      }
      if (event.type === 'error') {
        return null
      }
    }
    return null
  } catch {
    return null
  }
}
