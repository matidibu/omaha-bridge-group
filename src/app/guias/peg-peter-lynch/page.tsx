import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'El método GARP de Peter Lynch — Ratio PEG y crecimiento | Omaha Bridge Group',
  description: 'Cómo Peter Lynch usó el ratio PEG para encontrar empresas de crecimiento a precio razonable. Las seis categorías de acciones y el método GARP explicados.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/peg-peter-lynch' },
  openGraph: {
    title: 'El ratio PEG de Peter Lynch | Omaha Bridge Group',
    description: 'GARP: Growth at a Reasonable Price. El método de Lynch para invertir en crecimiento sin pagar de más.',
    type: 'article',
  },
}

const COLOR = '#2EC47E'

export default function PegLynchPage() {
  return (
    <GuiasShell>
      <div className="mb-10">
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          ♣ &nbsp; Peter Lynch · El Explorador
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          El método GARP de Peter Lynch
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Crecer sin pagar de más: el ratio PEG y las seis categorías de acciones.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>7 min de lectura</span>
          <span>·</span>
          <span>Growth investing · GARP · Ratio PEG</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-sm leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          Peter Lynch gestionó el Fondo Magellan de <span translate="no">Fidelity</span> entre 1977 y 1990. En esos trece años convirtió $18 millones en $14.000 millones, con un retorno anualizado del 29,2%. Es uno de los registros más extraordinarios en la historia de la gestión activa de fondos.
        </p>
        <p>
          Su filosofía es distinta a la de Buffett en un punto clave: Lynch sí busca crecimiento. Pero con una condición: el crecimiento tiene que venir a un precio razonable. De ahí el nombre de su método: <strong style={{ color: '#C9D4E0' }}><span translate="no">GARP</span> — Growth at a Reasonable Price</strong>.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            El problema del crecimiento sin precio
          </h2>
          <p>
            Durante los años ochenta, era común pagar 50x ganancias por una empresa de alto crecimiento porque "va a seguir creciendo". Lynch lo observó y llegó a una conclusión simple: pagar cualquier precio por crecimiento es especulación, no inversión. El crecimiento tiene valor, pero ese valor es finito y se puede estimar.
          </p>
          <p className="mt-3">
            La pregunta correcta no es "¿está creciendo?" sino "¿cuánto estoy pagando por ese crecimiento?"
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            El ratio PEG: precio dividido por crecimiento
          </h2>
          <p>
            El <span translate="no">PEG ratio</span> se calcula dividiendo el <span translate="no">P/E</span> por la tasa anual de crecimiento de las ganancias por acción (<span translate="no">EPS</span>):
          </p>
          <div className="my-4 p-4 rounded-lg text-center font-mono text-sm"
            style={{ background: 'rgba(7,43,24,0.6)', border: '1px solid rgba(46,196,126,0.2)', color: '#2EC47E' }}>
            PEG = P/E ÷ tasa de crecimiento anual del EPS (%)
          </div>
          <p>
            Una empresa con <span translate="no">P/E</span> de 20x que crece al 20% anual tiene <span translate="no">PEG</span> de 1,0 — estás pagando exactamente en línea con el crecimiento. Una empresa con <span translate="no">P/E</span> de 30x que crece al 15% tiene <span translate="no">PEG</span> de 2,0 — estás pagando el doble del crecimiento.
          </p>
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-3 text-xs p-2 rounded" style={{ background: 'rgba(46,196,126,0.08)' }}>
              <span style={{ color: '#2EC47E', fontWeight: 700 }}>PEG &lt; 1,0</span>
              <span style={{ color: '#7A9A85' }}>Potencialmente barata — pagás menos que el crecimiento</span>
            </div>
            <div className="flex items-center gap-3 text-xs p-2 rounded" style={{ background: 'rgba(201,168,76,0.06)' }}>
              <span style={{ color: '#C9A84C', fontWeight: 700 }}>PEG 1,0–1,5</span>
              <span style={{ color: '#7A9A85' }}>Precio justo — equilibrio entre P/E y crecimiento</span>
            </div>
            <div className="flex items-center gap-3 text-xs p-2 rounded" style={{ background: 'rgba(248,113,113,0.06)' }}>
              <span style={{ color: '#f87171', fontWeight: 700 }}>PEG &gt; 2,0</span>
              <span style={{ color: '#7A9A85' }}>Cara — la expectativa de crecimiento ya está en el precio</span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Las seis categorías de acciones según Lynch
          </h2>
          <p className="mb-3">
            Lynch clasificaba todas las empresas en seis categorías, y aplicaba criterios distintos a cada una:
          </p>
          <div className="space-y-3">
            {[
              { name: 'Slow growers', desc: 'Empresas maduras que crecen al ritmo de la economía (2-4% anual). Lynch las tenía por dividendos, no por apreciación de capital.' },
              { name: 'Stalwarts', desc: 'Gigantes como Coca-Cola o Procter & Gamble. Crecen a 10-12% anual. Útiles en mercados bajistas porque son estables.' },
              { name: 'Fast growers', desc: 'El favorito de Lynch. Empresas pequeñas que crecen 20-25% anual. Aquí es donde se multiplica el capital, con el PEG como filtro clave.' },
              { name: 'Cyclicals', desc: 'Mineras, automotrices, químicas. Sus ganancias suben y bajan con el ciclo económico. Hay que comprarlas cuando el P/E parece "caro" (inicio del ciclo) y venderlas cuando parece "barato" (techo del ciclo).' },
              { name: 'Turnarounds', desc: 'Empresas en problemas con potencial de recuperación. Alto riesgo, alto retorno. Lynch exigía ver señales concretas de que la gestión entendía el problema.' },
              { name: 'Asset plays', desc: 'Empresas que tienen activos ocultos que el mercado no está valorando: inmuebles, patentes, subsidiarias no consolidadas.' },
            ].map(({ name, desc }) => (
              <div key={name} className="rounded-lg p-3" style={{ background: 'rgba(7,43,24,0.5)', border: '1px solid rgba(46,196,126,0.08)' }}>
                <span className="text-xs font-semibold" translate="no" style={{ color: '#2EC47E' }}>{name}</span>
                <p className="text-xs mt-1" style={{ color: '#5A7A65' }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            "Invertí en lo que conocés" — el significado real
          </h2>
          <p>
            Esta frase de Lynch es la más malinterpretada de la literatura de inversiones. No significa "comprá acciones de empresas que usás". Significa que como consumidor, empleado o profesional de un sector, tenés acceso a información sobre tendencias que el mercado no ve todavía.
          </p>
          <p className="mt-3">
            Lynch descubrió varias de sus mejores inversiones observando qué compraban sus hijos, qué productos se agotaban en los supermercados, qué marcas usaban sus colegas. Pero siempre hacía el análisis financiero después — la observación era la hipótesis inicial, no la conclusión.
          </p>
          <blockquote className="border-l-2 pl-4 mt-4 italic"
            style={{ borderColor: 'rgba(46,196,126,0.4)', color: 'rgba(232,237,245,0.7)', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            &ldquo;Invertí en lo que conocés, pero luego hacé el trabajo.&rdquo;
            <span className="block mt-1 not-italic text-xs" style={{ color: '#4A6A55' }}>— Peter Lynch</span>
          </blockquote>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Cómo OBG aplica el método Lynch
          </h2>
          <p>
            El sabio Lynch en <span translate="no">Omaha Bridge Group</span> calcula el <span translate="no">PEG ratio</span> usando el crecimiento histórico del <span translate="no">EPS</span> y lo interpreta según la categoría de la empresa. Un <span translate="no">PEG</span> de 0,8 en un <em>fast grower</em> es muy distinto a un <span translate="no">PEG</span> de 0,8 en un <em>cyclical</em> al techo del ciclo. El análisis también evalúa la consistencia del crecimiento de ventas y la categoría más probable del negocio para contextualizar el número.
          </p>
        </section>

      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', margin: '2.5rem 0' }} />

      <section className="mb-8">
        <p className="text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(201,168,76,0.5)' }}>Otras guías</p>
        <div className="flex flex-wrap gap-2">
          {[
            { slug: 'buffett-criterios', label: '♥ Buffett' },
            { slug: 'magic-formula-greenblatt', label: '♦ Greenblatt' },
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
          ¿Querés ver el filtro PEG de Lynch aplicado a una acción real?
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
