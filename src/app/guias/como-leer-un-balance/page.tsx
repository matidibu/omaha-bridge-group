import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'Cómo leer un balance general — Guía para inversores | Omaha Bridge Group',
  description: 'El balance general revela la fortaleza financiera de una empresa. Activos, pasivos y patrimonio neto explicados con ejemplos reales y las señales de alerta que debe buscar todo inversor value.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/como-leer-un-balance' },
  openGraph: {
    title: 'Cómo leer un balance general | Omaha Bridge Group',
    description: 'Activos, pasivos y patrimonio neto: cómo extraer lo que importa del balance para evaluar la salud financiera de una empresa.',
    type: 'article',
  },
}

const COLOR = '#C9A84C'

export default function ComoLeerUnBalancePage() {
  return (
    <GuiasShell articleMeta={{
      title: 'Cómo leer un balance general — Guía para inversores',
      description: 'El balance general revela la fortaleza financiera de una empresa. Activos, pasivos y patrimonio neto explicados con ejemplos reales y las señales de alerta que debe buscar todo inversor value.',
      publishDate: '2025-05-15',
      url: 'https://omaha-bridge-group.vercel.app/guias/como-leer-un-balance',
      image: 'https://omaha-bridge-group.vercel.app/og-guias.png',
      keywords: 'estados financieros, balance sheet, contabilidad',
      readingTimeMinutes: 8,
    }}>
      <div className="mb-10">
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          Conceptos esenciales · Estados financieros
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          Cómo leer un balance general
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Una fotografía de la empresa en un momento dado: qué tiene, qué debe y qué le queda a los dueños.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>8 min de lectura</span>
          <span>·</span>
          <span>Estados financieros · Análisis fundamental</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-sm leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          De los tres estados financieros principales — balance general, estado de resultados y flujo de caja — el balance es el que más se ignora y el más revelador sobre la salud estructural de un negocio. El estado de resultados dice cuánto ganó la empresa en el último año. El balance dice si ese éxito descansa sobre una base sólida o sobre deuda que tarde o temprano deberá pagarse.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            La ecuación fundamental
          </h2>
          <p>
            El balance descansa sobre una identidad contable inviolable:
          </p>
          <div className="mt-3 p-4 rounded-lg" style={{ background: 'rgba(7,43,24,0.6)', border: '1px solid rgba(201,168,76,0.15)' }}>
            <p className="font-mono text-sm" style={{ color: '#E8EDF5' }}>
              Activos = Pasivos + Patrimonio Neto
            </p>
          </div>
          <p className="mt-3">
            Todo lo que la empresa tiene (activos) fue financiado por alguien: o por acreedores (pasivos) o por los propietarios (patrimonio neto). Esa identidad se cumple siempre, por construcción contable. La pregunta que le importa al inversor es: ¿en qué proporción?
          </p>
          <p className="mt-3">
            Una empresa con activos de $1.000M financiados 40% con pasivos y 60% con patrimonio tiene una estructura muy diferente — en riesgo y resiliencia — a una empresa con los mismos activos financiados 80% con pasivos. La primera puede sobrevivir una crisis; la segunda puede no poder.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Los activos: qué tiene la empresa y qué vale
          </h2>
          <p>
            Los activos se dividen en <strong style={{ color: '#C9D4E0' }}>corrientes</strong> (líquidos o convertibles a efectivo en menos de un año) y <strong style={{ color: '#C9D4E0' }}>no corrientes</strong> (de largo plazo).
          </p>
          <ul className="mt-3 space-y-3 pl-4">
            <li>
              <strong style={{ color: '#C9D4E0' }}>Caja y equivalentes.</strong>
              <span style={{ color: '#8A9A85' }}> El activo más transparente. Una empresa con mucha caja tiene flexibilidad estratégica. Verificá que sea caja real, no inversiones ilíquidas clasificadas como "equivalentes de caja".</span>
            </li>
            <li>
              <strong style={{ color: '#C9D4E0' }}>Cuentas por cobrar.</strong>
              <span style={{ color: '#8A9A85' }}> Lo que los clientes adeudan a la empresa. Mirá si crecen más rápido que las ventas — puede indicar dificultades de cobro o reconocimiento agresivo de ingresos.</span>
            </li>
            <li>
              <strong style={{ color: '#C9D4E0' }}>Inventarios.</strong>
              <span style={{ color: '#8A9A85' }}> Para empresas manufactureras y retailers, el inventario acumulado que crece más rápido que las ventas es una señal de alerta: puede indicar productos que no se venden o pérdida de demanda.</span>
            </li>
            <li>
              <strong style={{ color: '#C9D4E0' }}>Activos fijos (PP&E).</strong>
              <span style={{ color: '#8A9A85' }}> Plantas, maquinaria, equipos. Se deprecian con el tiempo. Un negocio con activos fijos muy viejos puede necesitar capex masivo para modernizarlos en los próximos años.</span>
            </li>
            <li>
              <strong style={{ color: '#C9D4E0' }}>Goodwill e intangibles.</strong>
              <span style={{ color: '#8A9A85' }}> Aparecen cuando una empresa adquirió otra y pagó por encima del valor en libros. El goodwill puede ser real (una marca valiosa) o ficticio (sobrepage en adquisición). Si representa más del 50% del patrimonio neto, examinalo con cuidado.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Los pasivos: qué debe la empresa y cuándo
          </h2>
          <p>
            Los pasivos corrientes son obligaciones que vencen en menos de un año: cuentas por pagar a proveedores, deuda de corto plazo, impuestos acumulados. Los pasivos no corrientes incluyen la deuda de largo plazo, pensiones y arrendamientos capitalizados.
          </p>
          <p className="mt-3">
            Las preguntas clave al revisar pasivos:
          </p>
          <ul className="mt-3 space-y-2 pl-4">
            <li style={{ color: '#8A9A85' }}>¿Cuánto de la deuda vence en los próximos 12 meses? ¿Tiene la empresa flujo de caja o líneas de crédito para cubrirlo?</li>
            <li style={{ color: '#8A9A85' }}>¿Cuál es la tasa de interés promedio de la deuda? ¿Hay deuda a tasa variable que podría encarecerse?</li>
            <li style={{ color: '#8A9A85' }}>¿Existen pasivos contingentes (litigios, garantías, compromisos de compra) que no aparecen en el balance pero podrían materializarse?</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            El patrimonio neto: lo que queda para los dueños
          </h2>
          <p>
            El patrimonio neto (o <span translate="no">equity</span>) es la diferencia entre activos y pasivos. Es la parte del negocio que pertenece a los accionistas. Incluye el capital aportado originalmente, las ganancias acumuladas que no fueron distribuidas como dividendos, y los ajustes por recompra de acciones propias.
          </p>
          <p className="mt-3">
            Un patrimonio neto negativo no significa automáticamente que la empresa esté en problemas — algunas empresas con flujos de caja excepcionales lo tienen negativo por recompras masivas (McDonald's, por ejemplo). Pero en empresas sin esa característica, indica que los pasivos superan a los activos a valor en libros, lo cual es una señal de fragilidad.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Ratios clave derivados del balance
          </h2>
          <ul className="space-y-3">
            <li>
              <strong style={{ color: '#C9D4E0' }}>Current Ratio = Activos corrientes / Pasivos corrientes.</strong>
              <span style={{ color: '#8A9A85' }}> Mide la capacidad de pagar deuda de corto plazo con activos líquidos. Por debajo de 1x, la empresa puede necesitar financiamiento adicional para cubrir sus obligaciones inmediatas.</span>
            </li>
            <li>
              <strong style={{ color: '#C9D4E0' }}>Deuda/Equity = Deuda total / Patrimonio neto.</strong>
              <span style={{ color: '#8A9A85' }}> Estructura de capital. Por encima de 2x en industrias cíclicas, el riesgo aumenta considerablemente.</span>
            </li>
            <li>
              <strong style={{ color: '#C9D4E0' }}>Book Value per Share.</strong>
              <span style={{ color: '#8A9A85' }}> Patrimonio neto dividido entre el número de acciones. Compararlo con el precio de mercado (ratio P/B) da una referencia de cuánto prima el mercado sobre el valor contable. Un P/B muy bajo puede indicar oportunidad; puede también indicar deterioro del negocio.</span>
            </li>
          </ul>
        </section>

      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', margin: '2.5rem 0' }} />

      <section className="mb-8">
        <p className="text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(201,168,76,0.5)' }}>Guías relacionadas</p>
        <div className="flex flex-wrap gap-2">
          {[
            { slug: 'flujo-de-caja-libre', label: 'Flujo de caja libre' },
            { slug: 'deuda-en-value-investing', label: 'Deuda en inversión' },
            { slug: 'buffett-criterios', label: '♥ Criterios Buffett' },
            { slug: 'magic-formula-greenblatt', label: '♦ Magic Formula' },
            { slug: 'como-analizar-bancos', label: 'Analizar bancos' },
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
          ¿Cómo es el balance de la empresa que te interesa?
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
