import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'Dividendos: dinero que baja mientras otros ganan fortuna | Omaha Bridge Group',
  description: 'Rendimiento 5% pero la acción cae 20%. Cómo no caer en la trampa. Por qué Buffett desconfía de dividendos altos.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/dividendos-value-investing' },
  openGraph: {
    title: 'Dividendos y value investing | Omaha Bridge Group',
    description: 'Cómo invertir en empresas que reparten dividendos sin caer en trampas de yield alto y baja calidad.',
    type: 'article',
  },
}

const COLOR = '#C9A84C'

export default function DividendosValueInvestingPage() {
  return (
    <GuiasShell articleMeta={{
      title: 'Dividendos atractivos que esconden caídas',
      description: 'Por qué rendimiento alto = riesgo alto. Cómo no caer.',
      publishDate: '2026-05-15',
      url: 'https://omaha-bridge-group.vercel.app/guias/dividendos-value-investing',
      image: 'https://omaha-bridge-group.vercel.app/og-guias.png',
      keywords: 'dividendos, rendimiento, política de dividendos',
      readingTimeMinutes: 8,
    }}>
      <div className="mb-10">
        <p className="text-sm md:text-base uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          Estrategia · Ingresos pasivos
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          Dividendos en value investing
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Un dividendo alto es una señal de problema, no de oportunidad.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>8 min de lectura</span>
          <span>·</span>
          <span>Estrategia · Rentabilidad</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-base md:text-lg leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          Un inversor compra una acción que cotizia a $100. Genera $10 de ganancia anual. ¿El dueño recibe los $10? Depende. La empresa puede reinvertir esos $10 en nuevos proyectos (para crecer) o distribuirlos como dividendo (para que los accionistas reciban ingresos hoy).
        </p>
        <p>
          El value investor no es dogmático: ambas opciones son válidas si el capital reinvertido genera retorno mayor al costo de capital. La trampa está en confiar en el dividendo como señal de calidad. No lo es.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Dividend Yield: la trampa del alto rendimiento
          </h2>
          <p>
            <strong style={{ color: '#C9D4E0' }}>Dividend Yield = Dividendo anual / Precio de acción</strong>
          </p>
          <p className="mt-3">
            Una acción a $50 que paga dividendo de $5 tiene yield de 10%. Suena excelente — el mercado de bonos rinde 5%, así que 10% es atractivo. Pero espera.
          </p>
          <p className="mt-3">
            Una acción puede tener dividend yield de 12% porque el mercado la ve colapsando. El precio cayó 50% en un mes pero el dividendo se mantiene — por ahora. En el próximo trimestre, cuando la empresa reporte pérdidas, cortarán el dividendo 50%.
          </p>
          <p className="mt-3">
            La regla: un dividend yield muy alto (por encima de 6-7% en empresas maduras) generalmente señala problema, no oportunidad. Buffett ignora el yield absoluto. Mira si el negocio puede sostenerlo mientras crece.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Payout Ratio: cuánto de la ganancia se distribuye
          </h2>
          <p>
            <strong style={{ color: '#C9D4E0' }}>Payout Ratio = Dividendo / Ganancia Neta</strong>
          </p>
          <p className="mt-3">
            Si la empresa genera $100 de ganancia y distribuye $30 como dividendo, el payout es 30%. Retiene $70 para reinvertir o acumular efectivo.
          </p>
          <p className="mt-3">
            Un payout de 30-50% en empresas maduras es saludable: distribuyen ingresos genuinos y retienen capital para crecimiento. Un payout de 80%+ es riesgoso: están distribuyendo casi toda la ganancia, sin colchón para sorpresas.
          </p>
          <p className="mt-3">
            Munger lo dice claro: "Si una empresa necesita distribuir 90% de su ganancia como dividendo para justificar el precio, es un mal negocio. El negocio debería crecer con su ganancia retenida".
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Dividend Growth: crecimiento sostenido del dividendo
          </h2>
          <p>
            Más interesante que el dividend yield es el <strong style={{ color: '#C9D4E0' }}>dividend growth</strong>: cuánto sube el dividendo cada año.
          </p>
          <p className="mt-3">
            Una empresa que sube su dividendo 8% anual año tras año mientras crece ganancias demuestra confianza en el futuro. Coca-Cola ha subido dividendo 60 años seguidos. Eso es mejor que cualquier múltiplo como indicador de calidad de negocio.
          </p>
          <p className="mt-3">
            El dividend growth es especialmente atractivo porque compones: ganancia crece, dividendo sube, reinviertes dividendos (compras más acciones a mejor precio), luego el dividendo siguiente es mayor porque tenés más acciones.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            La pregunta correcta: ¿puede sostener el dividendo?
          </h2>
          <p>
            Antes de comprar una acción por dividendo, preguntate:
          </p>
          <ul className="mt-3 space-y-2 pl-4">
            <li><strong style={{ color: '#C9D4E0' }}>¿El FCF cubre el dividendo?</strong> <span style={{ color: '#8A9A85' }}>Si la empresa tiene FCF positivo mayor al dividendo, está genuinamente distribuyendo dinero. Si no, está tomando deuda o vendiendo activos para pagar.</span></li>
            <li><strong style={{ color: '#C9D4E0' }}>¿El negocio crece?</strong> <span style={{ color: '#8A9A85' }}>Si ganancias caen pero el dividendo se mantiene igual, el payout sube. Eso es insostenible.</span></li>
            <li><strong style={{ color: '#C9D4E0' }}>¿Hay cobertura de deuda?</strong> <span style={{ color: '#8A9A85' }}>Una empresa apalancada que paga dividendo masivo mientras la deuda crece terminará mal.</span></li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Cómo OBG lo usa
          </h2>
          <p>
            No invertimos "en dividendos". Invertimos en empresas que tienen capital de sobra y lo distribuyen a accionistas. El dividendo es confirmación de que el flujo de caja es real, no manipulación contable. Si el dividendo cae, es primera señal de alerta.
          </p>
        </section>

      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', margin: '2.5rem 0' }} />

      <section className="mb-8">
        <p className="text-sm md:text-base uppercase tracking-widest mb-4" style={{ color: 'rgba(201,168,76,0.5)' }}>Guías relacionadas</p>
        <div className="flex flex-wrap gap-2">
          {[
            { slug: 'flujo-de-caja-libre', label: 'Flujo de caja libre' },
            { slug: 'margen-de-seguridad', label: 'Margen de seguridad' },
            { slug: 'como-leer-un-balance', label: 'Leer un balance' },
            { slug: 'interes-compuesto', label: 'Interés compuesto' },
            { slug: 'buffett-criterios', label: '♥ Criterios Buffett' },
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
          ¿Querés ver cómo analizamos el dividendo de una empresa?
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
