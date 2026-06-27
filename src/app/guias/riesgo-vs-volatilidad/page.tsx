import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'La volatilidad no es riesgo: el error que cuesta fortunas | Omaha Bridge Group',
  description: 'Caída 50% ≠ riesgo 50%. Cómo pensar en riesgo real. Por qué Buffett compra cuando cae.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/riesgo-vs-volatilidad' },
  openGraph: {
    title: 'Riesgo vs volatilidad | Omaha Bridge Group',
    description: 'No son lo mismo. Conocer la diferencia es la diferencia entre ganar y perder dinero en crashes.',
    type: 'article',
  },
}

const COLOR = '#C9A84C'

export default function RiesgoVsVolatilidadPage() {
  return (
    <GuiasShell articleMeta={{
      title: 'Volatilidad vs Riesgo: por qué Buffett ama las caídas',
      description: 'Cómo pensar en riesgo real. Cómo convertir volatilidad en oportunidad.',
      publishDate: '2026-05-15',
      url: 'https://omaha-bridge-group.vercel.app/guias/riesgo-vs-volatilidad',
      image: 'https://omaha-bridge-group.vercel.app/og-guias.png',
      keywords: 'riesgo, volatilidad, medición de riesgo',
      readingTimeMinutes: 8,
    }}>
      <div className="mb-10">
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          Mentalidad · Riesgo
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          Riesgo vs volatilidad
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          La volatilidad es un precio. El riesgo es si el negocio se quiebra.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>8 min de lectura</span>
          <span>·</span>
          <span>Mentalidad · Riesgo</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-sm leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          Wall Street define riesgo como "volatilidad" (desviación estándar de retornos). Una acción que sube 20% un día y baja 18% al siguiente tiene alto riesgo por esa definición. Buffett define riesgo como "posibilidad permanente de pérdida de capital".
        </p>
        <p>
          No son lo mismo. Una acción puede ser volátil pero segura. O estable pero riesgosa. El value investor explota esa diferencia.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Volatilidad: el precio sube y baja
          </h2>
          <p>
            Coca-Cola es un negocio casi perfecto: moat duradero, FCF predecible, dividendo sostenible. Pero si mañana el mercado cae 20%, Coca-Cola cae también. Su precio se mueve con el mercado.
          </p>
          <p className="mt-3">
            Un trader vería ese 20% de caída como riesgo. Un inversor value lo ve como oportunidad: la empresa no cambió. El negocio sigue siendo perfecto. Pero cotiza 20% más barato. Es moment para comprar más.
          </p>
          <p className="mt-3">
            La volatilidad no es riesgo — es oportunidad para quien tiene efectivo y disciplina para comprar cuando otros venden.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Riesgo real: el negocio se quiebra
          </h2>
          <p>
            Invertiste en una aerolínea. La aerolínea tiene deuda masiva y márgenes mínimos. Una crisis de demanda (como 2020) reduce ingresos pero no deuda. El FCF se vuelve negativo. La empresa quiebra. Tu dinero desaparece.
          </p>
          <p className="mt-3">
            Eso es riesgo real. No es volatilidad de precio — es posibilidad de pérdida permanente de capital. Para mitigarlo, buscas: bajo apalancamiento, FCF positivo en ciclos bajos, moat que te protege en crisis.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Ejemplo: dos acciones volátiles, riesgos distintos
          </h2>
          <p>
            <strong style={{ color: '#C9D4E0' }}>Acción A:</strong> Empresa de servicios esenciales. Deuda muy baja, FCF positivo incluso en recesión, índice beta 1.2 (volátil). Su precio sube y baja mucho, pero el negocio es sólido.
          </p>
          <p className="mt-3">
            <strong style={{ color: '#C9D4E0' }}>Acción B:</strong> Startup de biotech. Precio es estable (muchos inversores institucionales lo mantiene), pero la empresa depende de un trial de medicamento. Si falla, pierden todo.
          </p>
          <p className="mt-3">
            Por la definición de Wall Street, A es más riesgosa (mayor volatilidad). Pero para Buffett, B es más riesgosa (posibilidad real de pérdida permanente). El inversor value elige A, no B.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Cómo usar la volatilidad
          </h2>
          <p>
            Si compraste una acción a $50 basado en FCF analysis que sugiere valor de $70, y el mercado la baja a $40 sin cambios fundamentales, tienes suerte. Es oportunidad de comprar más.
          </p>
          <p className="mt-3">
            Munger: "La gente que es aversiva al riesgo tiende a no invertir. Los ricos que tienen efectivo en crashes compran. El mercado baja, bajan los precios, ellos compran. Después cuando el mercado se recupera, sus retornos son enormes".
          </p>
          <p className="mt-3">
            La volatilidad es riesgo solo si necesitás vender durante la caída. Si tenés horizonte largo y análisis correcto, es aliado, no enemigo.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Cómo OBG lo ve
          </h2>
          <p>
            No reducimos posiciones por volatilidad. Si el análisis fundamenta sigue siendo válido, volatilidad es oportunidad de promediar. Si la volatilidad refleja cambio material en el negocio (deterioro de moat, FCF futuro peor), entonces revisamos el análisis.
          </p>
        </section>

      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', margin: '2.5rem 0' }} />

      <section className="mb-8">
        <p className="text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(201,168,76,0.5)' }}>Guías relacionadas</p>
        <div className="flex flex-wrap gap-2">
          {[
            { slug: 'margen-de-seguridad', label: 'Margen de seguridad' },
            { slug: 'psicologia-del-inversor', label: 'Psicología' },
            { slug: 'precio-vs-valor', label: 'Precio vs valor' },
            { slug: 'deuda-en-value-investing', label: 'Deuda' },
            { slug: 'ciclos-howard-marks', label: '♠ Ciclos Marks' },
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
          ¿Querés ver cómo analizamos el riesgo de una empresa?
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
