import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'El concepto que separa inversores de ludópatas',
  description: 'Margen de seguridad: comprar $100 por $70. Cómo Graham y Buffett se hacen ricos con esto. Por qué es lo único que importa.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/margen-de-seguridad' },
  openGraph: {
    title: 'El margen de seguridad',
    description: 'El concepto central del value investing: nunca pagar el valor completo de un activo. Siempre exigir descuento.',
    type: 'article',
  },
}

const COLOR = '#C9A84C'

export default function MargenDeSeguridad() {
  return (
    <GuiasShell articleMeta={{
      title: 'Margen de seguridad: la protección que los principiantes ignoran',
      description: 'Compra $100 por $70, no por $99. Cómo Buffett y Graham nunca pierden.',
      publishDate: '2025-05-15',
      url: 'https://omaha-bridge-group.vercel.app/guias/margen-de-seguridad',
      image: 'https://omaha-bridge-group.vercel.app/og-guias.png',
      keywords: 'margen de seguridad, graham, precio vs valor',
      readingTimeMinutes: 7,
    }}>
      <div className="mb-10">
        <p className="text-sm md:text-base uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          Conceptos esenciales · Principios de inversión
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          El margen de seguridad
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Las tres palabras más importantes del value investing, según Graham y Buffett.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>7 min de lectura</span>
          <span>·</span>
          <span>Principios · Valoración · Riesgo</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-base md:text-lg leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          Al final de <em>Security Analysis</em>, después de cientos de páginas de técnicas y fórmulas, Benjamin Graham resumió toda su filosofía en tres palabras: <strong style={{ color: '#C9D4E0' }}>margen de seguridad</strong>. No en el análisis más sofisticado, no en el acceso a mejor información, sino en pagar significativamente menos de lo que un activo vale.
        </p>
        <p>
          Warren Buffett, su discípulo más conocido, dijo que si tuviera que resumir el secreto del investing exitoso en tres palabras, también diría: margen de seguridad. El concepto sobrevivió décadas de evolución en la práctica de Buffett porque resuelve un problema fundamental: los inversores no son omniscientes. Cometemos errores. El margen de seguridad es el colchón que nos protege cuando nos equivocamos.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            La parábola del ingeniero
          </h2>
          <p>
            Graham usaba esta analogía: un ingeniero que diseña un puente para soportar 10.000 kilogramos no construye un puente con capacidad exacta de 10.000 kilogramos. Construye uno que soporte 30.000. El margen extra no es pesimismo — es reconocimiento honesto de que los cálculos tienen errores, los materiales tienen variaciones, y el uso real siempre difiere del planeado.
          </p>
          <p className="mt-3">
            El inversor hace lo mismo. Calcula que una empresa vale $100 por acción. En lugar de comprar a $100 — donde cualquier error en el cálculo lo deja en pérdida — compra a $60 o $70. El descuento del 30-40% es su margen de seguridad. Si estuvo equivocado y la empresa vale $80, igual ganó. Si tuvo razón y vale $100, ganó más. Solo pierde si la empresa vale significativamente menos de $60, lo cual requiere que su análisis haya sido muy gravemente errado.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Valor intrínseco: la base del cálculo
          </h2>
          <p>
            Para calcular el margen de seguridad hay que calcular primero el <strong style={{ color: '#C9D4E0' }}>valor intrínseco</strong> — cuánto vale el negocio en términos absolutos, independientemente del precio que el mercado le asigne en este momento.
          </p>
          <p className="mt-3">
            No existe una fórmula única. Los principales métodos son:
          </p>
          <ul className="mt-3 space-y-3 pl-4">
            <li>
              <strong style={{ color: '#C9D4E0' }}>DCF (Descuento de Flujos de Caja).</strong>
              <span style={{ color: '#8A9A85' }}> Proyectar el FCF a 5-10 años, descontar al presente con una tasa que refleje el riesgo del negocio y sumar un valor terminal. Es el método más riguroso pero el más sensible a los supuestos usados.</span>
            </li>
            <li>
              <strong style={{ color: '#C9D4E0' }}>Múltiplos comparables.</strong>
              <span style={{ color: '#8A9A85' }}> Comparar el EV/EBITDA, P/FCF o P/E de la empresa con competidores de calidad similar. Rápido y práctico, aunque depende de que las empresas comparables estén razonablemente valuadas.</span>
            </li>
            <li>
              <strong style={{ color: '#C9D4E0' }}>Valor de liquidación.</strong>
              <span style={{ color: '#8A9A85' }}> Lo que quedaría si la empresa se liquidara: activos menos deudas. Graham lo usaba como piso de valor para negocios mediocres. Hoy menos aplicable, pero útil como check de seguridad.</span>
            </li>
          </ul>
          <p className="mt-3">
            Cada método produce un rango, no un número exacto. El valor intrínseco no es una cifra precisa sino una banda de probabilidad. La incertidumbre en el cálculo es precisamente la razón por la que el margen de seguridad importa.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Cuánto margen es suficiente
          </h2>
          <p>
            Graham trabajaba con márgenes de seguridad del 50% o más: compraba empresas a la mitad de su valor contable, con ganancias estables y sin deuda. En una era donde la información era escasa y los mercados menos eficientes, esas oportunidades aparecían con frecuencia.
          </p>
          <p className="mt-3">
            Buffett ajustó la ecuación al incorporar la calidad del negocio. Un negocio mediocre necesita un margen de seguridad enorme porque su valor intrínseco es incierto y puede deteriorarse. Un negocio excelente con ventajas competitivas claras y flujos de caja predecibles permite trabajar con márgenes menores — 20-30% — porque la trayectoria futura es más predecible y el valor intrínseco tiende a crecer con el tiempo.
          </p>
          <blockquote className="border-l-2 pl-4 mt-4 italic"
            style={{ borderColor: 'rgba(201,168,76,0.4)', color: 'rgba(232,237,245,0.7)', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            &ldquo;Es mucho mejor comprar una empresa maravillosa a un precio justo que una empresa justa a un precio maravilloso.&rdquo;
            <span className="block mt-1 not-italic text-xs" style={{ color: '#4A6A55' }}>— Warren Buffett</span>
          </blockquote>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Margen de seguridad y gestión del riesgo
          </h2>
          <p>
            El margen de seguridad no es optimismo — es gestión del riesgo. No garantiza ganancias; garantiza que las pérdidas requieran errores graves y múltiples para materializarse. Un inversor que siempre exige margen de seguridad puede tener muchos análisis equivocados y aun así preservar capital, porque cada error individual está amortiguado.
          </p>
          <p className="mt-3">
            La alternativa — comprar activos a su valor justo estimado o por encima — requiere precisión perfecta en el análisis. Cualquier error, por pequeño que sea, se convierte en pérdida. Y los errores son inevitables: el futuro no es calculable con precisión, los mercados son complejos, y la información nunca es completa.
          </p>
          <p className="mt-3">
            El inversor que exige margen de seguridad acepta perderse oportunidades que resulten ser correctas pero que no ofrecen precio suficiente. Ese es el costo. El beneficio es que cuando algo sale mal — y siempre habrá cosas que salgan mal — el daño es limitado.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            El margen de seguridad en mercados alcistas
          </h2>
          <p>
            La mayor prueba del principio ocurre en mercados alcistas prolongados. Cuando todo sube y los múltiplos se expanden, los activos con margen de seguridad desaparecen. El inversor disciplinado se queda con caja, observa cómo las acciones que analizó "se escapan", y soporta la presión social de parecer conservador.
          </p>
          <p className="mt-3">
            Buffett acumuló caja récord durante 2021-2023, cuando los mercados estaban muy caros. Muchos lo criticaron. Luego llegaron las correcciones de 2022, y esa caja le permitió comprar a precios razonables mientras otros vendían a pérdida. El margen de seguridad no se aplica solo acción por acción — también a nivel de portafolio: mantener liquidez cuando el mercado no ofrece margen es también una forma de practicarlo.
          </p>
        </section>

      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', margin: '2.5rem 0' }} />

      <section className="mb-8">
        <p className="text-sm md:text-base uppercase tracking-widest mb-4" style={{ color: 'rgba(201,168,76,0.5)' }}>Guías relacionadas</p>
        <div className="flex flex-wrap gap-2">
          {[
            { slug: 'buffett-criterios', label: '♥ Criterios Buffett' },
            { slug: 'precio-vs-valor', label: 'Precio vs valor' },
            { slug: 'flujo-de-caja-libre', label: 'Flujo de caja libre' },
            { slug: 'errores-comunes-value-investing', label: 'Errores comunes' },
            { slug: 'psicologia-del-inversor', label: 'Psicología del inversor' },
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
          ¿Tiene margen de seguridad la acción que te interesa?
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
