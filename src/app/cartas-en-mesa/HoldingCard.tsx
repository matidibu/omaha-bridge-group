'use client'

import Link from 'next/link'
import type { Holding } from '@/lib/sec13f'

function formatValue(usd: number): string {
  if (usd >= 1_000_000_000) return `$${(usd / 1_000_000_000).toFixed(1)}bn`
  if (usd >= 1_000_000) return `$${(usd / 1_000_000).toFixed(0)}M`
  return `$${(usd / 1_000).toFixed(0)}K`
}

export function HoldingCard({ h, color }: { h: Holding; color: string }) {
  const barWidth = Math.min(h.portfolioPct * 2.2, 100)

  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: `1px solid ${color}30`,
        borderRadius: 10,
        padding: '14px 16px 12px',
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        transition: 'border-color 0.2s, background 0.2s',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = color + '70'
        el.style.background = 'rgba(255,255,255,0.055)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = color + '30'
        el.style.background = 'rgba(255,255,255,0.03)'
      }}
    >
      {/* Rank badge */}
      <span
        style={{
          position: 'absolute',
          top: 8,
          right: 10,
          fontSize: 9,
          color: color + '80',
          letterSpacing: '0.1em',
          fontFamily: 'var(--font-geist-mono)',
        }}
      >
        #{h.rank}
      </span>

      {/* Ticker */}
      <div
        style={{
          fontSize: 20,
          fontWeight: 800,
          color: h.ticker ? '#F2F6FF' : '#8A9A85',
          fontFamily: 'var(--font-playfair), Georgia, serif',
          letterSpacing: '0.04em',
          lineHeight: 1,
        }}
      >
        {h.ticker ?? '—'}
      </div>

      {/* Company name */}
      <div
        style={{
          fontSize: 10,
          color: '#6A7A95',
          lineHeight: 1.3,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          minHeight: 26,
        }}
      >
        {h.name.length > 28 ? h.name.slice(0, 27) + '…' : h.name}
      </div>

      {/* Portfolio % */}
      <div
        style={{
          fontSize: 18,
          fontWeight: 700,
          color,
          fontFamily: 'var(--font-geist-mono)',
          lineHeight: 1,
        }}
      >
        {h.portfolioPct.toFixed(1)}%
      </div>

      {/* Progress bar */}
      <div style={{ height: 3, background: 'rgba(255,255,255,0.07)', borderRadius: 2, overflow: 'hidden' }}>
        <div
          style={{
            height: '100%',
            width: `${barWidth}%`,
            background: `linear-gradient(to right, ${color}90, ${color})`,
            borderRadius: 2,
          }}
        />
      </div>

      {/* Value */}
      <div style={{ fontSize: 10, color: '#4A5A72', fontFamily: 'var(--font-geist-mono)' }}>
        {formatValue(h.value)}
      </div>

      {/* Analizar link */}
      {h.ticker ? (
        <Link
          href={`/analisis/${h.ticker}`}
          style={{
            marginTop: 4,
            fontSize: 9,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: color + 'CC',
            textDecoration: 'none',
            display: 'block',
            borderTop: `1px solid ${color}20`,
            paddingTop: 6,
            transition: 'color 0.15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = color }}
          onMouseLeave={e => { e.currentTarget.style.color = color + 'CC' }}
        >
          Analizar →
        </Link>
      ) : (
        <div
          style={{
            marginTop: 4,
            fontSize: 9,
            color: '#2A3A52',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            paddingTop: 6,
          }}
        >
          sin ticker
        </div>
      )}
    </div>
  )
}
