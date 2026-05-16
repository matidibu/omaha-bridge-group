import type { Metadata } from 'next'
import Link from 'next/link'
import { fetchAllPortfolios } from '@/lib/sec13f'
import type { InvestorPortfolio } from '@/lib/sec13f'
import { HoldingCard } from './HoldingCard'

export const revalidate = 86400

export const metadata: Metadata = {
  title: 'Cartas en Mesa — Los grandes inversores revelan su mano | Omaha Bridge Group',
  description:
    'Descubrí qué acciones tienen en cartera Warren Buffett, Bill Ackman y Michael Burry. Datos reales de formularios 13F presentados ante la SEC, actualizados cada trimestre.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/cartas-en-mesa' },
  openGraph: {
    title: 'Cartas en Mesa — Los superinversores muestran su mano | Omaha Bridge Group',
    description:
      'Ver las posiciones reales de Buffett, Ackman y Burry. Datos 13F de la SEC. Analizá cualquier acción con nuestros 6 sabios.',
    type: 'website',
  },
}

/* ── helpers ── */

function formatValue(thousands: number): string {
  const m = thousands / 1000
  if (m >= 1000) return `$${(m / 1000).toFixed(1)}bn`
  return `$${m.toFixed(0)}M`
}

function getPeriodLabel(reportPeriod: string): string {
  if (!reportPeriod) return ''
  const d = new Date(reportPeriod + 'T12:00:00')
  const q = Math.ceil((d.getMonth() + 1) / 3)
  return `Q${q} ${d.getFullYear()}`
}

function formatDate(iso: string): string {
  if (!iso) return ''
  const d = new Date(iso + 'T12:00:00')
  return d.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })
}

/* ── Investor section ── */

function InvestorSection({ p }: { p: InvestorPortfolio }) {
  const period = getPeriodLabel(p.reportPeriod)

  return (
    <section style={{ marginBottom: 56 }}>
      {/* Investor header */}
      <div
        style={{
          borderLeft: `3px solid ${p.color}`,
          paddingLeft: 20,
          marginBottom: 24,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
          <span style={{ fontSize: 22, color: p.color, lineHeight: 1 }}>{p.symbol}</span>
          <h2
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: '#F2F6FF',
              fontFamily: 'var(--font-playfair), Georgia, serif',
              margin: 0,
            }}
          >
            {p.name}
          </h2>
          <span style={{ fontSize: 12, color: '#6A7A95' }}>·</span>
          <span style={{ fontSize: 12, color: '#6A7A95' }}>{p.fund}</span>
          {period && (
            <>
              <span style={{ fontSize: 12, color: '#6A7A95' }}>·</span>
              <span
                style={{
                  fontSize: 10,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: p.color + 'BB',
                  background: p.color + '15',
                  border: `1px solid ${p.color}30`,
                  borderRadius: 4,
                  padding: '2px 8px',
                  fontFamily: 'var(--font-geist-mono)',
                }}
              >
                {period}
              </span>
            </>
          )}
        </div>

        <p style={{ fontSize: 12, color: '#7A8A95', margin: '8px 0 4px', fontStyle: 'italic' }}>
          &ldquo;{p.strategy}&rdquo;
        </p>

        <div style={{ display: 'flex', gap: 20, marginTop: 8, flexWrap: 'wrap' }}>
          {p.totalValue > 0 && (
            <span style={{ fontSize: 11, color: '#4A5A72', fontFamily: 'var(--font-geist-mono)' }}>
              Portafolio total:{' '}
              <span style={{ color: p.color + 'BB' }}>{formatValue(p.totalValue)}</span>
            </span>
          )}
          {p.filingDate && (
            <span style={{ fontSize: 11, color: '#4A5A72' }}>
              Presentado: {formatDate(p.filingDate)}
            </span>
          )}
        </div>
      </div>

      {/* Error state */}
      {p.error && (
        <div
          style={{
            background: 'rgba(239,68,68,0.07)',
            border: '1px solid rgba(239,68,68,0.2)',
            borderRadius: 8,
            padding: '14px 18px',
            color: '#F87171',
            fontSize: 13,
          }}
        >
          Datos temporalmente no disponibles. La SEC puede estar experimentando alta demanda.
        </div>
      )}

      {/* Holdings grid */}
      {p.holdings.length > 0 && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
            gap: 10,
          }}
        >
          {p.holdings.map(h => (
            <HoldingCard key={h.cusip} h={h} color={p.color} />
          ))}
        </div>
      )}

      {/* Empty state (no error, no holdings) */}
      {!p.error && p.holdings.length === 0 && (
        <div style={{ color: '#4A5A72', fontSize: 13, padding: '12px 0' }}>
          No se encontraron posiciones de renta variable en el último formulario 13F.
        </div>
      )}
    </section>
  )
}

/* ── Page ── */

