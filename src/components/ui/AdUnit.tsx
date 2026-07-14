'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window { adsbygoogle: unknown[] }
}

export function AdUnit({ slot }: { slot: string }) {
  const pushed = useRef(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = wrapperRef.current
    if (!el || pushed.current) return

    const push = () => {
      if (pushed.current) return
      pushed.current = true
      try {
        ;(window.adsbygoogle = window.adsbygoogle || []).push({})
      } catch {
        /* noop */
      }
    }

    // adsbygoogle needs a laid-out, non-zero-width container. Right after
    // mount the wrapper can still measure 0 (fonts/layout not settled yet),
    // which makes AdSense throw "No slot size for availableWidth=0".
    if (el.offsetWidth > 0) {
      push()
      return
    }

    const observer = new ResizeObserver((entries) => {
      if (entries[0]?.contentRect.width > 0) {
        push()
        observer.disconnect()
      }
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={wrapperRef} className="w-full flex justify-center py-3">
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%' }}
        data-ad-client="ca-pub-6133557054306983"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}
