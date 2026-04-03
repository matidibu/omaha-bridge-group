import { NextRequest } from 'next/server'
import { analyzeSingleStock } from '@/lib/pipeline/singleStock'
import { StreamEvent } from '@/types/analysis'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
  const ticker = req.nextUrl.searchParams.get('ticker')
  if (!ticker) {
    return new Response('Missing ticker', { status: 400 })
  }

  const encoder = new TextEncoder()

  const stream = new ReadableStream({
    async start(controller) {
      function send(event: StreamEvent) {
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify(event)}\n\n`)
        )
      }

      try {
        for await (const event of analyzeSingleStock(ticker)) {
          send(event)
          if (event.type === 'complete' || event.type === 'error') break
        }
      } catch (err) {
        send({
          type: 'error',
          ticker: ticker.toUpperCase(),
          error: err instanceof Error ? err.message : 'Unknown error',
        })
      } finally {
        controller.close()
      }
    },
  })

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  })
}
