import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'Oro brillante hoy, quiebra mañana: vivir en los ciclos de commodities | Omaha Bridge Group',
  description: 'Minería a $1500/oz gana, a $900/oz pierde. El ciclo define todo. Cómo diferenciar minas que sobreviven de minas que cierran.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/como-analizar-mineria' },
  openGraph: {
    title: 'Cómo analizar empresas mineras | Omaha Bridge Group',
    description: 'Costos de extracción, reservas, vida útil de minas. Lo que los inversores en minería necesitan saber.',
    type: 'article',
  },
}

const COLOR = '#A16207'

export default function AnalizarMineriePage() {
  return (
    <GuiasShell articleMeta={{
      title: 'Oro a $1500 ganas fortuna, a $900 pierdes todo: vivir el ciclo',
      description: 'Minería: la ruleta rusa de los commodities. Cómo detectar minas que sobreviven crisis.',
      publishDate: '2025-06-19',
      url: 'https://omaha-bridge-group.vercel.app/guias/como-analizar-mineria',
      image: 'https://omaha-bridge-group.vercel.app/og-guias.png',
      keywords: 'minería, mining, reservas, costos, oro, commodities, ciclos',
      readingTimeMinutes: 9,
    }}>
      <div className="mb-10">
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          ♦ &nbsp; Análisis Sectorial · Commodities
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          Minería: donde el precio del commodity es rey
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Costos, reservas y por qué una mina rentable a $1500/oz es desastre a $900/oz.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>9 min de lectura</span>
          <span>·</span>
          <span>Análisis Sectorial · Ciclos de Commodities</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-sm leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          La minería es el ejemplo clásico de negocio cíclico con ganancias gigantes en peaks y pérdidas enormes en valles. Una mina rentable hoy puede estar en bancarrota en 3 años si el precio del commodity cae. Eso no es riesgo — es la naturaleza de la industria.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            All-in Sustaining Cost: la métrica crítica
          </h2>
          <p>
            <span translate="no">All-in Sustaining Cost (AISC)</span> = Costo de producción + Costo de capital para mantener operación
          </p>
          <p className="mt-3">
            Una mina de oro con AISC de $1200/oz es rentable si el oro se vende a $1500/oz. Pero si el oro cae a $1100/oz, cae directamente a pérdida.
          </p>
          <p className="mt-3">
            AISC varía mucho. Barrick Gold tiene AISC bajo ($1100-1200). Mineras pequeñas pueden tener AISC de $1400+. En un boom esto no importa. En un colapso de precio, AISC bajo es supervivencia.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Reservas: vida útil de la mina
          </h2>
          <p>
            Una mina reporta "Probable Reserves" y "Proven Reserves". Las reserves proven son más conservadoras. Reserves por sí solas no son un activo — necesitas que sean económicas de extraer.
          </p>
          <p className="mt-3">
            Una mina con 10 años de reserves vida a ritmo de producción actual dice poco. ¿Qué pasa después? ¿Se cierra? ¿Exploran y agregan más? ¿La compra otra empresa?
          </p>
          <p className="mt-3">
            Los mejores mineros (Barrick, Newmont) invierten constantemente en exploración para reemplazar reserves que extraen. Los malos, simplemente extraen todo y después ven.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            El ciclo de commodities: cuándo entrar y salir
          </h2>
          <p>
            La minería sigue ciclos. En peaks de precio (2011 para oro, 2008 para cobre), los márgenes son gigantes y todos gastan. En valles (2015-16), cierran minas y pierden dinero.
          </p>
          <ul className="mt-3 space-y-2 pl-4">
            <li><strong style={{ color: '#C9D4E0' }}>Peak:</strong> <span style={{ color: '#8A9A85' }}>Evita. Las ganancias son ilusorias, capex sube, deuda crece.</span></li>
            <li><strong style={{ color: '#C9D4E0' }}>Descenso:</strong> <span style={{ color: '#8A9A85' }}>Atrae inversores con miedo. Esto es cuando se mina oro empieza a interesar.</span></li>
            <li><strong style={{ color: '#C9D4E0' }}>Valle:</strong> <span style={{ color: '#8A9A85' }}>Mineros fuertes agrupan debilidades, compran assets baratos.</span></li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Señales de alerta en minería
          </h2>
          <ul className="space-y-2 pl-4">
            <li><strong style={{ color: '#C9D4E0' }}>AISC subiendo:</strong> <span style={{ color: '#8A9A85' }}>Costos fuera de control o mina envejecida.</span></li>
            <li><strong style={{ color: '#C9D4E0' }}>Reserves decrecientes sin reemplazo:</strong> <span style={{ color: '#8A9A85' }}>Mina con fecha de vencimiento cercana.</span></li>
            <li><strong style={{ color: '#C9D4E0' }}>Deuda alta en ciclo de boom:</strong> <span style={{ color: '#8A9A85' }}>Cuando cae precio, el deuda se vuelve insostenible.</span></li>
            <li><strong style={{ color: '#C9D4E0' }}>Capex creciente sin razón clara:</strong> <span style={{ color: '#8A9A85' }}>Proyecto que no exploran adecuadamente.</span></li>
          </ul>
        </section>

        <blockquote className="border-l-2 pl-4 mt-4 italic"
          style={{ borderColor: 'rgba(212,168,67,0.4)', color: 'rgba(232,237,245,0.7)', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          &ldquo;La minería no es inversión. Es especulación en ciclos de commodities. Entra bajo, toma ganancia, y espera el siguiente ciclo.&rdquo;
          <span className="block mt-1 not-italic text-xs" style={{ color: '#4A6A55' }}>— Principio de especulación vs inversión</span>
        </blockquote>

      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', margin: '2.5rem 0' }} />

      <section className="mb-8">
        <p className="text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(201,168,76,0.5)' }}>Análisis de ciclos y riesgo</p>
        <div className="flex flex-wrap gap-2">
          {[
            { slug: 'ciclos-howard-marks', label: 'Ciclos' },
            { slug: 'riesgo-vs-volatilidad', label: 'Riesgo' },
            { slug: 'deuda-en-value-investing', label: 'Deuda' },
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
          ¿Querés analizar una minera con criterios de inversor?
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
