import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'Guías de value investing | Omaha Bridge Group',
  description: 'Guías completas de inversión en español: los métodos de Buffett, Lynch, Greenblatt, Taleb, Marks y Fink, más conceptos esenciales como FCF, margen de seguridad, moat, CEDEARs y psicología del inversor.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias' },
  openGraph: {
    title: 'Guías de value investing | Omaha Bridge Group',
    description: 'Cuarenta y ocho guías de inversión en español: los 6 maestros del value investing y análisis sectorial para invertir con criterios fundamentales.',
    type: 'website',
  },
}

const SAGES = [
  {
    slug: 'buffett-criterios',
    sage: 'Warren Buffett',
    symbol: '♥',
    color: '#D4A843',
    title: 'Cómo analiza Buffett una acción',
    desc: 'Los cinco criterios del Anfitrión: moat, ROIC, gestión honesta, precio y comprensión del negocio.',
    readTime: '8 min',
  },
  {
    slug: 'magic-formula-greenblatt',
    sage: 'Joel Greenblatt',
    symbol: '♦',
    color: '#7BBDE0',
    title: 'La Magic Formula de Greenblatt',
    desc: 'Cómo combinar earnings yield y return on capital para seleccionar acciones de forma sistemática.',
    readTime: '7 min',
  },
  {
    slug: 'peg-peter-lynch',
    sage: 'Peter Lynch',
    symbol: '♣',
    color: '#2EC47E',
    title: 'El método GARP de Peter Lynch',
    desc: 'Crecer sin pagar de más: el ratio PEG y las seis categorías de acciones según Lynch.',
    readTime: '7 min',
  },
  {
    slug: 'antifragilidad-taleb',
    sage: 'Nassim Taleb',
    symbol: '★',
    color: '#A8BDD8',
    title: 'Antifragilidad según Taleb',
    desc: 'Cómo detectar fragilidad corporativa oculta antes de que un evento extremo la exponga.',
    readTime: '8 min',
  },
  {
    slug: 'ciclos-howard-marks',
    sage: 'Howard Marks',
    symbol: '♠',
    color: '#6AAFFA',
    title: 'Los ciclos de mercado de Howard Marks',
    desc: 'No podés predecir cuándo ocurrirá el próximo crash, pero podés saber dónde estás parado.',
    readTime: '7 min',
  },
  {
    slug: 'calidad-institucional-fink',
    sage: 'Larry Fink',
    symbol: '✦',
    color: '#A78BFA',
    title: 'Calidad institucional según Fink',
    desc: 'La perspectiva del gestor de $10 billones: gobernanza, largo plazo y retorno total al accionista.',
    readTime: '6 min',
  },
]

