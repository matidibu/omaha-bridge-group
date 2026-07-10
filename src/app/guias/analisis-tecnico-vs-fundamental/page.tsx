import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'Gráficos vs realidad: por qué uno gana y el otro pierde',
  description: 'Análisis técnico: linda distracción. Fundamental: donde está el dinero. Cómo diferenciar.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/analisis-tecnico-vs-fundamental' },
  openGraph: {
    title: 'Análisis técnico vs fundamental',
    description: 'Dos enfoques distintos. Uno no funciona para inversores de largo plazo.',
    type: 'article',
  },
}

const COLOR = '#C9A84C'

export default function AnalisisTecnicoVsFundamentalPage() {
  return (
    <GuiasShell articleMeta={{
      title: 'Gráficos que prometen, realidad que decepciona',
      description: 'Por qué los gráficos no predicen. Por qué Buffett estudia el negocio.',
      publishDate: '2026-05-15',
      url: 'https://omaha-bridge-group.vercel.app/guias/analisis-tecnico-vs-fundamental',
      image: 'https://omaha-bridge-group.vercel.app/og-guias.png',
      keywords: 'análisis técnico, análisis fundamental, value investing',
      readingTimeMinutes: 7,
    }}>
      <div className="mb-10">
        <p className="text-sm md:text-base uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          Métodos · Análisis
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          Análisis técnico vs fundamental
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Uno mira gráficos. El otro mira negocios. Trabajan en horizontes tan distintos que no compiten.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>7 min de lectura</span>
          <span>·</span>
          <span>Métodos · Análisis</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-base md:text-lg leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          <strong style={{ color: '#C9D4E0' }}>Análisis técnico</strong> (AT): estudiá los gráficos de precio, volumen, patrones. Si la acción forma un "triple bottom", eso es señal de compra. Si rompe la media móvil de 200 días, es venta.
        </p>
        <p>
          <strong style={{ color: '#C9D4E0' }}>Análisis fundamental</strong> (AF): estudiá los números de la empresa, el negocio, los competidores. ¿Cuánto FCF genera? ¿Tiene moat? ¿Crece?
        </p>
        <p>
          El value investor usa fundamental, no técnico. Pero vale entender por qué.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            El problem del análisis técnico
          </h2>
          <p>
            El AT asumeque los patrones pasados predicen el futuro. Si una acción subió 10 veces antes después de un patrón X, volverá a subir. Pero es correlación a través del tiempo. ¿Por qué suba un gráfico en particular?
          </p>
          <p className="mt-3">
            Si 100.000 chartistas ven el mismo patrón y todos compran, la acción sube. Eso no es porque el patrón "predijo" el futuro — es porque la profecía fue autocumplida. Cuando todos se dan cuenta de que es solo self-fulfilling, desaparece.
          </p>
          <p className="mt-3">
            Lo que AT no puede responder: ¿vale la acción este nuevo precio? ¿El negocio mejoró? ¿La deuda bajó? Esas preguntas requieren AF.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Horizonte de tiempo: dónde cada uno funciona
          </h2>
          <p>
            Para trading (horizonte de horas a días): AT puede capturar movimientos cortos antes de que se reviertan. Hay dinero en volatilidad si sos rápido.
          </p>
          <p className="mt-3">
            Para inversión (horizonte de años a décadas): AF es lo único que funciona. A largo plazo, el precio gravita hacia el valor. Si los gráficos y el fundamenta discrepan, gana el fundamenta.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Ejemplo: Facebook (Meta) 2021
          </h2>
          <p>
            Técnicamente, Facebook había formado un "patrón de bandera" bullish. Los chartistas esperaban que rompa a la baja y compren. Pero el análisis fundamental mostraba: ingresos creciendo 30%, ROIC de 40%, moat de efectos de red inmenso, deuda mínima.
          </p>
          <p className="mt-3">
            El fundamenta ganó. Mientras algunos chartistas esperaban caída, el fundamental inversor que compró en ese momento ahora tiene ganancias masivas. Los patrones de precio no importaron — importó el negocio.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Por qué Buffett no mira gráficos
          </h2>
          <p>
            Buffett : "Chart investing es para tradeadores. Si querés predecir el precio del mañana, necesitás talento y suerte. Si querés predecir el valor de una empresa en 10 años basado en sus ganancias, necesitás disciplina y paciencia".
          </p>
          <p className="mt-3">
            El horizonte de Buffett es tan largo que los gráficos son ruido. Lo que importa es si el negocio genera valor. Eso no está en el gráfico — está en el balance, en la competencia, en la gerencia.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Cómo OBG lo hace
          </h2>
          <p>
            Pure análisis fundamental. Estudiamos empresas sin mirar gráficos. Si un gráfico muestra sobreventa brutale (caída 40%) pero el fundamenta de la empresa es igual, es oportunidad de compra. Si un gráfico muestra máximo histórico pero la empresa está cara, es venta.
          </p>
        </section>

      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', margin: '2.5rem 0' }} />

      <section className="mb-8">
        <p className="text-sm md:text-base uppercase tracking-widest mb-4" style={{ color: 'rgba(201,168,76,0.5)' }}>Guías relacionadas</p>
        <div className="flex flex-wrap gap-2">
          {[
            { slug: 'precio-vs-valor', label: 'Precio vs valor' },
            { slug: 'psicologia-del-inversor', label: 'Psicología' },
            { slug: 'margen-de-seguridad', label: 'Margen de seguridad' },
            { slug: 'buffett-criterios', label: '♥ Criterios Buffett' },
            { slug: 'riesgo-vs-volatilidad', label: 'Riesgo vs volatilidad' },
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
          ¿Querés analizar empresas en profundidad?
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
