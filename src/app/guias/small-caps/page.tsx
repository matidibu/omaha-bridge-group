import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'Small caps y value investing: dónde encuentran oportunidades los inversores | Omaha Bridge Group',
  description: 'Las empresas pequeñas son ignoradas por fondos masivos. Eso crea ineficiencias que el inversor individual puede explotar. Guía sobre riesgos, liquidez y cómo analizar small caps.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/small-caps' },
  openGraph: {
    title: 'Small caps y value investing | Omaha Bridge Group',
    description: 'Por qué las empresas pequeñas ofrecen las mejores oportunidades (y los mayores riesgos) al inversor value.',
    type: 'article',
  },
}

const COLOR = '#C9A84C'

export default function SmallCapsPage() {
  return (
    <GuiasShell articleMeta={{
      title: 'Small caps y value investing: dónde encuentran oportunidades los inversores',
      description: 'Las empresas pequeñas son ignoradas por fondos masivos. Eso crea ineficiencias. Guía sobre riesgos, liquidez y análisis.',
      publishDate: '2026-05-15',
      url: 'https://omaha-bridge-group.vercel.app/guias/small-caps',
      image: 'https://omaha-bridge-group.vercel.app/og-guias.png',
      keywords: 'small caps, empresas pequeñas, oportunidades',
      readingTimeMinutes: 9,
    }}>
      <div className="mb-10">
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          Estrategia · Selección de valores
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          Small caps: oportunidades y riesgos
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Demasiado pequeña para que Wall Street la note. Lo suficientemente grande para ganar dinero real.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>9 min de lectura</span>
          <span>·</span>
          <span>Estrategia · Riesgo</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-sm leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          Un fondo de inversión con $20 mil millones bajo administración no puede comprar empresa de $100 millones. Los costos administrativos serían prohibitivos. Pero vos, como inversor individual, sí podés. Eso es tu ventaja comparativa.
        </p>
        <p>
          Las small caps son donde el value investing funciona mejor: falta de cobertura analítica, baja liquidez que asusta a los fondos indexados, y gerentes propietarios que están más alineados con accionistas minoritarios. Pero requieren disciplina más estricta.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Qué es una small cap: definición práctica
          </h2>
          <p>
            No hay definición universal. El S&P 600 (índice de small caps USA) incluye empresas de $300M a $2B de capitalización. Pero para nosotros, el punto importante es: empresas lo suficientemente grandes para ser serias, pero lo suficientemente pequeñas para que pocos analistas las cubran.
          </p>
          <p className="mt-3">
            En Argentina, una small cap podría ser cualquier empresa que no esté en el Merval puro. En CEDEARs, empresas chicas de USA con market cap de $200M a $500M.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            La ventaja: falta de eficiencia de mercado
          </h2>
          <p>
            Los precios de las small caps son menos eficientes. Hay menos análisis, menos información fluye, más especulación local. Eso crea oportunidades para quien estudia.
          </p>
          <p className="mt-3">
            Si descubrís una small cap negociando a 0.7x de FCF mientras el sector está a 1.3x, tienes tiempo antes de que los arbitrajistas y fondos pequeños noten la discrepancia y corrijan el precio.
          </p>
          <p className="mt-3">
            Con las mega caps (Apple, Microsoft, Google), cualquier error de análisis es explotado por cien mil traders y algoritmos en microsegundos. Con small caps, tienes semanas o meses.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            El riesgo 1: Liquidez
          </h2>
          <p>
            Es el riesgo principal. Una acción puede estar barata, pero si no podés venderla, quedaste atrapado.
          </p>
          <p className="mt-3">
            Antes de comprar, verificá: ¿hay volumen diario regular? ¿El bid-ask spread es razonable (menos de 2% del precio)? Si tenés que esperar una semana para vender 50% de tu posición, es muy ilíquida.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            El riesgo 2: Información y fraude
          </h2>
          <p>
            Con menos cobertura vienen menos ojos vigilando. El riesgo de manipulación, mal manejo o incluso fraude es mayor. Buffett dice: "El mejor precio es el que no compras".
          </p>
          <p className="mt-3">
            Hablá directamente con el CEO si es posible. Lee las actas de directorios. Verifica de forma independiente las métricas clave. No confíes solo en lo que reporta la empresa.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Cómo OBG las analiza
          </h2>
          <p>
            Small caps en CEDEARs. Miramos el FCF, ROIC, deuda y moat igual que mega caps. Pero reducimos posición size a 2-3% en vez de 5%, porque el riesgo es mayor. Y exigimos un margen de seguridad más grande: si una mega cap merecería 30% descuento, una small cap necesita 50%.
          </p>
        </section>

      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', margin: '2.5rem 0' }} />

      <section className="mb-8">
        <p className="text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(201,168,76,0.5)' }}>Guías relacionadas</p>
        <div className="flex flex-wrap gap-2">
          {[
            { slug: 'margen-de-seguridad', label: 'Margen de seguridad' },
            { slug: 'precio-vs-valor', label: 'Precio vs valor' },
            { slug: 'buffett-criterios', label: '♥ Criterios Buffett' },
            { slug: 'deuda-en-value-investing', label: 'Deuda' },
            { slug: 'cedears-guia-completa', label: 'CEDEARs' },
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
          ¿Querés encontrar small caps infravalorizadas?
        </p>
        <Link href="/"
          className="inline-block px-6 py-2.5 rounded-full font-semibold text-sm transition-all hover:opacity-90"
          style={{ background: '#C9A84C', color: '#051A10' }}>
          Ver screener →
        </Link>
      </section>
    </GuiasShell>
  )
}
