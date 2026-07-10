import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'Cómo analizar empresas energéticas — EV/EBITDA, reservas y FCF | Omaha Bridge Group',
  description: 'Las empresas de energía tienen ciclos, reservas y capex intensivos que requieren métricas específicas. Guía para analizar petroleras, gasistas y energéticas con criterios value investing.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/como-analizar-empresas-energeticas' },
  openGraph: {
    title: 'Cómo analizar empresas energéticas | Omaha Bridge Group',
    description: 'Reservas, lifting cost, FCF breakeven y ciclos de commodities: el análisis value de empresas de energía.',
    type: 'article',
  },
}

const COLOR = '#C9A84C'

export default function ComoAnalizarEnergeticasPage() {
  return (
    <GuiasShell articleMeta={{
      title: 'Cómo analizar empresas energéticas — EV/EBITDA, reservas y FCF',
      description: 'Las empresas de energía tienen ciclos, reservas y capex intensivos que requieren métricas específicas. Guía para analizar petroleras, gasistas y energéticas con criterios value investing.',
      publishDate: '2025-05-15',
      url: 'https://omaha-bridge-group.vercel.app/guias/como-analizar-empresas-energeticas',
      image: 'https://omaha-bridge-group.vercel.app/og-guias.png',
      keywords: 'energía, utilities, análisis sectorial',
      readingTimeMinutes: 8,
    }}>
      <div className="mb-10">
        <p className="text-sm md:text-base uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          Conceptos esenciales · Análisis sectorial
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          Cómo analizar empresas energéticas
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          El sector energético combina intensidad de capital, exposición a commodities y reservas finitas. Las métricas convencionales no son suficientes.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>8 min de lectura</span>
          <span>·</span>
          <span>Análisis sectorial · Energía · Commodities</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-base md:text-lg leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          Las empresas energéticas — especialmente las petroleras y gasistas integradas como ExxonMobil, Chevron o Shell — ocupan un lugar especial en la historia del value investing. Son negocios intensivos en capital, expuestos a precios de commodities que no controlan, con activos que se agotan físicamente con el tiempo. Y sin embargo, pueden ser inversiones extraordinariamente rentables cuando se compran con el ciclo en contra y el balance sólido.
        </p>
        <p>
          Buffett compró Chevron y Occidental Petroleum agresivamente en 2022 cuando el mercado las ignoraba. No porque predijera el precio del petróleo — siempre dice que no puede predecir commodities — sino porque calculó que a cualquier precio razonable de petróleo a largo plazo, las empresas generaban flujos de caja masivos y cotizaban con descuento.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            El ciclo es la variable más importante
          </h2>
          <p>
            Las empresas energéticas son altamente cíclicas: sus ingresos, márgenes y valoraciones fluctúan con el precio del barril de petróleo (o del gas, o la electricidad), que a su vez depende de factores macroeconómicos, geopolíticos y de oferta/demanda globales.
          </p>
          <p className="mt-3">
            La consecuencia más importante para el inversor: las métricas de valoración convencionales (P/E, EV/EBITDA) son inútiles en el pico del ciclo y engañosamente baratas en el valle. Una empresa petrolera con P/E de 5 cuando el petróleo está a $100/barril puede verse mucho más cara cuando el precio cae a $50. Las métricas actuales reflejan el ciclo presente, no el ciclo normalizado.
          </p>
          <p className="mt-3">
            La forma correcta de valorar energéticas es calcular la rentabilidad a través del ciclo: estimar el precio de petróleo/gas a largo plazo (muchos analistas usan $60-70/barril WTI como precio normalizado), proyectar los flujos de caja de la empresa a ese precio, y compararlos con la capitalización actual.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Reservas y vida de reservas (R/P ratio)
          </h2>
          <p>
            A diferencia de una empresa de software, una compañía petrolera tiene activos finitos: sus reservas de petróleo y gas se agotan a medida que extrae y vende. El <strong style={{ color: '#C9D4E0' }}>ratio Reservas/Producción</strong> (<span translate="no">R/P</span> o <em>reserve life</em>) mide cuántos años de producción al ritmo actual cubren las reservas probadas.
          </p>
          <p className="mt-3">
            Un R/P de 10 años significa que si la empresa no reemplaza reservas (a través de exploración, adquisiciones o mejoras de recuperación), sus activos se agotarán en una década. Las grandes integradas como ExxonMobil típicamente tienen R/P de 10-15 años y gastan constantemente en reemplazar las reservas extraídas.
          </p>
          <p className="mt-3">
            El costo de reposición de reservas es parte esencial del capex real de una empresa petrolera — y es el dato que muchos análisis superficiales ignoran. No todo el capex es crecimiento; una parte es simplemente mantenimiento de la base productiva existente.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Lifting cost: el costo real de sacar un barril
          </h2>
          <p>
            El <strong style={{ color: '#C9D4E0' }}>lifting cost</strong> (costo de producción por barril, también llamado <span translate="no">cash cost</span>) es cuánto le cuesta a la empresa extraer y llevar al mercado cada barril de petróleo equivalente. Es la métrica de competitividad más importante en el sector.
          </p>
          <p className="mt-3">
            Las empresas con lifting costs bajos sobreviven los ciclos bajistas y siguen generando caja cuando los precios caen. Las de costos altos pierden dinero con petróleo barato y dependen del precio alto para su supervivencia.
          </p>
          <ul className="mt-3 space-y-2 pl-4">
            <li><strong style={{ color: '#C9D4E0' }}>Empresas del Golfo Pérsico (Saudi Aramco):</strong> <span style={{ color: '#8A9A85' }}>lifting cost de $3-5/barril. Son casi invulnerables a cualquier precio de mercado razonable.</span></li>
            <li><strong style={{ color: '#C9D4E0' }}>Integradas norteamericanas (ExxonMobil, Chevron):</strong> <span style={{ color: '#8A9A85' }}>$15-25/barril. Rentables con petróleo por encima de $40-50.</span></li>
            <li><strong style={{ color: '#C9D4E0' }}>Shale oil estadounidense:</strong> <span style={{ color: '#8A9A85' }}>$35-55/barril según la cuenca. Rentables con petróleo sobre $50-60.</span></li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            FCF yield en distintos escenarios de precio
          </h2>
          <p>
            La herramienta analítica más útil para energéticas es calcular el <strong style={{ color: '#C9D4E0' }}>FCF yield a distintos precios de petróleo</strong>. Tomás la empresa, estimás su producción anual, calculás el FCF a $50, $60, $70 y $80/barril (descontando costos de producción, royalties, impuestos y capex de mantenimiento), y dividís cada resultado por la capitalización de mercado.
          </p>
          <p className="mt-3">
            Esto te da un mapa de rentabilidad por escenario. Si la empresa genera un FCF yield del 12% a $60/barril y el mercado la valúa como si el petróleo fuera a $40 para siempre, hay potencial de revaluación. Si el mercado ya descuenta $80/barril en el precio, hay poco margen de seguridad.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Balance y disciplina de capital: el diferencial entre las buenas y las malas
          </h2>
          <p>
            Las empresas energéticas que destruyeron valor históricamente tienen un patrón claro: en el pico del ciclo, se apalancaron masivamente para hacer adquisiciones a precios altos. Cuando el ciclo giró, la combinación de precio bajo y deuda alta fue fatal — ventas de activos a pérdida, dilución de accionistas, quiebras.
          </p>
          <p className="mt-3">
            Las que crearon valor hicieron lo contrario: usaron los años de precios altos para reducir deuda, luego compraron activos baratos en el valle del ciclo con balance sólido. ExxonMobil y Chevron destacan históricamente en esta disciplina — entraron al ciclo bajista de 2015 y 2020 con deuda nula o mínima, aguantaron sin recortar dividendos, y emergieron más fuertes.
          </p>
        </section>

      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', margin: '2.5rem 0' }} />

      <section className="mb-8">
        <p className="text-sm md:text-base uppercase tracking-widest mb-4" style={{ color: 'rgba(201,168,76,0.5)' }}>Guías relacionadas</p>
        <div className="flex flex-wrap gap-2">
          {[
            { slug: 'buffett-criterios', label: '♥ Criterios Buffett' },
            { slug: 'deuda-en-value-investing', label: 'Deuda en inversión' },
            { slug: 'ciclos-howard-marks', label: '♠ Ciclos Marks' },
            { slug: 'flujo-de-caja-libre', label: 'Flujo de caja libre' },
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
          ¿Querés analizar ExxonMobil o Chevron con los 6 maestros?
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
