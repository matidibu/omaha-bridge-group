import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'El dinero que importa: Operating Cash Flow vs earnings',
  description: 'OCF es dinero que realmente circuló. Earnings es lo que la contabilidad dice. Cómo ver la diferencia.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/ocf-operating-cash-flow' },
  openGraph: {
    title: 'Operating Cash Flow (OCF)',
    description: 'El flujo operativo es el dinero real. Todo lo demás es contabilidad.',
    type: 'article',
  },
}

const COLOR = '#10B981'

export default function OCFPage() {
  return (
    <GuiasShell articleMeta={{
      title: 'El dinero que importa: OCF vs earnings',
      description: 'Dinero real que circuló vs números contables. Cómo ver la diferencia que los CEOs esconden.',
      publishDate: '2025-06-19',
      url: 'https://omaha-bridge-group.vercel.app/guias/ocf-operating-cash-flow',
      image: 'https://omaha-bridge-group.vercel.app/og-guias.png',
      keywords: 'operating cash flow, OCF, flujo operativo, cash flow vs earnings',
      readingTimeMinutes: 7,
    }}>
      <div className="mb-10">
        <p className="text-sm md:text-base uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          ♥ &nbsp; Métricas · Flujo de Caja
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          OCF: donde la contabilidad se encuentra con la realidad
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          El dinero que una empresa genera en operaciones, no en el papel contable.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>7 min de lectura</span>
          <span>·</span>
          <span>Análisis Fundamental · Flujo de Caja</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-base md:text-lg leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          Operating Cash Flow es el dinero que una empresa realmente recibe de sus clientes, menos lo que efectivamente paga para operar. No es theoretical. No es GAAP accounting. Es dinero que se mueve en cuentas bancarias.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Cómo se calcula OCF
          </h2>
          <p style={{ fontFamily: 'monospace', color: 'rgba(232,237,245,0.8)' }}>
            OCF = Earnings Netos + Depreciation − Cambios en Capital de Trabajo
          </p>
          <p className="mt-3">
            Empezás con earnings netos (el número que reporta). Sumás depreciación (que es gasto contable no-efectivo — dinero que "se fue" pero no salió del banco). Restás cambios en capital de trabajo (si creciste, compraste más inventario y eso requirió dinero).
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Por qué OCF &gt; Net Income (casi siempre)
          </h2>
          <p>
            Una empresa reporta $100M en net income. Pero OCF es $120M. ¿Por qué? Porque depreciación fue $30M (gasto no-efectivo que se sumó de vuelta), y cambios de working capital fueron solo $10M.
          </p>
          <p className="mt-3">
            Esto es normal en empresas sanas. Si OCF es MENOR que Net Income, algo está mal — la empresa está pagando mucho por cosas que debería estar cobrando.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            OCF es mejor métrica que P/E
          </h2>
          <p>
            Un P/E bajo (10x earnings) no significa que sea barato si OCF es débil. Un P/E alto (20x earnings) puede ser justo si OCF es fuerte y crece.
          </p>
          <p className="mt-3">
            OCF Yield = OCF Anual / Market Cap. Si OCF Yield es 8-10%, estás pagando un precio atractivo por dinero real que el negocio genera.
          </p>
        </section>

      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', margin: '2.5rem 0' }} />

      <section className="mb-8">
        <p className="text-sm md:text-base uppercase tracking-widest mb-4" style={{ color: 'rgba(201,168,76,0.5)' }}>Métricas de flujo de caja</p>
        <div className="flex flex-wrap gap-2">
          {[
            { slug: 'flujo-de-caja-libre', label: 'FCF' },
            { slug: 'ebitda-vs-fcf', label: 'EBITDA vs FCF' },
            { slug: 'roe-roa-roic', label: 'ROIC' },
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
          Analiza el flujo de caja operativo de una acción real
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
