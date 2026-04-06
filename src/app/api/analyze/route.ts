import { NextRequest } from 'next/server'
import { z } from 'zod'
import { analyzeSingleStock } from '@/lib/pipeline/singleStock'
import { checkRateLimit } from '@/lib/rateLimit'
import { StreamEvent } from '@/types/analysis'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const tickerSchema = z.string().trim().toUpperCase().regex(/^[A-Z]{1,10}$/)

export async function GET(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown'
  if (!checkRateLimit(ip, 'analyze', 10, 15 * 60 * 1000)) {
    return new Response('Too many requests', { status: 429 })
  }

  const rawTicker = req.nextUrl.searchParams.get('ticker')
  const parsed = tickerSchema.safeParse(rawTicker)
  if (!parsed.success) {
    return new Response('Invalid ticker', { status: 400 })
  }
  const ticker = parsed.data

  const encoder = new TextEncoder()

  const stream = new ReadableStream({
    async start(controller) {
      function send(event: StreamEvent) {
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify(event)}\n\n`)
        )
      }

      // Heartbeat every 30s to prevent proxy/load-balancer from dropping idle connections
      const heartbeat = setInterval(() => {
        try {
          controller.enqueue(encoder.encode(': keepalive\n\n'))
        } catch {
          clearInterval(heartbeat)
        }
      }, 30_000)

      try {
        for await (const event of analyzeSingleStock(ticker)) {
          send(event)
          if (event.type === 'complete' || event.type === 'error') break
        }
      } catch (err) {
        send({
          type: 'error',
          ticker,
          error: err instanceof Error ? err.message : 'Unknown error',
        })
      } finally {
        clearInterval(heartbeat)
        controller.close()
      }
    },
  })

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
      'X-Accel-Buffering': 'no',
    },
  })
}
