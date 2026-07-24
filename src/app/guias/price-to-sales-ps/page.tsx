import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'La métrica que casi nadie puede falsificar: price-to-sales',
  description: 'P/S es dinero real: lo que entró al banco. Earnings son contabilidad. Por qué P/S bajo es mucho más seguro.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/price-to-sales-ps' },
  openGraph: {
    title: 'Ratio Price-to-Sales (P/S)',
    description: 'Precio dividido ventas. Difícil de manipular porque las ventas son la realidad.',
    type: 'article',
  },
}

const COLOR = '#EF4444'

export default function PriceToSalesPage() {
  return (
    <GuiasShell articleMeta={{
      title: 'La métrica imposible de falsificar: price-to-sales',
      description: 'Earnings pueden ser ilusión. Ingresos son dinero real. Por qué P/S bajo es mucho más de confiar.',
      publishDate: '2025-06-19',
      url: 'https://omaha-bridge-group.vercel.app/guias/price-to-sales-ps',
      image: 'https://omaha-bridge-group.vercel.app/og-guias.png',
      keywords: 'price to sales, P/S, valuation, revenue, manipulación',
      readingTimeMinutes: 6,
    }}>
      <div className="mb-10">
        <p className="text-sm md:text-base uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          ♣ &nbsp; Valuación · Ratios
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          P/S: la métrica que manipular es casi imposible
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Precio dividido ingresos. Es dinero que entró, no ganancias contables que pueden falsearse.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>6 min de lectura</span>
          <span>·</span>
          <span>Valuación · Ratios Fundamentales</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-base md:text-lg leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          P/E puede engañar porque los earnings se calculan con supuestos contables. P/S es más difícil de falsear porque los ingresos son dinero que realmente entró.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Cómo se calcula P/S
          </h2>
          <p style={{ fontFamily: 'monospace', color: 'rgba(232,237,245,0.8)' }}>
            P/S = Market Cap / Annual Revenue
          </p>
          <p className="mt-3">
            Un P/S de 0.5 significa que el mercado valúa la empresa a 50% de sus ingresos anuales. P/S de 1 significa 100% de ingresos.
          </p>
          <p className="mt-3">
            P/S bajo (bajo 1) generalmente es atractivo. P/S alto (por encima de 3) requiere justificación — margen muy alto o crecimiento explosivo.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Ventaja de P/S sobre P/E
          </h2>
          <p>
            Un CEO puede reducir costos de R&D para inflar earnings. Pero no puede falsear ingresos sin que se note (auditorías, transacciones bancarias).
          </p>
          <p className="mt-3">
            P/S es especialmente útil para empresas jóvenes o en transición que no tienen ganancias consistentes aún.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            El límite de P/S: ignora la rentabilidad
          </h2>
          <p>
            P/S no dice nada sobre si la empresa gana o pierde dinero con esos ingresos. Un retailer con márgenes de -5% puede tener P/S bajo y seguir siendo una trampa de valor — factura mucho pero quema caja en cada venta.
          </p>
          <p className="mt-3">
            Usá P/S siempre junto al margen bruto y operativo. P/S bajo con márgenes saludables es señal real de descuento. P/S bajo con márgenes negativos es una empresa barata por buena razón.
          </p>
        </section>

      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', margin: '2.5rem 0' }} />

      <section className="mb-8">
        <p className="text-sm md:text-base uppercase tracking-widest mb-4" style={{ color: 'rgba(201,168,76,0.5)' }}>Más valuación</p>
        <div className="flex flex-wrap gap-2">
          {[
            { slug: 'price-to-book-pb', label: 'P/B' },
            { slug: 'ev-ebitda', label: 'EV/EBITDA' },
            { slug: 'precio-vs-valor', label: 'Precio vs Valor' },
          ].map(({ slug, label }) => (
            <Link key={slug} href={`/guias/${slug}`}
              className="text-sm md:text-base px-3 py-1.5 rounded-full border transition-colors hover:border-[#C9A84C]/40 hover:text-[#C9A84C]"
              style={{ color: '#6A7A95', borderColor: 'rgba(201,168,76,0.15)', background: 'rgba(7,43,24,0.4)' }}>
              {label}
            </Link>
          ))}
        </div>
      </section>

      <section className="text-center rounded-xl border py-8 px-6"
        style={{ borderColor: 'rgba(201,168,76,0.2)', background: 'rgba(7,43,24,0.5)' }}>
        <p className="text-base mb-4" style={{ color: '#A8BCA8', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Busca empresas con P/S bajo pero crecimiento positivo
        </p>
        <Link href="/"
          className="inline-block px-6 py-2.5 rounded-full font-semibold text-sm transition-all hover:opacity-90"
          style={{ background: '#C9A84C', color: '#051A10' }}>
          Analizar una acción →
        </Link>
      </section>
    </GuiasShell>
  )
}
