import { NextRequest, NextResponse } from 'next/server'
import { checkRateLimit } from '@/lib/rateLimit'

// eslint-disable-next-line @typescript-eslint/no-require-imports
const YahooFinance = require('yahoo-finance2').default
const yf = new YahooFinance({ suppressNotices: ['yahooSurvey'] })

export async function GET(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  if (!checkRateLimit(ip, 'search', 60, 15 * 60 * 1000)) {
    return NextResponse.json([], { status: 429 })
  }

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