export default async function CartasEnMesaPage() {
  const portfolios = await fetchAllPortfolios()

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#051A10', color: '#E8EDF5' }}>
      {/* Header */}
      <header
        style={{
          borderBottom: '1px solid rgba(201,168,76,0.15)',
          background: 'rgba(7,43,24,0.9)',
        }}
        className="px-4 py-3 flex items-center justify-between sticky top-0 z-10 backdrop-blur"
      >
        <Link
          href="/"
          className="text-xs uppercase tracking-wider hover:text-[#C9A84C] transition-colors"
          style={{ color: '#6A7A95' }}
        >
          ← Inicio
        </Link>
        <span
          className="text-xs uppercase tracking-widest"
          style={{
            color: 'rgba(201,168,76,0.6)',
            fontFamily: 'var(--font-playfair), Georgia, serif',
          }}
        >
          Omaha Bridge Group
        </span>
        <Link
          href="/"
          className="text-xs px-3 py-1 rounded-full border transition-colors hover:bg-[#C9A84C]/10"
          style={{ color: '#C9A84C', borderColor: 'rgba(201,168,76,0.3)' }}
        >
          Analizar →
        </Link>
      </header>

      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-12">

        {/* Hero */}
        <div style={{ marginBottom: 56, textAlign: 'center' }}>
          <div
            style={{
              display: 'inline-flex',
              gap: 14,
              fontSize: 22,
              marginBottom: 20,
              opacity: 0.6,
            }}
          >
            <span style={{ color: '#C9A84C' }}>♥</span>
            <span style={{ color: '#60A5FA' }}>♣</span>
            <span style={{ color: '#F87171' }}>♠</span>
            <span style={{ color: '#4ADE80' }}>♦</span>
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-playfair), Georgia, serif',
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 800,
              color: '#F2F6FF',
              marginBottom: 16,
              lineHeight: 1.1,
            }}
          >
            Cartas en Mesa
          </h1>
          <p
            style={{
              color: '#8A9A85',
              fontSize: 15,
              lineHeight: 1.75,
              maxWidth: 560,
              margin: '0 auto 20px',
              fontStyle: 'italic',
              fontFamily: 'var(--font-playfair), Georgia, serif',
            }}
          >
            &ldquo;En el bridge, los mejores leen las cartas del contrario.
            Aquí podés ver exactamente qué tienen en mano los inversores
            más grandes del mundo.&rdquo;
          </p>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 10,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'rgba(201,168,76,0.55)',
              border: '1px solid rgba(201,168,76,0.18)',
              borderRadius: 20,
              padding: '5px 16px',
              background: 'rgba(201,168,76,0.04)',
            }}
          >
            <span>SEC 13F</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>Actualizado cada 24 horas</span>
            <span style={{ opacity: 0.4 }}>·</span>
            <span>Top 10 posiciones</span>
          </div>
        </div>

        {/* Investor sections */}
        {portfolios.map(p => (
          <InvestorSection key={p.id} p={p} />
        ))}

        {/* Attribution */}
        <div
          style={{
            borderTop: '1px solid rgba(201,168,76,0.10)',
            paddingTop: 24,
            marginTop: 8,
          }}
        >
          <p style={{ fontSize: 11, color: '#3A4A5A', lineHeight: 1.7, maxWidth: 640 }}>
            <strong style={{ color: '#4A5A6A' }}>Fuente de datos:</strong> Formularios 13F-HR
            presentados ante la Securities and Exchange Commission (SEC) de Estados Unidos.
            Las posiciones se reportan trimestralmente con hasta 45 días de retraso.
            Solo se muestran posiciones de acciones ordinarias (se excluyen opciones y derivados).
            Esta información es pública y no constituye una recomendación de inversión.
          </p>
          <p style={{ fontSize: 11, color: '#2A3A4A', marginTop: 8 }}>
            Hacé clic en cualquier ticker para analizarlo con los 6 sabios de Omaha Bridge Group.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid rgba(201,168,76,0.10)' }} className="px-6 py-5">
        <p className="text-center text-xs" style={{ color: '#4A5A72' }}>
          © 2025 <span translate="no">Omaha Bridge Group</span>. Todos los derechos reservados.{' '}
          <Link href="/" className="hover:text-[#C9A84C] transition-colors" style={{ color: 'rgba(201,168,76,0.45)' }}>Inicio</Link>
          {' · '}
          <Link href="/ideas" className="hover:text-[#C9A84C] transition-colors" style={{ color: 'rgba(201,168,76,0.45)' }}>Today&apos;s Hand</Link>
          {' · '}
          <Link href="/guias" className="hover:text-[#C9A84C] transition-colors" style={{ color: 'rgba(201,168,76,0.45)' }}>Guías</Link>
          {' · '}
          <Link href="/analisis" className="hover:text-[#C9A84C] transition-colors" style={{ color: 'rgba(201,168,76,0.45)' }}>Análisis</Link>
          {' · '}
          <Link href="/nosotros" className="hover:text-[#C9A84C] transition-colors" style={{ color: 'rgba(201,168,76,0.45)' }}>Nosotros</Link>
          {' · '}
          <Link href="/privacidad" className="hover:text-[#C9A84C] transition-colors" style={{ color: 'rgba(201,168,76,0.45)' }}>Privacidad</Link>
        </p>
      </footer>
    </div>
  )
}