const CONCEPTS = [
  {
    slug: 'flujo-de-caja-libre',
    title: 'Flujo de caja libre (FCF)',
    desc: 'La métrica más honesta de un negocio: el dinero real que genera para sus dueños cada año.',
    readTime: '8 min',
    tag: 'Valoración',
  },
  {
    slug: 'margen-de-seguridad',
    title: 'El margen de seguridad',
    desc: 'Las tres palabras más importantes del value investing: nunca pagar el valor completo de un activo.',
    readTime: '7 min',
    tag: 'Principios',
  },
  {
    slug: 'tipos-de-moat',
    title: 'Los cuatro tipos de moat',
    desc: 'Marca, costos de cambio, efecto de red y ventaja de costos: cómo identificar ventajas competitivas reales.',
    readTime: '9 min',
    tag: 'Análisis competitivo',
  },
  {
    slug: 'precio-vs-valor',
    title: 'Precio vs valor',
    desc: 'La distinción que define al inversor inteligente: el mercado fija precios erróneos con frecuencia.',
    readTime: '7 min',
    tag: 'Principios',
  },
  {
    slug: 'interes-compuesto',
    title: 'El interés compuesto',
    desc: 'Por qué el tiempo es el mejor activo del inversor y cómo el compuesto transforma rendimientos modestos en riqueza.',
    readTime: '7 min',
    tag: 'Fundamentos',
  },
  {
    slug: 'psicologia-del-inversor',
    title: 'Psicología del inversor',
    desc: 'Los sesgos que llevan a comprar caro, vender barato y repetir los mismos errores.',
    readTime: '8 min',
    tag: 'Conducta',
  },
  {
    slug: 'errores-comunes-value-investing',
    title: 'Los 7 errores más comunes',
    desc: 'Trampas de valor, sobre-diversificación, EBITDA engañoso: los errores que cometen incluso inversores experimentados.',
    readTime: '9 min',
    tag: 'Errores',
  },
  {
    slug: 'deuda-en-value-investing',
    title: 'Deuda en value investing',
    desc: 'Cuándo la deuda destruye valor y cuándo es irrelevante. Las métricas para evaluar el riesgo financiero.',
    readTime: '8 min',
    tag: 'Riesgo',
  },
  {
    slug: 'como-leer-un-balance',
    title: 'Cómo leer un balance general',
    desc: 'Activos, pasivos y patrimonio neto: cómo extraer lo que importa del balance para evaluar la salud financiera.',
    readTime: '8 min',
    tag: 'Estados financieros',
  },
  {
    slug: 'como-evaluar-un-ceo',
    title: 'Cómo evaluar a un CEO',
    desc: 'Señales de gestión excelente y mediocre: asignación de capital, lenguaje honesto y compensación alineada.',
    readTime: '7 min',
    tag: 'Gobierno corporativo',
  },
  {
    slug: 'como-analizar-bancos',
    title: 'Cómo analizar bancos',
    desc: 'NIM, ROE, ratio de eficiencia, NPL y capital Tier 1: las métricas específicas del sector financiero.',
    readTime: '9 min',
    tag: 'Análisis sectorial',
  },
  {
    slug: 'como-analizar-saas',
    title: 'Cómo analizar empresas SaaS',
    desc: 'ARR, churn, Net Revenue Retention y LTV/CAC: el vocabulario y las métricas del software como servicio.',
    readTime: '9 min',
    tag: 'Análisis sectorial',
  },
  {
    slug: 'como-analizar-empresas-energeticas',
    title: 'Cómo analizar empresas energéticas',
    desc: 'Lifting cost, reservas, FCF en distintos escenarios de precio: cómo analizar petroleras y gasistas.',
    readTime: '8 min',
    tag: 'Análisis sectorial',
  },
  {
    slug: 'cedears-guia-completa',
    title: '🇦🇷 CEDEARs: guía completa',
    desc: 'Cómo funcionan los CEDEARs, el CCL implícito, prima/descuento y cómo invertir en acciones globales desde Argentina.',
    readTime: '8 min',
    tag: 'Mercado argentino',
  },
]

