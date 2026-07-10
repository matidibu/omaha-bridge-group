import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'Los ratios que revelan si el CEO es genio o ladrón',
  description: 'ROE, ROA, ROIC: los números que ven la verdad detrás del CEO. Cuál confía, cuál es trampa. Por qué Buffett mira solo ROIC.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/roe-roa-roic' },
  openGraph: {
    title: 'ROE, ROA y ROIC: cuál métrica importa',
    description: 'Las tres métricas de retorno explicadas, sus trampa s, y cuál deberías usar realmente para invertir.',
    type: 'article',
  },
}

const COLOR = '#C9A84C'

export default function RoeRoaRoicPage() {
  return (
    <GuiasShell articleMeta={{
      title: 'ROE, ROA, ROIC: cuál es verdad, cuál es trampa',
      description: 'Cómo saber si el CEO es genio o está engañando. Por qué Buffett mira solo ROIC.',
      publishDate: '2026-05-15',
      url: 'https://omaha-bridge-group.vercel.app/guias/roe-roa-roic',
      image: 'https://omaha-bridge-group.vercel.app/og-guias.png',
      keywords: 'roe, roa, roic, métricas de retorno',
      readingTimeMinutes: 8,
    }}>
      <div className="mb-10">
        <p className="text-sm md:text-base uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          Métricas · Retorno sobre inversión
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          ROE, ROA y ROIC
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Tres métricas que suenan similares pero miden cosas muy distintas.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>8 min de lectura</span>
          <span>·</span>
          <span>Análisis fundamental · Métricas</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-base md:text-lg leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          Un inversor no pregunta "¿cuánta ganancia tuvo la empresa?" sino "¿cuánta ganancia generó por cada dólar que invertí?" Sin esa relación, los números no dicen nada. Una empresa con $10 millones de ganancia es excelente si invirtió $20 millones. Es desastre si invirtió $200 millones.
        </p>
        <p>
          Las tres métricas más usadas para responder esa pregunta son <strong style={{ color: '#C9D4E0' }}>ROE</strong>, <strong style={{ color: '#C9D4E0' }}>ROA</strong> y <strong style={{ color: '#C9D4E0' }}>ROIC</strong>. Todas dicen "retorno", pero sobre bases muy distintas. Entender la diferencia es crítico para no caer en trampas.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            ROE: Retorno sobre el Patrimonio
          </h2>
          <p>
            <strong style={{ color: '#C9D4E0' }}>ROE = Ganancia Neta / Patrimonio Neto</strong>
          </p>
          <p className="mt-3">
            Si una empresa tiene $100 millones de patrimonio (lo que aportaron los accionistas) y genera $20 millones de ganancia, su ROE es 20%. Es decir, cada dólar de equity produjo 20 centavos de ganancia.
          </p>
          <p className="mt-3">
            <strong style={{ color: '#C9D4E0' }}>La trampa del ROE:</strong> Si la empresa aumenta la deuda y mantiene la ganancia igual, el patrimonio baja (porque la deuda lo compensa), y el ROE sube. Una empresa puede tener ROE de 25% porque está muy apalancada, no porque sea más eficiente.
          </p>
          <p className="mt-3">
            Ejemplo: Banco A tiene $50M en equity y genera $10M de ganancia (ROE = 20%). Si toma $100M de deuda (total activos $200M) pero genera los mismos $10M, su ROE sube a 20% porque el equity es ahora $50M. Pero no es más rentable — está más apalancado y más riesgoso.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            ROA: Retorno sobre los Activos
          </h2>
          <p>
            <strong style={{ color: '#C9D4E0' }}>ROA = Ganancia Neta / Activos Totales</strong>
          </p>
          <p className="mt-3">
            Si una empresa tiene $200 millones en activos (máquinas, inventario, dinero, etc.) y genera $20 millones de ganancia, su ROA es 10%. Mide la eficiencia de usar los activos sin importar cómo se financiaron.
          </p>
          <p className="mt-3">
            ROA es más limpio que ROE porque no se distorsiona por apalancamiento. Pero tiene su propia trampa: si una empresa vende un activo antiguo valuado a bajo valor, la ganancia sube pero los activos bajan, inflando el ROA.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            ROIC: Retorno sobre el Capital Invertido — La favorita de Buffett
          </h2>
          <p>
            <strong style={{ color: '#C9D4E0' }}>ROIC = EBIT (1 - Tasa Impositiva) / Capital Invertido</strong>
          </p>
          <p className="mt-3">
            El capital invertido es la suma de patrimonio + deuda neta de interés en caja. Es el dinero real puesto en la empresa, independientemente de la estructura de financiamiento.
          </p>
          <p className="mt-3">
            ROIC es superior porque mide qué genera el negocio operativo sobre todo el dinero puesto en él, sin importar si fue financiado con equity o deuda. Es el "retorno real del negocio".
          </p>
          <p className="mt-3">
            Un ROIC de 15%+ sostenido durante años demuestra un negocio con ventaja competitiva real. Un ROIC de 5% cuando el costo de capital es 10% es un mal negocio: destruye valor.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            ¿Cuál usar?
          </h2>
          <p>
            <strong style={{ color: '#C9D4E0' }}>Para empresas sin deuda (o con muy poca):</strong> ROE y ROIC son casi iguales. ROE es más simple.
          </p>
          <p className="mt-3">
            <strong style={{ color: '#C9D4E0' }}>Para empresas apalancadas (bancos, empresas de energía):</strong> ROIC evita la distorsión del apalancamiento. Es tu mejor aliado.
          </p>
          <p className="mt-3">
            <strong style={{ color: '#C9D4E0' }}>Para comparar entre industrias:</strong> ROIC es el único que te permite comparar justamente una empresa sin deuda con otra sobreapalancada.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Cómo OBG lo usa
          </h2>
          <p>
            En nuestros análisis, miramos primero el ROIC histórico. Si es consistentemente superior al costo de capital (WACC), el negocio tiene moat. Si es inferior, no importa cuán barata esté la acción — está destruyendo valor.
          </p>
        </section>

      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', margin: '2.5rem 0' }} />

      <section className="mb-8">
        <p className="text-sm md:text-base uppercase tracking-widest mb-4" style={{ color: 'rgba(201,168,76,0.5)' }}>Guías relacionadas</p>
        <div className="flex flex-wrap gap-2">
          {[
            { slug: 'flujo-de-caja-libre', label: 'Flujo de caja libre' },
            { slug: 'tipos-de-moat', label: 'Tipos de moat' },
            { slug: 'buffett-criterios', label: '♥ Criterios Buffett' },
            { slug: 'como-leer-un-balance', label: 'Leer un balance' },
            { slug: 'deuda-en-value-investing', label: 'Deuda' },
          ].map(({ slug, label }) => (
            <Link key={slug} href={`/guias/${slug}`}
              className="text-sm md:text-base px-3 py-1.5 rounded-full border transition-colors hover:border-[#C9A84C]/40 hover:text-[#C9A84C]"
              style={{ color: '#6A7A95', borderColor: 'rgba(201,168,76,0.15)', background: 'rgba(7,43,24,0.4)' }}>
              {label}
            </Link>
          ))}
        </div>
      </section>

      <section className="text-center rounded-xl border py-8 px-6"
        style={{ borderColor: 'rgba(201,168,76,0.2)', background: 'rgba(7,43,24,0.5)' }}>
        <p className="text-base mb-4" style={{ color: '#A8BCA8', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          ¿Querés ver estas métricas en una empresa real?
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
