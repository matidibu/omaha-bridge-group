'use client'

import { useEffect, useState, useRef } from 'react'
import { useParams } from 'next/navigation'
import { SingleStockAnalysis, StreamEvent } from '@/types/analysis'
import { SageCard } from '@/components/boardroom/SageCard'
import { TechnicalPanel } from '@/components/technical/TechnicalPanel'
import { FinalVerdict } from '@/components/boardroom/FinalVerdict'
import { Logo } from '@/components/ui/Logo'
import { PlayingCard } from '@/components/ui/PlayingCard'
import Link from 'next/link'

type Phase =
  | 'idle'
  | 'fetching'
  | 'buffett_gate'
  | 'sage_scores'
  | 'verdict_ready'
  | 'complete'
  | 'error'

export default function AnalysisPage() {
  const params = useParams()
  const ticker = (params.ticker as string).toUpperCase()

  const [phase, setPhase] = useState<Phase>('idle')
  const [progress, setProgress] = useState(0)
  const [analysis, setAnalysis] = useState<Partial<SingleStockAnalysis>>({})
  const [error, setError] = useState<string | null>(null)
  const [activeSage, setActiveSage] = useState<string | null>(null)
  const abortRef = useRef<AbortController | null>(null)

  useEffect(() => {
    const controller = new AbortController()
    abortRef.current = controller
    setPhase('fetching')
    setProgress(5)

    const evtSource = new EventSource(`/api/analyze?ticker=${ticker}`)

    evtSource.onmessage = (e) => {
      const event: StreamEvent = JSON.parse(e.data)
      if (event.progress) setProgress(event.progress)

      if (event.type === 'buffett_gate') {
        setPhase('buffett_gate')
        setActiveSage('buffett')
        if (event.data) setAnalysis((prev) => ({ ...prev, ...event.data }))
      }

      if (event.type === 'indicators_ready') {
        setActiveSage(null)
      }

      if (event.type === 'sage_scores') {
        setPhase('sage_scores')
        setActiveSage('lynch')
        if (event.data) setAnalysis((prev) => ({ ...prev, ...event.data }))
        setTimeout(() => setActiveSage('greenblatt'), 800)
        setTimeout(() => setActiveSage('taleb'), 1600)
        setTimeout(() => setActiveSage('marks'), 2400)
        setTimeout(() => setActiveSage('fink'), 3200)
        setTimeout(() => setActiveSage(null), 4000)
      }

      if (event.type === 'verdict_ready') {
        setPhase('verdict_ready')
      }

      if (event.type === 'complete') {
        setPhase('complete')
        if (event.data) setAnalysis(event.data as SingleStockAnalysis)
        evtSource.close()
      }

      if (event.type === 'error') {
        setPhase('error')
        setError(event.error ?? 'Unknown error')
        evtSource.close()
      }
    }

    evtSource.onerror = () => {
      setPhase('error')
      setError('Conexión perdida. Intentá de nuevo.')
      evtSource.close()
    }

    return () => {
      evtSource.close()
      controller.abort()
    }
  }, [ticker])

  const isLoading = phase !== 'complete' && phase !== 'error'

  return (
    <div className="min-h-screen flex flex-col text-[#E8EDF5]">
      {/* Header */}
      <header className="border-b border-[#C9A84C]/10 px-4 py-3 flex items-center justify-between bg-[#072B18]/80 backdrop-blur sticky top-0 z-10">
        <Link href="/" className="text-xs text-[#6A7A95] hover:text-[#C9A84C] transition-colors tracking-wider uppercase">
          ← Volver
        </Link>
        <Logo size="sm" tagline={false} onDark />
        <div className="flex items-center gap-3">
          <span className="font-mono font-bold text-[#C9A84C] text-base tracking-wider">{ticker}</span>
          {analysis.name && (
            <span className="text-xs text-[#6A7A95] hidden sm:block">{analysis.name}</span>
          )}
          {isLoading ? (
            <span className="text-[10px] text-[#C9A84C] animate-pulse uppercase tracking-wider">Analizando…</span>
          ) : (
            <span className="text-[10px] text-emerald-400 uppercase tracking-wider">Completo</span>
          )}
        </div>
      </header>

      {/* Progress bar */}
      {isLoading && (
        <div className="h-0.5 bg-[#C9A84C]/10">
          <div className="h-full bg-[#C9A84C] transition-all duration-700" style={{ width: `${progress}%` }} />
        </div>
      )}

      {/* La Mano — compact card strip */}
      <LaManoBanner phase={phase} analysis={analysis} activeSage={activeSage} />

      {/* Main content */}
      <div className="flex-1 max-w-5xl mx-auto w-full px-4 py-8 space-y-6">

        {/* Error */}
        {phase === 'error' && (
          <div className="rounded-xl border border-red-900/50 bg-[#1A0808]/80 p-6 text-center">
            <p className="text-red-400 font-semibold mb-2">Análisis fallido</p>
            <p className="text-[#8895AB] text-sm mb-4">{error}</p>
            <Link href="/" className="text-sm text-[#C9A84C] hover:underline">← Volver al inicio</Link>
          </div>
        )}

        {/* Fetching — cards face-down loading */}
        {phase === 'fetching' && (
          <div className="text-center py-20">
            <div className="flex justify-center gap-3 mb-6">
              {(['♥', '♣', '♦', '♠', '★', '✦'] as const).map((s, i) => (
                <div key={s} style={{ animationDelay: `${i * 180}ms`, animation: 'float 2s ease-in-out infinite' }}>
                  <PlayingCard suit={s} state="face-down" size="md" />
                </div>
              ))}
            </div>
            <p className="text-sm text-[#A8BCA8]" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
              Los maestros toman sus asientos…
            </p>
            <p className="text-xs mt-2 text-[#4A6A54]">Obteniendo datos · Calculando indicadores · Preparando la mesa</p>
          </div>
        )}

        {/* ─── BUFFETT ♥ ─── */}
        {(phase === 'buffett_gate' || phase === 'sage_scores' || phase === 'complete') && analysis.buffettGate && (
          <SageRow
            suit="♥"
            state={
              activeSage === 'buffett' ? 'active'
              : analysis.buffettGate.passed ? 'face-up'
              : 'discarded'
            }
          >
            {!analysis.buffettGate.passed ? (
              <div className="rounded-xl border border-red-900/50 bg-[#1A0808]/80 p-5 flex-1">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="font-semibold text-[#C9A84C] text-sm" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
                      Warren Buffett — El Anfitrión
                    </div>
                    <div className="text-[10px] text-[#6A7A95] uppercase tracking-wider mt-0.5">Mano quemada · Calidad insuficiente</div>
                  </div>
                  <span className="text-xs font-bold bg-red-900/30 text-red-400 border border-red-800/40 px-3 py-1 rounded-full uppercase tracking-wider shrink-0">
                    No pasa
                  </span>
                </div>
                <p className="text-[#E8EDF5]/70 text-sm italic mb-4 border-l-2 border-[#C9A84C]/30 pl-3">
                  &ldquo;{analysis.buffettGate.quote}&rdquo;
                </p>
                <div className="space-y-1.5 mb-5">
                  {analysis.buffettGate.failReasons.map((r, i) => (
                    <div key={i} className="text-xs text-red-400/80 flex items-center gap-2">
                      <span className="text-red-700 text-[10px] shrink-0">—</span>
                      <span>{r}</span>
                    </div>
                  ))}
                </div>
                <Link href="/" className="text-sm text-[#C9A84C] hover:underline">← Analizar otra acción</Link>
              </div>
            ) : (
              <div className="flex-1">
                <SageCard
                  sage="buffett"
                  quote={analysis.buffettGate.quote}
                  score={analysis.buffettGate.qualityScore}
                  badge={analysis.buffettGate.moatRating + ' moat'}
                  badgeVariant="positive"
                  isSpeaking={activeSage === 'buffett'}
                />
              </div>
            )}
          </SageRow>
        )}

        {/* ─── LYNCH ♣ ─── */}
        {(phase === 'sage_scores' || phase === 'complete') && analysis.passed && (
          <SageRow
            suit="♣"
            state={
              activeSage === 'lynch' ? 'active'
              : analysis.sageScores?.lynch ? 'face-up'
              : 'face-down'
            }
          >
            <div className="flex-1">
              <SageCard
                sage="lynch"
                quote={analysis.sageScores?.lynch?.quote ?? ''}
                score={analysis.sageScores?.lynch?.garpScore}
                badge={analysis.sageScores?.lynch?.recommendation}
                badgeVariant={
                  analysis.sageScores?.lynch?.recommendation === 'strong-buy' ? 'positive' :
                  analysis.sageScores?.lynch?.recommendation === 'avoid' ? 'negative' : 'neutral'
                }
                subtext={(() => {
                  const peg = analysis.sageScores?.lynch?.pegRatio
                  return peg != null && peg < 50 ? `PEG ${peg.toFixed(2)}` : 'PEG N/A'
                })()}
                isLoading={!analysis.sageScores?.lynch}
                isSpeaking={activeSage === 'lynch'}
              />
            </div>
          </SageRow>
        )}

        {/* ─── GREENBLATT ♦ ─── */}
        {(phase === 'sage_scores' || phase === 'complete') && analysis.passed && (
          <SageRow
            suit="♦"
            state={
              activeSage === 'greenblatt' ? 'active'
              : analysis.sageScores?.greenblatt ? 'face-up'
              : 'face-down'
            }
          >
            <div className="flex-1">
              <SageCard
                sage="greenblatt"
                quote={analysis.sageScores?.greenblatt?.quote ?? ''}
                badge={`EY ${((analysis.sageScores?.greenblatt?.earningsYield ?? 0) * 100).toFixed(1)}%`}
                badgeVariant="neutral"
                subtext={`ROC ${((analysis.sageScores?.greenblatt?.returnOnCapital ?? 0) * 100).toFixed(1)}%`}
                isLoading={!analysis.sageScores?.greenblatt}
                isSpeaking={activeSage === 'greenblatt'}
              />
            </div>
          </SageRow>
        )}

        {/* ─── MARKS ♠ ─── */}
        {(phase === 'sage_scores' || phase === 'complete') && analysis.passed && (
          <SageRow
            suit="♠"
            state={
              activeSage === 'marks' ? 'active'
              : analysis.sageScores?.marks ? 'face-up'
              : 'face-down'
            }
          >
            <div className="flex-1">
              <SageCard
                sage="marks"
                quote={analysis.sageScores?.marks?.quote ?? ''}
                badge={analysis.sageScores?.marks?.cyclePosition}
                badgeVariant={
                  analysis.sageScores?.marks?.riskLevel === 'low' ? 'positive' :
                  analysis.sageScores?.marks?.riskLevel === 'high' ? 'negative' : 'neutral'
                }
                subtext={analysis.sageScores?.marks?.marketNote?.split('.')[0]}
                isLoading={!analysis.sageScores?.marks}
                isSpeaking={activeSage === 'marks'}
              />
            </div>
          </SageRow>
        )}

        {/* ─── TALEB ★ ─── */}
        {(phase === 'sage_scores' || phase === 'complete') && analysis.passed && (
          <SageRow
            suit="★"
            state={
              activeSage === 'taleb' ? 'active'
              : analysis.sageScores?.taleb
                ? (analysis.sageScores.taleb.fragilityLevel === 'fragile' ? 'discarded' : 'face-up')
                : 'face-down'
            }
          >
            <div className="flex-1">
              <SageCard
                sage="taleb"
                quote={analysis.sageScores?.taleb?.quote ?? ''}
                badge={analysis.sageScores?.taleb?.fragilityLevel}
                badgeVariant={
                  analysis.sageScores?.taleb?.fragilityLevel === 'antifragile' ? 'positive' :
                  analysis.sageScores?.taleb?.fragilityLevel === 'fragile' ? 'negative' : 'neutral'
                }
                subtext={`${analysis.sageScores?.taleb?.warnings?.length ?? 0} señales`}
                isLoading={!analysis.sageScores?.taleb}
                isSpeaking={activeSage === 'taleb'}
              />
            </div>
          </SageRow>
        )}

        {/* ─── FINK ✦ ─── */}
        {(phase === 'sage_scores' || phase === 'complete') && analysis.passed && (
          <SageRow
            suit="✦"
            state={
              activeSage === 'fink' ? 'active'
              : analysis.sageScores?.fink ? 'face-up'
              : 'face-down'
            }
          >
            <div className="flex-1">
              <SageCard
                sage="fink"
                quote={analysis.sageScores?.fink?.quote ?? ''}
                score={analysis.sageScores?.fink?.governanceScore}
                badge={`Grade ${analysis.sageScores?.fink?.institutionalGrade ?? '—'}`}
                badgeVariant={
                  analysis.sageScores?.fink?.institutionalGrade === 'A+' || analysis.sageScores?.fink?.institutionalGrade === 'A' ? 'positive' :
                  analysis.sageScores?.fink?.institutionalGrade === 'D' ? 'negative' : 'neutral'
                }
                subtext={(() => {
                  const y = analysis.sageScores?.fink?.totalShareholderYield
                  return y != null ? `TSY ${(y * 100).toFixed(2)}%` : undefined
                })()}
                isLoading={!analysis.sageScores?.fink}
                isSpeaking={activeSage === 'fink'}
              />
            </div>
          </SageRow>
        )}

        {/* Technical */}
        {analysis.technical && phase === 'complete' && (
          <div>
            <SectionLabel suits="♦" label="Cuadro Técnico" />
            <TechnicalPanel technical={analysis.technical} />
          </div>
        )}

        {/* Final verdict */}
        {phase === 'complete' && analysis.verdict && analysis.fundamentals && (
          <div>
            <SectionLabel suits="♥♣♦♠★" label="Veredicto Final" />
            <FinalVerdict
              verdict={analysis.verdict}
              currentPrice={analysis.fundamentals.currentPrice}
            />
          </div>
        )}

      </div>

      <footer className="border-t border-[#C9A84C]/10 px-6 py-4 mt-8">
        <p className="disclaimer-text text-center max-w-3xl mx-auto" style={{ color: '#4A6A54' }}>
          <strong style={{ color: 'rgba(201,168,76,0.45)' }}>DISCLAIMER:</strong> OBG es una herramienta informativa.
          Nada en esta plataforma constituye asesoramiento financiero. El análisis es generado algorítmicamente.
          Siempre consultá a un asesor calificado antes de tomar decisiones de inversión.
        </p>
      </footer>
    </div>
  )
}

