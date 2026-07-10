import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'Cuando 1+1=3: cómo ganar dinero gratis cuando una empresa se divide',
  description: 'Una compañía se divide, el mercado infravalúa la pequeña, tú ganas la diferencia. El arbitrage de spinoffs explicado.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/spinoffs-oportunidades' },
  openGraph: {
    title: 'Spinoffs: oportunidades de valor',
    description: 'Cuando una empresa se divide, típicamente genera alfa. Por qué y cómo invertir.',
    type: 'article',
  },
}

const COLOR = '#06B6D4'

export default function SpinoffsPage() {
  return (
    <GuiasShell articleMeta={{
      title: 'Spinoff: cuando 1+1=3 y el mercado no lo ve',
      description: 'Cómo capturar el spread entre valor combinado e individual de dos empresas.',
      publishDate: '2025-06-19',
      url: 'https://omaha-bridge-group.vercel.app/guias/spinoffs-oportunidades',
      image: 'https://omaha-bridge-group.vercel.app/og-guias.png',
      keywords: 'spinoff, spin-off, carve-out, separación corporativa, valor',
      readingTimeMinutes: 7,
    }}>
      <div className="mb-10">
        <p className="text-sm md:text-base uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          ★ &nbsp; Oportunidades · M&A
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          Spinoffs: cuando 1 + 1 = 3 en el mercado
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Una corporación se divide en dos. El valor combinado de ambas supera al original. Cómo capturar esa diferencia.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>7 min de lectura</span>
          <span>·</span>
          <span>Estrategia · Eventos Corporativos</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-base md:text-lg leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          Cuando una compañía se divide en dos, el mercado típicamente infravalúa la empresa más pequeña que emerge. Los grandes fondos no pueden comprarla (es muy pequeña). El mercado no la cubre (es demasiado nueva). Eso genera oportunidad.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Por qué funciona: los números
          </h2>
          <p>
            Una empresa vale $100B. Parietal de negocios malos que reducen múltiplo. Se divide: parte A vale $50B (buenos negocios, 15x earnings), parte B vale $30B (negocios menos buenos, pero 8x earnings).
          </p>
          <p className="mt-3">
            Antes: $100B conjunto. Después: $80B de valor real porque cada parte se valúa en su múltiplo justo. El diferencial es dinero que sacas.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Ejemplo clásico: HPE/HPQ
          </h2>
          <p>
            Hewlett-Packard se dividió en Hewlett-Packard Enterprise (infraestructura) y HP Inc. (computadoras de usuario). La separación reveló valor porque cada negocio tenía dinámicas completamente diferentes.
          </p>
          <p className="mt-3">
            Inversores inteligentes compraron ambas después del spinoff y capturaron el spread.
          </p>
        </section>

      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', margin: '2.5rem 0' }} />

      <section className="text-center rounded-xl border py-8 px-6"
        style={{ borderColor: 'rgba(201,168,76,0.2)', background: 'rgba(7,43,24,0.5)' }}>
        <p className="text-base mb-4" style={{ color: '#A8BCA8', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Monitorea anuncios de spinoffs para capturar valor
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
