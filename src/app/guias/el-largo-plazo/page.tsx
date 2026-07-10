import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'La obsesión que hace ricos: por qué el corto plazo arruina | Omaha Bridge Group',
  description: '20 años gana a 5 años, siempre. Cómo resistir la tentación. El superpoder del inversor individual.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/el-largo-plazo' },
  openGraph: {
    title: 'El largo plazo como ventaja | Omaha Bridge Group',
    description: 'Si fondos de millones ponen plazo 3 años, vos con plazo infinito tienes ventaja estructural.',
    type: 'article',
  },
}

const COLOR = '#C9A84C'

export default function ElLargoPlazoPage() {
  return (
    <GuiasShell articleMeta={{
      title: 'El largo plazo: la obsesión de Buffett',
      description: '60 años de paciencia = 99% de fortuna. Cómo resistir la tentación del corto.',
      publishDate: '2026-05-15',
      url: 'https://omaha-bridge-group.vercel.app/guias/el-largo-plazo',
      image: 'https://omaha-bridge-group.vercel.app/og-guias.png',
      keywords: 'inversión a largo plazo, paciencia, compounding',
      readingTimeMinutes: 8,
    }}>
      <div className="mb-10">
        <p className="text-sm md:text-base uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          Mentalidad · Estrategia
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          El largo plazo como ventaja
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Los fondos de pensión quieren resultados cada trimestre. Vos no. Esa asimetría es donde gana el inversor.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>8 min de lectura</span>
          <span>·</span>
          <span>Mentalidad · Tiempo</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-base md:text-lg leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          Un gestor de fondo tiene vencimiento implícito de 3-5 años. Si su fondo pierde, los clientes retiran dinero. Si en 3 años su índice fue peor, se busca gestor nuevo. Por eso actúan cortoplacista aunque digan "creemos en largo plazo".
        </p>
        <p>
          Vos no tienes esa presión. Tu horizonte es infinito si querés. Eso es ventaja estructural. El mercado paga por largo plazo — empresas que generan lentamente ganancias pero con consistencia históricamente superan.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Interés compuesto: pequeños retornos durante décadas
          </h2>
          <p>
            Si invertís $10.000 a 12% anual (retorno historial del mercado):
          </p>
          <div className="mt-3 p-4 rounded-lg" style={{ background: 'rgba(7,43,24,0.6)', border: '1px solid rgba(201,168,76,0.15)' }}>
            <p className="font-mono text-xs" style={{ color: '#E8EDF5' }}>
              Año 10: $31.000<br />
              Año 20: $96.000<br />
              Año 30: $300.000<br />
              Año 40: $930.000<br />
              Año 50: $2.9M
            </p>
          </div>
          <p className="mt-3">
            El dinero no crece linealmente — crece exponencial. Los primeros 20 años generan $86k de ganancia. Los siguientes 20 generan $300k de ganancia adicional. Eso es compuesto.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Largo plazo absorbe la volatilidad
          </h2>
          <p>
            A corto plazo, las acciones son volátiles. En 1 año, puedes tener -20% a +30%. Pero en 30 años, es casi imposible tener retorno negativo en mercado global.
          </p>
          <p className="mt-3">
            Statisticamente: si inviertes el S&P500 a horizonte 1 año, hay 20-30% de probabilidad de pérdida. A horizonte 10 años, menos de 5%. A horizonte 30, menos de 1%.
          </p>
          <p className="mt-3">
            El largo plazo convierte activos volátiles en quasi-bonos. Los crashes se convierten en oportunidades porque sabes que la recuperación es cuestión de tiempo.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Impuestos y costos: beneficio del hold infinito
          </h2>
          <p>
            Cada vez que vendés una ganancia, pagás impuestos. Si compras una acción hoy y la vendés en 2 años a 50% ganancia, impuesto es ~15-20%.
          </p>
          <p className="mt-3">
            Si nunca vendés, ese impuesto nunca se paga. Mientras vivas (o dejes herencia), el costo es 0. Eso es enorme a largo plazo. 30 años de returns sin fricción impositiva es 3-5% más de retorno final.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Cómo OBG lo usa
          </h2>
          <p>
            Nuestro horizonte es largo. No rebalanceamos por volatilidad. Si vendemos, es porque el fundamenta cambió y dejaría de ser valor — no porque el precio subió. El largo plazo es nuestro aliado.
          </p>
        </section>

      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', margin: '2.5rem 0' }} />

      <section className="mb-8">
        <p className="text-sm md:text-base uppercase tracking-widest mb-4" style={{ color: 'rgba(201,168,76,0.5)' }}>Guías relacionadas</p>
        <div className="flex flex-wrap gap-2">
          {[
            { slug: 'interes-compuesto', label: 'Interés compuesto' },
            { slug: 'buffett-criterios', label: '♥ Criterios Buffett' },
            { slug: 'psicologia-del-inversor', label: 'Psicología' },
            { slug: 'riesgo-vs-volatilidad', label: 'Riesgo vs volatilidad' },
            { slug: 'margen-de-seguridad', label: 'Margen de seguridad' },
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
          ¿Comenzamos tu inversión de largo plazo hoy?
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
