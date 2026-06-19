import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'Cómo analizar empresas de seguros — Ratios y suscripción | Omaha Bridge Group',
  description: 'Guía para invertir en seguros: cómo entender combined ratio, float e inversión de reservas. Por qué Buffett ama seguros pero solo los buenos.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/como-analizar-seguros' },
  openGraph: {
    title: 'Cómo analizar empresas de Seguros | Omaha Bridge Group',
    description: 'Combined ratio, underwriting profit, float. Lo que necesitas saber sobre seguros.',
    type: 'article',
  },
}

const COLOR = '#7C3AED'

export default function AnalizarSeguroPage() {
  return (
    <GuiasShell articleMeta={{
      title: 'Cómo analizar empresas de seguros — Ratios y suscripción',
      description: 'Guía para invertir en seguros: combined ratio, underwriting profit y float. Por qué Buffett invierte en seguros pero solo los excelentes.',
      publishDate: '2025-06-19',
      url: 'https://omaha-bridge-group.vercel.app/guias/como-analizar-seguros',
      image: 'https://omaha-bridge-group.vercel.app/og-guias.png',
      keywords: 'seguros, insurance, combined ratio, float, underwriting',
      readingTimeMinutes: 8,
    }}>
      <div className="mb-10">
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          ★ &nbsp; Análisis Sectorial · Financiero
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          Seguros: el negocio del dinero gratis y la suscripción disciplinada
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Un asegurador recibe primas hoy y paga siniestros después. Ese "float" es dinero de Buffett.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>8 min de lectura</span>
          <span>·</span>
          <span>Análisis Sectorial · Financiero</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-sm leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          Buffett invierte en seguros porque son máquinas de generar dinero gratis. Recibes prima hoy, inviertes ese dinero, y esperas a tener que pagar siniestro después. La diferencia es tu ganancia.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Combined Ratio: la métrica clave
          </h2>
          <p style={{ fontFamily: 'monospace', color: 'rgba(232,237,245,0.8)' }}>
            Combined Ratio = (Siniestros + Gastos Operativos) / Primas %
          </p>
          <p className="mt-3">
            Ratio menor a 100: La aseguradora gana dinero en suscripción. Ratio mayor a 100: Pierde dinero en cada prima.
          </p>
          <p className="mt-3">
            Berkshire Hathaway tiene seguros con combined ratio de 97-99. Solo ganan 1-3% en suscripción pero el float es enorme.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Float: el dinero gratis
          </h2>
          <p>
            Float = Primas recibidas − Siniestros pagados (en un período)
          </p>
          <p className="mt-3">
            Una aseguradora con $10B en float tiene $10B de dinero para invertir antes de tener que pagar siniestros. Ese es dinero gratis mientras lo invertas a tasa de retorno.
          </p>
          <p className="mt-3">
            Si inviertes ese float a 5% anual, ganas $500M sin hacer nada.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            La trampa: underwriting pobre
          </h2>
          <p>
            Una aseguradora que pierde dinero en suscripción (combined ratio 105%) pero tiene float grande parece buena. Pero:
          </p>
          <p className="mt-3">
            Si combined ratio es 105% y float es $10B, pierdas $500M anual de underwriting. El retorno en float (5% de $10B = $500M) apenas cubre las pérdidas. Crecimiento de float se detiene o baja.
          </p>
          <p className="mt-3">
            Los buenos aseguradores tienen combined ratio menor a 100 Y retorno en float mayor a 10%.
          </p>
        </section>

      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', margin: '2.5rem 0' }} />

      <section className="mb-8">
        <p className="text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(201,168,76,0.5)' }}>Análisis financiero</p>
        <div className="flex flex-wrap gap-2">
          {[
            { slug: 'roe-roa-roic', label: 'ROIC' },
            { slug: 'flujo-de-caja-libre', label: 'FCF' },
            { slug: 'como-leer-un-balance', label: 'Balance' },
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
          Busca aseguradoras con suscripción disciplinada
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
