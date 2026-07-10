import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'El secreto de Graham: comprar empresas por menos de lo que valen | Omaha Bridge Group',
  description: 'P/B menor a 1 = comprar con descuento. Pero ojo: a veces es ganga, a veces es trampa. Cómo diferenciar.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/price-to-book-pb' },
  openGraph: {
    title: 'Ratio Price-to-Book (P/B) | Omaha Bridge Group',
    description: 'Precio vs Valor en el Balance. Cuándo P/B bajo significa ganga.',
    type: 'article',
  },
}

const COLOR = '#6366F1'

export default function PriceToBookPage() {
  return (
    <GuiasShell articleMeta={{
      title: 'El secreto de Graham: P/B bajo es comprar con descuento',
      description: 'Pero un P/B bajo con ROIC bajo es la trampa más cara. Cómo no caer.',
      publishDate: '2025-06-19',
      url: 'https://omaha-bridge-group.vercel.app/guias/price-to-book-pb',
      image: 'https://omaha-bridge-group.vercel.app/og-guias.png',
      keywords: 'price to book, P/B, valor en libros, valuation ratio',
      readingTimeMinutes: 7,
    }}>
      <div className="mb-10">
        <p className="text-sm md:text-base uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          ♦ &nbsp; Valuación · Ratios
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          P/B: el ratio que Benjamin Graham amaba pero debe usarse con cuidado
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Precio dividido valor en libros. Simple pero engañoso si no entiendes qué está adentro del balance.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>7 min de lectura</span>
          <span>·</span>
          <span>Valuación · Ratios Fundamentales</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-base md:text-lg leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          Benjamin Graham compró empresas cuando el P/B era menor a 1 — comprar por menos del valor en libros. Funcionó. Pero Graham tenía paciencia y entendía qué activos realmente valían. Hoy mucho dinero ciega compra P/B bajo sin pensar.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Cómo se calcula P/B
          </h2>
          <p style={{ fontFamily: 'monospace', color: 'rgba(232,237,245,0.8)' }}>
            P/B = Market Cap / Shareholders Equity
          </p>
          <p className="mt-3">
            O por acción: P/B = Precio por Acción / Libro por Acción
          </p>
          <p className="mt-3">
            Un P/B de 1.0 significa que el mercado valúa la empresa exactamente en su valor en libros. P/B menor a 1 es "cheapness". P/B mayor a 3-4 es "expensiveness".
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Por qué P/B bajo puede ser trampa
          </h2>
          <p>
            Una empresa con P/B de 0.5 (valor en libros $10, precio $5) parece ganga. Pero si el ROIC es 3% anual, estás comprando un negocio mediocre a descuento temporal. Cuando el mercado se dé cuenta, cae más.
          </p>
          <p className="mt-3">
            El mejor P/B bajo está en empresas con ROIC alto. Un banco con P/B 0.7 pero ROIC 12% es más atractivo que un retailer con P/B 0.5 pero ROIC 5%.
          </p>
        </section>

      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', margin: '2.5rem 0' }} />

      <section className="mb-8">
        <p className="text-sm md:text-base uppercase tracking-widest mb-4" style={{ color: 'rgba(201,168,76,0.5)' }}>Más ratios de valuación</p>
        <div className="flex flex-wrap gap-2">
          {[
            { slug: 'precio-vs-valor', label: 'Precio vs Valor' },
            { slug: 'ev-ebitda', label: 'EV/EBITDA' },
            { slug: 'price-to-sales-ps', label: 'P/S' },
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
          Busca empresas con P/B bajo y ROIC alto
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
