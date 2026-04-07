import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { analyzeToCompletion } from '@/lib/pipeline/analyzeToCompletion'
import { SingleStockAnalysis } from '@/types/analysis'

export const revalidate = 86400 // 24 hours ISR — generated on first request, then cached
export const dynamicParams = true

// ─── Metadata ─────────────────────────────────────────────────────────────────
export async function generateMetadata(
  { params }: { params: Promise<{ ticker: string }> }
): Promise<Metadata> {
  const { ticker } = await params
  const t = ticker.toUpperCase()
  return {
    title: `Análisis ${t} — Value Investing | Omaha Bridge Group`,
    description: `Los 6 maestros del value investing analizan ${t}. Filtro Buffett, PEG Lynch, Magic Formula Greenblatt, riesgo Taleb, ciclo Marks y calidad institucional Fink. Actualizado diariamente.`,
    alternates: { canonical: `/analisis/${t}` },
    openGraph: {
      title: `${t} — Análisis Value Investing | Omaha Bridge Group`,
      description: `¿Vale la pena invertir en ${t}? Seis leyendas del value investing analizan la acción y emiten un veredicto unificado.`,
      type: 'article',
    },
  }
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default async function AnalisisPage(
  { params }: { params: Promise<{ ticker: string }> }
) {
  const { ticker } = await params
  const t = ticker.toUpperCase()

  // Validate format before hitting APIs
  if (!/^[A-Z]{1,10}$/.test(t)) notFound()

  const analysis = await analyzeToCompletion(t)
  if (!analysis) notFound()

  const { buffettGate, sageScores, technical, verdict, fundamentals, passed, name, analyzedAt } = analysis

  const ratingColor: Record<string, string> = {
    'strong-buy': '#22c55e',
    'buy': '#86efac',
    'watch': '#C9A84C',
    'hold': '#94a3b8',
    'avoid': '#f87171',
    'sell': '#ef4444',
  }
  const ratingLabel: Record<string, string> = {
    'strong-buy': 'Compra fuerte',
    'buy': 'Comprar',
    'watch': 'Vigilar',
    'hold': 'Mantener',
    'avoid': 'Evitar',
    'sell': 'Vender',
  }

  const overallColor = verdict ? (ratingColor[verdict.overallRating] ?? '#94a3b8') : '#94a3b8'
  const overallLabel = verdict ? (ratingLabel[verdict.overallRating] ?? verdict.overallRating) : null

  const fmt = (n: number, decimals = 1) => (n * 100).toFixed(decimals) + '%'
  const fmtDate = new Date(analyzedAt).toLocaleDateString('es-AR', { day: 'numeric', month: 'long', year: 'numeric' })

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `Análisis ${t} — ${name} | Value Investing`,
    description: `Análisis value investing de ${name} (${t}) por los 6 maestros del Omaha Bridge Group.`,
    dateModified: analyzedAt,
    author: { '@type': 'Organization', name: 'Omaha Bridge Group' },
    publisher: { '@type': 'Organization', name: 'Omaha Bridge Group' },
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#051A10', color: '#E8EDF5' }}>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Header */}
      <header style={{ borderBottom: '1px solid rgba(201,168,76,0.15)', background: 'rgba(7,43,24,0.9)' }}
        className="px-4 py-3 flex items-center justify-between sticky top-0 z-10 backdrop-blur">
        <Link href="/" className="text-xs uppercase tracking-wider hover:text-[#C9A84C] transition-colors"
          style={{ color: '#6A7A95' }}>
          ← Inicio
        </Link>
        <span className="text-xs uppercase tracking-widest" style={{ color: 'rgba(201,168,76,0.6)', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Omaha Bridge Group
        </span>
        <Link href={`/analysis/${t}`} className="text-xs px-3 py-1 rounded-full border transition-colors hover:bg-[#C9A84C]/10"
          style={{ color: '#C9A84C', borderColor: 'rgba(201,168,76,0.3)' }}>
          Análisis en vivo →
        </Link>
      </header>

      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-10 space-y-10">

        {/* ── Hero ── */}
        <section>
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold" style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#E8EDF5' }}>
                {name}
                <span className="ml-3 font-mono text-2xl" style={{ color: '#C9A84C' }}>{t}</span>
              </h1>
              <p className="text-sm mt-1" style={{ color: '#6A7A95' }}>
                {fundamentals.sector} · Análisis value investing
              </p>
            </div>
            {verdict && (
              <div className="text-center px-5 py-3 rounded-xl border" style={{ borderColor: `${overallColor}30`, background: `${overallColor}10` }}>
                <div className="text-2xl font-bold" style={{ color: overallColor, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
                  {overallLabel}
                </div>
                <div className="text-xs mt-0.5" style={{ color: '#6A7A95' }}>Confianza {verdict.confidence}%</div>
              </div>
            )}
          </div>

          {/* Key metrics strip */}
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
            <Metric label="Precio" value={`$${fundamentals.currentPrice.toFixed(2)}`} />
            <Metric label="P/E" value={fundamentals.pe > 0 ? fundamentals.pe.toFixed(1) : 'N/A'} />
            <Metric label="ROE" value={fmt(fundamentals.roe)} />
            <Metric label="Margen bruto" value={fmt(fundamentals.grossMargin)} />
          </div>
        </section>

        <Divider />

        {/* ── Buffett ── */}
        <section>
          <SageHeading name="Warren Buffett" role="El Anfitrión — Calidad del negocio" suit="♥" />
          <Quote text={buffettGate.quote} />
          <div className="mt-3 flex flex-wrap gap-2 items-center">
            <Badge
              label={passed ? `Pasa el filtro · Score ${buffettGate.qualityScore}/100` : 'No pasa el filtro'}
              color={passed ? '#22c55e' : '#ef4444'}
            />
            {passed && <Badge label={`Moat: ${buffettGate.moatRating}`} color="#C9A84C" />}
          </div>
          {!passed && buffettGate.failReasons.length > 0 && (
            <ul className="mt-3 space-y-1">
              {buffettGate.failReasons.map((r, i) => (
                <li key={i} className="text-sm" style={{ color: '#f87171' }}>— {r}</li>
              ))}
            </ul>
          )}
          {passed && (
            <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <Metric label="ROIC" value={fmt(fundamentals.roic)} />
              <Metric label="Deuda/Equity" value={fundamentals.debtToEquity.toFixed(2)} />
              <Metric label="FCF Yield" value={fmt(fundamentals.freeCashFlowYield)} />
            </div>
          )}
        </section>

        {passed && sageScores && (
          <>
            <Divider />

            {/* ── Lynch ── */}
            {sageScores.lynch && (
              <section>
                <SageHeading name="Peter Lynch" role="Crecimiento a precio razonable (GARP)" suit="♣" />
                <Quote text={sageScores.lynch.quote} />
                <div className="mt-3 flex flex-wrap gap-2">
                  <Badge label={`Score ${sageScores.lynch.garpScore}/100`} color="#C9A84C" />
                  <Badge label={sageScores.lynch.stockCategory} color="#94a3b8" />
                  <Badge label={`PEG ${sageScores.lynch.pegRatio < 50 ? sageScores.lynch.pegRatio.toFixed(2) : 'N/A'}`} color="#6A7A95" />
                </div>
              </section>
            )}

            <Divider />

            {/* ── Greenblatt ── */}
            {sageScores.greenblatt && (
              <section>
                <SageHeading name="Joel Greenblatt" role="Magic Formula — Earnings Yield + ROC" suit="♦" />
                <Quote text={sageScores.greenblatt.quote} />
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <Metric label="Earnings Yield" value={fmt(sageScores.greenblatt.earningsYield)} />
                  <Metric label="Return on Capital" value={fmt(sageScores.greenblatt.returnOnCapital)} />
                </div>
              </section>
            )}

            <Divider />

            {/* ── Taleb ── */}
            {sageScores.taleb && (
              <section>
                <SageHeading name="Nassim Taleb" role="Antifragilidad y riesgo de cola" suit="★" />
                <Quote text={sageScores.taleb.quote} />
                <div className="mt-3 flex flex-wrap gap-2">
                  <Badge
                    label={sageScores.taleb.fragilityLevel}
                    color={sageScores.taleb.fragilityLevel === 'antifragile' ? '#22c55e' : sageScores.taleb.fragilityLevel === 'fragile' ? '#ef4444' : '#C9A84C'}
                  />
                  {sageScores.taleb.warnings.length > 0 && (
                    <Badge label={`${sageScores.taleb.warnings.length} señal${sageScores.taleb.warnings.length > 1 ? 'es' : ''} de riesgo`} color="#f87171" />
                  )}
                </div>
                {sageScores.taleb.warnings.length > 0 && (
                  <ul className="mt-2 space-y-0.5">
                    {sageScores.taleb.warnings.map((w, i) => (
                      <li key={i} className="text-xs" style={{ color: '#94a3b8' }}>— {w.description}</li>
                    ))}
                  </ul>
                )}
              </section>
            )}

            <Divider />

            {/* ── Marks ── */}
            {sageScores.marks && (
              <section>
                <SageHeading name="Howard Marks" role="Ciclo de mercado y contexto macro" suit="♠" />
                <Quote text={sageScores.marks.quote} />
                <div className="mt-3 flex flex-wrap gap-2">
                  <Badge label={sageScores.marks.cyclePosition} color="#C9A84C" />
                  <Badge
                    label={`Riesgo: ${sageScores.marks.riskLevel}`}
                    color={sageScores.marks.riskLevel === 'low' ? '#22c55e' : sageScores.marks.riskLevel === 'high' ? '#ef4444' : '#94a3b8'}
                  />
                </div>
                {sageScores.marks.marketNote && (
                  <p className="mt-2 text-sm" style={{ color: '#8895AB' }}>{sageScores.marks.marketNote}</p>
                )}
              </section>
            )}

            <Divider />

            {/* ── Fink ── */}
            {sageScores.fink && (
              <section>
                <SageHeading name="Larry Fink" role="Calidad institucional y gobierno corporativo" suit="✦" />
                <Quote text={sageScores.fink.quote} />
                <div className="mt-3 flex flex-wrap gap-2">
                  <Badge label={`Grade ${sageScores.fink.institutionalGrade}`} color="#C9A84C" />
                  <Badge label={`Governance ${sageScores.fink.governanceScore}/100`} color="#94a3b8" />
                </div>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <Metric label="Dividend Yield" value={fmt(fundamentals.dividendYield)} />
                  <Metric label="Total Shareholder Yield" value={fmt(sageScores.fink.totalShareholderYield)} />
                </div>
              </section>
            )}

            {/* ── Technical ── */}
            {technical && (
              <>
                <Divider />
                <section>
                  <h2 className="text-base font-semibold mb-3" style={{ color: '#C9A84C', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
                    ♦ Señales Técnicas
                  </h2>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <Metric label="Señal general" value={technical.overall} />
                    <Metric label="RSI (14)" value={technical.indicators.rsi14.toFixed(1)} />
                    <Metric label="Tendencia" value={technical.trend} />
                    <Metric label="Volatilidad" value={technical.volatility} />
                  </div>
                </section>
              </>
            )}

            {/* ── Verdict ── */}
            {verdict && (
              <>
                <Divider />
                <section>
                  <h2 className="text-base font-semibold mb-1" style={{ color: '#C9A84C', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
                    ♥♣♦♠★ Veredicto Final
                  </h2>
                  <p className="text-xs mb-4 uppercase tracking-widest" style={{ color: '#4A5A72' }}>
                    Consenso de los 6 maestros
                  </p>

                  <div className="rounded-xl border p-5 mb-4" style={{ borderColor: `${overallColor}25`, background: `${overallColor}08` }}>
                    <div className="flex items-center justify-between flex-wrap gap-3 mb-3">
                      <div>
                        <span className="text-xl font-bold" style={{ color: overallColor, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
                          {overallLabel}
                        </span>
                        <span className="ml-3 text-sm" style={{ color: '#6A7A95' }}>Confianza {verdict.confidence}%</span>
                      </div>
                    </div>
                    <p className="text-sm" style={{ color: '#A8BCA8' }}>{verdict.sageConsensus}</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="rounded-lg border p-4" style={{ borderColor: 'rgba(201,168,76,0.1)', background: 'rgba(7,43,24,0.4)' }}>
                      <div className="text-xs uppercase tracking-wider mb-3" style={{ color: '#4A5A72' }}>Largo plazo · {verdict.longTerm.horizon}</div>
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-sm">
                          <span style={{ color: '#6A7A95' }}>Acción</span>
                          <span style={{ color: '#E8EDF5' }} className="capitalize">{verdict.longTerm.action}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span style={{ color: '#6A7A95' }}>Objetivo</span>
                          <span style={{ color: '#22c55e' }}>${verdict.longTerm.priceTarget.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span style={{ color: '#6A7A95' }}>Stop loss</span>
                          <span style={{ color: '#f87171' }}>${verdict.longTerm.stopLoss.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span style={{ color: '#6A7A95' }}>Riesgo/Retorno</span>
                          <span style={{ color: '#C9A84C' }}>{verdict.longTerm.riskReward.toFixed(1)}x</span>
                        </div>
                      </div>
                      <p className="mt-3 text-xs" style={{ color: '#6A7A95' }}>{verdict.longTerm.rationale}</p>
                    </div>

                    <div className="rounded-lg border p-4" style={{ borderColor: 'rgba(201,168,76,0.1)', background: 'rgba(7,43,24,0.4)' }}>
                      <div className="text-xs uppercase tracking-wider mb-3" style={{ color: '#4A5A72' }}>Corto plazo · {verdict.shortTerm.horizon}</div>
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-sm">
                          <span style={{ color: '#6A7A95' }}>Acción</span>
                          <span style={{ color: '#E8EDF5' }} className="capitalize">{verdict.shortTerm.action}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span style={{ color: '#6A7A95' }}>Objetivo</span>
                          <span style={{ color: '#22c55e' }}>${verdict.shortTerm.priceTarget.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span style={{ color: '#6A7A95' }}>Stop loss</span>
                          <span style={{ color: '#f87171' }}>${verdict.shortTerm.stopLoss.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span style={{ color: '#6A7A95' }}>Riesgo/Retorno</span>
                          <span style={{ color: '#C9A84C' }}>{verdict.shortTerm.riskReward.toFixed(1)}x</span>
                        </div>
                      </div>
                      <p className="mt-3 text-xs" style={{ color: '#6A7A95' }}>{verdict.shortTerm.rationale}</p>
                    </div>
                  </div>

                  {verdict.narratives?.chairman && (
                    <div className="mt-4 rounded-lg border p-4" style={{ borderColor: 'rgba(201,168,76,0.15)', background: 'rgba(201,168,76,0.04)' }}>
                      <div className="text-xs uppercase tracking-wider mb-2" style={{ color: '#C9A84C' }}>El Chairman</div>
                      <p className="text-sm italic" style={{ color: '#C8D8C8', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
                        &ldquo;{verdict.narratives.chairman}&rdquo;
                      </p>
                    </div>
                  )}
                </section>
              </>
            )}
          </>
        )}

        <Divider />

        {/* ── Fundamentals table ── */}
        <section>
          <h2 className="text-base font-semibold mb-4" style={{ color: '#C9A84C', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Datos Fundamentales
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Metric label="Market Cap" value={`$${(fundamentals.marketCap / 1e9).toFixed(1)}B`} />
            <Metric label="EV/EBITDA" value={fundamentals.evEbitda.toFixed(1)} />
            <Metric label="P/B" value={fundamentals.pbv.toFixed(2)} />
            <Metric label="Margen operativo" value={fmt(fundamentals.operatingMargin)} />
            <Metric label="Margen neto" value={fmt(fundamentals.netMargin)} />
            <Metric label="ROA" value={fmt(fundamentals.roa)} />
            <Metric label="Crecimiento EPS 5a" value={fmt(fundamentals.epsGrowth5y)} />
            <Metric label="Crecimiento ventas 5a" value={fmt(fundamentals.revenueGrowth5y)} />
            <Metric label="Current ratio" value={fundamentals.currentRatio.toFixed(2)} />
          </div>
        </section>

        {/* ── CEDEAR ── */}
        {analysis.cedear && (
          <>
            <Divider />
            <section>
              <h2 className="text-base font-semibold mb-4" style={{ color: '#C9A84C', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
                🇦🇷 CEDEAR — Mercado Argentino
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-3">
                <Metric label="Ticker BYMA" value={analysis.cedear.cedearTicker} />
                <Metric label="Precio ARS" value={`$${analysis.cedear.cedearPrice.toLocaleString('es-AR', { maximumFractionDigits: 0 })}`} />
                <Metric label="CCL implícito" value={`$${analysis.cedear.cclRate.toLocaleString('es-AR', { maximumFractionDigits: 0 })}`} />
                <Metric
                  label={analysis.cedear.premiumDiscount > 0 ? 'Prima vs NYSE' : 'Descuento vs NYSE'}
                  value={`${analysis.cedear.premiumDiscount > 0 ? '+' : ''}${(analysis.cedear.premiumDiscount * 100).toFixed(1)}%`}
                />
              </div>
              <p className="text-xs" style={{ color: '#4A5A72' }}>
                Ratio {analysis.cedear.ratio}:1 · Precio implícito USD ${analysis.cedear.impliedUSDPrice.toFixed(2)} vs NYSE ${fundamentals.currentPrice.toFixed(2)}
              </p>
            </section>
          </>
        )}

        <Divider />

        {/* ── CTA ── */}
        <section className="text-center py-6 rounded-xl border" style={{ borderColor: 'rgba(201,168,76,0.2)', background: 'rgba(7,43,24,0.5)' }}>
          <p className="text-sm mb-1" style={{ color: '#6A7A95' }}>Este análisis se actualiza automáticamente cada 24 horas.</p>
          <p className="text-base mb-4" style={{ color: '#A8BCA8', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            ¿Querés el análisis en tiempo real con los 6 maestros deliberando en vivo?
          </p>
          <Link href={`/analysis/${t}`}
            className="inline-block px-6 py-2.5 rounded-full font-semibold text-sm transition-all hover:opacity-90"
            style={{ background: '#C9A84C', color: '#051A10' }}>
            Análisis en vivo de {t} →
          </Link>
        </section>

        {/* ── Disclaimer ── */}
        <p className="text-center text-xs" style={{ color: '#2A4A35' }}>
          <strong style={{ color: 'rgba(201,168,76,0.3)' }}>DISCLAIMER:</strong> OBG es una herramienta informativa.
          Nada en esta plataforma constituye asesoramiento financiero. El análisis es generado algorítmicamente.
          Siempre consultá a un asesor calificado antes de tomar decisiones de inversión.
        </p>

      </main>
    </div>
  )
}

// ─── Small reusable components ────────────────────────────────────────────────

function SageHeading({ name, role, suit }: { name: string; role: string; suit: string }) {
  return (
    <div className="mb-3">
      <h2 className="text-base font-semibold" style={{ color: '#C9A84C', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
        <span translate="no" className="card-suit mr-2" style={{ opacity: 0.6 }}>{suit}</span>
        {name}
      </h2>
      <p className="text-xs mt-0.5" style={{ color: '#4A5A72' }}>{role}</p>
    </div>
  )
}

function Quote({ text }: { text: string }) {
  return (
    <blockquote className="border-l-2 pl-4 py-0.5 text-sm italic"
      style={{ borderColor: 'rgba(201,168,76,0.3)', color: 'rgba(232,237,245,0.75)', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
      &ldquo;{text}&rdquo;
    </blockquote>
  )
}

function Badge({ label, color }: { label: string; color: string }) {
  return (
    <span className="text-xs px-2.5 py-0.5 rounded-full border capitalize"
      style={{ color, borderColor: `${color}40`, background: `${color}10` }}>
      {label}
    </span>
  )
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg px-3 py-2.5" style={{ background: 'rgba(7,43,24,0.5)', border: '1px solid rgba(201,168,76,0.08)' }}>
      <div className="text-xs mb-0.5" style={{ color: '#4A5A72' }}>{label}</div>
      <div className="text-sm font-mono font-semibold" style={{ color: '#E8EDF5' }}>{value}</div>
    </div>
  )
}

function Divider() {
  return <hr style={{ borderColor: 'rgba(201,168,76,0.08)' }} />
}
