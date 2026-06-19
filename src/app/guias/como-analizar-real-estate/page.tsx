import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'El dividendo del REIT que desaparece cuando baja la tasa de interés | Omaha Bridge Group',
  description: 'Rendimiento del 7%... pero viene del endeudamiento. Cómo diferenciar distribuciones reales de ilusiones de dinero.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/como-analizar-real-estate' },
  openGraph: {
    title: 'Cómo analizar REITs e inversiones inmobiliarias | Omaha Bridge Group',
    description: 'FFO, capex recurrente, y calidad de inquilinos. Todo lo que necesitas saber sobre real estate.',
    type: 'article',
  },
}

const COLOR = '#6B7280'

export default function AnalizarRealEstatePage() {
  return (
    <GuiasShell articleMeta={{
      title: 'El dividendo que desaparece: REITs con distribuciones que no duran',
      description: 'Rendimiento atractivo pero el FFO no lo soporta. Cómo detectar REITs que están comiendo capital.',
      publishDate: '2025-06-19',
      url: 'https://omaha-bridge-group.vercel.app/guias/como-analizar-real-estate',
      image: 'https://omaha-bridge-group.vercel.app/og-guias.png',
      keywords: 'REIT, real estate, FFO, distribuciones, inquilino, alquiler',
      readingTimeMinutes: 8,
    }}>
      <div className="mb-10">
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          ♠ &nbsp; Análisis Sectorial · Inmobiliario
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          Inversiones inmobiliarias: cómo no quedarte sin propiedad
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          FFO, capex recurrente y por qué una distribución del 7% que requiere endeudamiento es un engaño.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>8 min de lectura</span>
          <span>·</span>
          <span>Análisis Sectorial · Activos Reales</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-sm leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          El real estate atrae a inversores de ingresos con promesas de distribuciones altas. Pero un edificio que genera $100M en alquiler requiere $40M en capex, mantenimiento y reparaciones. La diferencia es lo que el propietario realmente se queda.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            FFO: la métrica que importa en REITs
          </h2>
          <p>
            <span translate="no">Funds From Operations</span> = Earnings Netos + Depreciation + Amortización − Ganancias por Venta de Propiedades
          </p>
          <p className="mt-3">
            FFO ignora depreciation porque en real estate la depreciación es contable, no económica. Un edificio de 100 años que genera alquiler no se deprecia economicamente.
          </p>
          <p className="mt-3">
            Pero CUIDADO: un FFO alto no significa distribución segura. El FFO es antes de capex. Si el REIT necesita $20M anual en capex de mantenimiento y el FFO es $25M, solo hay $5M para distribuciones.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            La métrica real: Funds Available for Distribution
          </h2>
          <p>
            FAD = FFO − Capex Recurrente
          </p>
          <p className="mt-3">
            Si un REIT reporta FFO $100M pero capex anual es $60M, el FAD es $40M. Si distribuye $70M en dividendos, está sacando dinero del balance — es insostenible.
          </p>
          <p className="mt-3">
            Los buenos REITs son transparentes sobre capex recurrente. Los malos lo esconden o lo llaman "capex de crecimiento" para que parezca diferente del capex de mantenimiento.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Calidad de inquilinos: el verdadero riesgo
          </h2>
          <p>
            Una propiedad que genera $10M en alquiles no vale nada si los inquilinos se van. El verdadero negocio es la capacidad de retener inquilinos o encontrar nuevos rápidamente.
          </p>
          <ul className="mt-3 space-y-2 pl-4">
            <li><strong style={{ color: '#C9D4E0' }}>Inquilino concentrado:</strong> <span style={{ color: '#8A9A85' }}>Si 50% del ingreso viene de 1 inquilino, estás en riesgo existencial.</span></li>
            <li><strong style={{ color: '#C9D4E0' }}>Lease vs Lease-Up:</strong> <span style={{ color: '#8A9A85' }}>¿Qué % de propiedades están inquilinas ahora? ¿Cuánto tiempo tarda ocupar una vacante?</span></li>
            <li><strong style={{ color: '#C9D4E0' }}>Renovación de contratos:</strong> <span style={{ color: '#8A9A85' }}>¿A qué precio se renuevan? ¿Suben, bajan o se mantienen?</span></li>
          </ul>
        </section>

        <blockquote className="border-l-2 pl-4 mt-4 italic"
          style={{ borderColor: 'rgba(212,168,67,0.4)', color: 'rgba(232,237,245,0.7)', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          &ldquo;El dividendo es lo que quedó. Si el dividendo es alto pero el capex está aplazado, estás comiendo semillas.&rdquo;
          <span className="block mt-1 not-italic text-xs" style={{ color: '#4A6A55' }}>— Principio de sostenibilidad en inversión</span>
        </blockquote>

      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', margin: '2.5rem 0' }} />

      <section className="mb-8">
        <p className="text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(201,168,76,0.5)' }}>Más análisis sectorial</p>
        <div className="flex flex-wrap gap-2">
          {[
            { slug: 'dividendos-value-investing', label: 'Dividendos' },
            { slug: 'flujo-de-caja-libre', label: 'FCF' },
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
          ¿Querés analizar un REIT real con criterios sólidos?
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
