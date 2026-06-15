import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'Deuda en value investing: cuándo preocupa y cuándo no | Omaha Bridge Group',
  description: 'No toda deuda es igual. Cómo evaluar la carga financiera de una empresa usando deuda/EBITDA, cobertura de intereses y flujo de caja libre. Cuándo la deuda es un riesgo fatal y cuándo es indiferente.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/deuda-en-value-investing' },
  openGraph: {
    title: 'Deuda en value investing | Omaha Bridge Group',
    description: 'Cuándo la deuda destruye valor y cuándo es irrelevante. Las métricas para evaluar el riesgo financiero de una empresa.',
    type: 'article',
  },
}

const COLOR = '#C9A84C'

export default function DeudaEnValueInvestingPage() {
  return (
    <GuiasShell articleMeta={{
      title: 'Deuda en value investing: cuándo preocupa y cuándo no',
      description: 'No toda deuda es igual. Cómo evaluar la carga financiera de una empresa usando deuda/EBITDA, cobertura de intereses y flujo de caja libre. Cuándo la deuda es un riesgo fatal y cuándo es indiferente.',
      publishDate: '2025-05-15',
      url: 'https://omaha-bridge-group.vercel.app/guias/deuda-en-value-investing',
      image: 'https://omaha-bridge-group.vercel.app/og-guias.png',
      keywords: 'deuda empresarial, leverage, risk assessment',
      readingTimeMinutes: 8,
    }}>
      <div className="mb-10">
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          Conceptos esenciales · Análisis de riesgo
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          Deuda en value investing
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Nassim Taleb la llama el enemigo oculto de la empresa antifrágil. Buffett la teme más que a la inflación. Cuándo importa y cuándo no.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>8 min de lectura</span>
          <span>·</span>
          <span>Riesgo financiero · Análisis fundamental</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-sm leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          Existe una idea popular en las finanzas corporativas de que la deuda puede "optimizar" la estructura de capital de una empresa: reduce impuestos (los intereses son deducibles), amplifica el retorno sobre el capital propio y "disciplina" a la gerencia. Hay algo de verdad en eso. Pero para el inversor de largo plazo, la deuda tiene un costo que los modelos académicos suelen subestimar: aumenta la fragilidad ante eventos imprevistos.
        </p>
        <p>
          Buffett es categórico: nunca usa deuda en su vida personal y desconfía profundamente de las empresas que la usan en exceso. No porque la deuda sea siempre mala — sino porque convierte problemas temporales en problemas permanentes. Una empresa sin deuda puede sobrevivir años de resultados mediocres. Una empresa apalancada que enfrenta el mismo período puede quebrar.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Las métricas de deuda que importan
          </h2>
          <p>
            El ratio más usado es <strong style={{ color: '#C9D4E0' }}>Deuda neta / EBITDA</strong>. Mide cuántos años de ganancias operativas tardaría la empresa en pagar su deuda neta (deuda total menos caja disponible).
          </p>
          <ul className="mt-3 space-y-2 pl-4">
            <li><strong style={{ color: '#C9D4E0' }}>Por debajo de 1x:</strong> <span style={{ color: '#8A9A85' }}>muy bajo apalancamiento, el riesgo financiero es mínimo.</span></li>
            <li><strong style={{ color: '#C9D4E0' }}>1-2x:</strong> <span style={{ color: '#8A9A85' }}>cómodo para la mayoría de industrias con flujos de caja estables.</span></li>
            <li><strong style={{ color: '#C9D4E0' }}>2-3x:</strong> <span style={{ color: '#8A9A85' }}>manejable pero requiere flujos de caja consistentes. Poca tolerancia a sorpresas negativas.</span></li>
            <li><strong style={{ color: '#C9D4E0' }}>Por encima de 4x:</strong> <span style={{ color: '#8A9A85' }}>alto riesgo. Requiere que el negocio sea muy predecible o que exista un plan claro de desapalancamiento.</span></li>
          </ul>
          <p className="mt-3">
            Pero el EBITDA tiene sus limitaciones como denominador (ignora capex e impuestos). Una mejor métrica es <strong style={{ color: '#C9D4E0' }}>Deuda neta / FCF</strong>: cuántos años de flujo de caja libre libre necesita la empresa para cancelar su deuda. Si ese número es superior a 5-6x en una empresa sin ventaja competitiva clara, hay un riesgo real de distress financiero en una recesión.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Cobertura de intereses: ¿puede la empresa pagar su deuda?
          </h2>
          <p>
            El <strong style={{ color: '#C9D4E0' }}>ratio de cobertura de intereses</strong> (<span translate="no">Interest Coverage Ratio</span>) mide cuántas veces las ganancias operativas cubren los pagos de intereses anuales:
          </p>
          <div className="mt-3 p-4 rounded-lg" style={{ background: 'rgba(7,43,24,0.6)', border: '1px solid rgba(201,168,76,0.15)' }}>
            <p className="font-mono text-sm" style={{ color: '#E8EDF5' }}>
              ICR = EBIT / Gastos por intereses
            </p>
          </div>
          <p className="mt-3">
            Un ICR por debajo de 2x es una señal de alarma: si los resultados caen aunque sea moderadamente, la empresa podría no cubrir sus pagos de intereses. Un ICR de 5x o más indica que la empresa tiene amplio margen para soportar deterioro en sus resultados sin entrar en problemas de pago.
          </p>
          <p className="mt-3">
            Las empresas con ICR bajo son especialmente vulnerables al aumento de tasas de interés cuando deben refinanciar deuda a vencimiento. Una empresa que emitió deuda al 3% en 2020 y debe refinanciarla al 7% en 2025 puede ver sus gastos por intereses más que duplicarse — comprimiendo márgenes que ya estaban ajustados.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Cuándo la deuda no importa: la empresa antifrágil a la deuda
          </h2>
          <p>
            Existen negocios donde la deuda alta es prácticamente irrelevante para el análisis. Las empresas de servicios públicos regulados (<span translate="no">utilities</span>), por ejemplo, operan con deuda masiva pero flujos de caja garantizados contractualmente por décadas. La deuda está perfectamente calzada con el activo que financia y no existe riesgo de impago mientras se mantenga el marco regulatorio.
          </p>
          <p className="mt-3">
            Las empresas con moat muy robusto y flujos de caja altamente predecibles (concesiones, patentes, contratos de largo plazo) también pueden operar con más deuda que una empresa cíclica, porque la volatilidad de sus flujos de caja es baja. La deuda es peligrosa cuando hay volatilidad en el numerador (ingresos y FCF) combinada con obligaciones fijas en el denominador (pagos de intereses y capital).
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Deuda y ciclos económicos: el riesgo que no aparece en los buenos tiempos
          </h2>
          <p>
            El verdadero peligro de la deuda se revela en las crisis, no en los tiempos de expansión. Una empresa con 4x Deuda/EBITDA que opera en una industria cíclica puede ver ese ratio dispararse a 8-10x si el EBITDA se corta a la mitad en una recesión. Eso desencadena covenants bancarios, restricciones de dividendo, y en el peor caso, necesidad de emitir acciones a precios de pánico — destruyendo valor para el accionista existente.
          </p>
          <p className="mt-3">
            Howard Marks lo resume bien: el apalancamiento funciona perfectamente en la expansión y se convierte en trampa mortal en la contracción. Las empresas que sobreviven las crisis para convertirse en líderes absolutos de su industria suelen ser las que entraron con balances sólidos — y pudieron comprar activos baratos de competidores que no sobrevivieron.
          </p>
          <blockquote className="border-l-2 pl-4 mt-4 italic"
            style={{ borderColor: 'rgba(201,168,76,0.4)', color: 'rgba(232,237,245,0.7)', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            &ldquo;Nunca sabrás quién nada desnudo hasta que baje la marea.&rdquo;
            <span className="block mt-1 not-italic text-xs" style={{ color: '#4A6A55' }}>— Warren Buffett</span>
          </blockquote>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            El perfil de vencimientos: cuándo vence la deuda importa tanto como cuánta
          </h2>
          <p>
            Una empresa puede tener deuda manejable en términos de ratio, pero concentrada en vencimientos cercanos. Si debe refinanciar la mitad de su deuda en los próximos 18 meses en un entorno de tasas altas o mercados cerrados, enfrenta un riesgo de liquidez aunque su negocio sea sólido.
          </p>
          <p className="mt-3">
            Al analizar cualquier empresa endeudada, revisá el calendario de vencimientos: ¿cuánto vence en los próximos 1-2 años? ¿Tiene líneas de crédito disponibles? ¿Genera suficiente FCF para cubrir el vencimiento sin necesitar refinanciación? La capacidad de la empresa para maniobrar si los mercados de crédito se cierran temporalmente es un indicador de calidad del balance que los ratios estáticos no capturan.
          </p>
        </section>

      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', margin: '2.5rem 0' }} />

      <section className="mb-8">
        <p className="text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(201,168,76,0.5)' }}>Guías relacionadas</p>
        <div className="flex flex-wrap gap-2">
          {[
            { slug: 'antifragilidad-taleb', label: '★ Taleb' },
            { slug: 'buffett-criterios', label: '♥ Criterios Buffett' },
            { slug: 'ciclos-howard-marks', label: '♠ Ciclos Marks' },
            { slug: 'como-leer-un-balance', label: 'Leer un balance' },
            { slug: 'errores-comunes-value-investing', label: 'Errores comunes' },
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
          ¿Cuánta deuda tiene la empresa que analizás?
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
