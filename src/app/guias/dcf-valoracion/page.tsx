import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'La fórmula que Buffett usa para fijar precio: DCF sin magia',
  description: 'DCF: cómo calcular valor real. Cómo Buffett predice futuro. Cómo saber si una acción es cara o barata.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/dcf-valoracion' },
  openGraph: {
    title: 'DCF: cómo valorar una empresa',
    description: 'Proyectar flujo de caja, elegir tasa de descuento, calcular valor intrínseco. El método de Buffett para determinar si una acción es cara o barata.',
    type: 'article',
  },
}

const COLOR = '#C9A84C'

export default function DcfValoracionPage() {
  return (
    <GuiasShell articleMeta={{
      title: 'DCF: la fórmula que Buffett usa para fijar precio',
      description: 'Cómo proyectar futuro. Cómo calcular valor real. Cómo saber si es caro o barato.',
      publishDate: '2026-05-15',
      url: 'https://omaha-bridge-group.vercel.app/guias/dcf-valoracion',
      image: 'https://omaha-bridge-group.vercel.app/og-guias.png',
      keywords: 'dcf, descuento de flujos, valoración de empresas',
      readingTimeMinutes: 9,
    }}>
      <div className="mb-10">
        <p className="text-sm md:text-base uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          Valoración · Análisis fundamental
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          DCF: cómo valorar una empresa
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          El dinero de mañana no vale lo mismo que el dinero de hoy. Cómo descuento el futuro.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>9 min de lectura</span>
          <span>·</span>
          <span>Valoración · Flujo de caja</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-base md:text-lg leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          Si inviertes $100 en un depósito que rinde 5% anual, en un año tenés $105. Eso es interés compuesto hacia adelante. Ahora al revés: si alguien te promete $105 en un año, ¿cuánto vale hoy? Exactamente $100 si la tasa de interés es 5%. Eso es <strong style={{ color: '#C9D4E0' }}>descuento</strong>, y es la base de todo análisis de valoración.
        </p>
        <p>
          El <strong style={{ color: '#C9D4E0' }}>DCF (Discounted Cash Flow)</strong> es la aplicación de este principio simple a la valoración de empresas: proyectar cuánto dinero generará el negocio en el futuro, descontarlo al valor presente usando una tasa de rendimiento mínima, y comparar ese valor intrínseco con el precio de mercado.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Los tres pilares del DCF
          </h2>
          <p>
            Todo DCF se apoya en tres estimaciones: el flujo de caja futuro, la tasa de descuento y el valor terminal.
          </p>
          <ul className="mt-3 space-y-3 pl-4">
            <li>
              <strong style={{ color: '#C9D4E0' }}>Flujo de caja libre proyectado.</strong>
              <span style={{ color: '#8A9A85' }}> Estimás cuánto dinero generará el negocio cada año durante 5 o 10 años. Usas el FCF histórico como punto de partida, ajustás por crecimiento esperado y cambios en márgenes. Esto requiere análisis del negocio, no solo números.</span>
            </li>
            <li>
              <strong style={{ color: '#C9D4E0' }}>Tasa de descuento (WACC).</strong>
              <span style={{ color: '#8A9A85' }}> Es el rendimiento mínimo que exigís por invertir en el negocio. Si podés invertir en bonos del tesoro sin riesgo al 5%, ¿por qué invertir en una empresa con más riesgo a menos rendimiento? El WACC combina el costo de capital de deuda y equity.</span>
            </li>
            <li>
              <strong style={{ color: '#C9D4E0' }}>Valor terminal.</strong>
              <span style={{ color: '#8A9A85' }}> Después de 5-10 años, el negocio sigue generando flujo. El valor terminal estima ese flujo perpetuo. Buffett usa una tasa de crecimiento muy conservadora (2-3%) para ser prudente.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Paso a paso: un ejemplo simple
          </h2>
          <p>
            Imaginá una empresa que hoy genera $100 de FCF anual. Esperás que crezca 8% anual durante 5 años, luego 3% para siempre. Tu tasa de descuento es 10%.
          </p>
          <div className="mt-3 p-4 rounded-lg" style={{ background: 'rgba(7,43,24,0.6)', border: '1px solid rgba(201,168,76,0.15)' }}>
            <p className="font-mono text-xs" style={{ color: '#E8EDF5' }}>
              Año 1: $100 × 1.08 = $108 → descuento: $108 / 1.10¹ = $98<br />
              Año 2: $108 × 1.08 = $117 → descuento: $117 / 1.10² = $97<br />
              Año 3-5: similar<br />
              <br />
              Valor terminal = (FCF año 5 × 1.03) / (0.10 - 0.03)<br />
              Sumar presente de todos los años = Valor intrínseco
            </p>
          </div>
          <p className="mt-3">
            Si el resultado es $1.500 y la empresa cotiza a $1.000 (market cap), está 33% barata. Si cotiza a $2.000, está 33% cara. Ese descuento (o premium) respecto al DCF es tu margen de seguridad — o tu advertencia de riesgo.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Por qué el DCF es tanto arte como ciencia
          </h2>
          <p>
            La matemática es precisa. Las proyecciones no. Un error del 1% en la tasa de crecimiento cambia el DCF 10-20%. Un cambio de 0.5% en la tasa de descuento puede reducir el valor a la mitad.
          </p>
          <p className="mt-3">
            Por eso Buffett dice que el DCF es útil para pensar, no para calcular con exactitud. No es "este negocio vale $1.547,82". Es "este negocio vale entre $1.200 y $1.800, y el mercado lo ve a $900, así que hay oportunidad".
          </p>
          <p className="mt-3">
            La disciplina está en la <strong style={{ color: '#C9D4E0' }}>sensibilidad</strong>: probá diferentes escenarios. Si el DCF es muy sensible a un pequeño cambio, significa que tu análisis depende demasiado de una proyección incierta. Eso es señal de alerta.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Trampas comunes en el DCF
          </h2>
          <ul className="mt-3 space-y-3 pl-4">
            <li>
              <strong style={{ color: '#C9D4E0' }}>Proyectar crecimiento demasiado optimista.</strong>
              <span style={{ color: '#8A9A85' }}> Una empresa que creció 15% en cinco años es proyectada a 12% para otros diez. Eso rara vez ocurre. Sé conservador.</span>
            </li>
            <li>
              <strong style={{ color: '#C9D4E0' }}>Olvidar el capital de trabajo.</strong>
              <span style={{ color: '#8A9A85' }}> Si el negocio crece, necesita más inventario, más cuentas por cobrar. Eso es flujo de caja que se consume hoy.</span>
            </li>
            <li>
              <strong style={{ color: '#C9D4E0' }}>Usar una tasa de descuento demasiado baja.</strong>
              <span style={{ color: '#8A9A85' }}> Buffett exige WACC de 10%+ incluso en empresas excelentes. Eso descuenta la incertidumbre del futuro.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Cómo OBG usa el DCF
          </h2>
          <p>
            En nuestros análisis, calculamos un DCF de tres escenarios: base (proyección más probable), alcista (mejor caso) y bajista (peor caso que aún sigue siendo viable). El rango de precio objetivo refleja eso: tenemos un piso, un precio justo y un techo. El precio de mercado se ubica en algún lado de ese rango, y eso informa nuestra decisión de compra.
          </p>
        </section>

      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', margin: '2.5rem 0' }} />

      <section className="mb-8">
        <p className="text-sm md:text-base uppercase tracking-widest mb-4" style={{ color: 'rgba(201,168,76,0.5)' }}>Guías relacionadas</p>
        <div className="flex flex-wrap gap-2">
          {[
            { slug: 'flujo-de-caja-libre', label: 'Flujo de caja libre' },
            { slug: 'precio-vs-valor', label: 'Precio vs valor' },
            { slug: 'margen-de-seguridad', label: 'Margen de seguridad' },
            { slug: 'buffett-criterios', label: '♥ Criterios Buffett' },
            { slug: 'interes-compuesto', label: 'Interés compuesto' },
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
          ¿Querés ver el DCF aplicado a una acción real?
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
