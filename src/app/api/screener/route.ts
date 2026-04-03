import { NextResponse } from 'next/server'
import { runScreener } from '@/lib/pipeline/screener'

export const dynamic = 'force-dynamic'
export const maxDuration = 60

export async function GET() {
  try {
    const results = await runScreener()
    return NextResponse.json({ results, generatedAt: new Date().toISOString() })
  } catch (error) {
    console.error('[screener]', error)
    return NextResponse.json({ error: 'Screener failed' }, { status: 500 })
  }
}
