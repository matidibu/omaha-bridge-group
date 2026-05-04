import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'Los ciclos de mercado de Howard Marks — Cómo posicionarse | Omaha Bridge Group',
  description: 'La filosofía cíclica de Howard Marks y Oaktree Capital: cómo saber en qué fase del ciclo estamos, y por qué eso determina el riesgo/retorno de cualquier inversión.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/ciclos-howard-marks' },
  openGraph: {
    title: 'Los ciclos de mercado de Howard Marks | Omaha Bridge Group',
    description: 'No podés predecir cuándo, pero podés saber dónde estás. La filosofía de ciclos de Oaktree Capital.',
    type: 'article',
  },
}

const COLOR = '#6AAFFA'

export default function CiclosHowardMarksPage() {
  return (
    <GuiasShell>
      <div className="mb-10">
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          ♠ &nbsp; Howard Marks · El Estratega
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          Los ciclos de mercado de Howard Marks
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          No podés predecir cuándo ocurrirá el próximo crash, pero podés saber dónde estás parado.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>7 min de lectura</span>
          <span>·</span>
          <span>Ciclos de mercado · Macro · Asignación de activos</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-sm leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          Howard Marks co-fundó Oaktree Capital en 1995 y lo convirtió en uno de los fondos de deuda más respetados del mundo, con más de 180.000 millones de dólares bajo gestión. Su contribución al pensamiento inversor no es una fórmula ni un ratio: es una forma de pensar sobre el mercado como sistema cíclico.
        </p>
        <p>
          Desde 1990, Marks escribe memos para sus clientes — hoy disponibles públicamente en el sitio de Oaktree. Son documentos extraordinariamente lúcidos sobre psicología del mercado, riesgo y posicionamiento. Warren Buffett dijo que los lee en cuanto llegan a su bandeja.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Los mercados no son eficientes: son cíclicos
          </h2>
          <p>
            La teoría del mercado eficiente sostiene que los precios reflejan toda la información disponible en todo momento, y que los movimientos futuros son impredecibles — una caminata aleatoria. Marks lo refuta con décadas de observación: los mercados oscilan sistemáticamente entre el optimismo exagerado y el pesimismo exagerado, alejándose del valor intrínseco en ambas direcciones.
          </p>
          <p className="mt-3">
            No porque los inversores sean irracionales, sino porque son humanos. Y los humanos reaccionan emocionalmente a la información reciente, extrapolan tendencias recientes y se contagian del estado de ánimo colectivo.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            El péndulo del mercado
          </h2>
          <p>
            Marks usa la metáfora del péndulo. El mercado oscila entre dos extremos: el polo del miedo y el polo de la codicia. En el polo de la codicia, los inversores proyectan el futuro con optimismo, pagan múltiplos altos, toleran más riesgo del que deberían y asumen que el crecimiento continuará. En el polo del miedo, proyectan catástrofe, venden activos de calidad a precios de liquidación y huyen de cualquier activo que no sea cash o bonos del tesoro.
          </p>
          <p className="mt-3">
            El péndulo rara vez se detiene en el punto de equilibrio — pasa por él camino de un extremo al otro. La tarea del inversor inteligente es reconocer en qué parte del arco está el péndulo ahora mismo.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            No cuándo, sino dónde
          </h2>
          <p>
            Marks es explícito en algo que muchos inversores olvidan: no es posible predecir el timing del mercado con consistencia. Nadie sabe cuándo va a llegar el próximo crash ni cuándo va a empezar el próximo bull market.
          </p>
          <p className="mt-3">
            Pero sí es posible — con alta probabilidad — saber <em>dónde</em> estamos en el ciclo. Cuando las valoraciones son históricamente altas, el crédito fluye libremente, los estándares de suscripción se relajan y todo el mundo es optimista, probablemente estamos cerca del techo del ciclo. Cuando ocurre lo opuesto, probablemente estamos cerca del piso.
          </p>
          <p className="mt-3">
            Eso no significa que el crash sea inminente — el péndulo puede seguir oscilando hacia el extremo durante meses o años. Pero el riesgo/retorno ya está sesgado: desde valuaciones altas, el retorno esperado es menor y el riesgo de caída es mayor.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Señales del techo y del piso del ciclo
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 mt-3">
            <div className="rounded-lg p-4" style={{ background: 'rgba(248,113,113,0.06)', border: '1px solid rgba(248,113,113,0.12)' }}>
              <div className="text-xs font-semibold mb-2" style={{ color: '#f87171' }}>Señales de techo del ciclo</div>
              <ul className="space-y-1.5 text-xs" style={{ color: '#7A8A95' }}>
                <li>— Optimismo generalizado: &quot;los fundamentos justifican los precios&quot;</li>
                <li>— IPOs de empresas sin ganancias a múltiplos altos</li>
                <li>— Estándares de crédito relajados, covenants débiles</li>
                <li>— &quot;Esta vez es diferente&quot; — siempre es la misma señal</li>
                <li>— Aversión al riesgo en mínimos históricos</li>
              </ul>
            </div>
            <div className="rounded-lg p-4" style={{ background: 'rgba(46,196,126,0.06)', border: '1px solid rgba(46,196,126,0.12)' }}>
              <div className="text-xs font-semibold mb-2" style={{ color: '#2EC47E' }}>Señales de piso del ciclo</div>
              <ul className="space-y-1.5 text-xs" style={{ color: '#7A8A95' }}>
                <li>— Pesimismo universal: &quot;todo va a seguir cayendo&quot;</li>
                <li>— Empresas de calidad a 7-8x ganancias</li>
                <li>— Crédito inaccesible para buenos deudores</li>
                <li>— Los inversores más sofisticados compran en silencio</li>
                <li>— Los medios proclaman el fin del capitalismo</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            La asimetría riesgo/retorno
          </h2>
          <p>
            La conclusión práctica de la visión cíclica de Marks es que el mismo activo tiene perfiles de riesgo/retorno radicalmente distintos en diferentes momentos del ciclo. Comprar acciones de alta calidad durante el piso de un mercado bajista da mucho más upside y mucho menos downside que comprar las mismas acciones al techo de un mercado alcista.
          </p>
          <p className="mt-3">
            No es magia ni predicción: es simplemente que comprar barato protege contra la baja y maximiza el upside. Comprar caro hace lo contrario.
          </p>
          <blockquote className="border-l-2 pl-4 mt-4 italic"
            style={{ borderColor: 'rgba(106,175,250,0.4)', color: 'rgba(232,237,245,0.7)', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            &ldquo;Cuanto menos prudencia usan los demás, más prudencia debemos usar nosotros.&rdquo;
            <span className="block mt-1 not-italic text-xs" style={{ color: '#4A6A55' }}>— Howard Marks</span>
          </blockquote>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Cómo OBG aplica el análisis de ciclo
          </h2>
          <p>
            El sabio Marks en <span translate="no">Omaha Bridge Group</span> evalúa indicadores macroeconómicos de la <span translate="no">Reserva Federal</span> (<span translate="no">FRED</span>) para determinar la posición actual del ciclo: tasas de interés, spreads de crédito, indicadores de actividad económica y condiciones de liquidez. Luego posiciona la acción analizada en ese contexto cíclico, evaluando si el riesgo/retorno es favorable o desfavorable dada la fase del mercado.
          </p>
        </section>

      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', margin: '2.5rem 0' }} />

      <section className="mb-8">
        <p className="text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(201,168,76,0.5)' }}>Otras guías</p>
        <div className="flex flex-wrap gap-2">
          {[
            { slug: 'buffett-criterios', label: '♥ Buffett' },
            { slug: 'magic-formula-greenblatt', label: '♦ Greenblatt' },
            { slug: 'peg-peter-lynch', label: '♣ Lynch' },
            { slug: 'antifragilidad-taleb', label: '★ Taleb' },
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
          ¿Querés ver el análisis de ciclo aplicado a una acción real?
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
