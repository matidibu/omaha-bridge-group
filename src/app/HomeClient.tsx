'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { PlayingCard } from '@/components/ui/PlayingCard'
import { WelcomeModal } from '@/components/ui/WelcomeModal'
import { AdUnit } from '@/components/ui/AdUnit'

interface Suggestion { symbol: string; name: string; exchange: string }

interface SageEntry {
  id: string
  name: string
  title: string
  suit: '♥' | '♣' | '♦' | '♠' | '★' | '✦'
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
   Hexagon layout — Buffett at top (0°), 60° apart, R=295px from center
   Card md = 60×84px  |  Panel 220px wide × ~92px tall
   Card TL = (R·sinθ − 30, −R·cosθ − 42) from section 50%/50%

   Panel placement — all radially outward, guaranteed non-overlapping:
     Buffett (0°)    → right of card            x[+38,+258]  y[-337,-245]
     Lynch   (60°)   → upper-right              x[+270,+490] y[-280,-188]
     Greenblatt(120°)→ below card (centered)    x[+146,+366] y[+208,+300]
     Fink   (180°)   → below card (centered)    x[-110,+110] y[+355,+447]
     Taleb  (240°)   → below card (left)        x[-366,-146] y[+208,+300]
     Marks  (300°)   → upper-left               x[-490,-270] y[-280,-188]
   All gaps verified: ≥12px between panels, 0 cross-element overlaps.
───────────────────────────────────────────────────────────────────────── */
const SAGES: SageEntry[] = [
  {
    id: 'buffett', name: 'Buffett', title: 'El Anfitrión',
    suit: '♥', accent: '#D4A843', cardLabel: 'QUALITY & MOAT',
    headline: 'Wonderful companies at fair prices',
    metrics: [{ label: 'MOAT', value: 'Wide' }, { label: 'ROIC', value: '>15%' }, { label: 'P/FCF', value: '<25x' }],
    cardPos:  { left: 'calc(50% - 30px)',  top: 'calc(50% - 337px)' },
    panelPos: { left: 'calc(50% + 38px)',  top: 'calc(50% - 337px)' },
    cardRotate: 0,
  },
  {
    id: 'lynch', name: 'Lynch', title: 'El Rastreador',
    suit: '♣', accent: '#2EC47E', cardLabel: 'GROWTH',
    headline: 'Average investor wins (PEG)',
    metrics: [{ label: 'PEG', value: '<1.0' }, { label: 'GROWTH', value: '>10%' }, { label: 'EPS', value: 'Rising' }],
    /* 60° — upper-right */
    cardPos:  { left: 'calc(50% + 226px)', top: 'calc(50% - 190px)' },
    panelPos: { left: 'calc(50% + 270px)', top: 'calc(50% - 280px)' },
    cardRotate: 5,
  },
  {
    id: 'greenblatt', name: 'Greenblatt', title: 'El Matemático',
    suit: '♦', accent: '#7BBDE0', cardLabel: 'VALUE',
    headline: 'Magic formula (cheap & good)',
    metrics: [{ label: 'EARN YLD', value: '>8%' }, { label: 'ROC', value: '>20%' }, { label: 'RANK', value: 'Top 30' }],
    /* 120° — lower-right */
    cardPos:  { left: 'calc(50% + 226px)', top: 'calc(50% + 106px)' },
    panelPos: { left: 'calc(50% + 146px)', top: 'calc(50% + 208px)' },
    cardRotate: -5,
  },
  {
    id: 'fink', name: 'Fink', title: 'El Arquitecto',
    suit: '✦', accent: '#A78BFA', cardLabel: 'INSTITUTIONAL',
    headline: 'Long-term capital stewardship',
    metrics: [{ label: 'INST GRADE', value: 'A+' }, { label: 'GOVERN', value: 'High' }, { label: 'TSY', value: '>2%' }],
    /* 180° — bottom center */
    cardPos:  { left: 'calc(50% - 30px)',  top: 'calc(50% + 253px)' },
    panelPos: { left: 'calc(50% - 110px)', top: 'calc(50% + 355px)' },
    cardRotate: 0,
  },
  {
    id: 'taleb', name: 'Taleb', title: 'El Centinela',
    suit: '★', accent: '#A8BDD8', cardLabel: 'ANTIFRAGILITY',
    headline: 'Hunts hidden leverage, avoids ruin',
    metrics: [{ label: 'LEVERAGE', value: 'Low' }, { label: 'TAIL RISK', value: 'Hedged' }, { label: 'CONVEX', value: 'Yes' }],
    /* 240° — lower-left */
    cardPos:  { left: 'calc(50% - 286px)', top: 'calc(50% + 106px)' },
    panelPos: { left: 'calc(50% - 366px)', top: 'calc(50% + 208px)' },
    cardRotate: 5,
  },
  {
    id: 'marks', name: 'Marks', title: 'El Estratega',
    suit: '♠', accent: '#6AAFFA', cardLabel: 'CYCLES',
    headline: 'Second-level thinking (market cycles)',
    metrics: [{ label: 'CYCLE POS', value: 'Late' }, { label: 'SPREAD', value: 'Tight' }, { label: 'RISK/RWD', value: '0.8x' }],
    /* 300° — upper-left */
    cardPos:  { left: 'calc(50% - 286px)', top: 'calc(50% - 190px)' },
    panelPos: { left: 'calc(50% - 490px)', top: 'calc(50% - 280px)' },
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
  const [helpOpen, setHelpOpen] = useState(false)
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
    <div className="min-h-screen flex flex-col" style={{ background: LIBRARY_BG }}>
      <WelcomeModal forceOpen={helpOpen} onClose={() => setHelpOpen(false)} />

      <div style={{ height: 2, background: 'linear-gradient(to right, transparent, #B8922A 30%, #E8C96C 50%, #B8922A 70%, transparent)' }} />

      {/* HEADER */}
      <header style={{ borderBottom: '1px solid rgba(201,168,76,0.13)', background: 'rgba(6,2,1,0.90)', backdropFilter: 'blur(14px)', position: 'sticky', top: 0, zIndex: 50 }}
        className="px-3 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 sm:w-[120px] sm:h-[120px] shrink-0" style={{ borderRadius: '50%', overflow: 'hidden', position: 'relative', boxShadow: '0 0 0 2px rgba(201,168,76,0.60), 0 0 36px rgba(201,168,76,0.35)' }}>
            <Image src="/obg-logo-new.png" alt="OBG" fill className="object-cover scale-[1.2]" />
          </div>
          <div className="hidden sm:block">
            <div style={{ color: '#C9A84C', fontSize: 15, letterSpacing: '0.38em', textTransform: 'uppercase', fontFamily: 'var(--font-playfair), Georgia, serif', fontWeight: 700 }}>Omaha Bridge Group</div>
            <div style={{ color: 'rgba(201,168,76,0.60)', fontSize: 10, letterSpacing: '0.30em', textTransform: 'uppercase' }}>Investment Intelligence</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setHelpOpen(true)}
            style={{ color: 'rgba(201,168,76,0.60)', fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase', border: '1px solid rgba(201,168,76,0.22)', borderRadius: 6, padding: '6px 10px', background: 'rgba(201,168,76,0.03)', cursor: 'pointer', transition: 'all 0.2s', fontFamily: 'inherit', whiteSpace: 'nowrap' }}
            onMouseEnter={e => { e.currentTarget.style.color = '#C9A84C'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.50)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'rgba(201,168,76,0.60)'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.22)' }}
          >Reglamento</button>
          <Link href="/ideas" style={{ color: 'rgba(201,168,76,0.60)', fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase', border: '1px solid rgba(201,168,76,0.22)', borderRadius: 6, padding: '6px 10px', background: 'rgba(201,168,76,0.03)', whiteSpace: 'nowrap' }}
            className="hover:text-[#C9A84C] hover:border-[#C9A84C]/50 transition-all">
            <span className="hidden sm:inline">Today&apos;s Hand </span><span style={{ opacity: 0.5 }}>♠</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center">

        {/* HERO */}
        <section className="w-full max-w-4xl mx-auto px-4 pt-10 pb-4 text-center" style={{ position: 'relative' }}>
          {/* Warm ambient glow behind text */}
          <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 200, background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.07) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'inline-block', color: '#C9A84C', fontSize: 9, letterSpacing: '0.55em', textTransform: 'uppercase', marginBottom: 16, background: 'rgba(0,0,0,0.45)', padding: '4px 18px', borderRadius: 20, border: '1px solid rgba(201,168,76,0.22)' }}>
              ♠ &nbsp; La Mesa de los Grandes &nbsp; ♠
            </div>
            <h1 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', fontSize: 'clamp(1.9rem, 5vw, 3.2rem)', fontWeight: 800, lineHeight: 1.1, color: '#F2F6FF', textShadow: '0 1px 3px rgba(0,0,0,1), 0 4px 30px rgba(0,0,0,0.95)', marginBottom: 16 }}>
              Hoy los grandes inversores<br />
              <span style={{ color: '#E0B84A', textShadow: '0 1px 3px rgba(0,0,0,1), 0 0 60px rgba(212,168,67,0.35)' }}>te invitan a su mesa.</span>
            </h1>
            <p style={{ color: '#B8D0C0', fontSize: 14, lineHeight: 1.75, maxWidth: 520, margin: '0 auto', textShadow: '0 1px 6px rgba(0,0,0,0.95)' }}>
              Datos financieros reales. Criterios documentados por los mejores inversores de la historia.
              Ingresá una acción y obtené un veredicto concreto — precio objetivo, <span translate="no">stop-loss</span> y calificación.
            </p>
          </div>
        </section>

        {/* ════════════════════════════════════════════════════════
            CIRCULAR TABLE — pure top-down view, no perspective
        ════════════════════════════════════════════════════════ */}
        <section
          className="hidden lg:block w-full"
          style={{ position: 'relative', minHeight: 960 }}
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
              style={{ position: 'absolute', zIndex: 20, ...sage.cardPos, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <div style={{
                transform: `rotate(${sage.cardRotate}deg)`,
                transformOrigin: 'center center',
                filter: `drop-shadow(0 6px 20px rgba(0,0,0,0.80)) drop-shadow(0 0 8px ${sage.accent}30)`,
                position: 'relative',
              }}>
                <PlayingCard suit={sage.suit} label="K" state="face-up" size="md" />
              </div>
              {/* Name tag below card */}
              <div style={{ marginTop: 8, textAlign: 'center', whiteSpace: 'nowrap' }}>
                <div style={{ color: sage.accent, fontSize: 9, fontWeight: 900, letterSpacing: '0.20em', textTransform: 'uppercase', textShadow: '0 1px 8px rgba(0,0,0,0.95)' }} translate="no">
                  {sage.name}
                </div>
                <div style={{ color: `${sage.accent}90`, fontSize: 7, letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: 1 }}>
                  {sage.title}
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
          <div style={{ color: 'rgba(201,168,76,0.72)', fontSize: 9, letterSpacing: '0.4em', textTransform: 'uppercase', textAlign: 'center', paddingTop: 8, marginBottom: 10 }}>
            Los Seis Maestros
          </div>
          {SAGES.map((sage) => (
            <div key={sage.id} style={{ display: 'flex', alignItems: 'center', gap: 12, background: 'rgba(8,4,2,0.94)', border: `1px solid ${sage.accent}50`, borderRadius: 12, padding: '10px 14px' }}>
              <PlayingCard suit={sage.suit} label="K" state="face-up" size="sm" />
              <div>
                <div style={{ color: sage.accent, fontWeight: 700, fontSize: 13 }} translate="no">{sage.name}</div>
                <div style={{ color: 'rgba(201,168,76,0.65)', fontSize: 8, textTransform: 'uppercase', letterSpacing: '0.14em' }}>{sage.title}</div>
                <div style={{ color: '#8AAE96', fontSize: 11, marginTop: 4 }}>{sage.headline}</div>
              </div>
            </div>
          ))}
        </section>

        {/* SEARCH — escenario propio, destacado del fondo */}
        <section className="w-full max-w-2xl mx-auto px-4 pb-6 pt-2">

          {/* Contenedor escenario */}
          <div style={{
            position: 'relative',
            background: 'linear-gradient(160deg, rgba(18,10,3,0.97) 0%, rgba(22,13,4,0.97) 100%)',
            borderRadius: 20,
            padding: '28px 28px 22px',
            border: '1px solid rgba(201,168,76,0.28)',
            boxShadow: [
              '0 0 0 1px rgba(201,168,76,0.08)',
              '0 30px 90px rgba(0,0,0,0.70)',
              'inset 0 1px 0 rgba(201,168,76,0.12)',
            ].join(', '),
          }}>
            {/* Línea dorada superior */}
            <div style={{ position: 'absolute', top: 0, left: '10%', right: '10%', height: 2, borderRadius: 2, background: 'linear-gradient(to right, transparent, #C9A84C 30%, #E8C96C 50%, #C9A84C 70%, transparent)' }} />

            {/* Glow ambiental detrás del input */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '110%', height: '70%', background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

            {/* Label invitación */}
            <div style={{ textAlign: 'center', marginBottom: 18, position: 'relative' }}>
              <span style={{ color: 'rgba(201,168,76,0.75)', fontSize: 8.5, letterSpacing: '0.50em', textTransform: 'uppercase' }}>
                ♦ &nbsp; Es tu turno &nbsp; ♦
              </span>
            </div>

            <form onSubmit={onSubmit}>
              <div ref={wrapperRef} style={{ position: 'relative' }}>
                {/* Input row */}
                <div style={{ position: 'relative', zIndex: 1, display: 'flex', background: 'rgba(4,12,6,0.98)', borderRadius: 14, border: '2px solid rgba(201,168,76,0.65)', boxShadow: '0 0 0 5px rgba(201,168,76,0.06), 0 8px 40px rgba(0,0,0,0.70)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', paddingLeft: 20, color: '#C9A84C', fontSize: 20, flexShrink: 0, opacity: 0.75 }}>♦</div>
                  <input
                    type="text" value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
                    placeholder="Ticker o empresa  (AAPL, Tesla, Microsoft…)"
                    maxLength={60} autoComplete="off"
                    style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', padding: '20px 16px', color: '#EEF2FF', fontSize: 16, minWidth: 0 }}
                  />
                  {loading && (
                    <div style={{ display: 'flex', alignItems: 'center', paddingRight: 16 }}>
                      <div style={{ width: 16, height: 16, borderRadius: '50%', border: '2px solid rgba(201,168,76,0.20)', borderTopColor: '#C9A84C', animation: 'spin 0.8s linear infinite' }} />
                    </div>
                  )}
                  <button type="submit" translate="no" disabled={!query.trim()}
                    style={{ margin: 6, padding: '13px 16px', borderRadius: 10, fontWeight: 800, fontSize: 11, letterSpacing: '0.10em', textTransform: 'uppercase', flexShrink: 0, transition: 'all 0.2s', background: query.trim() ? 'linear-gradient(135deg, #E0B840, #C9A84C, #A87830)' : 'rgba(201,168,76,0.05)', color: query.trim() ? '#080F04' : 'rgba(201,168,76,0.20)', cursor: query.trim() ? 'pointer' : 'not-allowed', boxShadow: query.trim() ? '0 0 32px rgba(201,168,76,0.38), 0 4px 16px rgba(0,0,0,0.60)' : 'none', whiteSpace: 'nowrap' }}
                    className="sm:!px-7">
                    <span className="hidden sm:inline">Deal the </span>Hand
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
                        <span style={{ color: '#5A9A72', fontSize: 10, flexShrink: 0 }}>{s.exchange}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-2 justify-center mt-4 items-center">
                <span style={{ color: 'rgba(201,168,76,0.62)', fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase' }}>Popular:</span>
                {POPULAR.map((t) => (
                  <button key={t} onClick={() => navigate(t)} translate="no" aria-label={t}
                    style={{ color: 'rgba(201,168,76,0.60)', border: '1px solid rgba(201,168,76,0.20)', background: 'rgba(201,168,76,0.04)', borderRadius: 8, padding: '5px 13px', fontSize: 11, fontFamily: 'monospace', fontWeight: 700, cursor: 'pointer', transition: 'all 0.15s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.12)'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.45)'; e.currentTarget.style.color = '#D4A843' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.04)'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.20)'; e.currentTarget.style.color = 'rgba(201,168,76,0.60)' }}>
                    {t}
                  </button>
                ))}
              </div>
            </form>
          </div>
        </section>

        <div className="w-full max-w-2xl mx-auto px-4">
          <AdUnit slot="4821093756" />
        </div>

        {/* HOW IT WORKS */}
        <section className="w-full max-w-2xl mx-auto px-4 pb-6">
          <div style={{ borderTop: '1px solid rgba(201,168,76,0.12)', paddingTop: 28 }}>
            <div style={{ color: 'rgba(201,168,76,0.65)', fontSize: 8, letterSpacing: '0.50em', textTransform: 'uppercase', textAlign: 'center', marginBottom: 20 }}>
              ♦ &nbsp; Cómo funciona &nbsp; ♦
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { num: '01', title: 'Ingresás un ticker', desc: 'Cualquier acción listada en EE.UU.: AAPL, NVDA, BRK.B, Tesla…' },
                { num: '02', title: 'Datos financieros reales', desc: 'Obtenemos métricas en tiempo real de FMP, Yahoo Finance y FRED.' },
                { num: '03', title: 'Veredicto concreto', desc: 'Precio objetivo, stop-loss y calificación de 6 grandes inversores.' },
              ].map(({ num, title, desc }) => (
                <div key={num} style={{ background: 'rgba(8,4,2,0.80)', border: '1px solid rgba(201,168,76,0.14)', borderRadius: 14, padding: '18px 20px' }}>
                  <div style={{ color: 'rgba(201,168,76,0.35)', fontSize: 28, fontWeight: 900, fontFamily: '"Fira Code","Courier New",monospace', lineHeight: 1 }}>{num}</div>
                  <div style={{ color: '#E0B84A', fontWeight: 700, fontSize: 13, marginTop: 8, marginBottom: 6 }}>{title}</div>
                  <div style={{ color: '#7A9E88', fontSize: 12, lineHeight: 1.6 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TODAY'S HAND */}
        <section className="w-full max-w-2xl mx-auto px-4 pb-10">
          <Link href="/ideas"
            style={{ display: 'flex', alignItems: 'center', gap: 16, borderRadius: 16, padding: '16px 22px', border: '1px solid rgba(201,168,76,0.18)', background: 'rgba(3,12,5,0.80)', boxShadow: '0 10px 40px rgba(0,0,0,0.45)', transition: 'all 0.2s', textDecoration: 'none' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.40)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.18)' }}>
            <div style={{ width: 42, height: 42, borderRadius: '50%', flexShrink: 0, background: 'rgba(201,168,76,0.07)', border: '1px solid rgba(201,168,76,0.20)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, color: '#C9A84C' }}>♠</div>
            <div>
              <div translate="no" style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#E8EDF5', fontSize: 15, fontWeight: 700 }}>Today&apos;s Hand</div>
              <div style={{ color: '#7A9E88', fontSize: 12, marginTop: 2 }}>Las seis apuestas que los maestros harían ahora mismo</div>
            </div>
            <div style={{ marginLeft: 'auto', color: 'rgba(201,168,76,0.35)', fontSize: 20 }}>→</div>
          </Link>
        </section>

      </main>

      <footer style={{ borderTop: '1px solid rgba(201,168,76,0.08)' }} className="px-6 py-5">
        <p className="text-center max-w-3xl mx-auto" style={{ color: 'rgba(148,178,156,0.55)', fontSize: '0.6rem', lineHeight: 1.8 }}>
          <strong style={{ color: 'rgba(201,168,76,0.55)' }}>DISCLAIMER:</strong> <span translate="no">OBG</span> es una herramienta informativa.
          Nada en esta plataforma constituye asesoramiento financiero. Siempre consultá a un asesor calificado.
        </p>
        <p className="text-center mt-2" style={{ fontSize: '0.55rem' }}>
          <Link href="/privacidad" style={{ color: 'rgba(201,168,76,0.35)' }} className="hover:text-[#C9A84C] transition-colors">
            Política de Privacidad
          </Link>
          <span style={{ color: 'rgba(201,168,76,0.20)', margin: '0 8px' }}>·</span>
          <Link href="/nosotros" style={{ color: 'rgba(201,168,76,0.35)' }} className="hover:text-[#C9A84C] transition-colors">
            Sobre el proyecto
          </Link>
          <span style={{ color: 'rgba(201,168,76,0.20)', margin: '0 8px' }}>·</span>
          <a href="mailto:diburzimatias@gmail.com" style={{ color: 'rgba(201,168,76,0.35)' }} className="hover:text-[#C9A84C] transition-colors" translate="no">
            Contacto
          </a>
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
      background: 'linear-gradient(145deg, #0E0804 0%, #180C05 55%, #0C0702 100%)',
      border: `1.5px solid ${sage.accent}80`,
      borderRadius: 9,
      padding: '11px 15px 10px',
      minWidth: 205, maxWidth: 225,
      boxShadow: [
        '0 12px 50px rgba(0,0,0,0.88)',
        `0 0 18px ${sage.accent}14`,
        `inset 0 1px 0 ${sage.accent}20`,
      ].join(', '),
    }}>
      {/* Name + title row */}
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 7, marginBottom: 5 }}>
        <span style={{
          color: sage.accent,
          fontWeight: 900, fontSize: 12,
          textTransform: 'uppercase', letterSpacing: '0.16em',
          fontFamily: 'var(--font-playfair), Georgia, serif',
        }} translate="no">
          {sage.name}
        </span>
        <span style={{
          color: `${sage.accent}90`,
          fontSize: 7.5, letterSpacing: '0.10em',
          textTransform: 'uppercase',
        }}>
          {sage.title}
        </span>
      </div>
      {/* Separator */}
      <div style={{ height: '0.5px', background: `linear-gradient(to right, ${sage.accent}70, transparent)`, marginBottom: 6 }} />
      {/* Headline */}
      <div style={{ color: '#DDD8C8', fontSize: 10.5, lineHeight: 1.40, marginBottom: 7 }}>
        {sage.headline}
      </div>
      {/* Separator */}
      <div style={{ height: '0.5px', background: `linear-gradient(to right, ${sage.accent}40, transparent)`, marginBottom: 7 }} />
      {/* Metrics */}
      <div style={{ display: 'flex', gap: 14 }}>
        {sage.metrics.map((m) => (
          <div key={m.label}>
            <div translate="no" style={{ color: `${sage.accent}B0`, fontSize: 6.5, letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 2 }}>
              {m.label}
            </div>
            <div translate="no" style={{ color: '#F2EAC8', fontSize: 12, fontWeight: 700, fontFamily: '"Fira Code","Courier New",monospace' }}>
              {m.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
