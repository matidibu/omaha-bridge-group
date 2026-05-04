import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Análisis de acciones — Value Investing | Omaha Bridge Group',
  description: 'Analizá cualquier acción con los criterios exactos de Buffett, Lynch, Greenblatt, Taleb, Marks y Fink. Análisis value investing en español. CEDEARs incluidos para inversores argentinos.',
  alternates: { canonical: '/analisis' },
  openGraph: {
    title: 'Análisis de acciones — Value Investing | Omaha Bridge Group',
    description: 'Los 6 maestros del value investing analizan cualquier acción: filtro Buffett, PEG Lynch, Magic Formula Greenblatt, riesgo Taleb, ciclo Marks y calidad Fink. Con datos de CEDEARs.',
    type: 'website',
  },
}

// ─── Ticker directory ─────────────────────────────────────────────────────────
// cedear: true = ticker has CEDEAR en BYMA (para inversores argentinos)

const SECTORS: { label: string; tickers: { ticker: string; name: string; cedear?: boolean }[] }[] = [
  {
    label: 'Tecnología',
    tickers: [
      { ticker: 'AAPL',  name: 'Apple',            cedear: true },
      { ticker: 'MSFT',  name: 'Microsoft',         cedear: true },
      { ticker: 'GOOGL', name: 'Alphabet',           cedear: true },
      { ticker: 'NVDA',  name: 'NVIDIA',             cedear: true },
      { ticker: 'META',  name: 'Meta',               cedear: true },
      { ticker: 'AMZN',  name: 'Amazon',             cedear: true },
      { ticker: 'AMD',   name: 'AMD',                cedear: true },
      { ticker: 'ADBE',  name: 'Adobe',              cedear: true },
      { ticker: 'ORCL',  name: 'Oracle',             cedear: true },
      { ticker: 'INTU',  name: 'Intuit',             cedear: true },
      { ticker: 'INTC',  name: 'Intel',              cedear: true },
      { ticker: 'CSCO',  name: 'Cisco',              cedear: true },
      { ticker: 'IBM',   name: 'IBM',                cedear: true },
    ],
  },
  {
    label: 'Consumo',
    tickers: [
      { ticker: 'TSLA',  name: 'Tesla',              cedear: true },
      { ticker: 'NFLX',  name: 'Netflix',            cedear: true },
      { ticker: 'DIS',   name: 'Disney',             cedear: true },
      { ticker: 'MCD',   name: "McDonald's",         cedear: true },
      { ticker: 'SBUX',  name: 'Starbucks',          cedear: true },
      { ticker: 'NKE',   name: 'Nike',               cedear: true },
      { ticker: 'WMT',   name: 'Walmart',            cedear: true },
      { ticker: 'KO',    name: 'Coca-Cola',          cedear: true },
      { ticker: 'PEP',   name: 'PepsiCo',            cedear: true },
      { ticker: 'COST',  name: 'Costco',             cedear: true },
    ],
  },
  {
    label: 'Finanzas',
    tickers: [
      { ticker: 'JPM',   name: 'JPMorgan',           cedear: true },
      { ticker: 'V',     name: 'Visa',               cedear: true },
      { ticker: 'MA',    name: 'Mastercard',         cedear: true },
      { ticker: 'GS',    name: 'Goldman Sachs',      cedear: true },
      { ticker: 'BAC',   name: 'Bank of America',    cedear: true },
      { ticker: 'AXP',   name: 'American Express',   cedear: true },
      { ticker: 'SPGI',  name: 'S&P Global',         cedear: true },
      { ticker: 'MCO',   name: "Moody's",            cedear: true },
    ],
  },
  {
    label: 'Salud',
    tickers: [
      { ticker: 'LLY',   name: 'Eli Lilly',          cedear: true },
      { ticker: 'UNH',   name: 'UnitedHealth',       cedear: true },
      { ticker: 'TMO',   name: 'Thermo Fisher',      cedear: true },
      { ticker: 'ISRG',  name: 'Intuitive Surgical', cedear: true },
      { ticker: 'ABT',   name: 'Abbott Labs',        cedear: true },
      { ticker: 'JNJ',   name: 'Johnson & Johnson',  cedear: true },
      { ticker: 'PFE',   name: 'Pfizer',             cedear: true },
    ],
  },
  {
    label: 'Defensivo',
    tickers: [
      { ticker: 'PG',    name: 'Procter & Gamble',   cedear: true },
      { ticker: 'CL',    name: 'Colgate-Palmolive',  cedear: true },
      { ticker: 'HON',   name: 'Honeywell',          cedear: true },
      { ticker: 'ITW',   name: 'Illinois Tool Works', cedear: true },
      { ticker: 'CAT',   name: 'Caterpillar',        cedear: true },
      { ticker: 'XOM',   name: 'ExxonMobil',         cedear: true },
    ],
  },
  {
    label: 'Latinoamérica y Asia',
    tickers: [
      { ticker: 'MELI',  name: 'MercadoLibre',       cedear: true },
      { ticker: 'BABA',  name: 'Alibaba',            cedear: true },
    ],
  },
]

