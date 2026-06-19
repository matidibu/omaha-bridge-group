import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'Los bancos que colapsan: cómo verlo en el balance | Omaha Bridge Group',
  description: 'Capital ratios, provisiones, NPA: los números que predicen colapsos. Cómo 2008 muestra quién quiebra en la próxima.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/como-analizar-bancos' },
  openGraph: {
    title: 'Cómo analizar acciones bancarias | Omaha Bridge Group',
    description: 'NIM, ROE, ratio de eficiencia y capital Tier 1: las métricas que importan para evaluar un banco.',
    type: 'article',
  },
}

const COLOR = '#C9A84C'

export default function ComoAnalizarBancosPage() {
  return (
    <GuiasShell articleMeta={{
      title: 'Qué bancos colapsan: cómo verlo primero',
      description: 'NPL, capital ratios: los números que predicen. Cómo evitar 2008 otra vez.',
      publishDate: '2025-05-15',
      url: 'https://omaha-bridge-group.vercel.app/guias/como-analizar-bancos',
      image: 'https://omaha-bridge-group.vercel.app/og-guias.png',
      keywords: 'análisis de bancos, ratios bancarios, value investing',
      readingTimeMinutes: 9,
    }}>
      <div className="mb-10">
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          Conceptos esenciales · Análisis sectorial
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          Cómo analizar acciones bancarias
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Los bancos son negocios distintos. Sus métricas también lo son.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>9 min de lectura</span>
          <span>·</span>
          <span>Análisis sectorial · Finanzas</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-sm leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          Warren Buffett tiene posiciones significativas en JPMorgan, Bank of America y American Express. Charlie Munger consideraba a los bancos bien gestionados como negocios de alta calidad. Pero ambos también señalan que los bancos son especialmente difíciles de analizar — y especialmente peligrosos cuando se gestionan mal.
        </p>
        <p>
          La dificultad viene de su estructura financiera única. Un banco no fabrica productos: compra dinero (a través de depósitos y deuda) y lo vende (en forma de préstamos). Los activos de un banco son mayormente créditos — promesas de pago futuras — cuya calidad solo se revela con el tiempo. Entender cómo evaluar esa calidad es la clave para analizar bancos correctamente.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            El margen de interés neto (NIM)
          </h2>
          <p>
            El <span translate="no">Net Interest Margin</span> (<span translate="no">NIM</span>) es la diferencia entre la tasa que el banco cobra por sus préstamos y la tasa que paga por sus depósitos, expresada como porcentaje de sus activos productivos. Es el equivalente del margen bruto en una empresa industrial.
          </p>
          <div className="mt-3 p-4 rounded-lg" style={{ background: 'rgba(7,43,24,0.6)', border: '1px solid rgba(201,168,76,0.15)' }}>
            <p className="font-mono text-sm" style={{ color: '#E8EDF5' }}>
              NIM = (Ingresos por intereses — Costos de financiación) / Activos productivos promedio
            </p>
          </div>
          <p className="mt-3">
            Un NIM del 3-4% es típico para un banco retail norteamericano bien gestionado. NIMs más altos indican mayor poder de fijación de precios en crédito (o menor costo de depósitos). NIMs muy bajos sugieren presión competitiva intensa o una estructura de activos poco productiva. El NIM varía con las tasas de interés — cuando suben las tasas, los bancos con muchos préstamos de tasa variable se benefician; cuando bajan, se perjudican.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            ROE y ROA: rentabilidad ajustada al apalancamiento
          </h2>
          <p>
            Los bancos operan con apalancamiento masivo: por cada dólar de capital propio, prestan típicamente 8-12 dólares de dinero ajeno. Esto amplifica tanto las ganancias como las pérdidas.
          </p>
          <p className="mt-3">
            El <strong style={{ color: '#C9D4E0' }}>ROA</strong> (retorno sobre activos) mide la eficiencia real del negocio bancario, ignorando el apalancamiento: cuánto gana el banco por cada dólar de activos que administra. Un ROA del 1-1.5% es considerado bueno para un banco norteamericano grande. Por debajo del 0.5%, el negocio no genera retornos adecuados.
          </p>
          <p className="mt-3">
            El <strong style={{ color: '#C9D4E0' }}>ROE</strong> amplifica el ROA por el efecto del apalancamiento. Un banco con ROA del 1.2% y ratio de apalancamiento de 10x generará un ROE aproximado del 12%. Para Buffett, un ROE sostenido por encima del 15% indica un banco con posición competitiva sólida.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            El ratio de eficiencia: costos sobre ingresos
          </h2>
          <p>
            El <strong style={{ color: '#C9D4E0' }}>ratio de eficiencia</strong> mide qué porcentaje de los ingresos el banco consume en sus gastos operativos (empleados, tecnología, alquiler de oficinas, etc.). Se calcula como gastos operativos dividido ingresos totales.
          </p>
          <p className="mt-3">
            Un banco muy eficiente tiene un ratio del 50-55%: de cada $100 que gana, gasta $50-55 en operarlo. Los grandes bancos universales típicamente están entre el 55-65%. Por encima del 70%, hay un problema serio de estructura de costos — o el banco es ineficiente, o la presión competitiva ha erosionado sus ingresos sin que los costos se hayan ajustado.
          </p>
          <p className="mt-3">
            La tecnología está comprimiendo los ratios de eficiencia de los bancos digitales, que operan sin red de sucursales y con procesos automatizados. Esta presión estructural es uno de los riesgos a largo plazo que el inversor debe considerar al analizar bancos tradicionales.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Calidad del crédito: NPL y provisiones
          </h2>
          <p>
            El talón de Aquiles de cualquier banco es la calidad de su cartera de crédito. Los <strong style={{ color: '#C9D4E0' }}>préstamos morosos</strong> (<span translate="no">Non-Performing Loans</span>, <span translate="no">NPL</span>) son los créditos en default o próximos a estarlo. Se expresan como porcentaje de la cartera total.
          </p>
          <p className="mt-3">
            Un NPL ratio inferior al 1% es excelente. Entre 1-3%, manejable. Por encima del 5%, el banco tiene un problema serio de calidad crediticia. En ciclos económicos adversos, los NPL se disparan — y ese momento revela quién prestó responsablemente y quién no.
          </p>
          <p className="mt-3">
            Las <strong style={{ color: '#C9D4E0' }}>provisiones</strong> son las reservas que el banco crea anticipando pérdidas crediticias. Un banco conservador provisionará agresivamente en tiempos buenos, acumulando colchón para tiempos malos. Un banco agresivo provisionará poco para mostrar mejores ganancias a corto plazo — lo cual es una señal de alerta seria. Mirá la evolución de las provisiones a lo largo de los años, no solo en el último trimestre.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Capital Tier 1: la fortaleza del balance
          </h2>
          <p>
            El <strong style={{ color: '#C9D4E0' }}>Capital Tier 1</strong> es el capital de mayor calidad del banco — básicamente el capital propio más las reservas acumuladas — expresado como porcentaje de los activos ponderados por riesgo. Es la métrica regulatoria más importante.
          </p>
          <p className="mt-3">
            Los reguladores internacionales (Basilea III) exigen un mínimo del 6% de Tier 1 ratio. Los grandes bancos norteamericanos suelen operar con ratios del 11-14%, significativamente por encima del mínimo regulatorio. Ese exceso es un colchón de seguridad: cuanto mayor el ratio, mayor la capacidad del banco de absorber pérdidas sin necesitar capital externo en momentos de crisis.
          </p>
          <p className="mt-3">
            Buffett evita bancos con ratios de capital ajustados al mínimo regulatorio. Prefiere los que tienen capital en exceso — porque eso indica gestión conservadora y da margen para aguantar ciclos adversos sin dilución de accionistas.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            La franquicia de depósitos: el moat bancario
          </h2>
          <p>
            El moat más poderoso en banca es la <strong style={{ color: '#C9D4E0' }}>franquicia de depósitos a bajo costo</strong>. Los bancos que financian sus operaciones con depósitos de cuentas corrientes (que pagan tasas cercanas a cero) tienen un costo de fondos radicalmente inferior a los que deben emitir deuda en los mercados. Esa diferencia de costo se traduce directamente en NIM.
          </p>
          <p className="mt-3">
            JPMorgan, Bank of America y Wells Fargo tienen decenas de millones de cuentas corrientes acumuladas durante décadas. Esos depósitos son pegajosos (poca tasa de fuga), baratos (tasas bajas) y estables (no se retiran masivamente en ciclos normales). Son el equivalente bancario de un moat de costos de cambio combinado con economías de escala.
          </p>
        </section>

      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', margin: '2.5rem 0' }} />

      <section className="mb-8">
        <p className="text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(201,168,76,0.5)' }}>Guías relacionadas</p>
        <div className="flex flex-wrap gap-2">
          {[
            { slug: 'buffett-criterios', label: '♥ Criterios Buffett' },
            { slug: 'magic-formula-greenblatt', label: '♦ Magic Formula' },
            { slug: 'deuda-en-value-investing', label: 'Deuda en inversión' },
            { slug: 'como-leer-un-balance', label: 'Leer un balance' },
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
          ¿Querés analizar JPMorgan, Visa o Bank of America con los 6 maestros?
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
