import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'Por qué el CEO te miente con EBITDA (y cómo ver la verdad detrás) | Omaha Bridge Group',
  description: 'La métrica que hace brillar a los CEOs: EBITDA. La que revela la realidad: FCF. Cómo diferenciar ilusión de dinero real en menos de 5 minutos.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/ebitda-vs-fcf' },
  openGraph: {
    title: 'EBITDA vs FCF | Omaha Bridge Group',
    description: 'La métrica que importa: flujo de caja libre, no ganancias contables.',
    type: 'article',
  },
}

const COLOR = '#C9A84C'

export default function EBITDAVsFCFPage() {
  return (
    <GuiasShell articleMeta={{
      title: 'Por qué el CEO te miente con EBITDA (y cómo ver la verdad detrás)',
      description: 'EBITDA: el número que brilla. FCF: el que importa. Cómo detectar cuándo un CEO está usando palabras mágicas para esconder la realidad.',
      publishDate: '2025-06-19',
      url: 'https://omaha-bridge-group.vercel.app/guias/ebitda-vs-fcf',
      image: 'https://omaha-bridge-group.vercel.app/og-guias.png',
      keywords: 'EBITDA, free cash flow, FCF, earnings, cash flow comparison',
      readingTimeMinutes: 8,
    }}>
      <div className="mb-10">
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          ♥ &nbsp; Fundamentos · Métricas Críticas
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          EBITDA vs FCF: la métrica que miente y la que no
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Por qué los directivos hablan de EBITDA y por qué Buffett mira solo el flujo de caja libre.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>8 min de lectura</span>
          <span>·</span>
          <span>Análisis Fundamental · Métricas Financieras</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-sm leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          EBITDA es una métrica cómoda para los directivos. FCF es incómoda para ellos, pero honesta para los inversores. La diferencia entre una y otra ha destruido más carteras que cualquier crash de mercado.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Qué es EBITDA
          </h2>
          <p>
            EBITDA significa <span translate="no">Earnings Before Interest, Taxes, Depreciation and Amortization</span> — ganancias antes de intereses, impuestos, depreciación y amortización.
          </p>
          <p className="mt-3">
            Es atractivo porque es alto. Saca todos los "gastos incómodos" de la ecuación. Depreciation es un gasto contable no-efectivo, así que EBITDA lo ignora. Pero depreciation existe por una razón: las máquinas se gastan y hay que reemplazarlas.
          </p>
          <p className="mt-3">
            Los directivos adoran EBITDA porque "se ve bien en las presentaciones". El EBITDA de una empresa puede ser $100M mientras que el flujo de caja libre es $20M. Ambos números son del mismo período, del mismo negocio. Uno es elegido por la gerencia para vender esperanza al mercado.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Qué es Free Cash Flow
          </h2>
          <p>
            <span translate="no">Free Cash Flow</span> es lo que queda después de pagar todo lo que hay que pagar para que el negocio siga funcionando:
          </p>
          <p className="mt-3" style={{ fontFamily: 'monospace', color: 'rgba(232,237,245,0.8)' }}>
            FCF = Flujo Operativo − Capex (gastos de capital)
          </p>
          <p className="mt-3">
            El capex incluye máquinas nuevas, edificios, software — la inversión necesaria para mantener y crecer el negocio. Si una empresa ignora el capex en su análisis, está ignorando que sus máquinas van a romperse.
          </p>
          <p className="mt-3">
            El FCF es lo que el negocio realmente genera de dinero efectivo después de sostener la operación. Es el dinero que puede ir a dividendos, recompra de acciones, o deuda. Si el FCF es cero, no hay dinero para nada, por mucho que EBITDA brille.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Ejemplo práctico: la trampa del EBITDA
          </h2>
          <p>
            Una empresa de infraestructura reporta EBITDA de $500M. Parece excelente. Pero:
          </p>
          <ul className="mt-3 space-y-2 pl-4">
            <li><strong style={{ color: '#C9D4E0' }}>Capex anual:</strong> <span style={{ color: '#8A9A85' }}>$400M (infraestructura requiere inversión constante).</span></li>
            <li><strong style={{ color: '#C9D4E0' }}>Intereses de deuda:</strong> <span style={{ color: '#8A9A85' }}>$50M.</span></li>
            <li><strong style={{ color: '#C9D4E0' }}>Impuestos:</strong> <span style={{ color: '#8A9A85' }}>$30M.</span></li>
          </ul>
          <p className="mt-3">
            EBITDA: $500M. Suena formidable. FCF: $500M − $400M = $100M (después de capex). Luego restas intereses e impuestos y queda casi nada para el accionista.
          </p>
          <p className="mt-3">
            Un inversor que compra la acción viendo solo EBITDA se decepciona en años 1 y 2. En año 3, la deuda se vuelve insostenible porque el FCF nunca fue suficiente.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Por qué los CEOs prefieren EBITDA
          </h2>
          <p>
            Dos razones: es más alto y es más discreto. El capex es variable — algunos años necesitas inversión fuerte, otros años menos. Un CEO puede manipular la visión del negocio según cuándo venda acciones o pida financiamiento.
          </p>
          <p className="mt-3">
            Si un CEO dice "nuestro EBITDA crece 20% anual" sin mencionar que el capex también crece 20%, está siendo técnicamente honesto pero contextualmente engañoso.
          </p>
          <p className="mt-3">
            Buffett desconfía especialmente de los CEOs que enfatizan EBITDA sin mencionar FCF. Es como si un restaurante dijera "vendemos mucha comida" sin mencionar que para cada $10 de comida vendida, $8 van a ingredientes, alquiler y meseros.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            La métrica que importa: FCF Yield
          </h2>
          <p>
            El <span translate="no">Free Cash Flow Yield</span> es el FCF anual dividido por la capitalización de mercado.
          </p>
          <p className="mt-3" style={{ fontFamily: 'monospace', color: 'rgba(232,237,245,0.8)' }}>
            FCF Yield = FCF Anual / Market Cap × 100
          </p>
          <p className="mt-3">
            Un FCF Yield del 5-7% en una empresa de calidad es atractivo. Un 10%+ es rara vez sustentable. Menos del 2% y estás pagando mucho por el dinero real que genera la empresa.
          </p>
          <p className="mt-3">
            Esto es lo opuesto al P/E ratio. Un P/E bajo no siempre significa que sea barato si el FCF es débil (la empresa destruye capital operativo). Un FCF Yield alto sí significa que pagás poco por dinero real.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Cómo saber qué creer
          </h2>
          <p>
            Siempre lee el flujo de caja en el balance, no la charla del CEO en la presentación de resultados. Si un CEO enfatiza EBITDA y elude FCF, es una bandera roja.
          </p>
          <ul className="mt-3 space-y-2 pl-4">
            <li><strong style={{ color: '#C9D4E0' }}>EBITDA creciente + FCF decreciente:</strong> <span style={{ color: '#8A9A85' }}>Trampa. El capex no es sostenible o el negocio es ficticio.</span></li>
            <li><strong style={{ color: '#C9D4E0' }}>EBITDA constante + FCF creciente:</strong> <span style={{ color: '#8A9A85' }}>Excelente. El negocio mejora su eficiencia.</span></li>
            <li><strong style={{ color: '#C9D4E0' }}>Ambos crecientes juntos:</strong> <span style={{ color: '#8A9A85' }}>Normal en empresas maduras de calidad.</span></li>
          </ul>
        </section>

        <blockquote className="border-l-2 pl-4 mt-4 italic"
          style={{ borderColor: 'rgba(212,168,67,0.4)', color: 'rgba(232,237,245,0.7)', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          &ldquo;Si las ganancias no casan con el flujo de caja, hay un cuento en algún lado.&rdquo;
          <span className="block mt-1 not-italic text-xs" style={{ color: '#4A6A55' }}>— Warren Buffett</span>
        </blockquote>

      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', margin: '2.5rem 0' }} />

      <section className="mb-8">
        <p className="text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(201,168,76,0.5)' }}>Profundizar en métricas</p>
        <div className="flex flex-wrap gap-2">
          {[
            { slug: 'flujo-de-caja-libre', label: 'FCF' },
            { slug: 'roe-roa-roic', label: 'ROIC' },
            { slug: 'ev-ebitda', label: 'EV/EBITDA' },
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
          ¿Querés analizar el flujo de caja de una acción real?
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
