import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'Cómo analiza Warren Buffett una acción — Guía completa | Omaha Bridge Group',
  description: 'Los cinco criterios exactos con los que Warren Buffett evalúa cualquier empresa: moat, ROIC, gestión honesta, precio con margen de seguridad y comprensión del negocio.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/buffett-criterios' },
  openGraph: {
    title: 'Cómo analiza Buffett una acción | Omaha Bridge Group',
    description: 'Guía completa del método Buffett: moat, ROIC, margen de seguridad y gestión de calidad.',
    type: 'article',
  },
}

const COLOR = '#D4A843'

export default function BuffettCriteriosPage() {
  return (
    <GuiasShell>
      <div className="mb-10">
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          ♥ &nbsp; Warren Buffett · El Anfitrión
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          Cómo analiza Buffett una acción
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Los cinco criterios del inversor más estudiado de la historia, y cómo OBG los aplica.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>8 min de lectura</span>
          <span>·</span>
          <span>Value investing · Calidad del negocio</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-sm leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          Warren Buffett no analiza acciones. Analiza negocios. Esa distinción, aparentemente menor, define su filosofía desde que leyó <em>Security Analysis</em> de Benjamin Graham a los 19 años y decidió que el precio de mercado era sólo una opinión — mientras que el valor del negocio era un hecho que se podía calcular.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            El error de buscar acciones "baratas"
          </h2>
          <p>
            Benjamin Graham le enseñó a comprar acciones por debajo de su valor contable, casi sin importar la calidad del negocio. Buffett lo hizo durante años con resultados razonables, hasta que Charlie Munger lo convenció de algo más importante: es mejor comprar un negocio excelente a un precio justo que un negocio mediocre a un precio barato.
          </p>
          <p className="mt-3">
            Un negocio mediocre comprado barato te da un rendimiento mediocre. Un negocio excelente comprado a precio razonable puede multiplicar tu capital durante décadas si su ventaja competitiva se mantiene intacta.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Criterio 1: el negocio debe ser comprensible
          </h2>
          <p>
            Buffett opera dentro de lo que llama su "círculo de competencia". No invierte en lo que no entiende, no por limitación intelectual, sino por disciplina epistémica: si no podés explicar en dos oraciones cómo una empresa gana dinero y por qué seguirá ganándolo en diez años, el análisis que produzcas no va a ser riguroso.
          </p>
          <p className="mt-3">
            Por eso mantuvo distancia de la mayoría de las empresas tecnológicas durante décadas — no porque no entendiera la tecnología, sino porque los modelos de negocio cambian con cada ciclo de innovación y es difícil proyectar ventajas competitivas a diez años vista. Apple fue una excepción que él define como empresa de consumo masivo con fidelidad de marca, no como empresa de tecnología.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Criterio 2: la ventaja competitiva sostenible (el moat)
          </h2>
          <p>
            El "foso" es la barrera que protege los márgenes de una empresa contra la competencia. Sin moat, las ganancias se erosionan con el tiempo: si una empresa gana mucho, aparecerán competidores que bajarán los precios hasta que las ganancias sean normales.
          </p>
          <p className="mt-3">Los moats más duraderos son:</p>
          <ul className="mt-2 space-y-2 pl-4">
            <li><strong style={{ color: '#C9D4E0' }}>Marca intangible</strong>: <span style={{ color: '#8A9A85' }}>Coca-Cola puede cobrar más que un genérico porque la gente paga por la experiencia, no solo por el líquido.</span></li>
            <li><strong style={{ color: '#C9D4E0' }}>Costos de cambio</strong>: <span style={{ color: '#8A9A85' }}>cambiar de proveedor de ERP cuesta millones y meses de operación interrumpida. SAP y Oracle viven de eso.</span></li>
            <li><strong style={{ color: '#C9D4E0' }}>Efecto de red</strong>: <span style={{ color: '#8A9A85' }}>Visa vale más cuando más comercios y clientes la usan. El moat se auto-refuerza con cada transacción.</span></li>
            <li><strong style={{ color: '#C9D4E0' }}>Ventaja de costos estructural</strong>: <span style={{ color: '#8A9A85' }}>economías de escala que permiten producir más barato que cualquier competidor, sin importar cuánto intenten mejorar.</span></li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Criterio 3: ROIC sostenido por encima del 15%
          </h2>
          <p>
            El retorno sobre el capital invertido (<span translate="no">ROIC</span>) es la métrica que más mira Buffett. Mide cuánta ganancia genera la empresa por cada dólar de capital invertido en el negocio. Un <span translate="no">ROIC</span> del 20% significa que la empresa convierte cada $100 de capital en $20 de ganancia anual.
          </p>
          <p className="mt-3">
            Si ese resultado se sostiene cinco o diez años, el capital crece de forma compuesta y el precio de la acción sigue. Buffett no busca un año excepcional: busca consistencia. Empresas que mantengan <span translate="no">ROIC</span> alto en ciclos distintos, en años buenos y malos. Eso demuestra que el moat es real y no una casualidad de un ciclo favorable.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Criterio 4: gestión honesta orientada al largo plazo
          </h2>
          <p>
            Buffett lee las cartas anuales de los directivos con atención forense. Busca señales de honestidad: cómo hablan de sus errores, si reconocen problemas estructurales, si la asignación de capital fue inteligente. Un CEO que hace promesas vagas y nunca las revisa es una señal de alerta, no de optimismo.
          </p>
          <p className="mt-3">
            Desconfía especialmente de los directivos que hablan constantemente de <span translate="no">EBITDA</span> sin mencionar flujo libre de caja. El <span translate="no">EBITDA</span> ignora impuestos, capex y cambios en capital de trabajo — todo lo que importa cuando hay que pagar cuentas reales. Un directivo que prefiere el <span translate="no">EBITDA</span> al <span translate="no">FCF</span> suele tener algo que ocultar.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Criterio 5: precio con margen de seguridad
          </h2>
          <p>
            Incluso el mejor negocio puede ser una mala inversión si se paga demasiado. Buffett estima el valor intrínseco — el flujo de caja libre futuro descontado a tasa adecuada — y sólo compra cuando el precio de mercado ofrece un descuento sustancial respecto a ese valor.
          </p>
          <p className="mt-3">
            Una métrica práctica es el <span translate="no">Free Cash Flow Yield</span>: cuánto flujo libre genera la empresa por cada dólar de capitalización. Un <span translate="no">FCF Yield</span> del 5-6% en una empresa de calidad con moat durable es, en general, un precio razonable. Por debajo del 2-3% la acción empieza a estar cara, independientemente de cuán bueno sea el negocio subyacente.
          </p>
          <blockquote className="border-l-2 pl-4 mt-4 italic"
            style={{ borderColor: 'rgba(212,168,67,0.4)', color: 'rgba(232,237,245,0.7)', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            &ldquo;El precio es lo que pagás. El valor es lo que recibís.&rdquo;
            <span className="block mt-1 not-italic text-xs" style={{ color: '#4A6A55' }}>— Warren Buffett</span>
          </blockquote>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Cómo OBG aplica el filtro Buffett
          </h2>
          <p>
            En <span translate="no">Omaha Bridge Group</span>, el filtro Buffett es la primera puerta que debe cruzar cualquier acción. Si una empresa no supera este filtro, el análisis se detiene: los demás maestros no tienen nada que deliberar sobre una empresa que no alcanza los estándares mínimos de calidad.
          </p>
          <p className="mt-3">
            Los criterios que aplicamos incluyen: <span translate="no">ROIC</span> histórico, ratio deuda/equity, <span translate="no">FCF yield</span>, márgenes brutos sostenidos como indicador de moat, y una evaluación de la posición competitiva sectorial. El resultado es un puntaje de calidad de 0 a 100 y una clasificación del moat: amplio, moderado o inexistente.
          </p>
        </section>

      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', margin: '2.5rem 0' }} />

      <section className="mb-8">
        <p className="text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(201,168,76,0.5)' }}>Otras guías</p>
        <div className="flex flex-wrap gap-2">
          {[
            { slug: 'magic-formula-greenblatt', label: '♦ Greenblatt' },
            { slug: 'peg-peter-lynch', label: '♣ Lynch' },
            { slug: 'antifragilidad-taleb', label: '★ Taleb' },
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
          ¿Querés ver el filtro Buffett aplicado a una acción real?
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
