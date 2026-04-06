'use client'

import React, { useEffect, useRef, useState } from 'react'

const STORAGE_KEY = 'obg-welcome-v2'

export interface WelcomeModalProps {
  /** Si es true, abre el modal independientemente del localStorage */
  forceOpen?: boolean
  /** Callback al cerrar cuando fue abierto por forceOpen */
  onClose?: () => void
}

/* ── sequences ─────────────────────────────────────────────────── */
const HEADLINE = 'Análisis de inversión real.\nNo simulado. No teórico.'
// Note: el typewriter renderiza char a char — translate="no" se aplica en el contenedor
const SUBTITLE  = 'Los criterios exactos de los mejores inversores de la historia, aplicados a cualquier acción en segundos.'
const TAGLINE   = 'La estética es un juego de cartas. El análisis es completamente real.'

const STEPS: { icon: string; color: string; title: string; body: React.ReactNode }[] = [
  {
    icon: '♦',
    color: '#C9A84C',
    title: 'Datos financieros reales',
    body: <>Cada análisis consume datos actualizados de <span translate="no">Financial Modeling Prep, Yahoo Finance</span> y la <span translate="no">Reserva Federal (FRED)</span>. Balances, flujos de caja, precio, macroeconómicos — todo real.</>,
  },
  {
    icon: '♥',
    color: '#D46060',
    title: 'Filtros basados en criterios publicados',
    body: <>No inventamos métricas. Aplicamos los criterios exactos que <span translate="no">Buffett, Lynch, Greenblatt, Taleb, Marks y Fink</span> documentaron públicamente durante décadas. Sin interpretación. Sin sesgo.</>,
  },
  {
    icon: '★',
    color: '#8BA4C0',
    title: 'Veredicto accionable con precio objetivo',
    body: <>El resultado incluye calificación (<span translate="no">Strong Buy → Sell</span>), precio objetivo, <span translate="no">stop-loss</span> y ratio <span translate="no">riesgo/recompensa</span>. Información concreta para tomar decisiones.</>,
  },
]

/* ── typewriter hook ────────────────────────────────────────────── */
function useTypewriter(text: string, speed: number, start: boolean) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)
  const idx = useRef(0)

  useEffect(() => {
    if (!start) return
    idx.current = 0
    setDisplayed('')
    setDone(false)
    const id = setInterval(() => {
      idx.current += 1
      setDisplayed(text.slice(0, idx.current))
      if (idx.current >= text.length) {
        clearInterval(id)
        setDone(true)
      }
    }, speed)
    return () => clearInterval(id)
  }, [start, text, speed])

  return { displayed, done }
}

