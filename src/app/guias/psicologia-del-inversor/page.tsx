import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'Psicología del inversor: los sesgos que destruyen rendimientos',
  description: 'Los errores de inversión más costosos no vienen del análisis incorrecto sino de la psicología. Aversión a la pérdida, sesgo de confirmación, anclaje y pensamiento de manada: cómo reconocerlos y combatirlos.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/psicologia-del-inversor' },
  openGraph: {
    title: 'Psicología del inversor',
    description: 'Los sesgos cognitivos que llevan a comprar caro, vender barato y repetir los mismos errores.',
    type: 'article',
  },
}

const COLOR = '#C9A84C'

export default function PsicologiaDelInversorPage() {
  return (
    <GuiasShell articleMeta={{
      title: 'Psicología del inversor: los sesgos que destruyen rendimientos',
      description: 'Los errores de inversión más costosos no vienen del análisis incorrecto sino de la psicología. Aversión a la pérdida, sesgo de confirmación, anclaje y pensamiento de manada: cómo reconocerlos y combatirlos.',
      publishDate: '2025-05-15',
      url: 'https://omaha-bridge-group.vercel.app/guias/psicologia-del-inversor',
      image: 'https://omaha-bridge-group.vercel.app/og-guias.png',
      keywords: 'psicología del mercado, sesgo, emoción',
      readingTimeMinutes: 8,
    }}>
      <div className="mb-10">
        <p className="text-sm md:text-base uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          Conceptos esenciales · Comportamiento e inversión
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          Psicología del inversor
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          El mayor enemigo del inversor no está en los mercados. Está en el espejo.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>8 min de lectura</span>
          <span>·</span>
          <span>Finanzas conductuales · Mentalidad inversora</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-base md:text-lg leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          Daniel Kahneman ganó el Nobel de Economía en 2002 por demostrar algo que los practicantes del value investing ya sabían intuitivamente: los seres humanos tomamos decisiones financieras de forma sistemáticamente irracional. No ocasionalmente — sistemáticamente. Y esa irracionalidad sigue patrones predecibles que se repiten una y otra vez a través del tiempo y los mercados.
        </p>
        <p>
          Buffett es conocido por decir que la inteligencia no es el factor diferenciador en la inversión — es el temperamento. El inversor mediocre con emociones bajo control supera al analista brillante que entra en pánico cuando los mercados caen. Entender los sesgos no los elimina, pero los hace más manejables.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Aversión a la pérdida: por qué vender en pánico es casi inevitable
          </h2>
          <p>
            Kahneman y Tversky demostraron que el dolor psicológico de perder $100 es aproximadamente el doble del placer de ganar $100. Esta asimetría tiene consecuencias devastadoras en inversión: nos lleva a vender en el peor momento (cuando los precios caen y el dolor es máximo) y a mantener posiciones perdedoras demasiado tiempo (para no "cristalizar" la pérdida).
          </p>
          <p className="mt-3">
            La trampa de la aversión a la pérdida es que el cerebro no distingue entre pérdida flotante y pérdida realizada — el dolor es igualmente intenso. Pero la racionalidad dice que si el análisis fundamental no ha cambiado, una caída de precio es una oportunidad de comprar más barato, no una razón para vender.
          </p>
          <p className="mt-3">
            La solución que Buffett propone: antes de comprar cualquier acción, determiná el valor intrínseco con datos. Anotalo. Decidí de antemano que si cae un 30% sin cambios fundamentales, comprás más — no vendés. Esa decisión pre-comprometida evita que la emoción del momento domine cuando el mercado cae.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Sesgo de confirmación: buscar lo que ya creemos
          </h2>
          <p>
            Una vez que tomamos una decisión de inversión, nuestro cerebro comienza a filtrar la información: busca activamente datos que confirmen la tesis y minimiza o ignora los que la contradicen. Es el sesgo de confirmación, y es especialmente peligroso porque es silencioso e inconsciente.
          </p>
          <p className="mt-3">
            El antídoto clásico de Munger: antes de defender una posición, articula el mejor argumento posible en su contra. Si no podés hacerlo, no entendés el activo lo suficiente. Muchos inversores que perdieron dinero en Enron o WorldCom tenían toda la información necesaria para notar las señales de alerta — pero sus sesgos de confirmación las filtraron.
          </p>
          <p className="mt-3">
            Prácticamente: después de construir tu tesis de inversión, buscá activamente analistas con tesis opuestas. Lee por qué están vendiendo en corto lo que estás comprando. Si sus argumentos son débiles, confirmaste tu análisis. Si tienen puntos que no habías considerado, mejoraste tu evaluación del riesgo.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Anclaje: el primer número que vemos nos atrapa
          </h2>
          <p>
            El sesgo de anclaje ocurre cuando el primer valor que encontramos distorsiona todos nuestros juicios posteriores. Un inversor que compró una acción a $100 y la ve caer a $60 la evalúa como "barata" respecto al $100 de compra — aunque $60 siga siendo demasiado caro respecto al valor intrínseco.
          </p>
          <p className="mt-3">
            Este sesgo es especialmente dañino con las metas de precio. Cuando el mercado cae, los inversores con posiciones perdedoras esperan "volver al precio de entrada" para vender — un nivel que no tiene ninguna relevancia fundamental. El precio de compra ya está pagado y no cambia el valor del activo. La pregunta correcta es siempre: ¿vale la pena tener esta acción al precio actual, independientemente de a cuánto la compré?
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Comportamiento de manada: hacer lo que hacen todos
          </h2>
          <p>
            Los humanos somos animales sociales. En entornos de alta incertidumbre — exactamente como los mercados financieros — la tendencia a hacer lo que hace la mayoría es poderosa y difícil de resistir. El problema es que cuando todos compran, los precios ya están caros. Cuando todos venden, ya están baratos.
          </p>
          <p className="mt-3">
            Howard Marks lo resume: ser contrarian no significa hacer lo opuesto de lo que hace la mayoría. Significa tener una opinión sobre el valor fundamentado en análisis independiente, y actuar sobre esa opinión incluso cuando contradice el consenso. Eso es lo que hace incómodo al value investing — e incómodo es exactamente lo que genera las mejores oportunidades.
          </p>
          <blockquote className="border-l-2 pl-4 mt-4 italic"
            style={{ borderColor: 'rgba(201,168,76,0.4)', color: 'rgba(232,237,245,0.7)', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            &ldquo;Sé temeroso cuando otros son codiciosos y codicioso cuando otros son temerosos.&rdquo;
            <span className="block mt-1 not-italic text-xs" style={{ color: '#4A6A55' }}>— Warren Buffett</span>
          </blockquote>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Exceso de confianza y exceso de actividad
          </h2>
          <p>
            Los estudios muestran consistentemente que los inversores individuales que operan más activamente obtienen peores resultados. La razón: cada transacción genera costos (comisiones, spreads, impuestos sobre ganancias) y la mayoría de las transacciones son motivadas por el exceso de confianza — la creencia de que sabemos algo que el mercado no sabe.
          </p>
          <p className="mt-3">
            Buffett es explícito: el giro de cartera ideal sería cero. Si comprás un negocio excelente a un precio razonable, la decisión correcta suele ser no hacer nada — dejar que el negocio trabaje para vos. Cada decisión de vender y comprar algo diferente requiere tener razón dos veces: acertar al vender y acertar al comprar. La estadística no favorece esa frecuencia de aciertos.
          </p>
        </section>

      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', margin: '2.5rem 0' }} />

      <section className="mb-8">
        <p className="text-sm md:text-base uppercase tracking-widest mb-4" style={{ color: 'rgba(201,168,76,0.5)' }}>Guías relacionadas</p>
        <div className="flex flex-wrap gap-2">
          {[
            { slug: 'errores-comunes-value-investing', label: 'Errores comunes' },
            { slug: 'margen-de-seguridad', label: 'Margen de seguridad' },
            { slug: 'precio-vs-valor', label: 'Precio vs valor' },
            { slug: 'interes-compuesto', label: 'Interés compuesto' },
            { slug: 'ciclos-howard-marks', label: '♠ Ciclos Marks' },
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
          Análisis frío, basado en datos reales.
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
