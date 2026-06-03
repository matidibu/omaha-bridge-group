import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'Los cuatro tipos de foso competitivo (moat) | Omaha Bridge Group',
  description: 'Qué es un moat, cómo identificarlo y por qué las empresas con ventaja competitiva sostenible superan al mercado a largo plazo. Los cuatro tipos de foso según Morningstar y Buffett.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/tipos-de-moat' },
  openGraph: {
    title: 'Los cuatro tipos de foso competitivo | Omaha Bridge Group',
    description: 'Marca, costos de cambio, efecto de red y ventaja de costos: los cuatro moats que protegen márgenes durante décadas.',
    type: 'article',
  },
}

const COLOR = '#C9A84C'

export default function TiposDeMoatPage() {
  return (
    <GuiasShell articleMeta={{
      title: 'Los cuatro tipos de foso competitivo (moat)',
      description: 'Qué es un moat, cómo identificarlo y por qué las empresas con ventaja competitiva sostenible superan al mercado a largo plazo. Los cuatro tipos de foso según Morningstar y Buffett.',
      publishDate: '2025-05-15',
      url: 'https://omaha-bridge-group.vercel.app/guias/tipos-de-moat',
    }}>
      <div className="mb-10">
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          Conceptos esenciales · Análisis competitivo
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          Los cuatro tipos de foso competitivo
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Sin ventaja competitiva sostenible, los márgenes se erosionan. Con ella, se componen durante décadas.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>9 min de lectura</span>
          <span>·</span>
          <span>Análisis competitivo · Calidad del negocio</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-sm leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          La pregunta central del análisis Buffett no es cuánto gana la empresa hoy, sino si seguirá ganando igual o más dentro de diez años. La respuesta depende casi enteramente de una cosa: si el negocio tiene un foso competitivo real — una barrera que disuade a los competidores de apropiarse de sus márgenes.
        </p>
        <p>
          En mercados libres, las ganancias son un imán para la competencia. Cualquier industria donde los retornos son altos atraerá nuevos entrantes que reducirán precios, robarán clientes y comprimirán márgenes hasta que el retorno sea normal. La única excepción son los negocios con un moat lo suficientemente profundo como para que esa competencia no pueda operar eficientemente.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Moat 1: la marca intangible
          </h2>
          <p>
            Las marcas son el moat más intuitivo pero también el más difícil de cuantificar. Una marca poderosa permite cobrar un precio premium sobre productos funcionalmente similares. Coca-Cola y Pepsi son químicamente parecidas; los consumidores pagan consistentemente más por la primera. Ese diferencial de precio, sostenido en el tiempo, es el moat.
          </p>
          <p className="mt-3">
            Pero no toda marca famosa es un moat. Muchas marcas conocidas compiten en categorías donde el precio importa más que la identidad: si la gasolina de BP cuesta 10 centavos más, el consumidor cruza la calle. La clave es si la marca genera <em>poder de fijación de precios</em> — si los clientes pagarán más por ella incluso cuando hay alternativas más baratas.
          </p>
          <p className="mt-3">
            Las marcas con moat real tienden a estar en categorías donde la decisión de compra involucra identidad personal, hábito profundo, o consecuencias emocionales: bebidas, lujo, medicamentos de marca, alimentos de consumo masivo. No en commodities, no en categorías donde el precio es el único criterio.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Moat 2: los costos de cambio
          </h2>
          <p>
            Algunas empresas construyen su ventaja no en ser las mejores, sino en ser tan difíciles de abandonar que los clientes no se mueven aunque aparezca algo mejor. El costo de cambiar de proveedor — en dinero, tiempo, riesgo operativo o aprendizaje — es tan alto que la racionalidad económica indica quedarse.
          </p>
          <p className="mt-3">
            Oracle y SAP son los ejemplos más citados: sus sistemas ERP están tan integrados en los procesos de sus clientes que una migración puede costar millones de dólares, demorar dos años y paralizar operaciones durante el proceso. El cliente sabe perfectamente que está pagando un precio alto por el servicio. Lo paga igual porque el costo de no pagarlo es todavía mayor.
          </p>
          <p className="mt-3">
            Otros ejemplos: plataformas de nómina y RRHH donde cambiar implica reentrenar a cientos de empleados; herramientas de diseño donde toda la biblioteca de archivos está en formato propietario; sistemas bancarios core que ningún banco quiere tocar por miedo a errores de transición.
          </p>
          <p className="mt-3">
            El moat de costos de cambio genera retención de clientes muy alta (baja tasa de churn) y permite incrementos de precio anuales superiores a la inflación sin pérdida significativa de clientes.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Moat 3: el efecto de red
          </h2>
          <p>
            Un producto con efecto de red se vuelve más valioso a medida que más personas lo usan. El primer teléfono del mundo no servía para nada — no había nadie a quien llamar. El décimo teléfono ya tenía nueve posibles interlocutores. El millonésimo teléfono formaba parte de una red tan valiosa que ningún sistema alternativo podía competir, aunque técnicamente fuera superior.
          </p>
          <p className="mt-3">
            Visa y Mastercard son el ejemplo más duradero en finanzas: los comercios las aceptan porque los clientes las tienen; los clientes las tienen porque los comercios las aceptan. El nuevo entrante necesita romper ese ciclo desde ambos lados simultáneamente, lo que hace a la red casi inexpugnable.
          </p>
          <p className="mt-3">
            Los efectos de red más fuertes son los <strong style={{ color: '#C9D4E0' }}>bilaterales</strong> (conectan dos grupos distintos) porque escalar en un lado refuerza el otro. Los débiles son los <strong style={{ color: '#C9D4E0' }}>unilaterales</strong> (todos los usuarios son del mismo tipo): las redes sociales tienen efectos de red, pero la historia ha demostrado que pueden ser derrocadas si la migración ocurre en masa (Myspace, BlackBerry Messenger).
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Moat 4: la ventaja de costos estructural
          </h2>
          <p>
            Algunas empresas producen a costos estructuralmente más bajos que cualquier competidor, independientemente de cuánto estos inviertan. Esta ventaja puede provenir de acceso privilegiado a recursos naturales, economías de escala masivas, procesos productivos únicos, o localización geográfica.
          </p>
          <p className="mt-3">
            Las economías de escala son la forma más común: Amazon puede permitirse márgenes más bajos en logística porque su volumen le permite amortizar la infraestructura sobre millones más de paquetes que cualquier competidor. Costco puede vender a precios que ningún supermercado convencional puede igualar porque su modelo de membresía le garantiza un flujo de ingresos fijo antes de vender un solo producto.
          </p>
          <p className="mt-3">
            El problema con la ventaja de costos es que puede ser replicada si un competidor logra alcanzar escala similar o accede a la misma tecnología. El moat es más durable cuando la ventaja proviene de activos únicos e irreplicables — una mina de mineral excepcional, la única planta cercana a la materia prima, un proceso patentado que nadie puede copiar legalmente.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Cómo medir el moat en la práctica
          </h2>
          <p>
            Los moats se manifiestan en los números de formas específicas:
          </p>
          <ul className="mt-3 space-y-2 pl-4">
            <li><strong style={{ color: '#C9D4E0' }}>ROIC sostenido por encima del 15-20% durante cinco o más años.</strong> <span style={{ color: '#8A9A85' }}>Si no hay moat, la competencia erosiona el retorno hasta niveles normales.</span></li>
            <li><strong style={{ color: '#C9D4E0' }}>Márgenes brutos estables o en expansión.</strong> <span style={{ color: '#8A9A85' }}>La presión competitiva normalmente comprime márgenes. Los moats los sostienen.</span></li>
            <li><strong style={{ color: '#C9D4E0' }}>Poder de fijación de precios.</strong> <span style={{ color: '#8A9A85' }}>La empresa sube precios regularmente y los clientes no se van. Eso es un moat en acción.</span></li>
            <li><strong style={{ color: '#C9D4E0' }}>Cuota de mercado estable en industrias donde compiten muchos jugadores.</strong> <span style={{ color: '#8A9A85' }}>Sugiere que algo frena a los competidores de quitarle clientes.</span></li>
          </ul>
        </section>

      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', margin: '2.5rem 0' }} />

      <section className="mb-8">
        <p className="text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(201,168,76,0.5)' }}>Guías relacionadas</p>
        <div className="flex flex-wrap gap-2">
          {[
            { slug: 'buffett-criterios', label: '♥ Criterios Buffett' },
            { slug: 'flujo-de-caja-libre', label: 'Flujo de caja libre' },
            { slug: 'como-evaluar-un-ceo', label: 'Evaluar a un CEO' },
            { slug: 'como-analizar-saas', label: 'Analizar SaaS' },
            { slug: 'precio-vs-valor', label: 'Precio vs valor' },
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
          ¿Tiene moat la empresa que te interesa?
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
