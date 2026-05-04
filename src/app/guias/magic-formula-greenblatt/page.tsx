import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'La Magic Formula de Joel Greenblatt — Earnings Yield y ROC | Omaha Bridge Group',
  description: 'Cómo funciona la Magic Formula de Greenblatt: earnings yield, return on capital, el sistema de ranking y por qué supera al S&P 500 a largo plazo.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/magic-formula-greenblatt' },
  openGraph: {
    title: 'La Magic Formula de Greenblatt | Omaha Bridge Group',
    description: 'Earnings yield + return on capital: el sistema de inversión cuantitativo que bate al mercado.',
    type: 'article',
  },
}

const COLOR = '#7BBDE0'

export default function MagicFormulaPage() {
  return (
    <GuiasShell>
      <div className="mb-10">
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          ♦ &nbsp; Joel Greenblatt · El Cuantitativo
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          La Magic Formula de Greenblatt
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Cómo seleccionar acciones sistemáticamente combinando calidad del negocio y precio de entrada.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>7 min de lectura</span>
          <span>·</span>
          <span>Value investing · Inversión cuantitativa</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-sm leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          En 2005, Joel Greenblatt publicó <em>The Little Book That Beats the Market</em>. La premisa era casi irritantemente simple: comprá buenos negocios a buenos precios, repetí sistemáticamente durante años, y vas a ganarle al mercado. El libro fue un éxito editorial. El método, aplicado con disciplina, también lo fue.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            El problema que Greenblatt quería resolver
          </h2>
          <p>
            Greenblatt gestionó Gotham Capital desde 1985, logrando retornos anuales superiores al 40% durante más de una década. Pero sabía que ese rendimiento dependía de un análisis profundo caso por caso, algo que la mayoría de los inversores individuales no puede replicar.
          </p>
          <p className="mt-3">
            La pregunta que se hizo fue: ¿existe una forma mecánica, sin análisis cualitativo subjetivo, de identificar consistentemente empresas buenas a buenos precios? La respuesta fue la <span translate="no">Magic Formula</span>.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Por qué el P/E solo no alcanza
          </h2>
          <p>
            El ratio precio/ganancia (<span translate="no">P/E</span>) es la métrica de valoración más usada, pero tiene dos problemas importantes. Primero, usa ganancias netas después de impuestos — que pueden ser manipuladas contablemente. Segundo, divide por la capitalización bursátil, que ignora la deuda de la empresa.
          </p>
          <p className="mt-3">
            Dos empresas con el mismo <span translate="no">P/E</span> pueden ser inversiones radicalmente distintas si una tiene deuda nula y la otra carga con pasivos equivalentes a tres años de ganancias. El precio "barato" de la segunda puede ser una trampa.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Earnings Yield: una mejor medida de precio
          </h2>
          <p>
            El <span translate="no">Earnings Yield</span> de Greenblatt se calcula como <strong style={{ color: '#C9D4E0' }}>EBIT / Enterprise Value</strong>. El <span translate="no">EBIT</span> (ganancias antes de intereses e impuestos) es más difícil de manipular que las ganancias netas. El <span translate="no">Enterprise Value</span> incluye tanto la capitalización bursátil como la deuda neta, dando una imagen real del precio total que pagás por el negocio.
          </p>
          <p className="mt-3">
            Un <span translate="no">Earnings Yield</span> alto significa que estás comprando muchas ganancias por poco precio. Es el inverso del <span translate="no">EV/EBIT</span>, y funciona como una tasa de retorno: si el ratio es del 12%, estás comprando el negocio a un múltiplo que implica retorno del 12% sobre lo que pagás.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Return on Capital: midiendo la calidad
          </h2>
          <p>
            La segunda métrica de la fórmula es el <span translate="no">Return on Capital</span>, calculado como <strong style={{ color: '#C9D4E0' }}>EBIT / (Capital de Trabajo Neto + Activos Fijos Netos)</strong>. Mide cuánta ganancia genera el negocio por cada dólar de capital que realmente necesita para operar.
          </p>
          <p className="mt-3">
            Una empresa con <span translate="no">ROC</span> del 30% genera $30 de ganancia operativa por cada $100 que tiene inmovilizados en inventario, cuentas a cobrar y activos productivos. Eso indica un negocio de alta calidad que no necesita grandes inversiones de capital para crecer.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            El ranking combinado
          </h2>
          <p>
            La genialidad de la fórmula está en cómo combina ambas métricas. Greenblatt no suma los valores directamente — los rankea por separado. Si analizás 3.000 acciones, cada una recibe un ranking de <span translate="no">Earnings Yield</span> (del 1 al 3.000) y un ranking separado de <span translate="no">Return on Capital</span>. Luego sumás ambos rankings y ordenás por el total.
          </p>
          <p className="mt-3">
            El resultado son empresas que no son necesariamente las mejores en una sola métrica, sino las que combinan bien precio y calidad. Una empresa mediocre muy barata o una empresa excelente muy cara pueden aparecer en la lista, pero las que consistentemente combinan ambas cualidades son las que encabezan el ranking.
          </p>
          <blockquote className="border-l-2 pl-4 mt-4 italic"
            style={{ borderColor: 'rgba(123,189,224,0.4)', color: 'rgba(232,237,245,0.7)', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            &ldquo;El mercado no es eficiente a corto plazo, pero sí a largo plazo. Podemos aprovecharnos de esa ineficiencia temporal.&rdquo;
            <span className="block mt-1 not-italic text-xs" style={{ color: '#4A6A55' }}>— Joel Greenblatt</span>
          </blockquote>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            El desafío conductual
          </h2>
          <p>
            Greenblatt documentó que la <span translate="no">Magic Formula</span> superó al índice <span translate="no">S&P 500</span> en la mayoría de los períodos de diez años estudiados entre 1988 y 2004. Pero hay un problema: el método puede underperformar durante uno o dos años seguidos mientras el mercado sube, y muchos inversores lo abandonan precisamente cuando más debería sostenerse.
          </p>
          <p className="mt-3">
            La disciplina mecánica es la ventaja y también el talón de Aquiles del método: funciona si se aplica sistemáticamente sin intervención emocional.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Cómo OBG aplica la Magic Formula
          </h2>
          <p>
            <span translate="no">Omaha Bridge Group</span> calcula el <span translate="no">Earnings Yield</span> y el <span translate="no">Return on Capital</span> de cada empresa con datos financieros actualizados. El sabio Greenblatt produce un análisis que evalúa ambas métricas en contexto sectorial — porque el <span translate="no">ROC</span> de una empresa de software no es comparable directamente con el de una empresa industrial — y genera un puntaje combinado que refleja la posición relativa de la acción dentro de la lógica de la fórmula.
          </p>
        </section>

      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', margin: '2.5rem 0' }} />

      <section className="mb-8">
        <p className="text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(201,168,76,0.5)' }}>Otras guías</p>
        <div className="flex flex-wrap gap-2">
          {[
            { slug: 'buffett-criterios', label: '♥ Buffett' },
            { slug: 'peg-peter-lynch', label: '♣ Lynch' },
            { slug: 'antifragilidad-taleb', label: '★ Taleb' },
            { slug: 'ciclos-howard-marks', label: '♠ Marks' },
            { slug: 'calidad-institucional-fink', label: '✦ Fink' },
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
          ¿Querés ver la Magic Formula aplicada a una acción real?
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
