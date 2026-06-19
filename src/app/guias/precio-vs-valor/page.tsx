import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'El Sr. Mercado está loco: cómo aprovecharse de su locura | Omaha Bridge Group',
  description: 'Cada día el Sr. Mercado ofrece precios distintos. Buffett compra cuando ofrece barato, vende cuando ofrece caro. Cómo ver lo que él ve.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/precio-vs-valor' },
  openGraph: {
    title: 'Precio vs valor | Omaha Bridge Group',
    description: 'El Sr. Mercado ofrece precios distintos cada día. El inversor inteligente sabe cuándo el precio es ridículo respecto al valor.',
    type: 'article',
  },
}

const COLOR = '#C9A84C'

export default function PrecioVsValorPage() {
  return (
    <GuiasShell articleMeta={{
      title: 'Precio vs Valor: el Sr. Mercado está loco',
      description: 'Buffett ve lo que el Sr. Mercado no: la diferencia. Cómo verla tú también.',
      publishDate: '2025-05-15',
      url: 'https://omaha-bridge-group.vercel.app/guias/precio-vs-valor',
      image: 'https://omaha-bridge-group.vercel.app/og-guias.png',
      keywords: 'precio, valor, mercado, especulación',
      readingTimeMinutes: 7,
    }}>
      <div className="mb-10">
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          Conceptos esenciales · Principios de inversión
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          Precio vs valor
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          El precio es lo que pagás. El valor es lo que recibís. La diferencia entre ambos determina el resultado de toda inversión.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>7 min de lectura</span>
          <span>·</span>
          <span>Principios · Mentalidad inversora</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-sm leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          La mayoría de las personas que participan en los mercados financieros confunden precio y valor. Escuchan que una acción "subió" y concluyen que vale más. Escuchan que "cayó" y concluyen que vale menos. Ese error conceptual es, posiblemente, la fuente más grande de destrucción de riqueza en la historia de la inversión.
        </p>
        <p>
          Benjamin Graham lo clarificó de una vez para siempre en <em>The Intelligent Investor</em>: el precio de mercado es simplemente lo que alguien está dispuesto a pagar en este momento. El valor intrínseco es lo que el activo realmente vale, calculado sobre la base de los flujos de caja que generará en el futuro. Estos dos números pueden coincidir — pero raramente lo hacen, y cuando divergen significativamente, aparecen las mejores oportunidades de inversión.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            El Sr. Mercado: la metáfora más útil de Graham
          </h2>
          <p>
            Graham inventó un personaje llamado el Sr. Mercado. Imaginen que son socios en un negocio privado con este señor. Cada día, él aparece a la puerta y les ofrece comprar su parte del negocio, o venderles la suya, a un precio diferente. Algunos días está eufórico y ofrece un precio ridículamente alto. Otros días está deprimido y ofrece un precio ridículamente bajo.
          </p>
          <p className="mt-3">
            El punto crucial: están obligados a escuchar su oferta diaria, pero no a aceptarla. Si el precio que ofrece es absurdamente bajo, compranle su parte. Si es absurdamente alto, véndanle la propia. Si es razonable, ignórenlo y sigan con sus vidas.
          </p>
          <p className="mt-3">
            El Sr. Mercado es el mercado de valores. Sus humores son las noticias, los miedos, la codicia colectiva, los algoritmos, los flujos institucionales, las modas de inversión. Ninguno de esos factores cambia el valor intrínseco de un negocio — pero sí cambian su precio diario, a veces violentamente.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Por qué el mercado fija precios erróneos con frecuencia
          </h2>
          <p>
            Los mercados son razonablemente eficientes a largo plazo pero profundamente ineficientes en el corto plazo. Varias fuerzas sistemáticas generan precios que divergen del valor:
          </p>
          <ul className="mt-3 space-y-3 pl-4">
            <li>
              <strong style={{ color: '#C9D4E0' }}>Horizonte temporal corto.</strong>
              <span style={{ color: '#8A9A85' }}> La mayoría de los participantes piensa en trimestres, no en décadas. Una empresa que "decepciona" en el trimestre puede bajar 20% aunque su valor a cinco años no haya cambiado en absoluto.</span>
            </li>
            <li>
              <strong style={{ color: '#C9D4E0' }}>Comportamiento en manada.</strong>
              <span style={{ color: '#8A9A85' }}> Cuando todos venden, los precios caen por debajo del valor. Cuando todos compran, los precios suben por encima. No porque el valor cambie, sino porque el movimiento de dinero mueve el precio independientemente.</span>
            </li>
            <li>
              <strong style={{ color: '#C9D4E0' }}>Sesgos cognitivos sistemáticos.</strong>
              <span style={{ color: '#8A9A85' }}> Los humanos sobrevaloran la información reciente (sesgo de disponibilidad), extrapolamos tendencias linealmente (sesgo de representatividad), y sufrimos pérdidas mucho más de lo que disfrutamos ganancias equivalentes (aversión a la pérdida).</span>
            </li>
            <li>
              <strong style={{ color: '#C9D4E0' }}>Información asimétrica.</strong>
              <span style={{ color: '#8A9A85' }}> No todos los participantes leen los mismos datos, los interpretan igual, o les dan el mismo peso. Las diferencias de interpretación generan diferencias de precio.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            La trampa de confundir precio con éxito
          </h2>
          <p>
            Uno de los errores más comunes es medir el "éxito" de una inversión por el movimiento del precio a corto plazo. Si compramos una acción a $50 y sube a $60, la decisión nos "parece" correcta. Si baja a $40, nos "parece" incorrecta. Pero el precio de mercado posterior no valida ni invalida el análisis original.
          </p>
          <p className="mt-3">
            Lo que importa es: ¿estaba correcta la tesis de valor? Si pagamos $50 por algo que vale $80, la inversión fue acertada — aunque el mercado tarde dos años en reconocer ese valor y mientras tanto el precio oscile entre $40 y $60. Y al revés: si pagamos $100 por algo que vale $70, cometimos un error aunque el precio suba a $120 en el corto plazo por momentum o especulación.
          </p>
          <blockquote className="border-l-2 pl-4 mt-4 italic"
            style={{ borderColor: 'rgba(201,168,76,0.4)', color: 'rgba(232,237,245,0.7)', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            &ldquo;A corto plazo, el mercado es una máquina de votar. A largo plazo, es una máquina de pesar.&rdquo;
            <span className="block mt-1 not-italic text-xs" style={{ color: '#4A6A55' }}>— Benjamin Graham</span>
          </blockquote>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Cuándo precio y valor convergen
          </h2>
          <p>
            Graham observó que el mercado, aunque errático en el corto plazo, tiende a reconocer el valor real de un activo en el largo plazo. Los mecanismos son varios: los resultados financieros se hacen evidentes trimestre a trimestre, los analistas actualizan sus modelos, los inversores institucionales descubren el activo, las recompras de acciones o adquisiciones por parte de competidores revelan el valor subyacente.
          </p>
          <p className="mt-3">
            El horizonte para esa convergencia es incierto — puede ser meses o puede ser años. El inversor de value investing acepta esa incertidumbre temporal como parte del proceso. La compensación es que cuando compra con descuento sobre el valor, el tiempo juega a su favor: cuanto más tiempo pasa, más probable es que el mercado reconozca lo que él vio antes.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Aplicación práctica: las preguntas que importan
          </h2>
          <p>
            Antes de cualquier decisión de inversión, las preguntas correctas son:
          </p>
          <ul className="mt-3 space-y-2 pl-4">
            <li style={{ color: '#8A9A85' }}>¿Cuánto vale este negocio basándome en sus flujos de caja proyectados?</li>
            <li style={{ color: '#8A9A85' }}>¿Cuánto me pide el mercado que pague hoy?</li>
            <li style={{ color: '#8A9A85' }}>¿Por qué existe esa diferencia — si existe?</li>
            <li style={{ color: '#8A9A85' }}>¿Tengo razón en mi estimación de valor, o el mercado sabe algo que yo no sé?</li>
            <li style={{ color: '#8A9A85' }}>¿El descuento es suficiente para protegerme si mi análisis tiene errores?</li>
          </ul>
          <p className="mt-3">
            Las preguntas incorrectas son: "¿Va a subir mañana?", "¿Hay momentum positivo?", "¿Qué dice el analista de Goldman Sachs?" — porque ninguna de esas responde si el precio actual tiene sentido respecto al valor intrínseco del activo.
          </p>
        </section>

      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', margin: '2.5rem 0' }} />

      <section className="mb-8">
        <p className="text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(201,168,76,0.5)' }}>Guías relacionadas</p>
        <div className="flex flex-wrap gap-2">
          {[
            { slug: 'buffett-criterios', label: '♥ Criterios Buffett' },
            { slug: 'margen-de-seguridad', label: 'Margen de seguridad' },
            { slug: 'psicologia-del-inversor', label: 'Psicología del inversor' },
            { slug: 'interes-compuesto', label: 'Interés compuesto' },
            { slug: 'flujo-de-caja-libre', label: 'Flujo de caja libre' },
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
          ¿Está el precio de mercado por debajo del valor real?
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