// Card + report panel — the core visual unit
function SageRow({
  suit,
  state,
  children,
}: {
  suit: '♥' | '♣' | '♦' | '♠' | '★' | '✦'
  state: 'face-up' | 'face-down' | 'active' | 'discarded'
  children: React.ReactNode
}) {
  return (
    <div className="flex gap-5 items-start">
      {/* Playing card + stand */}
      <div className="flex flex-col items-center gap-1.5 shrink-0">
        <PlayingCard suit={suit} label="K" state={state} size="lg" />
        {/* Wooden easel */}
        <div style={{
          width: 60,
          height: 5,
          borderRadius: 3,
          background: 'linear-gradient(to right, transparent, #6B3A1F 20%, #8B5A2B 50%, #6B3A1F 80%, transparent)',
        }} />
        <div style={{ width: 4, height: 8, borderRadius: 2, background: '#5C3010', marginTop: -3 }} />
      </div>
      {/* Report */}
      {children}
    </div>
  )
}

function SectionLabel({ suits, label }: { suits: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="card-suit text-sm" style={{ color: 'rgba(201,168,76,0.35)' }}>{suits}</span>
      <div className="text-[10px] uppercase tracking-[0.3em]" style={{ color: '#4A5A72' }}>{label}</div>
      <div className="flex-1 h-px" style={{ background: 'rgba(201,168,76,0.1)' }} />
    </div>
  )
}

