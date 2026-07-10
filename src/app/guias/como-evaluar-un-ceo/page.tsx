import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'Cómo detectar si el CEO te está robando',
  description: 'Los signos de un CEO genio vs un CEO ladrón. Cómo Buffett lee el carácter. Cómo no caer en la trampa.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/como-evaluar-un-ceo' },
  openGraph: {
    title: 'Cómo evaluar a un CEO',
    description: 'Las señales que distinguen a un directivo excelente de uno mediocre: asignación de capital, honestidad y horizonte temporal.',
    type: 'article',
  },
}

const COLOR = '#C9A84C'

export default function ComoEvaluarUnCeoPage() {
  return (
    <GuiasShell articleMeta={{
      title: 'CEO: genio o ladrón. Cómo ver la diferencia',
      description: 'Cómo Buffett lee a los CEOs. Cómo evitar los traidores.',
      publishDate: '2025-05-15',
      url: 'https://omaha-bridge-group.vercel.app/guias/como-evaluar-un-ceo',
      image: 'https://omaha-bridge-group.vercel.app/og-guias.png',
      keywords: 'gestión empresarial, liderazgo, análisis de calidad',
      readingTimeMinutes: 7,
    }}>
      <div className="mb-10">
        <p className="text-sm md:text-base uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          Conceptos esenciales · Gobierno corporativo
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          Cómo evaluar a un CEO
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Buffett dedica semanas a leer cartas anuales. Lo que busca es consistencia entre lo que el directivo dice y lo que hace.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>7 min de lectura</span>
          <span>·</span>
          <span>Gobierno corporativo · Análisis cualitativo</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-base md:text-lg leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          Un negocio excelente puede ser destruido por un CEO mediocre. Y un negocio mediocre puede ser transformado por un directivo excepcional. La calidad de la gestión es el factor más difícil de cuantificar en el análisis de inversiones — pero también uno de los más determinantes para el resultado a largo plazo.
        </p>
        <p>
          Buffett lo resume en tres atributos que busca en cualquier directivo: inteligencia, energía y honestidad. Y agrega que sin el tercero, los primeros dos son destructivos. Un CEO inteligente y enérgico pero deshonesto destruirá más valor del que podría crear cualquier inepto bienintencionado.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            La prueba de la asignación de capital
          </h2>
          <p>
            La función más importante de un CEO no es gestionar operaciones cotidianas — para eso están los equipos operativos. La función más importante es decidir qué hacer con el flujo de caja libre que genera el negocio: reinvertirlo en crecimiento orgánico, hacer adquisiciones, recomprar acciones, pagar dividendos, o acumular caja.
          </p>
          <p className="mt-3">
            Un directivo excepcional asigna capital donde el retorno es mayor. Recompra acciones cuando cotizan por debajo del valor intrínseco. Evita adquisiciones apresuradas motivadas por el ego o la presión de "hacer algo". No paga dividendos si puede reinvertir internamente a tasas superiores.
          </p>
          <p className="mt-3">
            La señal de alarma más común es el CEO que hace adquisiciones masivas cuando el negocio genera mucho caja pero no tiene ideas de reinversión interna. Las adquisiciones generan titulares, muestran "actividad" y expanden el ego del directivo — pero la mayoría destruye valor para el accionista. Hay décadas de evidencia estadística que lo demuestran.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Leer las cartas anuales: el lenguaje revela todo
          </h2>
          <p>
            Buffett lee las cartas anuales a accionistas con atención de analista forense. No busca optimismo ni marketing — busca consistencia entre las promesas del año anterior y los resultados del año actual.
          </p>
          <p className="mt-3">
            Las señales positivas en el lenguaje de un directivo:
          </p>
          <ul className="mt-3 space-y-2 pl-4">
            <li style={{ color: '#8A9A85' }}>Reconoce errores con nombre propio: "Cometimos un error al adquirir X porque subestimamos Y".</li>
            <li style={{ color: '#8A9A85' }}>Explica con claridad la tesis de largo plazo y compara resultados contra esa tesis trimestre a trimestre.</li>
            <li style={{ color: '#8A9A85' }}>Habla de flujo de caja libre, no de EBITDA ajustado ni de métricas "no-GAAP" inventadas.</li>
            <li style={{ color: '#8A9A85' }}>Discute los riesgos del negocio con honestidad, no solo las oportunidades.</li>
          </ul>
          <p className="mt-3">
            Las señales negativas:
          </p>
          <ul className="mt-3 space-y-2 pl-4">
            <li style={{ color: '#8A9A85' }}>Cambia la métrica de éxito cuando la original empeora ("antes medíamos crecimiento de ingresos; ahora medimos usuarios activos").</li>
            <li style={{ color: '#8A9A85' }}>Usa lenguaje vago y optimista para resultados pobres: "Invertimos en el futuro" cuando en realidad quiere decir "perdimos dinero".</li>
            <li style={{ color: '#8A9A85' }}>Menciona los éxitos en detalle y los fracasos en oraciones subordinadas.</li>
            <li style={{ color: '#8A9A85' }}>Atribuye los buenos resultados a su gestión y los malos a factores externos.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            La compensación ejecutiva: alineación de intereses
          </h2>
          <p>
            Un CEO cuyos bonos dependen de métricas de corto plazo (precio de la acción, EPS trimestral, crecimiento de ingresos) tiene incentivos para optimizar esas métricas a expensas de la salud de largo plazo del negocio. Puede recortar I+D, diferir mantenimiento de activos, o hacer adquisiciones que inflan el tamaño pero destruyen retornos.
          </p>
          <p className="mt-3">
            Buffett busca directivos cuya compensación esté ligada a métricas de largo plazo: ROIC sobre varios años, crecimiento del valor contable por acción, o simplemente que posean acciones reales de la empresa (compradas con su propio dinero, no solo otorgadas como bonos). Un directivo con millones de dólares propios invertidos en la empresa piensa como accionista, no como empleado.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            El track record: resultados a lo largo del tiempo
          </h2>
          <p>
            El mejor predictor de la calidad futura de un directivo es su historial. Mirá sus decisiones de los últimos 5-10 años: las adquisiciones que hizo, el retorno que generaron, cómo manejó las crisis, si cumplió las promesas de capital allocation que hizo. Un CEO puede tener mala suerte en un año; un patrón de decisiones mediocres a lo largo de una década no es mala suerte.
          </p>
          <p className="mt-3">
            Prestá especial atención a cómo el directivo actuó durante la última recesión o crisis del sector. Los buenos directivos usaron esas crisis para fortalecer el negocio: recortaron costos estructuralmente (no solo los variables), compraron activos baratos de competidores en apuros, y preservaron caja cuando otros quemaban la suya. Los mediocres los pasaron pidiendo rescates o diluyendo accionistas.
          </p>
        </section>

      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', margin: '2.5rem 0' }} />

      <section className="mb-8">
        <p className="text-sm md:text-base uppercase tracking-widest mb-4" style={{ color: 'rgba(201,168,76,0.5)' }}>Guías relacionadas</p>
        <div className="flex flex-wrap gap-2">
          {[
            { slug: 'buffett-criterios', label: '♥ Criterios Buffett' },
            { slug: 'calidad-institucional-fink', label: '✦ Calidad Fink' },
            { slug: 'tipos-de-moat', label: 'Tipos de moat' },
            { slug: 'flujo-de-caja-libre', label: 'Flujo de caja libre' },
            { slug: 'deuda-en-value-investing', label: 'Deuda en inversión' },
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
          ¿Cómo evalúan los 6 maestros la calidad institucional de tu empresa?
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
