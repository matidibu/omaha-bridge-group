import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'SaaS: la ilusión de crecimiento infinito | Omaha Bridge Group',
  description: 'Ingresos recurrentes suena mágico. Pero 95% de SaaS quiebra. Cómo distinguir la verdadera de la ilusión. Magic metrics.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/como-analizar-saas' },
  openGraph: {
    title: 'Cómo analizar empresas SaaS | Omaha Bridge Group',
    description: 'ARR, churn, NRR y LTV/CAC: las métricas que importan para invertir en software como servicio.',
    type: 'article',
  },
}

const COLOR = '#C9A84C'

export default function ComoAnalizarSaasPage() {
  return (
    <GuiasShell articleMeta={{
      title: 'SaaS ilusión: crecimiento que no dura',
      description: 'ARR, churn, NRR: los magic metrics. Cómo ver cuál es verdadero.',
      publishDate: '2025-05-15',
      url: 'https://omaha-bridge-group.vercel.app/guias/como-analizar-saas',
      image: 'https://omaha-bridge-group.vercel.app/og-guias.png',
      keywords: 'saas, modelos de software, análisis de tecnología',
      readingTimeMinutes: 9,
    }}>
      <div className="mb-10">
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          Conceptos esenciales · Análisis sectorial
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          Cómo analizar empresas SaaS
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          El modelo de suscripción cambia las métricas que importan. ARR, churn, NRR: el vocabulario del SaaS.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>9 min de lectura</span>
          <span>·</span>
          <span>Análisis sectorial · Tecnología</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-sm leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          El software como servicio (<span translate="no">SaaS</span>) cambió fundamentalmente la economía del negocio de software. En lugar de vender licencias únicas, las empresas cobran suscripciones recurrentes. Eso transforma el estado de resultados, hace irrelevantes algunas métricas tradicionales, y convierte otras — desconocidas para la mayoría de los inversores — en los indicadores centrales del negocio.
        </p>
        <p>
          Buffett admite que las empresas tecnológicas están fuera de su círculo de competencia histórico. Pero la generación de inversores formados en los últimos veinte años considera al <span translate="no">SaaS</span> como el equivalente moderno de los negocios con moat que él describía: ingresos recurrentes, costos de cambio altos, márgenes brutos elevados y escalabilidad sin inversión proporcional de capital.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            ARR: ingresos anuales recurrentes
          </h2>
          <p>
            El <span translate="no">Annual Recurring Revenue</span> (<span translate="no">ARR</span>) es la métrica de tamaño más importante en <span translate="no">SaaS</span>. Representa el valor anualizado de todos los contratos de suscripción activos en un momento dado.
          </p>
          <p className="mt-3">
            A diferencia de los ingresos GAAP — que en <span translate="no">SaaS</span> se reconocen de forma diferida a lo largo del contrato — el <span translate="no">ARR</span> refleja el "motor" actual del negocio: cuánto está comprometido a pagar la base de clientes existente. Un ARR creciendo al 30-40% anual, en una empresa con márgenes brutos del 70%+, es la señal característica de un <span translate="no">SaaS</span> de alta calidad.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Churn: la métrica que lo destruye todo
          </h2>
          <p>
            El <strong style={{ color: '#C9D4E0' }}>churn</strong> es la tasa de cancelación de suscripciones. Si una empresa tiene 100 clientes en enero y en diciembre tiene 94, su churn anual es del 6%.
          </p>
          <p className="mt-3">
            El churn es devastador para la economía de largo plazo de un <span translate="no">SaaS</span>. Un churn del 10% anual significa que la empresa pierde el 10% de su base de clientes cada año — y debe reemplazarlos solo para mantener el ARR estable. Un churn del 5% anual significa perder la mitad de los clientes actuales en 14 años si no se adquieren nuevos. El crecimiento real solo ocurre cuando los nuevos clientes superan ampliamente el churn.
          </p>
          <p className="mt-3">
            Los mejores <span translate="no">SaaS</span> B2B de empresa (Salesforce, ServiceNow, Workday) tienen churn por debajo del 5% anual. Los <span translate="no">SaaS</span> de consumo masivo pueden tener churn del 20-40%, lo cual hace mucho más difícil construir un negocio duradero.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Net Revenue Retention: el indicador de expansión
          </h2>
          <p>
            El <span translate="no">Net Revenue Retention</span> (<span translate="no">NRR</span>), también llamado <span translate="no">Net Dollar Retention</span>, es la métrica más reveladora de la salud de un <span translate="no">SaaS</span>. Mide cuánto factura la empresa a su base de clientes existente al cabo de un año, como porcentaje de lo que facturaba al inicio.
          </p>
          <div className="mt-3 p-4 rounded-lg" style={{ background: 'rgba(7,43,24,0.6)', border: '1px solid rgba(201,168,76,0.15)' }}>
            <p className="font-mono text-sm" style={{ color: '#E8EDF5' }}>
              NRR = (ARR inicial + expansión — contracciones — churn) / ARR inicial
            </p>
          </div>
          <p className="mt-3">
            Un NRR superior al 100% significa que la cohorte de clientes existente genera más dinero este año que el anterior — aunque no se haya incorporado ningún cliente nuevo. Eso es el "negative churn": los clientes existentes se expanden (más usuarios, más módulos, más uso) más rápido de lo que cancela el churn.
          </p>
          <p className="mt-3">
            Los mejores <span translate="no">SaaS</span> B2B tienen NRR del 115-130%: Snowflake ha reportado NRR por encima del 130%, Datadog del 130%+, Twilio del 120%+. Eso significa que incluso si no adquieren un solo cliente nuevo, siguen creciendo. Es uno de los moats más poderosos en tecnología.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            LTV/CAC: la eficiencia de la maquinaria de crecimiento
          </h2>
          <p>
            El <span translate="no">Customer Acquisition Cost</span> (<span translate="no">CAC</span>) es cuánto gasta la empresa en ventas y marketing para adquirir un nuevo cliente. El <span translate="no">Lifetime Value</span> (<span translate="no">LTV</span>) es cuánto generará ese cliente a lo largo de su vida con la empresa.
          </p>
          <p className="mt-3">
            La regla general es que un negocio <span translate="no">SaaS</span> saludable tiene un ratio <span translate="no">LTV/CAC</span> de al menos 3:1 — por cada dólar gastado en adquirir un cliente, se recuperan al menos tres. Ratios por debajo de 2:1 sugieren que la maquinaria de crecimiento es ineficiente o que los clientes no son lo suficientemente rentables.
          </p>
          <p className="mt-3">
            El período de recuperación del CAC también importa: cuántos meses tarda el cliente en generar suficiente margen de contribución para cubrir lo que costó adquirirlo. Más de 24 meses es un riesgo — si el cliente cancela antes de recuperar el CAC, la empresa pierde dinero en cada cliente adquirido.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Márgenes brutos: la diferencia entre <span translate="no">SaaS</span> bueno y malo
          </h2>
          <p>
            Los márgenes brutos en <span translate="no">SaaS</span> son tipicamente altos porque el costo de entregar el servicio a un cliente incremental es casi cero. Microsoft puede vender una licencia adicional de Office 365 sin fabricar nada — el costo marginal es insignificante.
          </p>
          <p className="mt-3">
            Un <span translate="no">SaaS</span> B2B bien gestionado debe tener márgenes brutos del 70-80% o superiores. Por debajo del 60%, algo está mal: excesivos costos de infraestructura cloud, demasiado componente de servicios profesionales en los ingresos, o un modelo híbrido hardware+software que diluye el margen.
          </p>
          <p className="mt-3">
            Las empresas <span translate="no">SaaS</span> que sacrifican margen bruto para crecer más rápido (precio agresivo, mucho servicio gratuito de onboarding) pueden parecer buenas inversiones en métricas de crecimiento pero destruyen valor a largo plazo si los márgenes nunca maduran.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            La "Rule of 40" como heurística rápida
          </h2>
          <p>
            La <strong style={{ color: '#C9D4E0' }}>"Regla del 40"</strong> es un benchmark popular en capital de riesgo y análisis <span translate="no">SaaS</span>: la suma de la tasa de crecimiento de ingresos y el margen de flujo de caja libre debe superar el 40%.
          </p>
          <p className="mt-3">
            Una empresa que crece al 50% con un margen FCF del -10% cumple la regla (50 - 10 = 40). Una empresa que crece al 20% con margen FCF del 25% también la cumple (20 + 25 = 45). Las que están por debajo del 40% en general están comprometiendo demasiado rentabilidad por crecimiento, o creciendo demasiado lento dado sus pérdidas.
          </p>
          <p className="mt-3">
            Es una heurística simple, no un filtro absoluto — pero útil para hacer una primera selección entre un universo amplio de empresas tecnológicas.
          </p>
        </section>

      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', margin: '2.5rem 0' }} />

      <section className="mb-8">
        <p className="text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(201,168,76,0.5)' }}>Guías relacionadas</p>
        <div className="flex flex-wrap gap-2">
          {[
            { slug: 'buffett-criterios', label: '♥ Criterios Buffett' },
            { slug: 'tipos-de-moat', label: 'Tipos de moat' },
            { slug: 'peg-peter-lynch', label: '♣ Método Lynch' },
            { slug: 'magic-formula-greenblatt', label: '♦ Magic Formula' },
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
          ¿Querés analizar Microsoft, Adobe u Oracle con los 6 maestros?
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
