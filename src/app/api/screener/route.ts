import { NextRequest, NextResponse } from 'next/server'
import { runScreener } from '@/lib/pipeline/screener'
import { checkRateLimit } from '@/lib/rateLimit'

export const dynamic = 'force-dynamic'
export const maxDuration = 60

export async function GET(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  if (!checkRateLimit(ip, 'screener', 20, 60 * 60 * 1000)) {
    return NextResponse.json({ error: 'Too many requests' }, { status: 429 })
  }

  try {
    const results = await runScreener()
    return NextResponse.json({ results, generatedAt: new Date().toISOString() })
  } catch (error) {
    console.error('[screener]', error)
    return NextResponse.json({ error: 'Screener failed' }, { status: 500 })
  }
}
