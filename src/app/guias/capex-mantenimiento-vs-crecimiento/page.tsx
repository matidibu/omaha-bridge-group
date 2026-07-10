import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'Cómo los CEOs esconden gastos enormes con palabras mágicas',
  description: '"Eso es capex de crecimiento" = gasto que no genera dinero pero lo llaman inversión. Cómo detectar la trampa.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/capex-mantenimiento-vs-crecimiento' },
  openGraph: {
    title: 'Capex: Mantenimiento vs Crecimiento',
    description: 'Una mina que reemplaza equipo viejo = mantenimiento. Una mina que agrega nuevo equipo = crecimiento. La diferencia es crítica.',
    type: 'article',
  },
}

const COLOR = '#F59E0B'

export default function CapexPage() {
  return (
    <GuiasShell articleMeta={{
      title: 'El gasto que el CEO llama "inversión": capex escondido',
      description: 'Cómo diferenciar capex que importa de gasto que importa.',
      publishDate: '2025-06-19',
      url: 'https://omaha-bridge-group.vercel.app/guias/capex-mantenimiento-vs-crecimiento',
      image: 'https://omaha-bridge-group.vercel.app/og-guias.png',
      keywords: 'capex, capital expenditure, mantenimiento, crecimiento, inversión',
      readingTimeMinutes: 7,
    }}>
      <div className="mb-10">
        <p className="text-sm md:text-base uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          ♣ &nbsp; Análisis · Capex
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          Capex: cómo los CEOs usan contabilidad creativa para inflar FCF
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          "Eso es capex de crecimiento" es lo que el CEO dice cuando necesita justificar gastos enormes que no generan dinero.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>7 min de lectura</span>
          <span>·</span>
          <span>Análisis Fundamental · Capex Strategy</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-base md:text-lg leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          Capex de mantenimiento es inversión que necesitás hacer o el negocio cae. Capex de crecimiento es inversión que hacés para escalar. La línea entre ambas es borrosa y los CEOs la aprovechan.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Capex de mantenimiento: lo que no puedes evitar
          </h2>
          <p>
            Una fábrica que produce 1M de unidades por año necesita reemplazar máquinas viejas. Ese capex es mantenimiento — sin él, en 5 años no produce nada.
          </p>
          <p className="mt-3">
            Capex de mantenimiento es imprescindible para mantener negocio en el mismo nivel.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Capex de crecimiento: lo que es opcional
          </h2>
          <p>
            La misma fábrica agrega una segunda línea de producción para pasar de 1M a 2M unidades. Ese capex es crecimiento — es estratégico pero no urgente.
          </p>
          <p className="mt-3">
            Aquí es donde los CEOs mienten. Llaman "crecimiento" a gastos que son parcialmente mantenimiento.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            La trampa clásica
          </h2>
          <p>
            CEO: "FCF fue $500M pero eso excluye $200M en capex de crecimiento estratégico."
          </p>
          <p className="mt-3">
            Realidad: $100M era mantenimiento (necesario), $100M era modernización (necesaria después de 10 años), y $0 era crecimiento discrecional.
          </p>
          <p className="mt-3">
            Cuando excluye esos gastos del cálculo de FCF, presenta números falsos.
          </p>
        </section>

      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', margin: '2.5rem 0' }} />

      <section className="mb-8">
        <p className="text-sm md:text-base uppercase tracking-widest mb-4" style={{ color: 'rgba(201,168,76,0.5)' }}>Análisis de inversión</p>
        <div className="flex flex-wrap gap-2">
          {[
            { slug: 'flujo-de-caja-libre', label: 'FCF' },
            { slug: 'ebitda-vs-fcf', label: 'EBITDA' },
            { slug: 'como-leer-un-balance', label: 'Balance' },
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
          Descubre el verdadero capex de una empresa
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
