import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'EV/EBITDA: el múltiplo que todos usan (y en qué falla) | Omaha Bridge Group',
  description: 'EV/EBITDA es la métrica más usada en el mundo corporativo para valorar empresas. Qué significa, por qué es útil, cuándo es una trampa, y cómo Buffett la usa diferente de los banqueros de inversión.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/ev-ebitda' },
  openGraph: {
    title: 'EV/EBITDA: cómo usarlo correctamente | Omaha Bridge Group',
    description: 'La métrica favorita de los banqueros que value investors desconfían. Cuándo confiar, cuándo dudar.',
    type: 'article',
  },
}

const COLOR = '#C9A84C'

export default function EvEbitdaPage() {
  return (
    <GuiasShell articleMeta={{
      title: 'EV/EBITDA: el múltiplo que todos usan (y en qué falla)',
      description: 'EV/EBITDA es la métrica más usada en el mundo corporativo para valorar empresas. Qué significa, por qué es útil, cuándo es una trampa, y cómo Buffett la usa diferente.',
      publishDate: '2026-05-15',
      url: 'https://omaha-bridge-group.vercel.app/guias/ev-ebitda',
      image: 'https://omaha-bridge-group.vercel.app/og-guias.png',
      keywords: 'evurl: 'https://omaha-bridge-group.vercel.app/guias/ev-ebitda',ebitda, múltiplos, valuación relativa',
      readingTimeMinutes: 8,
    }}>
      <div className="mb-10">
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          Valoración · Múltiplos
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          EV/EBITDA: cuándo sirve, cuándo miente
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Saber qué es EV/EBITDA es ganar una batalla. Saber cuándo no confiar en él es ganar la guerra.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>8 min de lectura</span>
          <span>·</span>
          <span>Valoración · Múltiplos</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-sm leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          Todos los banqueros de inversión tienen la misma conversación con empresarios: "Tu empresa genera X de EBITDA. El sector se vende a Y múltiplo. Eso significa valuación de Z". Es rápido, es objetivo, y es parcialmente incorrecto. Pero es tan útil que el mundo corporativo no puede vivir sin él.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Qué es EV/EBITDA
          </h2>
          <p>
            <strong style={{ color: '#C9D4E0' }}>EV = Enterprise Value</strong> = Capitalización de mercado + Deuda neta
          </p>
          <p className="mt-3">
            Es lo que el mercado valúa la empresa entera: si fuera a comprarla toda, qué pagarías por equity + asumir su deuda neta.
          </p>
          <p className="mt-3">
            <strong style={{ color: '#C9D4E0' }}>EBITDA = Earnings Before Interest, Tax, Depreciation, Amortization</strong>
          </p>
          <p className="mt-3">
            Es ganancia operativa sin importar impuestos, deuda, ni depreciación. Una empresa con $100M de EBITDA y EV de $500M tiene EV/EBITDA = 5x. Significa que el mercado paga 5 años de EBITDA por el negocio.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Por qué sirve
          </h2>
          <p>
            Permite comparar empresas sin importar estructura fiscal o carga de deuda. Un negocio en España pagará más impuestos que uno en Irlanda, pero el EBITDA es comparable.
          </p>
          <p className="mt-3">
            Por eso, cuando una consultora analiza "mergers and acquisitions", empieza siempre con EBITDA. Es útil para benchmarking rápido: industrias maduras tienen multiples similares (telecom: 6-8x, retail: 5-7x, software: 25-40x).
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Dónde falla
          </h2>
          <p>
            EBITDA ignora tres cosas que importan enormemente: capex, cambios en capital de trabajo, e impuestos. Una empresa puede tener EBITDA excelente pero requiere capex masivo para mantenerse. Eso destruye flujo de caja real.
          </p>
          <p className="mt-3">
            Ejemplo: una compañía aérea genera $500M de EBITDA. Suena bien hasta que notás que debe reinvertir $400M anual en aviones para no quedar obsoleta. El flujo libre es $100M, no $500M.
          </p>
          <p className="mt-3">
            También, el EBITDA es muy fácil de manipular con ajustes "one-off" que los directivos califican como "extraordinarios pero no recurrentes". En dos años, mitad del EBITDA era "extraordinario".
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Buffett y Munger: cómo lo usan (y por qué es limitado)
          </h2>
          <p>
            Buffett dice que EBITDA es útil solo como punto de partida. Tiene que pasar a FCF — flujo de caja libre. Un negocio con EBITDA de $100M pero capex de $80M genera solo $20M de flujo libre. La valuación debe reflejar eso.
          </p>
          <p className="mt-3">
            Munger es más duro: "Quiero ver el flujo de caja neto después de capex, impuestos y cambios en capital de trabajo. Si estás hablándome de EBITDA, me estás diciendo que no quiero que mires esas cosas".
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Cómo OBG lo usa
          </h2>
          <p>
            Es un screening rápido. Si EV/EBITDA es 100x, algo está muy caro o algo está muy bien (es software y crece 50% anual). Si es 3x, la empresa está barata o es de valor terrible. Luego miramos el FCF para confirmar si el precio es atractivo realmente.
          </p>
        </section>

      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', margin: '2.5rem 0' }} />

      <section className="mb-8">
        <p className="text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(201,168,76,0.5)' }}>Guías relacionadas</p>
        <div className="flex flex-wrap gap-2">
          {[
            { slug: 'flujo-de-caja-libre', label: 'Flujo de caja libre' },
            { slug: 'dcf-valoracion', label: 'DCF' },
            { slug: 'precio-vs-valor', label: 'Precio vs valor' },
            { slug: 'errores-comunes-value-investing', label: 'Errores comunes' },
            { slug: 'como-leer-un-balance', label: 'Leer un balance' },
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
          ¿Querés ver EV/EBITDA en contexto de una valuación real?
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
