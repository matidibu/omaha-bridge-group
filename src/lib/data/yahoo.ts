// eslint-disable-next-line @typescript-eslint/no-require-imports
const YahooFinanceClass = require('yahoo-finance2').default
// yahoo-finance2 v3 requires instantiation — static calls throw
const yahooFinance = new YahooFinanceClass({ suppressNotices: ['yahooSurvey'] })
import { OHLCVCandle } from '@/types/data'

interface YahooQuote {
  date: Date
  open: number | null
  high: number | null
  low: number | null
  close: number | null
  volume: number | null
}

export async function fetchOHLCV(ticker: string, days = 500): Promise<OHLCVCandle[]> {
  const endDate = new Date()
  const startDate = new Date()
  startDate.setDate(startDate.getDate() - days)

  const result = await yahooFinance.chart(ticker, {
    period1: startDate,
    period2: endDate,
    interval: '1d',
  })

  const quotes: YahooQuote[] = result.quotes ?? []
  return quotes
    .filter((q) => q.open != null && q.close != null)
    .map((q) => ({
      date: new Date(q.date).toISOString().split('T')[0],
      open: q.open!,
      high: q.high!,
      low: q.low!,
      close: q.close!,
      volume: q.volume ?? 0,
    }))
    .sort((a: OHLCVCandle, b: OHLCVCandle) => a.date.localeCompare(b.date))
}
