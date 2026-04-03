'use client'

import { cn } from '@/lib/utils'

// Traditional card color: red for ♥♦, black for ♣♠★
function suitColor(suit: string): string {
  return suit === '♥' || suit === '♦' ? '#DC2626' : '#111111'
}

interface PlayingCardProps {
  suit: '♥' | '♣' | '♦' | '♠' | '★'
  label?: string
  state?: 'face-up' | 'face-down' | 'discarded' | 'active'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  sageName?: string
}

export function PlayingCard({
  suit,
  label = 'K',
  state = 'face-up',
  size = 'md',
  className,
  sageName,
}: PlayingCardProps) {
  const color = suitColor(suit)

  const dims = {
    sm: { width: 44,  height: 62,  corner: '7px',  centerSize: '1.4rem', padding: 4 },
    md: { width: 60,  height: 84,  corner: '9px',  centerSize: '2rem',   padding: 6 },
    lg: { width: 76,  height: 106, corner: '10px', centerSize: '2.6rem', padding: 7 },
  }[size]

  const style = {
    width:  dims.width,
    height: dims.height,
    borderRadius: 6,
    flexShrink: 0,
  }

  // FACE DOWN — card back
  if (state === 'face-down') {
    return (
      <div
        className={cn('relative overflow-hidden shadow-xl transition-all duration-700', className)}
        style={{
          ...style,
          background: 'linear-gradient(145deg, #1B2E60 0%, #0D1A40 100%)',
          border: '2px solid rgba(201,168,76,0.18)',
          boxShadow: '0 8px 28px rgba(0,0,0,0.55)',
        }}
      >
        {/* Decorative inner border */}
        <div
          className="absolute"
          style={{
            inset: 4,
            borderRadius: 3,
            border: '1px solid rgba(201,168,76,0.14)',
          }}
        />
        {/* Pattern */}
        <div className="absolute inset-0 flex flex-wrap gap-0 opacity-[0.07] overflow-hidden p-1">
          {Array.from({ length: 40 }).map((_, i) => (
            <span key={i} style={{ color: '#C9A84C', fontSize: 8, fontFamily: 'Georgia', lineHeight: '10px', width: 10 }}>◆</span>
          ))}
        </div>
        {/* OBG monogram */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span style={{ color: '#C9A84C', opacity: 0.12, fontSize: dims.width * 0.28, fontFamily: 'var(--font-playfair), Georgia, serif', fontWeight: 700, letterSpacing: 1 }}>
            OBG
          </span>
        </div>
      </div>
    )
  }

  // DISCARDED — face down with red rejection mark
  if (state === 'discarded') {
    return (
      <div
        className={cn('relative overflow-hidden shadow-xl transition-all duration-700', className)}
        style={{
          ...style,
          background: 'linear-gradient(145deg, #2E0A0A 0%, #180404 100%)',
          border: '2px solid rgba(220,38,38,0.40)',
          boxShadow: '0 8px 28px rgba(0,0,0,0.6), 0 0 12px rgba(220,38,38,0.15)',
          transform: 'rotate(-6deg)',
        }}
      >
        <div className="absolute inset-4 rounded border border-red-800/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div style={{ color: '#991B1B', fontSize: dims.centerSize, fontFamily: 'Georgia, serif', opacity: 0.5 }}>✕</div>
        </div>
        {sageName && (
          <div className="absolute bottom-1 inset-x-0 text-center">
            <span style={{ color: '#991B1B', fontSize: 6, opacity: 0.6, letterSpacing: 1, textTransform: 'uppercase' }}>{sageName}</span>
          </div>
        )}
      </div>
    )
  }

  // ACTIVE — glowing face down (evaluating)
  if (state === 'active') {
    return (
      <div
        className={cn('relative overflow-hidden shadow-xl', className)}
        style={{
          ...style,
          background: 'linear-gradient(145deg, #1B2E60 0%, #0D1A40 100%)',
          border: `2px solid ${color}80`,
          boxShadow: `0 8px 28px rgba(0,0,0,0.55), 0 0 20px ${color}30`,
          animation: 'glow-pulse 1.5s ease-in-out infinite',
        }}
      >
        <div className="absolute inset-0 flex flex-wrap gap-0 opacity-[0.08] overflow-hidden p-1">
          {Array.from({ length: 40 }).map((_, i) => (
            <span key={i} style={{ color: '#C9A84C', fontSize: 8, fontFamily: 'Georgia', lineHeight: '10px', width: 10 }}>◆</span>
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div style={{ color, fontSize: dims.centerSize, fontFamily: 'Georgia, serif', opacity: 0.3, animation: 'glow-pulse 1.5s ease-in-out infinite' }}>
            {suit}
          </div>
        </div>
      </div>
    )
  }

  // FACE UP — traditional card face
  return (
    <div
      className={cn('relative flex flex-col justify-between shadow-2xl transition-all duration-700', className)}
      style={{
        ...style,
        background: 'linear-gradient(160deg, #FFFEF8 0%, #F5F0E4 100%)',
        border: '1.5px solid rgba(0,0,0,0.12)',
        padding: dims.padding,
        boxShadow: `0 8px 32px rgba(0,0,0,0.45), 0 0 16px ${suit === '♥' || suit === '♦' ? 'rgba(220,38,38,0.12)' : 'rgba(0,0,0,0.08)'}`,
      }}
    >
      {/* Top-left */}
      <div style={{ lineHeight: 1.1 }}>
        <div style={{ color, fontSize: dims.corner, fontWeight: 800, fontFamily: 'Georgia, serif' }}>{label}</div>
        <div style={{ color, fontSize: dims.corner, fontFamily: 'Georgia, serif' }}>{suit}</div>
      </div>

      {/* Center */}
      <div style={{ textAlign: 'center' }}>
        <span style={{ color, fontSize: dims.centerSize, fontFamily: 'Georgia, serif', lineHeight: 1 }}>{suit}</span>
      </div>

      {/* Bottom-right (inverted) */}
      <div style={{ lineHeight: 1.1, textAlign: 'right', transform: 'rotate(180deg)' }}>
        <div style={{ color, fontSize: dims.corner, fontWeight: 800, fontFamily: 'Georgia, serif' }}>{label}</div>
        <div style={{ color, fontSize: dims.corner, fontFamily: 'Georgia, serif' }}>{suit}</div>
      </div>
    </div>
  )
}
