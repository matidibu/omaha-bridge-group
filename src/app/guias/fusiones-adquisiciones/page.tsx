import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'Fusiones y adquisiciones: cómo invertir en eventos M&A | Omaha Bridge Group',
  description: 'Estrategia para invertir en fusiones y adquisiciones. Cómo evaluar si el precio es justo, arbitrage y riesgo de deal break.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/fusiones-adquisiciones' },
  openGraph: {
    title: 'Fusiones y adquisiciones (M&A) | Omaha Bridge Group',
    description: 'Cuando dos empresas se fusionan, hay dinero en el spread entre precio oferta y precio de mercado.',
    type: 'article',
  },
}

const COLOR = '#8B5CF6'

export default function M&APage() {
  return (
    <GuiasShell articleMeta={{
      title: 'Fusiones y adquisiciones: cómo invertir en eventos M&A',
      description: 'Estrategia de inversión en M&A, arbitrage de eventos y riesgo de deal break. Cómo evaluar si una compra es buena inversión.',
      publishDate: '2025-06-19',
      url: 'https://omaha-bridge-group.vercel.app/guias/fusiones-adquisiciones',
      image: 'https://omaha-bridge-group.vercel.app/og-guias.png',
      keywords: 'M&A, fusiones, adquisiciones, merger arbitrage, deal risk',
      readingTimeMinutes: 8,
    }}>
      <div className="mb-10">
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          ♣ &nbsp; Eventos Corporativos · M&A
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          M&A: dónde está el spread y cuál es el riesgo
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Empresa A ofrece $100/acción. Mercado cotiza a $95. El spread es tu oportunidad y tu riesgo.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>8 min de lectura</span>
          <span>·</span>
          <span>Estrategia · Eventos Corporativos</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-sm leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          En una fusión anunciada, el precio de la empresa adquirida (target) típicamente sube pero queda por debajo del precio oferta. El diferencial es dinero que hay que ganar si cerras la operación.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            El spread de fusión
          </h2>
          <p>
            Target Company es ofrecida a $100/acción por Buyer Company. Anuncio hecho. Mercado cotiza Target a $97.
          </p>
          <p className="mt-3">
            El spread de $3 es riskless solo si: la fusión cierra 100%. Pero hay riesgos reales: aprobación regulatoria, veto de accionistas, condiciones de cierre no cumplidas.
          </p>
          <p className="mt-3">
            Spread típico en deals de bajo riesgo: 1-2%. Spread alto (5%+): riesgo sustancial de break.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Cuándo es trampa
          </h2>
          <ul className="space-y-2 pl-4">
            <li><strong style={{ color: '#C9D4E0' }}>Deal chino:</strong> <span style={{ color: '#8A9A85' }}>Aprobación regulatoria incierta o cuestionada.</span></li>
            <li><strong style={{ color: '#C9D4E0' }}>Buyer financieramente débil:</strong> <span style={{ color: '#8A9A85' }}>Si comprador no tiene dinero confirmado, deal rompe.</span></li>
            <li><strong style={{ color: '#C9D4E0' }}>Spread gigante:</strong> <span style={{ color: '#8A9A85' }}>Si hay 10%+ de spread, el mercado no cree en cierre.</span></li>
          </ul>
        </section>

      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', margin: '2.5rem 0' }} />

      <section className="text-center rounded-xl border py-8 px-6"
        style={{ borderColor: 'rgba(201,168,76,0.2)', background: 'rgba(7,43,24,0.5)' }}>
        <p className="text-base mb-4" style={{ color: '#A8BCA8', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Evalúa deals actuales y captura spread bajo
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
