import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

const CACHED_TICKERS = ['AAPL', 'MSFT', 'GOOGL', 'NVDA', 'META', 'AMZN', 'TSLA', 'JPM', 'V', 'KO']

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')
  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { ticker } = await req.json().catch(() => ({}))
  const tickers = ticker ? [ticker.toUpperCase()] : CACHED_TICKERS

  for (const t of tickers) {
    revalidatePath(`/analisis/${t}`)
  }

  return NextResponse.json({ revalidated: tickers, timestamp: new Date().toISOString() })
}