const ALL_TICKERS = SECTORS.flatMap(s => s.tickers)

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Análisis de acciones — Value Investing | Omaha Bridge Group',
  description: 'Directorio de análisis value investing en español. Filtro Buffett, PEG Lynch, Magic Formula Greenblatt, riesgo Taleb, ciclo Marks y calidad Fink.',
  url: 'https://omaha-bridge-group.vercel.app/analisis',
  publisher: { '@type': 'Organization', name: 'Omaha Bridge Group' },
}

// Top 10 have cached analysis pages (/analisis/[ticker]).
// All others route to the live analysis (/analysis/[ticker]) to preserve the interactive experience.
const CACHED_TICKERS = new Set([
  'AAPL', 'MSFT', 'GOOGL', 'AMZN', 'META',
  'NVDA', 'TSLA', 'JPM',   'V',    'KO',
])

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AnalisisIndexPage() {
  const cedearCount = ALL_TICKERS.filter(t => t.cedear).length

  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#051A10', color: '#E8EDF5' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Header */}
      <header style={{ borderBottom: '1px solid rgba(201,168,76,0.15)', background: 'rgba(7,43,24,0.9)' }}
        className="px-4 py-3 flex items-center justify-between sticky top-0 z-10 backdrop-blur">
        <Link href="/" className="text-xs uppercase tracking-wider hover:text-[#C9A84C] transition-colors"
          style={{ color: '#6A7A95' }}>
          ← Inicio
        </Link>
        <span className="text-xs uppercase tracking-widest"
          style={{ color: 'rgba(201,168,76,0.6)', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Omaha Bridge Group
        </span>
        <Link href="/ideas" className="text-xs px-3 py-1 rounded-full border transition-colors hover:bg-[#C9A84C]/10"
          style={{ color: '#C9A84C', borderColor: 'rgba(201,168,76,0.3)' }}>
          Screener →
        </Link>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-10">

        {/* ── Hero ── */}
        <section className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(201,168,76,0.5)' }}>
            ♠ &nbsp; Directorio &nbsp; ♠
          </p>
          <h1 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}
            className="text-3xl sm:text-4xl font-bold mb-3 leading-tight">
            Análisis de acciones
          </h1>
          <p className="text-base mb-2" style={{ color: '#B8A878', fontFamily: 'var(--font-playfair), Georgia, serif', fontStyle: 'italic' }}>
            Los criterios exactos de los 6 maestros del value investing, aplicados a cada acción.
          </p>
          <p className="text-sm" style={{ color: '#4A6A55' }}>
            {ALL_TICKERS.length} acciones analizadas &nbsp;·&nbsp; {cedearCount} con CEDEAR en BYMA
          </p>
        </section>

        {/* ── Sector groups ── */}
        <div className="space-y-10">
          {SECTORS.map((sector) => (
            <section key={sector.label}>
              <h2 className="text-xs uppercase tracking-widest mb-4 pb-2"
                style={{ color: 'rgba(201,168,76,0.5)', borderBottom: '1px solid rgba(201,168,76,0.1)', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
                {sector.label}
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {sector.tickers.map(({ ticker, name, cedear }) => (
                  <Link
                    key={ticker}
                    href={CACHED_TICKERS.has(ticker) ? `/analisis/${ticker}` : `/analysis/${ticker}`}
                    className="group rounded-xl border p-4 flex flex-col gap-1.5 transition-all hover:border-[#C9A84C]/30 hover:bg-[#C9A84C]/5"
                    style={{ borderColor: 'rgba(201,168,76,0.1)', background: 'rgba(7,43,24,0.4)' }}
                  >
                    <span className="font-mono font-bold text-base group-hover:text-[#C9A84C] transition-colors"
                      style={{ color: '#D4C090' }} translate="no">
                      {ticker}
                    </span>
                    <span className="text-xs leading-tight" style={{ color: '#5A7A65' }}>
                      {name}
                    </span>
                    {cedear && (
                      <span className="text-xs mt-0.5" style={{ color: 'rgba(201,168,76,0.45)' }}>
                        🇦🇷 CEDEAR
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* ── CTA: live analysis ── */}
        <section className="mt-14 text-center rounded-xl border py-8 px-6"
          style={{ borderColor: 'rgba(201,168,76,0.2)', background: 'rgba(7,43,24,0.5)' }}>
          <p className="text-base mb-2" style={{ color: '#A8BCA8', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            ¿No encontrás tu acción?
          </p>
          <p className="text-sm mb-5" style={{ color: '#4A6A55' }}>
            Podés analizar cualquier acción del NYSE o NASDAQ en tiempo real.
          </p>
          <Link href="/"
            className="inline-block px-6 py-2.5 rounded-full font-semibold text-sm transition-all hover:opacity-90"
            style={{ background: '#C9A84C', color: '#051A10' }}>
            Analizar en tiempo real →
          </Link>
        </section>

        {/* ── What is this ── */}
        <section className="mt-10 rounded-xl border p-6"
          style={{ borderColor: 'rgba(201,168,76,0.1)', background: 'rgba(7,43,24,0.3)' }}>
          <h2 className="text-sm font-semibold mb-3"
            style={{ color: '#C9A84C', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            ¿Cómo funciona el análisis?
          </h2>
          <div className="space-y-2 text-sm" style={{ color: '#6A8A75' }}>
            <p>Cada análisis aplica los criterios exactos de <strong style={{ color: '#8A9A85' }}>Warren Buffett</strong> (calidad del negocio y moat), <strong style={{ color: '#8A9A85' }}>Peter Lynch</strong> (crecimiento a precio razonable, PEG), <strong style={{ color: '#8A9A85' }}>Joel Greenblatt</strong> (Magic Formula: earnings yield + retorno sobre capital), <strong style={{ color: '#8A9A85' }}>Nassim Taleb</strong> (antifragilidad y riesgo de cola), <strong style={{ color: '#8A9A85' }}>Howard Marks</strong> (posición en el ciclo de mercado) y <strong style={{ color: '#8A9A85' }}>Larry Fink</strong> (calidad institucional y gobierno corporativo).</p>
            <p>El análisis usa datos reales: balances, flujos de caja, indicadores técnicos e indicadores macro de la Reserva Federal. Se actualiza automáticamente cada 24 horas.</p>
            <p>Para inversores argentinos: cuando existe CEDEAR disponible en BYMA, se muestra el precio en pesos, el CCL implícito y la prima o descuento respecto al precio en NYSE.</p>
            <p className="pt-1">
              ¿Querés entender los criterios de cada maestro en detalle?{' '}
              <Link href="/guias" className="hover:underline" style={{ color: '#C9A84C' }}>Leé las guías de value investing →</Link>
            </p>
          </div>
        </section>

        {/* Disclaimer */}
        <p className="mt-8 text-center text-xs" style={{ color: '#2A4A35' }}>
          <strong style={{ color: 'rgba(201,168,76,0.3)' }}>DISCLAIMER:</strong> OBG es una herramienta informativa.
          Nada en esta plataforma constituye asesoramiento financiero. El análisis es generado algorítmicamente.
          Siempre consultá a un asesor calificado antes de tomar decisiones de inversión.
        </p>

      </main>
    </div>
  )
}
