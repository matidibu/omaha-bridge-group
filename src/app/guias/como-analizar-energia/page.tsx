import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'Oil a $150 ganas fortuna, a $40 pierdes todo: la ruleta rusa de la energía',
  description: 'Energía = ciclos extremos. Cómo sobrevivir. Cómo invertir sin quedar destruido cuando el precio cae.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/como-analizar-energia' },
  openGraph: {
    title: 'Cómo analizar empresas de Energía',
    description: 'Reservas probadas, costos de extracción, y ciclos de precio. Todo lo que necesitas sobre energía.',
    type: 'article',
  },
}

const COLOR = '#F97316'

export default function AnalizarEnergiaPage() {
  return (
    <GuiasShell articleMeta={{
      title: 'Energía: la ruleta rusa de los commodities',
      description: 'Oil determina todo. Cómo distinguir petroleras que mueren de las que sobreviven ciclos.',
      publishDate: '2025-06-19',
      url: 'https://omaha-bridge-group.vercel.app/guias/como-analizar-energia',
      image: 'https://omaha-bridge-group.vercel.app/og-guias.png',
      keywords: 'energía, petróleo, gas, oil, energy, ciclos, commodities',
      readingTimeMinutes: 8,
    }}>
      <div className="mb-10">
        <p className="text-sm md:text-base uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          ♦ &nbsp; Análisis Sectorial · Commodities
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          Energía: dinero fácil en booms, sangría en crisis
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Oil a $150: ganancias de $100/barril. Oil a $40: pérdidas de $20/barril. Esa es la realidad del sector.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>8 min de lectura</span>
          <span>·</span>
          <span>Análisis Sectorial · Ciclos de Commodities</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-base md:text-lg leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          La energía es cíclica extrema. Pero a diferencia de minería, tiene demanda estructura casi inelástica: el mundo necesita energía sin importar qué.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Reservas probadas
          </h2>
          <p>
            Una petrolera reporta "proven reserves" de 1B barriles a precio WTI actual. En 10 años, a 100M barril/año, esas reserves se agotan.
          </p>
          <p className="mt-3">
            Lo importante: ¿la petrolera reemplaza reserves? Si cada año explora y descubre reservas nuevas, el negocio es perpetuo. Si no, tiene fecha de vencimiento.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Costo de extracción
          </h2>
          <p>
            Shale oil en EE.UU.: $50-60/barril de costo. Oil en Medio Oriente: $15-20/barril. A $40 WTI, shale pierde dinero. Medio Oriente gana.
          </p>
          <p className="mt-3">
            Una petrolera con costo bajo es supervivencia en crisis. Una con costo alto muere.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Dividendos en ciclo
          </h2>
          <p>
            Petroleras pagan dividendos altos en booms. Pero en crisis cortan dividendos violentamente. No es ingreso seguro.
          </p>
          <p className="mt-3">
            Utilities de energía (regulated) son diferentes: dividendos estables por fijación regulatoria. Mucho menos cíclico.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Integradas vs upstream puras
          </h2>
          <p>
            Una petrolera integrada (ExxonMobil, Chevron) tiene extracción, refinación y distribución. Cuando el precio del crudo cae, pierde en extracción pero gana en refinación (petróleo barato como insumo) — se cubre a sí misma parcialmente.
          </p>
          <p className="mt-3">
            Una upstream pura (solo extracción) no tiene ese colchón. Sube y baja con el precio del barril sin matices. Es más rentable en booms y más frágil en crisis — mayor volatilidad en ambas direcciones.
          </p>
        </section>

      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', margin: '2.5rem 0' }} />

      <section className="mb-8">
        <p className="text-sm md:text-base uppercase tracking-widest mb-4" style={{ color: 'rgba(201,168,76,0.5)' }}>Análisis cíclico</p>
        <div className="flex flex-wrap gap-2">
          {[
            { slug: 'ciclos-howard-marks', label: 'Ciclos' },
            { slug: 'como-analizar-mineria', label: 'Minería' },
            { slug: 'dividendos-value-investing', label: 'Dividendos' },
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
          Invierte en energía en valles de ciclo, no picos
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