export default function GuiasIndexPage() {
  return (
    <GuiasShell backHref="/" backLabel="← Inicio">

      <section className="text-center mb-14">
        <p className="text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(201,168,76,0.5)' }}>
          ♣ &nbsp; Guías de inversión &nbsp; ♣
        </p>
        <h1 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}
          className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
          Guías de value investing
        </h1>
        <p className="text-sm max-w-xl mx-auto leading-relaxed" style={{ color: '#6A8A75' }}>
          Cuarenta y ocho guías escritas en español que explican los métodos de los 6 maestros, conceptos esenciales, estrategias de valoración, análisis sectorial y el pensamiento detrás de cada decisión de inversión.
        </p>
      </section>

      {/* ── Los 6 maestros ── */}
      <section className="mb-14">
        <h2 className="text-xs uppercase tracking-widest mb-5 pb-2"
          style={{ color: 'rgba(201,168,76,0.5)', borderBottom: '1px solid rgba(201,168,76,0.1)', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Los 6 maestros
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {SAGES.map(({ slug, sage, symbol, color, title, desc, readTime }) => (
            <Link
              key={slug}
              href={`/guias/${slug}`}
              className="group rounded-xl border p-5 flex flex-col gap-3 transition-all hover:border-[#C9A84C]/30 hover:bg-[#C9A84C]/5"
              style={{ borderColor: `${color}20`, background: 'rgba(7,43,24,0.4)' }}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono" style={{ color }}>{symbol} {sage}</span>
                <span className="text-xs" style={{ color: '#3A5A45' }}>{readTime}</span>
              </div>
              <h3 className="font-bold text-base leading-tight group-hover:text-[#C9A84C] transition-colors"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#E8EDF5' }}>
                {title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: '#5A7A65' }}>{desc}</p>
              <span className="text-xs mt-auto" style={{ color: `${color}80` }}>Leer guía →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Conceptos esenciales ── */}
      <section className="mb-14">
        <h2 className="text-xs uppercase tracking-widest mb-5 pb-2"
          style={{ color: 'rgba(201,168,76,0.5)', borderBottom: '1px solid rgba(201,168,76,0.1)', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Conceptos esenciales
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CONCEPTS.map(({ slug, title, desc, readTime, tag }) => (
            <Link
              key={slug}
              href={`/guias/${slug}`}
              className="group rounded-xl border p-5 flex flex-col gap-2 transition-all hover:border-[#C9A84C]/30 hover:bg-[#C9A84C]/5"
              style={{ borderColor: 'rgba(201,168,76,0.12)', background: 'rgba(7,43,24,0.3)' }}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ color: 'rgba(201,168,76,0.6)', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.12)' }}>
                  {tag}
                </span>
                <span className="text-xs" style={{ color: '#3A5A45' }}>{readTime}</span>
              </div>
              <h3 className="font-bold text-base leading-tight group-hover:text-[#C9A84C] transition-colors"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#E8EDF5' }}>
                {title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: '#5A7A65' }}>{desc}</p>
              <span className="text-xs mt-auto" style={{ color: 'rgba(201,168,76,0.5)' }}>Leer guía →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Valoración y estrategia ── */}
      <section className="mb-14">
        <h2 className="text-xs uppercase tracking-widest mb-5 pb-2"
          style={{ color: 'rgba(201,168,76,0.5)', borderBottom: '1px solid rgba(201,168,76,0.1)', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Valoración y estrategia
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { slug: 'dcf-valoracion', title: 'DCF: cómo valorar una empresa', desc: 'La fórmula de Buffett: proyectar flujo de caja libre futuro y descontarlo. Cómo calcular valor intrínseco.', readTime: '9 min', tag: 'Valoración' },
            { slug: 'roe-roa-roic', title: 'ROE, ROA y ROIC', desc: 'Tres métricas de rentabilidad. Cuál mide qué, cuál es trampa, por qué Buffett prefiere ROIC.', readTime: '8 min', tag: 'Métricas' },
            { slug: 'ev-ebitda', title: 'EV/EBITDA: cómo usarlo correctamente', desc: 'El múltiplo que todos usan. Cuándo es útil, dónde falla, y por qué necesitas FCF después.', readTime: '8 min', tag: 'Múltiplos' },
            { slug: 'ebitda-vs-fcf', title: 'Por qué el CEO te miente con EBITDA', desc: 'La métrica que hace brillar a los CEOs: EBITDA. La que revela la realidad: FCF. La diferencia entre ilusión y dinero real.', readTime: '7 min', tag: 'Engaños' },
            { slug: 'ocf-operating-cash-flow', title: 'El dinero que importa: OCF vs earnings', desc: 'OCF es dinero que realmente circuló. Earnings es lo que la contabilidad dice. Cómo ver la diferencia.', readTime: '7 min', tag: 'Flujo de caja' },
            { slug: 'earnings-vs-cash', title: 'La ilusión de $1B en ganancias sin dinero', desc: 'Earnings: lo que la contabilidad dice. Cash: lo que realmente hay. Cómo detectar la trampa.', readTime: '7 min', tag: 'Estados financieros' },
            { slug: 'price-to-book-pb', title: 'El secreto de Graham: comprar con descuento', desc: 'P/B menor a 1 = ganga... a veces. Cómo diferenciar oportunidad de trampa.', readTime: '7 min', tag: 'Múltiplos' },
            { slug: 'price-to-sales-ps', title: 'La métrica que nadie puede falsificar', desc: 'P/S es dinero real: lo que entró al banco. Earnings son contabilidad. Por qué P/S bajo es más seguro.', readTime: '7 min', tag: 'Múltiplos' },
            { slug: 'dividendos-value-investing', title: 'Dividendos en value investing', desc: 'No todos los dividendos son iguales. Dividend yield, payout ratio, sostenibilidad. Cuándo confiar.', readTime: '8 min', tag: 'Estrategia' },
            { slug: 'capex-mantenimiento-vs-crecimiento', title: 'Cómo los CEOs esconden gastos enormes', desc: '"Capex de crecimiento" = gasto que no genera dinero pero lo llaman inversión. Cómo detectar la trampa.', readTime: '7 min', tag: 'Análisis' },
          ].map(({ slug, title, desc, readTime, tag }) => (
            <Link
              key={slug}
              href={`/guias/${slug}`}
              className="group rounded-xl border p-5 flex flex-col gap-2 transition-all hover:border-[#C9A84C]/30 hover:bg-[#C9A84C]/5"
              style={{ borderColor: 'rgba(201,168,76,0.12)', background: 'rgba(7,43,24,0.3)' }}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ color: 'rgba(201,168,76,0.6)', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.12)' }}>
                  {tag}
                </span>
                <span className="text-xs" style={{ color: '#3A5A45' }}>{readTime}</span>
              </div>
              <h3 className="font-bold text-base leading-tight group-hover:text-[#C9A84C] transition-colors"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#E8EDF5' }}>
                {title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: '#5A7A65' }}>{desc}</p>
              <span className="text-xs mt-auto" style={{ color: 'rgba(201,168,76,0.5)' }}>Leer guía →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Análisis sectorial ── */}
      <section className="mb-14">
        <h2 className="text-xs uppercase tracking-widest mb-5 pb-2"
          style={{ color: 'rgba(201,168,76,0.5)', borderBottom: '1px solid rgba(201,168,76,0.1)', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Análisis sectorial
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { slug: 'como-analizar-consumo-masivo', title: 'Cómo analizar consumo masivo', desc: 'Marca, moat, márgenes. Las características de empresas como Coca-Cola que las hacen valiosas.', readTime: '9 min', tag: 'Sectorial' },
            { slug: 'como-analizar-retail', title: 'La tienda que muere en 6 meses', desc: 'Retail: ventas altas, dinero cero. Cómo los inventarios mueren en los estantes. La métrica que predice el colapso.', readTime: '8 min', tag: 'Sectorial' },
            { slug: 'como-analizar-real-estate', title: 'El dividendo del REIT que desaparece', desc: 'Rendimiento del 7%... pero viene del endeudamiento. Cómo diferenciar distribuciones reales de ilusiones.', readTime: '8 min', tag: 'Sectorial' },
            { slug: 'como-analizar-telecom', title: 'El cliente que se va: el churn', desc: 'Una telecom pierde 2% de clientes mensual = 24% anual. El negocio del cliente que huye.', readTime: '8 min', tag: 'Sectorial' },
            { slug: 'como-analizar-mineria', title: 'Oro brillante hoy, quiebra mañana', desc: 'Minería a $1500/oz gana, a $900/oz pierde. El ciclo define todo. Cómo diferenciar minas que sobreviven.', readTime: '9 min', tag: 'Sectorial' },
            { slug: 'como-analizar-energia', title: 'Oil a $150 ganas, a $40 pierdes todo', desc: 'Energía = ciclos extremos. Cómo sobrevivir. Cómo invertir sin quedar destruido cuando el precio cae.', readTime: '9 min', tag: 'Sectorial' },
            { slug: 'como-analizar-seguros', title: 'El dinero gratis de Buffett', desc: 'Reciben dinero hoy, pagan mañana. Ese "float" es dinero gratis mientras se invierte. Por qué Buffett ama seguros.', readTime: '8 min', tag: 'Sectorial' },
            { slug: 'como-analizar-bancos', title: 'Cómo analizar bancos', desc: 'NIM, ROE, ratio de eficiencia, NPL y capital Tier 1: las métricas específicas del sector financiero.', readTime: '9 min', tag: 'Sectorial' },
            { slug: 'como-analizar-saas', title: 'Cómo analizar empresas SaaS', desc: 'ARR, churn, Net Revenue Retention y LTV/CAC: el vocabulario y las métricas del software como servicio.', readTime: '9 min', tag: 'Sectorial' },
            { slug: 'como-analizar-empresas-energeticas', title: 'Cómo analizar empresas energéticas', desc: 'Lifting cost, reservas, FCF en distintos escenarios de precio: cómo analizar petroleras y gasistas.', readTime: '8 min', tag: 'Sectorial' },
          ].map(({ slug, title, desc, readTime, tag }) => (
            <Link
              key={slug}
              href={`/guias/${slug}`}
              className="group rounded-xl border p-5 flex flex-col gap-2 transition-all hover:border-[#C9A84C]/30 hover:bg-[#C9A84C]/5"
              style={{ borderColor: 'rgba(201,168,76,0.12)', background: 'rgba(7,43,24,0.3)' }}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ color: 'rgba(201,168,76,0.6)', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.12)' }}>
                  {tag}
                </span>
                <span className="text-xs" style={{ color: '#3A5A45' }}>{readTime}</span>
              </div>
              <h3 className="font-bold text-base leading-tight group-hover:text-[#C9A84C] transition-colors"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#E8EDF5' }}>
                {title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: '#5A7A65' }}>{desc}</p>
              <span className="text-xs mt-auto" style={{ color: 'rgba(201,168,76,0.5)' }}>Leer guía →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Estrategia e inversión avanzada ── */}
      <section className="mb-14">
        <h2 className="text-xs uppercase tracking-widest mb-5 pb-2"
          style={{ color: 'rgba(201,168,76,0.5)', borderBottom: '1px solid rgba(201,168,76,0.1)', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Estrategia e inversión avanzada
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { slug: 'small-caps', title: 'Small caps: oportunidades y riesgos', desc: 'Empresas pequeñas, ignoradas por fondos masivos. Dónde están las ineficiencias de mercado.', readTime: '9 min', tag: 'Estrategia' },
            { slug: 'value-investing-argentina', title: '🇦🇷 Value investing en Argentina', desc: 'Value investing en contexto local. Dólares, CEDEARs, ciclos políticos y macro volatilidad.', readTime: '10 min', tag: 'Local' },
            { slug: 'selectividad-concentracion', title: 'Menos es más: concentración vs diversificación', desc: '5 acciones excelentes vencen 100 mediocres. Cómo la selectividad multiplica retornos.', readTime: '8 min', tag: 'Estrategia' },
            { slug: 'riesgo-vs-volatilidad', title: 'Riesgo vs volatilidad', desc: 'No son lo mismo. Volatilidad es oportunidad para quien tiene disciplina. El riesgo es si quiebra.', readTime: '8 min', tag: 'Mentalidad' },
            { slug: 'analisis-tecnico-vs-fundamental', title: 'Análisis técnico vs fundamental', desc: 'Uno mira gráficos. Otro mira negocios. Por qué Buffett ignora los charts.', readTime: '7 min', tag: 'Métodos' },
            { slug: 'el-largo-plazo', title: 'El largo plazo como ventaja', desc: 'Buffett 99% de su fortuna al interés compuesto en 60 años. Por qué el tiempo amplifica ventajas.', readTime: '8 min', tag: 'Mentalidad' },
            { slug: 'spinoffs-oportunidades', title: 'Cuando 1+1=3: spinoffs', desc: 'Una compañía se divide, el mercado infravalúa la pequeña, tú ganas la diferencia. Arbitrage de spinoffs.', readTime: '8 min', tag: 'Oportunidades' },
            { slug: 'fusiones-adquisiciones', title: 'El spread de la fusión: dinero esperando', desc: 'Empresa A ofrece $100, mercado cotiza a $97. El $3 es tuyo si el deal cierra. Cómo evaluar el riesgo.', readTime: '8 min', tag: 'Oportunidades' },
            { slug: 'empresas-defensivas', title: 'Tu paraguas en la tormenta', desc: 'Gente sigue comprando jabón en crisis. Esas empresas son defensa cuando el mercado colapsa.', readTime: '8 min', tag: 'Mentalidad' },
            { slug: 'altman-z-score', title: 'Los números que predicen la quiebra', desc: 'Z-Score: 72% de precisión prediciendo quiebras un año antes. Los números que predice Altman.', readTime: '8 min', tag: 'Riesgo' },
            { slug: 'compounding-variable-del-tiempo', title: 'La paciencia se paga: $10k → $1M', desc: 'El secreto que Buffett repite hace 60 años. No es el retorno anual, es el número de años.', readTime: '8 min', tag: 'Mentalidad' },
          ].map(({ slug, title, desc, readTime, tag }) => (
            <Link
              key={slug}
              href={`/guias/${slug}`}
              className="group rounded-xl border p-5 flex flex-col gap-2 transition-all hover:border-[#C9A84C]/30 hover:bg-[#C9A84C]/5"
              style={{ borderColor: 'rgba(201,168,76,0.12)', background: 'rgba(7,43,24,0.3)' }}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs px-2 py-0.5 rounded-full" style={{ color: 'rgba(201,168,76,0.6)', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.12)' }}>
                  {tag}
                </span>
                <span className="text-xs" style={{ color: '#3A5A45' }}>{readTime}</span>
              </div>
              <h3 className="font-bold text-base leading-tight group-hover:text-[#C9A84C] transition-colors"
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#E8EDF5' }}>
                {title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: '#5A7A65' }}>{desc}</p>
              <span className="text-xs mt-auto" style={{ color: 'rgba(201,168,76,0.5)' }}>Leer guía →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Qué es el value investing ── */}
      <section className="rounded-xl border p-6 mb-10" style={{ borderColor: 'rgba(201,168,76,0.12)', background: 'rgba(7,43,24,0.4)' }}>
        <h2 className="text-base font-semibold mb-3" style={{ color: '#C9A84C', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          ¿Qué es el value investing?
        </h2>
        <div className="space-y-3 text-sm leading-relaxed" style={{ color: '#6A8A75' }}>
          <p>
            El value investing es la disciplina de invertir en empresas cuyo precio de mercado está por debajo de su valor intrínseco. No se trata de adivinar qué acción va a subir mañana, sino de entender cuánto vale un negocio y comprarlo con margen de seguridad.
          </p>
          <p>
            La idea fue sistematizada por Benjamin Graham en los años treinta, pero sus discípulos la expandieron en direcciones distintas: Buffett incorporó la calidad del negocio, Lynch agregó el crecimiento como variable central, Greenblatt la convirtió en un sistema mecánico, Taleb introdujo el riesgo de cola como filtro de supervivencia, Marks añadió la dimensión cíclica, y Fink aportó la perspectiva institucional y de largo plazo.
          </p>
          <p>
            Las treinta guías explican métodos, conceptos y estrategias que aplicamos en Omaha Bridge Group para generar los análisis que ves en la plataforma. Desde los criterios de los 6 maestros hasta técnicas de valoración y análisis sectorial.
          </p>
        </div>
      </section>

      <section className="text-center rounded-xl border py-8 px-6" style={{ borderColor: 'rgba(201,168,76,0.2)', background: 'rgba(7,43,24,0.5)' }}>
        <p className="text-base mb-4" style={{ color: '#A8BCA8', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          ¿Querés ver estos métodos aplicados a una acción real?
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
