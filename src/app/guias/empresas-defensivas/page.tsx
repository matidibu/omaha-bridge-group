import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'Tu paraguas en la tormenta: acciones que bajan menos cuando todo cae | Omaha Bridge Group',
  description: 'Gente sigue comprando jabón en crisis. Sigue pagando luz. Esas empresas son defensa cuando el mercado colapsa.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/empresas-defensivas' },
  openGraph: {
    title: 'Acciones defensivas (Defensive stocks) | Omaha Bridge Group',
    description: 'Las empresas que la gente compra en crisis. Qué las hace diferentes.',
    type: 'article',
  },
}

const COLOR = '#10B981'

export default function DefensiveStocksPage() {
  return (
    <GuiasShell articleMeta={{
      title: 'Tu paraguas en la tormenta: empresas defensivas',
      description: 'Cuando cae 50%, estas caen 30%. Cómo construir defensa.',
      publishDate: '2025-06-19',
      url: 'https://omaha-bridge-group.vercel.app/guias/empresas-defensivas',
      image: 'https://omaha-bridge-group.vercel.app/og-guias.png',
      keywords: 'acciones defensivas, defensive stocks, recesión, utilidad, consumo masivo',
      readingTimeMinutes: 7,
    }}>
      <div className="mb-10">
        <p className="text-sm md:text-base uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          ♥ &nbsp; Estrategia · Protección
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          Acciones defensivas: cuando el mercado se asusta, estas suben
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Gente sigue pagando la factura de luz en crisis. Sigue comprando jabón. Eso es defensa.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>7 min de lectura</span>
          <span>·</span>
          <span>Estrategia · Ciclos Económicos</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-base md:text-lg leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          Una acción defensiva es un negocio donde la demanda es relativamente constante sin importar ciclo económico. Ingresos bajan menos en crisis. Precios caen menos. Volatilidad baja.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Características de empresas defensivas
          </h2>
          <ul className="space-y-2 pl-4">
            <li><strong style={{ color: '#C9D4E0' }}>Demanda inelástica:</strong> <span style={{ color: '#8A9A85' }}>Luz, agua, comida. Se compra independientemente del ciclo.</span></li>
            <li><strong style={{ color: '#C9D4E0' }}>Márgenes altos y estables:</strong> <span style={{ color: '#8A9A85' }}>Menos sensibilidad a presiones de precio.</span></li>
            <li><strong style={{ color: '#C9D4E0' }}>Flujo de caja predecible:</strong> <span style={{ color: '#8A9A85' }}>Ingresos recurrentes, gastos bajo control.</span></li>
            <li><strong style={{ color: '#C9D4E0' }}>Bajo apalancamiento:</strong> <span style={{ color: '#8A9A85' }}>Pueden soportar crisis sin riesgo de bancarrota.</span></li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Sectores defensivos
          </h2>
          <p>
            Utilities, consumo masivo, pharma, telecomunicaciones. No son sectores que generan retornos extraordinarios, pero protegen capital en estrés.
          </p>
          <p className="mt-3">
            Durante 2008, Coca-Cola bajó 30%. El mercado cayó 50%. Coca-Cola fue defensiva en ese contexto.
          </p>
        </section>

      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', margin: '2.5rem 0' }} />

      <section className="text-center rounded-xl border py-8 px-6"
        style={{ borderColor: 'rgba(201,168,76,0.2)', background: 'rgba(7,43,24,0.5)' }}>
        <p className="text-base mb-4" style={{ color: '#A8BCA8', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Construye núcleo defensivo en tu portafolio
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
