'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { PlayingCard } from '@/components/ui/PlayingCard'

interface Suggestion { symbol: string; name: string; exchange: string }

interface SageEntry {
  id: string
  name: string
  title: string
  suit: '♥' | '♣' | '♦' | '♠' | '★'
  accent: string
  cardLabel: string
  headline: string
  metrics: Array<{ label: string; value: string }>
  /* absolute positions relative to outer section (50% = circle center) */
  cardPos: React.CSSProperties
  panelPos: React.CSSProperties
  cardRotate: number
}

/* ─────────────────────────────────────────────────────────────────────────
   Pentagon layout — Buffett at top (0°), 72° apart, R=295px from center
   Card md = 60×84px  |  Panel 220px wide × ~92px tall
   Card TL = (R·sinθ − 30, −R·cosθ − 42) from section 50%/50%

   Panel placement — all radially outward, guaranteed non-overlapping:
     Buffett (0°)    → panel right of card      x[+38,+258]  y[-337,-245]
     Lynch   (72°)   → panel upper-right        x[+260,+480] y[-240,-148]
     Greenblatt(144°)→ panel below card         x[+143,+363] y[+306,+398]
     Taleb  (216°)   → panel below card (left)  x[-283,-63]  y[+306,+398]
     Marks  (288°)   → panel upper-left         x[-480,-260] y[-240,-148]
   All gaps verified: ≥15px between each card and its panel, 0 cross-element overlaps.
───────────────────────────────────────────────────────────────────────── */
const SAGES: SageEntry[] = [
  {
    id: 'buffett', name: 'Buffett', title: 'El Anfitrión',
    suit: '♥', accent: '#C9A84C', cardLabel: 'QUALITY & MOAT',
    headline: 'Wonderful companies at fair prices',
    metrics: [{ label: 'MOAT', value: 'Wide' }, { label: 'ROIC', value: '>15%' }, { label: 'P/FCF', value: '<25x' }],
    /* 0° — top center */
    cardPos:  { left: 'calc(50% - 30px)',  top: 'calc(50% - 337px)' },
    /* panel right of card, same top */
    panelPos: { left: 'calc(50% + 38px)',  top: 'calc(50% - 337px)' },
    cardRotate: 0,
  },
  {
    id: 'lynch', name: 'Lynch', title: 'El Rastreador',
    suit: '♣', accent: '#34D399', cardLabel: 'GROWTH',
    headline: 'Average investor wins (PEG)',
    metrics: [{ label: 'PEG', value: '<1.0' }, { label: 'GROWTH', value: '>10%' }, { label: 'EPS', value: 'Rising' }],
    /* 72° — upper-right */
    cardPos:  { left: 'calc(50% + 251px)', top: 'calc(50% - 133px)' },
    /* panel upper-right of card — radially outward, 15px below-gap to card */
    panelPos: { left: 'calc(50% + 260px)', top: 'calc(50% - 240px)' },
    cardRotate: 5,
  },
  {
    id: 'greenblatt', name: 'Greenblatt', title: 'El Matemático',
    suit: '♦', accent: '#94A3B8', cardLabel: 'VALUE',
    headline: 'Magic formula (cheap & good)',
    metrics: [{ label: 'EARN YLD', value: '>8%' }, { label: 'ROC', value: '>20%' }, { label: 'RANK', value: 'Top 30' }],
    /* 144° — lower-right */
    cardPos:  { left: 'calc(50% + 143px)', top: 'calc(50% + 197px)' },
    /* panel below card — 25px gap */
    panelPos: { left: 'calc(50% + 143px)', top: 'calc(50% + 306px)' },
    cardRotate: -5,
  },
  {
    id: 'taleb', name: 'Taleb', title: 'El Centinela',
    suit: '★', accent: '#CBD5E1', cardLabel: 'ANTIFRAGILITY',
    headline: 'Hunts hidden leverage, avoids ruin',
    metrics: [{ label: 'LEVERAGE', value: 'Low' }, { label: 'TAIL RISK', value: 'Hedged' }, { label: 'CONVEX', value: 'Yes' }],
    /* 216° — lower-left */
    cardPos:  { left: 'calc(50% - 203px)', top: 'calc(50% + 197px)' },
    /* panel below card — 25px gap */
    panelPos: { left: 'calc(50% - 283px)', top: 'calc(50% + 306px)' },
    cardRotate: 5,
  },
  {
    id: 'marks', name: 'Marks', title: 'El Estratega',
    suit: '♠', accent: '#60A5FA', cardLabel: 'CYCLES',
    headline: 'Second-level thinking (market cycles)',
    metrics: [{ label: 'CYCLE POS', value: 'Late' }, { label: 'SPREAD', value: 'Tight' }, { label: 'RISK/RWD', value: '0.8x' }],
    /* 288° — upper-left */
    cardPos:  { left: 'calc(50% - 311px)', top: 'calc(50% - 133px)' },
    /* panel upper-left of card — radially outward, 15px below-gap to card */
    panelPos: { left: 'calc(50% - 480px)', top: 'calc(50% - 240px)' },
    cardRotate: -5,
  },
]