/* ── component ─────────────────────────────────────────────────── */
export function WelcomeModal({ forceOpen = false, onClose }: WelcomeModalProps = {}) {
  const [visible,  setVisible]  = useState(false)
  const [closing,  setClosing]  = useState(false)

  /* phase: 0=nothing  1=headline typing  2=sub typing
            3=step0  4=step1  5=step2  6=tagline typing  7=cta */
  const [phase, setPhase] = useState(0)

  const { displayed: headline, done: headlineDone } = useTypewriter(HEADLINE, 38, phase >= 1)
  const { displayed: subtitle, done: subDone }      = useTypewriter(SUBTITLE,  52, phase >= 2)
  const { displayed: tagline,  done: _tagDone }     = useTypewriter(TAGLINE,   58, phase >= 6)

  /* ── mount: show modal on first visit ── */
  useEffect(() => {
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true)
      const t = setTimeout(() => setPhase(1), 300)
      return () => clearTimeout(t)
    }
  }, [])

  /* ── forceOpen: re-muestra el modal desde el botón "?" ── */
  useEffect(() => {
    if (!forceOpen) return
    setPhase(0)
    setVisible(true)
    const t = setTimeout(() => setPhase(1), 300)
    return () => clearTimeout(t)
  }, [forceOpen])

  /* ── chain phases after each typewriter finishes ── */
  useEffect(() => {
    if (!headlineDone) return
    const t = setTimeout(() => setPhase(2), 280)
    return () => clearTimeout(t)
  }, [headlineDone])

  useEffect(() => {
    if (!subDone) return
    const t0 = setTimeout(() => setPhase(3), 420)
    const t1 = setTimeout(() => setPhase(4), 800)
    const t2 = setTimeout(() => setPhase(5), 1160)
    const t3 = setTimeout(() => setPhase(6), 1700)
    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); clearTimeout(t3) }
  }, [subDone])

  useEffect(() => {
    if (phase < 6) return
    const t = setTimeout(() => setPhase(7), (TAGLINE.length * 58) + 500)
    return () => clearTimeout(t)
  }, [phase])

  function dismiss() {
    setClosing(true)
    setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, '1')
      setVisible(false)
      setClosing(false)
      onClose?.()
    }, 340)
  }

  if (!visible) return null

  /* ── cursor blink ── */
  const cursor = <span style={{ display: 'inline-block', width: 2, height: '1.1em', background: '#C9A84C', marginLeft: 2, verticalAlign: 'text-bottom', animation: 'obg-blink 0.75s step-end infinite' }} />

  return (
    <>
      <style>{`@keyframes obg-blink { 0%,100%{opacity:1} 50%{opacity:0} } @keyframes obg-fadein { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }`}</style>

      <div
        onClick={dismiss}
        style={{
          position: 'fixed', inset: 0, zIndex: 100,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'rgba(3,1,0,0.92)',
          backdropFilter: 'blur(10px)',
          padding: '20px',
          opacity: closing ? 0 : 1,
          transition: 'opacity 0.34s ease',
        }}
      >
        <div
          onClick={e => e.stopPropagation()}
          style={{
            background: 'linear-gradient(158deg, #0D0805 0%, #160E06 50%, #0A0603 100%)',
            border: '1px solid rgba(201,168,76,0.30)',
            borderRadius: 18,
            padding: 'clamp(28px, 5vw, 44px) clamp(24px, 4vw, 42px)',
            maxWidth: 510,
            width: '100%',
            boxShadow: [
              '0 50px 130px rgba(0,0,0,0.95)',
              '0 0 0 0.5px rgba(201,168,76,0.10)',
              'inset 0 1px 0 rgba(201,168,76,0.08)',
            ].join(', '),
            opacity:    closing ? 0 : 1,
            transform:  closing ? 'scale(0.97) translateY(8px)' : 'scale(1) translateY(0)',
            transition: 'all 0.34s ease',
          }}
        >

          {/* ── badge ── */}
          <div style={{ textAlign: 'center', marginBottom: 26 }}>
            <span style={{
              display: 'inline-block',
              color: 'rgba(201,168,76,0.45)',
              fontSize: 7.5,
              letterSpacing: '0.58em',
              textTransform: 'uppercase',
              border: '1px solid rgba(201,168,76,0.16)',
              borderRadius: 20,
              padding: '4px 16px',
            }}>
              ♠ &nbsp; Una invitación &nbsp; ♠
            </span>
          </div>

          {/* ── HEADLINE typewriter ── */}
          <h2 style={{
            fontFamily: 'var(--font-playfair), "Georgia", "Times New Roman", serif',
            fontSize: 'clamp(1.30rem, 4vw, 1.70rem)',
            fontWeight: 700,
            color: '#EEF2FF',
            textAlign: 'center',
            lineHeight: 1.30,
            marginBottom: 10,
            minHeight: '2.8em',
            whiteSpace: 'pre-wrap',
          }} translate="no">
            {headline.split('\n').map((line, i, arr) => (
              <span key={i}>
                {i === 1
                  ? <span style={{ color: '#D4A843' }}>{line}</span>
                  : line}
                {i < arr.length - 1 && <br />}
              </span>
            ))}
            {phase < 2 && cursor}
          </h2>

          {/* ── SUBTITLE typewriter ── */}
          <p style={{
            textAlign: 'center',
            color: '#B8A878',
            fontSize: 13.5,
            marginBottom: 26,
            letterSpacing: '0.05em',
            fontFamily: 'var(--font-playfair), Georgia, serif',
            fontStyle: 'italic',
            minHeight: '1.6em',
            opacity: phase >= 2 ? 1 : 0,
            transition: 'opacity 0.2s',
          }}>
            {subtitle}
            {phase === 2 && cursor}
          </p>

          {/* ── divider ── */}
          <div style={{
            height: 1,
            background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.25), transparent)',
            marginBottom: 22,
            opacity: phase >= 3 ? 1 : 0,
            transition: 'opacity 0.5s',
          }} />

          {/* ── STEPS ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 22 }}>
            {STEPS.map((step, i) => {
              const shown = phase >= (3 + i)
              return (
                <div
                  key={i}
                  style={{
                    display: 'flex', gap: 14, alignItems: 'flex-start',
                    opacity: shown ? 1 : 0,
                    transform: shown ? 'translateY(0)' : 'translateY(10px)',
                    transition: 'opacity 0.40s ease, transform 0.40s ease',
                  }}
                >
                  <div style={{
                    flexShrink: 0,
                    width: 34, height: 34,
                    borderRadius: '50%',
                    background: `${step.color}12`,
                    border: `1px solid ${step.color}50`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 14,
                    color: step.color,
                  }}>
                    {step.icon}
                  </div>
                  <div style={{ paddingTop: 1 }}>
                    <div style={{
                      color: step.color,
                      fontSize: 9.5,
                      fontWeight: 800,
                      letterSpacing: '0.16em',
                      textTransform: 'uppercase',
                      marginBottom: 4,
                    }}>
                      {step.title}
                    </div>
                    <div style={{
                      color: '#A0B4A8',
                      fontSize: 12.5,
                      lineHeight: 1.55,
                      fontFamily: 'var(--font-playfair), Georgia, serif',
                    }}>
                      {step.body}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* ── divider 2 ── */}
          <div style={{
            height: 1,
            background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.25), transparent)',
            marginBottom: 20,
            opacity: phase >= 6 ? 1 : 0,
            transition: 'opacity 0.5s',
          }} />

          {/* ── TAGLINE typewriter ── */}
          <p style={{
            textAlign: 'center',
            color: 'rgba(201,168,76,0.55)',
            fontSize: 10.5,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            marginBottom: 22,
            fontFamily: 'var(--font-playfair), Georgia, serif',
            fontStyle: 'italic',
            minHeight: '1.4em',
            opacity: phase >= 6 ? 1 : 0,
            transition: 'opacity 0.3s',
          }}>
            {tagline}
            {phase === 6 && cursor}
          </p>

          {/* ── CTA ── */}
          <button
            onClick={dismiss}
            style={{
              display: 'block',
              width: '100%',
              padding: '14px 24px',
              borderRadius: 12,
              fontWeight: 800,
              fontSize: 11,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              border: '1px solid rgba(201,168,76,0.45)',
              background: 'linear-gradient(135deg, #D9B040 0%, #C9A84C 55%, #A87830 100%)',
              color: '#100800',
              boxShadow: '0 0 36px rgba(201,168,76,0.25), 0 8px 28px rgba(0,0,0,0.55)',
              opacity:    phase >= 7 ? 1 : 0,
              transform:  phase >= 7 ? 'translateY(0)' : 'translateY(8px)',
              transition: 'opacity 0.5s ease, transform 0.5s ease, box-shadow 0.2s, filter 0.2s',
              pointerEvents: phase >= 7 ? 'auto' : 'none',
            }}
            onMouseEnter={e => { e.currentTarget.style.filter = 'brightness(1.12)'; e.currentTarget.style.boxShadow = '0 0 55px rgba(201,168,76,0.40), 0 8px 28px rgba(0,0,0,0.55)' }}
            onMouseLeave={e => { e.currentTarget.style.filter = 'brightness(1)';    e.currentTarget.style.boxShadow = '0 0 36px rgba(201,168,76,0.25), 0 8px 28px rgba(0,0,0,0.55)' }}
          >
            Tomar asiento &nbsp;→
          </button>

        </div>
      </div>
    </>
  )
}
