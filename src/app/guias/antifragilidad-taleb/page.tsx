import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'Antifragilidad según Nassim Taleb — Detectar fragilidad corporativa | Omaha Bridge Group',
  description: 'Cómo Nassim Taleb define fragilidad, robustez y antifragilidad en empresas. Señales de riesgo oculto: deuda, concentración, márgenes delgados y cisnes negros.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/antifragilidad-taleb' },
  openGraph: {
    title: 'Antifragilidad según Nassim Taleb | Omaha Bridge Group',
    description: 'Cómo detectar fragilidad corporativa antes de que un evento extremo la destruya.',
    type: 'article',
  },
}

const COLOR = '#A8BDD8'

export default function AntifragilidadTalebPage() {
  return (
    <GuiasShell>
      <div className="mb-10">
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          ★ &nbsp; Nassim Taleb · El Centinela
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          Antifragilidad según Taleb
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Cómo detectar fragilidad corporativa oculta antes de que un evento extremo la exponga.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>8 min de lectura</span>
          <span>·</span>
          <span>Gestión de riesgo · Cisnes negros · Antifragilidad</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-sm leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          Nassim Taleb no es un inversor tradicional. Es un filósofo del riesgo que pasó años como trader de opciones en Wall Street antes de dedicarse a escribir. Sus libros — <em>The Black Swan</em> (2007), <em>Antifragile</em> (2012) — cambiaron cómo los gestores de riesgo piensan sobre la incertidumbre. Su premisa central: la mayoría de los modelos financieros están sistemáticamente equivocados porque subestiman la probabilidad y el impacto de los eventos extremos.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            El problema con la campana de Gauss
          </h2>
          <p>
            Los modelos financieros clásicos asumen que los retornos de las acciones siguen una distribución normal — la famosa campana de Gauss. En ese modelo, los eventos extremos son astronómicamente raros. El crash de 1987, la crisis de 2008, la pandemia de 2020: según los modelos, ninguno debería haber ocurrido en la historia del universo.
          </p>
          <p className="mt-3">
            Pero ocurrieron. Y volverán a ocurrir. Los mercados financieros tienen colas gordas: los eventos extremos son mucho más frecuentes de lo que la curva normal predice. Cualquier empresa o cartera de inversión que no esté preparada para esos eventos es frágil.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Las tres categorías: frágil, robusto, antifrágil
          </h2>
          <p>
            Taleb clasifica todos los sistemas — incluyendo empresas — en tres categorías según cómo responden al estrés y la volatilidad:
          </p>
          <div className="mt-4 space-y-3">
            <div className="rounded-lg p-4" style={{ background: 'rgba(248,113,113,0.06)', border: '1px solid rgba(248,113,113,0.15)' }}>
              <div className="font-semibold text-xs mb-1" style={{ color: '#f87171' }}>Frágil</div>
              <p className="text-xs leading-relaxed" style={{ color: '#7A8A95' }}>
                Se deteriora con el estrés. Una empresa con mucha deuda, márgenes finos y cliente concentrado es frágil: un shock pequeño la puede destruir. Buscan estabilidad aparente pero acumulan riesgo invisible.
              </p>
            </div>
            <div className="rounded-lg p-4" style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.15)' }}>
              <div className="font-semibold text-xs mb-1" style={{ color: '#C9A84C' }}>Robusto</div>
              <p className="text-xs leading-relaxed" style={{ color: '#7A8A95' }}>
                Resiste el estrés sin deteriorarse. Empresas con caja neta, ingresos diversificados y márgenes amplios. Sobreviven los shocks pero no necesariamente se benefician de ellos.
              </p>
            </div>
            <div className="rounded-lg p-4" style={{ background: 'rgba(168,189,216,0.06)', border: '1px solid rgba(168,189,216,0.15)' }}>
              <div className="font-semibold text-xs mb-1" style={{ color: COLOR }}>Antifrágil</div>
              <p className="text-xs leading-relaxed" style={{ color: '#7A8A95' }}>
                Gana con el estrés. Empresas que se fortalecen cuando sus competidores se debilitan: pueden adquirir talento, clientes y activos a precios de crisis. Amazon salió más fuerte de 2008. Visa salió más fuerte de la pandemia.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Señales de fragilidad corporativa
          </h2>
          <p className="mb-3">Taleb identifica varios vectores de fragilidad que los inversores suelen ignorar:</p>
          <div className="space-y-3">
            {[
              {
                signal: 'Deuda excesiva',
                detail: 'El apalancamiento amplifica ganancias en tiempos buenos y pérdidas en tiempos malos. Una empresa con deuda/equity alto depende de que los mercados de crédito sigan abiertos — y en una crisis, no siempre lo están.',
              },
              {
                signal: 'Concentración de ingresos',
                detail: 'Un cliente que representa el 30% de los ingresos, un producto único, una región geográfica dominante: son puntos únicos de falla. Si esa concentración colapsa, no hay amortiguador.',
              },
              {
                signal: 'Márgenes operativos finos',
                detail: 'Una empresa con margen operativo del 3% tiene margen de error casi nulo. Un aumento del 5% en costos de insumos puede volverla no rentable. Los márgenes amplios absorben shocks; los márgenes finos se evaporan con ellos.',
              },
              {
                signal: 'Dependencia del crédito externo',
                detail: 'Empresas que financian su crecimiento continuamente en los mercados de capitales asumen que esos mercados estarán disponibles. En una crisis, la ventana se cierra. Las empresas que se financian con flujo propio no tienen ese riesgo.',
              },
              {
                signal: 'Complejidad opaca',
                detail: 'Estructuras financieras complejas, derivados, vehículos fuera de balance: Taleb desconfía de cualquier empresa que no pueda explicar claramente cómo gana dinero. La complejidad oculta riesgos que ni la propia gerencia ve.',
              },
            ].map(({ signal, detail }) => (
              <div key={signal} className="rounded-lg p-3" style={{ background: 'rgba(7,43,24,0.5)', border: '1px solid rgba(168,189,216,0.08)' }}>
                <div className="text-xs font-semibold mb-1" style={{ color: COLOR }}>{signal}</div>
                <p className="text-xs leading-relaxed" style={{ color: '#5A7A65' }}>{detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            La estrategia barbell
          </h2>
          <p>
            Para su propia cartera, Taleb aplica lo que llama la estrategia "barbell" (mancuerna): 80-90% en activos extremadamente seguros (bonos de gobierno de corto plazo, caja) y 10-20% en apuestas especulativas con upside ilimitado (opciones fuera del dinero, startups tempranas). El medio — renta fija corporativa con rendimiento "razonable", acciones de calidad moderada — lo evita deliberadamente.
          </p>
          <p className="mt-3">
            La lógica es que el segmento seguro te protege de la ruina, y el especulativo te expone al upside de los eventos extremos positivos. El medio da la ilusión de seguridad mientras acumula riesgo invisible.
          </p>
          <blockquote className="border-l-2 pl-4 mt-4 italic"
            style={{ borderColor: 'rgba(168,189,216,0.4)', color: 'rgba(232,237,245,0.7)', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            &ldquo;El frágil quiere tranquilidad y estabilidad; el antifrágil prospera con el desorden.&rdquo;
            <span className="block mt-1 not-italic text-xs" style={{ color: '#4A6A55' }}>— Nassim Taleb</span>
          </blockquote>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Cómo OBG aplica el filtro Taleb
          </h2>
          <p>
            El sabio Taleb en <span translate="no">Omaha Bridge Group</span> evalúa cada empresa en busca de señales de fragilidad: ratio de cobertura de intereses, concentración de ingresos, dependencia del mercado de capitales, y exposición a shocks de materias primas o regulatorios. El análisis no busca predecir el cisne negro — eso es imposible por definición — sino identificar qué tan preparada está la empresa para sobrevivir uno.
          </p>
          <p className="mt-3">
            El resultado es un nivel de fragilidad (frágil, robusto o antifrágil) y una lista de advertencias específicas si existen señales de riesgo oculto.
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
            { slug: 'peg-peter-lynch', label: '♣ Lynch' },
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
          ¿Querés ver el análisis de fragilidad de una acción real?
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
