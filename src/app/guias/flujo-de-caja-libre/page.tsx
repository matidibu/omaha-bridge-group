import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'El dinero que realmente importa: FCF es lo único que cuenta | Omaha Bridge Group',
  description: 'Buffett mira solo FCF. Cuando entiendes por qué, todo cambia. Cómo calcular el dinero real que genera un negocio.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/flujo-de-caja-libre' },
  openGraph: {
    title: 'Flujo de caja libre (FCF) | Omaha Bridge Group',
    description: 'El FCF es el dinero real que genera un negocio. Cómo calcularlo y por qué es más honesto que el beneficio neto.',
    type: 'article',
  },
}

const COLOR = '#C9A84C'

export default function FlujoDeCajaLibrePage() {
  return (
    <GuiasShell articleMeta={{
      title: 'El único número que importa: Free Cash Flow',
      description: 'Por qué Buffett ignora earnings y mira solo FCF. Cuando lo entiendas, todo cambia.',
      publishDate: '2025-01-15',
      url: 'https://omaha-bridge-group.vercel.app/guias/flujo-de-caja-libre',
      image: 'https://omaha-bridge-group.vercel.app/og-guias.png',
      keywords: 'free cash flow, fcf yield, análisis de caja',
      readingTimeMinutes: 8,
    }}>
      <div className="mb-10">
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          Conceptos esenciales · Valoración
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          Flujo de caja libre: la métrica que más importa
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Las ganancias contables se pueden manipular. El efectivo, no.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>8 min de lectura</span>
          <span>·</span>
          <span>Análisis fundamental · Valoración</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-sm leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          Hay una pregunta que Buffett se hace antes de analizar cualquier empresa: ¿cuánto dinero real genera este negocio para sus dueños cada año? No cuánto "reporta" en ganancias. No cuánto aparece en el estado de resultados. Cuánto queda en la caja después de pagar todos los costos, incluidas las inversiones necesarias para mantener el negocio en funcionamiento.
        </p>
        <p>
          Esa respuesta se llama <strong style={{ color: '#C9D4E0' }}>flujo de caja libre</strong> (<span translate="no">Free Cash Flow</span>, <span translate="no">FCF</span>), y es, en la práctica, la métrica más honesta que existe para evaluar un negocio.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Por qué las ganancias contables mienten
          </h2>
          <p>
            El beneficio neto de una empresa es el resultado de aplicar normas contables — y esas normas tienen mucha flexibilidad. Una empresa puede capitalizar gastos en lugar de imputarlos, elegir métodos de depreciación favorables, reconocer ingresos anticipadamente o diferir costos. El resultado final puede mostrar beneficios robustos mientras la empresa sangra efectivo.
          </p>
          <p className="mt-3">
            La historia de los mercados está llena de empresas con ganancias espectaculares que de repente colapsaron porque el dinero real no existía. <span translate="no">Enron</span>, <span translate="no">WorldCom</span>, decenas de empresas de retail que reportaban crecimiento mientras acumulaban inventario sin vender. Las ganancias contables proyectan la imagen que la dirección quiere mostrar; el flujo de caja libre muestra lo que realmente ocurrió.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Qué es exactamente el FCF
          </h2>
          <p>
            La fórmula básica es sencilla:
          </p>
          <div className="mt-3 p-4 rounded-lg" style={{ background: 'rgba(7,43,24,0.6)', border: '1px solid rgba(201,168,76,0.15)' }}>
            <p className="font-mono text-sm" style={{ color: '#E8EDF5' }}>
              FCF = Flujo operativo — Capex
            </p>
            <p className="text-xs mt-2" style={{ color: '#6A8A75' }}>
              Capex = capital expenditures = inversiones en activos fijos necesarios para mantener o expandir el negocio
            </p>
          </div>
          <p className="mt-3">
            El <strong style={{ color: '#C9D4E0' }}>flujo operativo</strong> es el efectivo que genera el negocio en su operación diaria: cobros a clientes menos pagos a proveedores, empleados e impuestos. El <strong style={{ color: '#C9D4E0' }}>capex</strong> es lo que la empresa debe reinvertir en activos fijos — maquinaria, infraestructura, equipos — para seguir funcionando y creciendo.
          </p>
          <p className="mt-3">
            Lo que queda después de restar el capex es el dinero que los dueños pueden extraer del negocio sin comprometer su funcionamiento futuro. Puede usarse para pagar dividendos, recomprar acciones, reducir deuda o financiar adquisiciones.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Capex de mantenimiento vs capex de crecimiento
          </h2>
          <p>
            No todo capex es igual. Una empresa ferroviaria necesita gastar cientos de millones al año solo para mantener sus vías en condiciones operativas — eso es <span translate="no">capex</span> de mantenimiento, un costo real que el negocio nunca puede eliminar. Una empresa de software que invierte en nuevos centros de datos para crecer hacia nuevos mercados está haciendo <span translate="no">capex</span> de expansión — discrecional, ligado al crecimiento.
          </p>
          <p className="mt-3">
            Los negocios ideales para Buffett tienen capex de mantenimiento muy bajo en relación con sus ganancias operativas. Una empresa de seguros bien gestionada, una marca de consumo masivo con plantas ya instaladas, o una empresa de software con distribución digital generan enormes flujos de caja libre porque casi toda su operación genera efectivo sin requerir reinversión constante.
          </p>
          <p className="mt-3">
            Por contraste, industrias como telefonía, aviación o manufactura pesada requieren reinversiones constantes y masivas solo para mantener la competitividad. Sus ganancias contables pueden verse bien; su FCF suele ser mediocre o negativo.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            El FCF Yield: cuánto te rinde lo que pagás
          </h2>
          <p>
            La forma más útil de usar el FCF para valorar una acción es calcular el <strong style={{ color: '#C9D4E0' }}>FCF Yield</strong> (rendimiento del flujo de caja libre):
          </p>
          <div className="mt-3 p-4 rounded-lg" style={{ background: 'rgba(7,43,24,0.6)', border: '1px solid rgba(201,168,76,0.15)' }}>
            <p className="font-mono text-sm" style={{ color: '#E8EDF5' }}>
              FCF Yield = FCF anual / Capitalización bursátil
            </p>
            <p className="text-xs mt-2" style={{ color: '#6A8A75' }}>
              O, más precisamente, FCF / Enterprise Value para incorporar la deuda neta
            </p>
          </div>
          <p className="mt-3">
            Un <span translate="no">FCF Yield</span> del 5% significa que por cada $100 que vale la empresa en el mercado, genera $5 de efectivo libre. Es análogo al rendimiento de un bono: te dice qué "interés" te paga el negocio como dueño.
          </p>
          <p className="mt-3">
            Buffett históricamente ha considerado atractivo un FCF Yield de entre 5% y 8% para empresas de alta calidad con crecimiento moderado. Por debajo del 3%, la acción generalmente está cara — estás pagando mucho por el flujo de caja presente, apostando a que crecerá significativamente. Por encima del 10%, o hay una oportunidad o hay un problema estructural que el mercado está descontando.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Señales de alerta en el FCF
          </h2>
          <p>
            Hay patrones en el flujo de caja libre que deben encender alertas inmediatas:
          </p>
          <ul className="mt-3 space-y-3 pl-4">
            <li>
              <strong style={{ color: '#C9D4E0' }}>Ganancias contables crecientes con FCF estancado o decreciente.</strong>
              <span style={{ color: '#8A9A85' }}> La empresa mejora sus números reportados pero no genera más caja real. Puede indicar reconocimiento agresivo de ingresos o deterioro del capital de trabajo.</span>
            </li>
            <li>
              <strong style={{ color: '#C9D4E0' }}>FCF consistentemente negativo en empresas maduras.</strong>
              <span style={{ color: '#8A9A85' }}> Una startup puede perder caja mientras crece. Una empresa establecida que nunca genera FCF positivo tiene un problema de modelo de negocio.</span>
            </li>
            <li>
              <strong style={{ color: '#C9D4E0' }}>Gran divergencia entre FCF y ganancias netas durante muchos años.</strong>
              <span style={{ color: '#8A9A85' }}> Algo estructural está mal. O el capex es insosteniblemente alto, o hay manipulación contable, o el capital de trabajo crece sin control.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Cómo OBG usa el FCF
          </h2>
          <p>
            En <span translate="no">Omaha Bridge Group</span>, el FCF Yield es uno de los indicadores centrales en el filtro Buffett. También se usa para calcular el precio objetivo del veredicto final: estimamos el FCF proyectado a tres y cinco años, aplicamos un múltiplo según la calidad del negocio, y obtenemos un rango de valor intrínseco. El precio de mercado se compara contra ese rango para determinar si existe margen de seguridad.
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
            { slug: 'como-leer-un-balance', label: 'Leer un balance' },
            { slug: 'precio-vs-valor', label: 'Precio vs valor' },
            { slug: 'tipos-de-moat', label: 'Tipos de moat' },
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
          ¿Querés ver el FCF de una empresa real?
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
