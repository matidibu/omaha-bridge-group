import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'Menos es más: por qué Buffett tiene 5 posiciones gigantes, no 100 | Omaha Bridge Group',
  description: '5 acciones excelentes vencen 100 mediocres. Cómo la selectividad multiplica retornos versus la diversificación que los diluye.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/selectividad-concentracion' },
  openGraph: {
    title: 'Selectividad y concentración en inversión | Omaha Bridge Group',
    description: 'Menos es más. 10 acciones muy buenas baten a 100 acciones mediocres.',
    type: 'article',
  },
}

const COLOR = '#F59E0B'

export default function SelectividadPage() {
  return (
    <GuiasShell articleMeta={{
      title: 'Menos es más: 5 acciones excelentes vs 100 mediocres',
      description: 'La selectividad de Buffett: concentración en lo mejor, no diversificación en lo mediocre.',
      publishDate: '2025-06-19',
      url: 'https://omaha-bridge-group.vercel.app/guias/selectividad-concentracion',
      image: 'https://omaha-bridge-group.vercel.app/og-guias.png',
      keywords: 'selectividad, concentración, portafolio, diversificación, posición',
      readingTimeMinutes: 7,
    }}>
      <div className="mb-10">
        <p className="text-sm md:text-base uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          ♦ &nbsp; Estrategia · Portafolio
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          Selectividad: por qué Buffett tiene 5 posiciones gigantes
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Si confías en 100 acciones, es porque no confías en ninguna. Si confías en 5, estás siendo selectivo.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>7 min de lectura</span>
          <span>·</span>
          <span>Estrategia · Construcción de Portafolio</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-base md:text-lg leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          Buffett se enfoca en sus 5-10 mejores ideas. La filosofía opuesta — diversificación amplia — asume que no sabés cuáles van a ganar. Ambas tienen mérito, pero generan resultados muy diferentes.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Selectividad vs Diversificación
          </h2>
          <p>
            Portafolio de 100 acciones con posiciones iguales: cada una es 1% de tu dinero. Si una sube 50%, tu portafolio sube 0.5%.
          </p>
          <p className="mt-3">
            Portafolio de 10 acciones con posiciones iguales: cada una es 10%. Si tu mejor idea sube 50%, tu portafolio sube 5%.
          </p>
          <p className="mt-3">
            Pero ojo: si te equivocás también pierde 5%. La selectividad requiere confianza en el análisis.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Cuántas acciones es suficiente
          </h2>
          <p>
            Buffett típicamente tiene 5-15 posiciones principales en Berkshire. Cuando quiere ser conservador, aumenta a 20. Nunca 100.
          </p>
          <p className="mt-3">
            Un inversor promedio que hace research diligente puede manejar 10-15 acciones bien. Más es delusión de diversificación.
          </p>
        </section>

      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', margin: '2.5rem 0' }} />

      <section className="text-center rounded-xl border py-8 px-6"
        style={{ borderColor: 'rgba(201,168,76,0.2)', background: 'rgba(7,43,24,0.5)' }}>
        <p className="text-base mb-4" style={{ color: '#A8BCA8', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Encuentra tus 5 mejores ideas
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