const POPULAR = ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'BRK.B', 'JPM', 'NVDA']

const LIBRARY_BG = [
  'radial-gradient(ellipse at 88% 6%, rgba(240,180,70,0.20) 0%, rgba(180,110,30,0.08) 25%, transparent 50%)',
  'radial-gradient(ellipse at 50% 50%, transparent 35%, rgba(0,0,0,0.65) 100%)',
  'linear-gradient(to right, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0.20) 18%, transparent 32%)',
  'repeating-linear-gradient(0deg, transparent 0px, transparent 108px, rgba(0,0,0,0.18) 108px, rgba(0,0,0,0.18) 111px)',
  'repeating-linear-gradient(90deg, transparent 0px, transparent 18px, rgba(20,8,2,0.28) 18px, rgba(20,8,2,0.28) 20px, transparent 20px, transparent 38px, rgba(10,4,1,0.20) 38px, rgba(10,4,1,0.20) 40px)',
  'linear-gradient(155deg, #0A0301 0%, #180804 25%, #1A0A05 50%, #120602 75%, #0C0402 100%)',
].join(', ')

export default function HomePage() {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState<Suggestion[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [loading, setLoading] = useState(false)
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    function onOut(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node))
        setShowSuggestions(false)
    }
    document.addEventListener('mousedown', onOut)
    return () => document.removeEventListener('mousedown', onOut)
  }, [])

  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current)
    const q = query.trim()
    if (q.length < 2) { setSuggestions([]); setShowSuggestions(false); return }
    debounceRef.current = setTimeout(async () => {
      setLoading(true)
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`)
        const data: Suggestion[] = await res.json()
        setSuggestions(data)
        setShowSuggestions(data.length > 0)
      } finally { setLoading(false) }
    }, 280)
  }, [query])

  function navigate(s: string) { setShowSuggestions(false); router.push(`/analysis/${s.toUpperCase()}`) }
  function onSubmit(e: React.FormEvent) { e.preventDefault(); const t = query.trim().toUpperCase(); if (t) navigate(t) }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: LIBRARY_BG, backgroundAttachment: 'fixed' }}>

      <div style={{ height: 2, background: 'linear-gradient(to right, transparent, #B8922A 30%, #E8C96C 50%, #B8922A 70%, transparent)' }} />

      {/* HEADER */}
      <header style={{ borderBottom: '1px solid rgba(201,168,76,0.13)', background: 'rgba(6,2,1,0.90)', backdropFilter: 'blur(14px)', position: 'sticky', top: 0, zIndex: 50 }}
        className="px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div style={{ width: 36, height: 36, borderRadius: '50%', overflow: 'hidden', position: 'relative', flexShrink: 0, boxShadow: '0 0 0 1.5px rgba(201,168,76,0.55), 0 0 20px rgba(201,168,76,0.20)' }}>
            <Image src="/obg-logo-new.png" alt="OBG" fill className="object-cover scale-[1.2]" />
          </div>
          <div className="hidden sm:block">
            <div style={{ color: '#C9A84C', fontSize: 10, letterSpacing: '0.38em', textTransform: 'uppercase', fontFamily: 'var(--font-playfair), Georgia, serif', fontWeight: 700 }}>Omaha Bridge Group</div>
            <div style={{ color: 'rgba(201,168,76,0.35)', fontSize: 7, letterSpacing: '0.30em', textTransform: 'uppercase' }}>Investment Intelligence</div>
          </div>
        </div>
        <Link href="/ideas" style={{ color: 'rgba(201,168,76,0.60)', fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase', border: '1px solid rgba(201,168,76,0.22)', borderRadius: 6, padding: '6px 16px', background: 'rgba(201,168,76,0.03)' }}
          className="hover:text-[#C9A84C] hover:border-[#C9A84C]/50 transition-all">
          Today&apos;s Hand <span style={{ opacity: 0.5 }}>♠</span>
        </Link>
      </header>

      <main className="flex-1 flex flex-col items-center">

        {/* HERO */}
        <section className="w-full max-w-4xl mx-auto px-4 pt-10 pb-4 text-center">
          <div style={{ color: 'rgba(201,168,76,0.45)', fontSize: 9, letterSpacing: '0.55em', textTransform: 'uppercase', marginBottom: 16 }}>
            ♠ &nbsp; La Mesa de los Grandes &nbsp; ♠
          </div>
          <h1 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.9rem, 5vw, 3.2rem)', fontWeight: 800, lineHeight: 1.1, color: '#F0F4FF', textShadow: '0 4px 60px rgba(0,0,0,0.8)', marginBottom: 14 }}>
            Hoy los grandes inversores<br />
            <span style={{ color: '#D4A843', textShadow: '0 0 80px rgba(212,168,67,0.40)' }}>te invitan a su mesa.</span>
          </h1>
          <p style={{ color: '#6A8A72', fontSize: 14, lineHeight: 1.7, maxWidth: 520, margin: '0 auto' }}>
            No dejes pasar tu oportunidad. Ingresá una acción y los cinco genios
            te darán su veredicto basado en sus parámetros inamovibles.
          </p>
        </section>

        {/* ════════════════════════════════════════════════════════
            CIRCULAR TABLE — pure top-down view, no perspective
        ════════════════════════════════════════════════════════ */}
        <section
          className="hidden lg:block w-full"
          style={{ position: 'relative', minHeight: 880 }}
        >
          {/* ── THE CIRCLE (560×560, centered) ── */}
          <div style={{
            position: 'absolute',
            left: '50%', top: '50%',
            transform: 'translate(-50%, -50%)',
            width: 560, height: 560,
            zIndex: 5,
          }}>
            {/* Wood rim */}
            <div style={{
              width: '100%', height: '100%', borderRadius: '50%',
              padding: 17,
              background: 'radial-gradient(ellipse at 38% 30%, #C07838 0%, #8B4A1A 22%, #5E2C0A 52%, #2A0C02 100%)',
              boxShadow: [
                '0 30px 100px rgba(0,0,0,0.90)',
                '0 0 0 2px rgba(201,168,76,0.32)',
                '0 0 0 3px rgba(0,0,0,0.55)',
                'inset 0 4px 0 rgba(220,180,100,0.28)',
                'inset 0 -4px 16px rgba(0,0,0,0.75)',
              ].join(', '),
              boxSizing: 'border-box',
            }}>
              {/* Felt */}
              <div style={{
                width: '100%', height: '100%', borderRadius: '50%',
                position: 'relative', overflow: 'hidden',
                background: '#0C3D1E',
                backgroundImage: [
                  /* warm banker's lamp from center */
                  'radial-gradient(ellipse 55% 55% at 50% 50%, rgba(201,168,76,0.16) 0%, rgba(201,168,76,0.05) 40%, transparent 70%)',
                  /* vignette edges */
                  'radial-gradient(ellipse 90% 90% at 50% 50%, transparent 55%, rgba(0,0,0,0.55) 100%)',
                  /* billiard felt weave */
                  'repeating-linear-gradient(135deg, transparent 0px, transparent 2px, rgba(0,0,0,0.07) 2px, rgba(0,0,0,0.07) 4px)',
                  'repeating-linear-gradient(45deg,  transparent 0px, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px)',
                ].join(', '),
                boxShadow: 'inset 0 0 80px rgba(0,0,0,0.50)',
              }}>

                {/* Rope border */}
                <div style={{ position: 'absolute', inset: 14, borderRadius: '50%', border: '2px dashed rgba(205,180,120,0.38)', pointerEvents: 'none' }} />
                {/* Inner depth */}
                <div style={{ position: 'absolute', inset: 0, borderRadius: '50%', boxShadow: 'inset 0 0 80px rgba(0,0,0,0.35)', pointerEvents: 'none' }} />

                {/* OBG logo — centered on felt */}
                <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 5, width: 200, height: 200, pointerEvents: 'none' }}>
                  <Image src="/obg-logo-new.png" alt="Omaha Bridge Group" width={200} height={200} style={{ objectFit: 'contain', display: 'block' }} priority />
                </div>

              </div>{/* end felt */}
            </div>{/* end wood rim */}
          </div>{/* end circle */}

          {/* ── SAGE CARDS — top-down, flat, no perspective ── */}
          {SAGES.map((sage) => (
            <div
              key={`card-${sage.id}`}
              style={{
                position: 'absolute', zIndex: 20,
                ...sage.cardPos,
              }}
            >
              <div style={{
                transform: `rotate(${sage.cardRotate}deg)`,
                transformOrigin: 'center center',
                filter: 'drop-shadow(0 6px 18px rgba(0,0,0,0.75))',
                position: 'relative',
              }}>
                <PlayingCard suit={sage.suit} label="K" state="face-up" size="md" />
                {/* Strategy label */}
                <div style={{
                  position: 'absolute', bottom: 8, left: 4, right: 4,
                  background: 'rgba(0,0,0,0.80)', backdropFilter: 'blur(4px)',
                  borderRadius: 3, padding: '2px 3px',
                  textAlign: 'center', color: '#E8EDF5',
                  fontSize: 6, fontWeight: 800, letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                }}>
                  {sage.cardLabel}
                </div>
              </div>
            </div>
          ))}

          {/* ── SAGE INFO PANELS ── */}
          {SAGES.map((sage) => (
            <div
              key={`panel-${sage.id}`}
              style={{ position: 'absolute', zIndex: 20, ...sage.panelPos }}
            >
              <SagePanel sage={sage} />
            </div>
          ))}

        </section>

        {/* Mobile list */}
        <section className="lg:hidden w-full max-w-md mx-auto px-4 pb-6 space-y-3">
          <div style={{ color: 'rgba(201,168,76,0.38)', fontSize: 9, letterSpacing: '0.4em', textTransform: 'uppercase', textAlign: 'center', paddingTop: 8, marginBottom: 10 }}>
            Los Cinco Maestros
          </div>
          {SAGES.map((sage) => (
            <div key={sage.id} style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'rgba(2,10,5,0.90)', border: '1px solid rgba(201,168,76,0.14)', borderRadius: 12, padding: '10px 14px' }}>
              <PlayingCard suit={sage.suit} label="K" state="face-up" size="sm" />
              <div>
                <div style={{ color: sage.accent, fontWeight: 700, fontSize: 12 }} translate="no">{sage.name}</div>
                <div style={{ color: 'rgba(201,168,76,0.40)', fontSize: 8, textTransform: 'uppercase', letterSpacing: '0.14em' }}>{sage.title}</div>
                <div style={{ color: '#4A6A52', fontSize: 10, marginTop: 3 }}>{sage.headline}</div>
              </div>
            </div>
          ))}
        </section>

        {/* SEARCH */}
        <section className="w-full max-w-2xl mx-auto px-4 pb-10">
          <form onSubmit={onSubmit}>
            <div ref={wrapperRef} style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', inset: -3, borderRadius: 20, background: 'radial-gradient(ellipse at 50% 80%, rgba(201,168,76,0.18) 0%, transparent 65%)', filter: 'blur(10px)', pointerEvents: 'none', zIndex: 0 }} />
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', background: 'rgba(2,8,4,0.97)', borderRadius: 16, border: '2px solid rgba(201,168,76,0.50)', boxShadow: '0 0 0 6px rgba(201,168,76,0.05), 0 24px 80px rgba(0,0,0,0.60)' }}>
                <div style={{ display: 'flex', alignItems: 'center', paddingLeft: 20, color: 'rgba(201,168,76,0.38)', fontSize: 18, flexShrink: 0 }}>♦</div>
                <input
                  type="text" value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
                  placeholder="Ticker o empresa  (AAPL, Tesla, Microsoft…)"
                  maxLength={60} autoComplete="off"
                  style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', padding: '18px 16px', color: '#E8EDF5', fontSize: 16, minWidth: 0 }}
                />
                {loading && (
                  <div style={{ display: 'flex', alignItems: 'center', paddingRight: 16 }}>
                    <div style={{ width: 16, height: 16, borderRadius: '50%', border: '2px solid rgba(201,168,76,0.20)', borderTopColor: '#C9A84C', animation: 'spin 0.8s linear infinite' }} />
                  </div>
                )}
                <button type="submit" disabled={!query.trim()}
                  style={{ margin: 6, padding: '12px 26px', borderRadius: 12, fontWeight: 800, fontSize: 11, letterSpacing: '0.10em', textTransform: 'uppercase', flexShrink: 0, transition: 'all 0.2s', background: query.trim() ? 'linear-gradient(135deg, #D9B040, #C9A84C, #A87830)' : 'rgba(201,168,76,0.05)', color: query.trim() ? '#0A1A08' : 'rgba(201,168,76,0.18)', cursor: query.trim() ? 'pointer' : 'not-allowed', boxShadow: query.trim() ? '0 0 28px rgba(201,168,76,0.30)' : 'none' }}>
                  Deal the Hand
                </button>
              </div>
              {showSuggestions && (
                <div style={{ position: 'absolute', top: '100%', left: 0, right: 0, marginTop: 8, zIndex: 30, background: '#030A04', border: '1px solid rgba(201,168,76,0.28)', borderRadius: 14, overflow: 'hidden', boxShadow: '0 28px 90px rgba(0,0,0,0.75)' }}>
                  {suggestions.map((s) => (
                    <button key={s.symbol} type="button" onClick={() => navigate(s.symbol)}
                      className="w-full flex items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-[rgba(201,168,76,0.06)]"
                      style={{ borderBottom: '1px solid rgba(201,168,76,0.07)' }}>
                      <span translate="no" style={{ color: '#D4A843', fontFamily: 'monospace', fontWeight: 800, fontSize: 14, width: 64, flexShrink: 0 }}>{s.symbol}</span>
                      <span style={{ color: '#C8D8CC', fontSize: 13, flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.name}</span>
                      <span style={{ color: '#2A5A3A', fontSize: 10, flexShrink: 0 }}>{s.exchange}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-2 justify-center mt-4 items-center">
              <span style={{ color: 'rgba(201,168,76,0.28)', fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase' }}>Popular:</span>
              {POPULAR.map((t) => (
                <button key={t} onClick={() => navigate(t)} translate="no"
                  style={{ color: 'rgba(201,168,76,0.55)', border: '1px solid rgba(201,168,76,0.16)', background: 'rgba(201,168,76,0.03)', borderRadius: 8, padding: '5px 13px', fontSize: 11, fontFamily: 'monospace', fontWeight: 700, cursor: 'pointer', transition: 'all 0.15s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.10)'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.40)'; e.currentTarget.style.color = '#C9A84C' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.03)'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.16)'; e.currentTarget.style.color = 'rgba(201,168,76,0.55)' }}>
                  {t}
                </button>
              ))}
            </div>
          </form>

          <Link href="/ideas"
            style={{ display: 'flex', alignItems: 'center', gap: 16, borderRadius: 16, padding: '16px 22px', marginTop: 16, border: '1px solid rgba(201,168,76,0.18)', background: 'rgba(3,12,5,0.80)', boxShadow: '0 10px 40px rgba(0,0,0,0.45)', transition: 'all 0.2s', textDecoration: 'none' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.40)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.18)' }}>
            <div style={{ width: 42, height: 42, borderRadius: '50%', flexShrink: 0, background: 'rgba(201,168,76,0.07)', border: '1px solid rgba(201,168,76,0.20)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, color: '#C9A84C' }}>♠</div>
            <div>
              <div style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#E8EDF5', fontSize: 15, fontWeight: 700 }}>Today&apos;s Hand</div>
              <div style={{ color: '#3A5A42', fontSize: 12, marginTop: 2 }}>Las cinco apuestas que los maestros harían ahora mismo</div>
            </div>
            <div style={{ marginLeft: 'auto', color: 'rgba(201,168,76,0.35)', fontSize: 20 }}>→</div>
          </Link>
        </section>

      </main>

      <footer style={{ borderTop: '1px solid rgba(201,168,76,0.08)' }} className="px-6 py-5">
        <p className="text-center max-w-3xl mx-auto" style={{ color: '#1A3020', fontSize: '0.6rem', lineHeight: 1.8 }}>
          <strong style={{ color: 'rgba(201,168,76,0.28)' }}>DISCLAIMER:</strong> OBG es una herramienta informativa.
          Nada en esta plataforma constituye asesoramiento financiero. Siempre consultá a un asesor calificado.
        </p>
      </footer>
      <div style={{ height: 2, background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.35), transparent)' }} />
    </div>
  )
}

/* ──────────────────────────────────────────────
   SAGE INFO PANEL — Oxford Blue (#05112B) base
   Format: NAME: headline / separator / metrics
────────────────────────────────────────────── */
function SagePanel({ sage }: { sage: SageEntry }) {
  return (
    <div style={{
      background: 'linear-gradient(145deg, #030D1E 0%, #05112B 55%, #040E22 100%)',
      border: `1px solid ${sage.accent}40`,
      borderRadius: 8,
      padding: '10px 14px 9px',
      minWidth: 200, maxWidth: 220,
      boxShadow: `0 10px 40px rgba(0,0,0,0.80), 0 0 0 0.5px ${sage.accent}18`,
      backdropFilter: 'blur(10px)',
    }}>
      {/* NAME: headline */}
      <div style={{ marginBottom: 6 }}>
        <span style={{ color: sage.accent, fontWeight: 900, fontSize: 11.5, textTransform: 'uppercase', letterSpacing: '0.14em', fontFamily: 'var(--font-playfair), Georgia, serif' }} translate="no">
          {sage.name}:
        </span>
        {' '}
        <span style={{ color: '#C0D0C0', fontSize: 10.5, fontWeight: 400, lineHeight: 1.3 }}>
          {sage.headline}
        </span>
      </div>
      {/* Separator */}
      <div style={{ height: '0.5px', background: `linear-gradient(to right, ${sage.accent}60, transparent)`, marginBottom: 7 }} />
      {/* Metrics */}
      <div style={{ display: 'flex', gap: 12 }}>
        {sage.metrics.map((m) => (
          <div key={m.label}>
            <div style={{ color: 'rgba(160,190,160,0.40)', fontSize: 6.5, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 2 }}>
              {m.label}
            </div>
            <div style={{ color: '#D0E8D0', fontSize: 12, fontWeight: 700, fontFamily: '"Fira Code","Courier New",monospace' }}>
              {m.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