// La Mano banner — 5 card slots at top
const HAND_CARDS = [
  { id: 'buffett',    suit: '♥' as const, name: 'Buffett' },
  { id: 'lynch',      suit: '♣' as const, name: 'Lynch' },
  { id: 'greenblatt', suit: '♦' as const, name: 'Greenblatt' },
  { id: 'marks',      suit: '♠' as const, name: 'Marks' },
  { id: 'taleb',      suit: '★' as const, name: 'Taleb' },
  { id: 'fink',       suit: '✦' as const, name: 'Fink' },
]

function LaManoBanner({ phase, analysis, activeSage }: {
  phase: string
  analysis: Partial<SingleStockAnalysis>
  activeSage: string | null
}) {
  function getState(id: string): 'face-up' | 'face-down' | 'active' | 'discarded' {
    if (id === 'buffett') {
      if (phase === 'fetching') return 'face-down'
      if (phase === 'buffett_gate') return activeSage === 'buffett' ? 'active' : 'face-down'
      if (!analysis.buffettGate) return 'face-down'
      return analysis.buffettGate.passed ? 'face-up' : 'discarded'
    }
    if (!analysis.buffettGate?.passed) return 'face-down'
    if (phase === 'buffett_gate' || phase === 'fetching') return 'face-down'

    if (id === 'lynch') {
      if (activeSage === 'lynch') return 'active'
      if (!analysis.sageScores?.lynch) return 'face-down'
      return analysis.sageScores.lynch.recommendation === 'avoid' ? 'discarded' : 'face-up'
    }
    if (id === 'greenblatt') {
      if (activeSage === 'greenblatt') return 'active'
      return analysis.sageScores?.greenblatt ? 'face-up' : 'face-down'
    }
    if (id === 'marks') {
      if (activeSage === 'marks') return 'active'
      if (!analysis.sageScores?.marks) return 'face-down'
      return analysis.sageScores.marks.riskLevel === 'high' ? 'discarded' : 'face-up'
    }
    if (id === 'taleb') {
      if (activeSage === 'taleb') return 'active'
      if (!analysis.sageScores?.taleb) return 'face-down'
      return analysis.sageScores.taleb.fragilityLevel === 'fragile' ? 'discarded' : 'face-up'
    }
    if (id === 'fink') {
      if (activeSage === 'fink') return 'active'
      if (!analysis.sageScores?.fink) return 'face-down'
      return analysis.sageScores.fink.institutionalGrade === 'D' ? 'discarded' : 'face-up'
    }
    return 'face-down'
  }

  return (
    <div className="border-b border-[#C9A84C]/10 bg-[#072B18]/60 backdrop-blur-sm px-4 py-3">
      <div className="max-w-5xl mx-auto flex items-end justify-center gap-4 sm:gap-8">
        {HAND_CARDS.map((card) => {
          const state = getState(card.id)
          return (
            <div key={card.id} className="flex flex-col items-center gap-1 transition-all duration-500"
              style={{ transform: state === 'active' ? 'translateY(-4px)' : 'none' }}>
              <PlayingCard suit={card.suit} label="K" state={state} size="sm" />
              <span
                translate="no"
                className="text-[8px] uppercase tracking-wider hidden sm:block transition-colors duration-500"
                style={{
                  color: state === 'face-down' ? '#2A4A35'
                    : state === 'discarded' ? '#EF4444'
                    : state === 'active' ? '#C9A84C'
                    : '#A8BCA8',
                }}
              >
                {card.name}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
