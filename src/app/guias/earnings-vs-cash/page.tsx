import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'La ilusión más cara: $1B en ganancias, dinero cero en el banco | Omaha Bridge Group',
  description: 'Earnings: lo que la contabilidad dice. Cash: lo que realmente hay. Cómo detectar empresas que reportan ganancias pero no tienen dinero.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/earnings-vs-cash' },
  openGraph: {
    title: 'Earnings vs Cash: lo que importa | Omaha Bridge Group',
    description: 'Ganancias pueden ser contabilidad. Cash es realidad. Buffett ve primero el cash.',
    type: 'article',
  },
}

const COLOR = '#EC4899'

export default function EarningsVsCashPage() {
  return (
    <GuiasShell articleMeta={{
      title: 'Ganancias gigantes, dinero cero: la ilusión más cara',
      description: 'Por qué una empresa puede reportar $1B de ganancias y quebrar por falta de dinero.',
      publishDate: '2025-06-19',
      url: 'https://omaha-bridge-group.vercel.app/guias/earnings-vs-cash',
      image: 'https://omaha-bridge-group.vercel.app/og-guias.png',
      keywords: 'earnings, ganancias, flujo caja, cash flow, paper profits',
      readingTimeMinutes: 7,
    }}>
      <div className="mb-10">
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          ♦ &nbsp; Análisis · Integridad de Datos
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          Earnings vs Cash: la ilusión más cara del mercado
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Una empresa puede ser muy rentable en papel y no tener dinero. El efectivo es la realidad. Todo lo demás es contabilidad.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>7 min de lectura</span>
          <span>·</span>
          <span>Análisis Fundamental · Contabilidad</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-sm leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          Earnings se calculan bajo reglas contables. Dinero es dinero que se movió en un banco. La diferencia puede ser la ruina de un inversor si no la entiende.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Cómo earnings pueden no ser cash
          </h2>
          <ul className="space-y-2 pl-4">
            <li><strong style={{ color: '#C9D4E0' }}>Ventas a crédito (no cobradas):</strong> <span style={{ color: '#8A9A85' }}>Se registran como earnings aunque cliente aún no pagó.</span></li>
            <li><strong style={{ color: '#C9D4E0' }}>Inventory:</strong> <span style={{ color: '#8A9A85' }}>Comprar stock cuenta como gasto pero no sale dinero de caja.</span></li>
            <li><strong style={{ color: '#C9D4E0' }}>Capex aplazado:</strong> <span style={{ color: '#8A9A85' }}>Earnings altos pero inversión postergada (futuro problema).</span></li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Ejemplo: la tienda que quiebra
          </h2>
          <p>
            Tienda de ropa reporta $10M en earnings. Suena bien. Pero: $8M de ventas fueron a crédito (no cobrados aún), capex de modernización se pospuso.
          </p>
          <p className="mt-3">
            Dinero real en caja: $2M. Próximo trimestre: clientes no pagan crédito. Tienda no tiene dinero para operar.
          </p>
          <p className="mt-3">
            Earnings altos, cash bajo, quiebra.
          </p>
        </section>

      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', margin: '2.5rem 0' }} />

      <section className="mb-8">
        <p className="text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(201,168,76,0.5)' }}>Análisis de flujo de caja</p>
        <div className="flex flex-wrap gap-2">
          {[
            { slug: 'flujo-de-caja-libre', label: 'FCF' },
            { slug: 'ocf-operating-cash-flow', label: 'OCF' },
            { slug: 'ebitda-vs-fcf', label: 'EBITDA' },
          ].map(({ slug, label }) => (
            <Link key={slug} href={`/guias/${slug}`}
              className="text-xs px-3 py-1.5 rounded-full border transition-colors hover:border-[#C9A84C]/40 hover:text-[#C9A84C]"
              style={{ color: '#6A7A95', borderColor: 'rgba(201,168,76,0.15)', background: 'rgba(7,43,24,0.4)' }}>
              {label}
            </Link>
          ))}
        </div>
      </section>

      <section className="text-center rounded-xl border py-8 px-6"
        style={{ borderColor: 'rgba(201,168,76,0.2)', background: 'rgba(7,43,24,0.5)' }}>
        <p className="text-base mb-4" style={{ color: '#A8BCA8', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Verifica cash flow antes de confiar en earnings
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
