import { NextRequest, NextResponse } from 'next/server'

// eslint-disable-next-line @typescript-eslint/no-require-imports
const YahooFinance = require('yahoo-finance2').default
const yf = new YahooFinance({ suppressNotices: ['yahooSurvey'] })

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get('q')?.trim()
  if (!q || q.length < 2) return NextResponse.json([])

  try {
    const result = await yf.search(q)
    const suggestions = (result.quotes ?? [])
      .filter((r: { quoteType: string; symbol: string }) => r.quoteType === 'EQUITY' && r.symbol)
      .slice(0, 7)
      .map((r: { symbol: string; shortname?: string; longname?: string; exchDisp?: string }) => ({
        symbol: r.symbol,
        name: r.longname ?? r.shortname ?? r.symbol,
        exchange: r.exchDisp ?? '',
      }))
    return NextResponse.json(suggestions)
  } catch {
    return NextResponse.json([])
  }
}
