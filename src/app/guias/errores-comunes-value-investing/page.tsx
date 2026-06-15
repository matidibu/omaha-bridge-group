import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'Los 7 errores más comunes del inversor value | Omaha Bridge Group',
  description: 'Comprar trampas de valor, ignorar la calidad por el precio, no respetar el margen de seguridad, exceso de diversificación: los errores que cometen incluso los inversores experimentados.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/errores-comunes-value-investing' },
  openGraph: {
    title: 'Los 7 errores más comunes del inversor value | Omaha Bridge Group',
    description: 'Las trampas de valor, el exceso de diversificación y otros errores que destruyen rendimientos a largo plazo.',
    type: 'article',
  },
}

const COLOR = '#C9A84C'

export default function ErroresComunesPage() {
  return (
    <GuiasShell articleMeta={{
      title: 'Los 7 errores más comunes del inversor value',
      description: 'Comprar trampas de valor, ignorar la calidad por el precio, no respetar el margen de seguridad, exceso de diversificación: los errores que cometen incluso los inversores experimentados.',
      publishDate: '2025-05-15',
      url: 'https://omaha-bridge-group.vercel.app/guias/errores-comunes-value-investing',
      image: 'https://omaha-bridge-group.vercel.app/og-guias.png',
      keywords: 'errores de inversión, sesgos, lecciones',
      readingTimeMinutes: 9,
    }}>
      <div className="mb-10">
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          Conceptos esenciales · Errores y lecciones
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          Los 7 errores más comunes del inversor value
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Buffett dijo que sus mayores pérdidas no fueron por acciones que compró sino por acciones que no compró — y por las que compró creyendo que eran baratas.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>9 min de lectura</span>
          <span>·</span>
          <span>Errores · Psicología · Riesgo</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-sm leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          El value investing tiene una paradoja: sus principios son simples — comprar negocios de calidad por menos de lo que valen — pero aplicarlos consistentemente es extraordinariamente difícil. No porque los conceptos sean complejos, sino porque la psicología, los atajos mentales y los incentivos del mercado conspiran permanentemente en contra del inversor racional.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Error 1: confundir precio bajo con valor
          </h2>
          <p>
            La "trampa de valor" (<span translate="no">value trap</span>) es la más costosa. Una acción que cayó un 60% parece barata — pero puede caer otro 70%. El problema es confundir precio bajo con negocio barato. Una empresa con P/E de 5 y P/B de 0.3 puede parecer una ganga estadística mientras sus márgenes se deterioran, su deuda crece y su sector colapsa structuralmente.
          </p>
          <p className="mt-3">
            Los retailers físicos que cotizaban con múltiplos bajísimos mientras Amazon los destruía; las empresas de medios tradicionales con dividendos atractivos mientras sus ingresos por publicidad colapsaban; las empresas petroleras con balances sólidos mientras el precio del barril caía durante años. Todas parecían baratas. Todas siguieron bajando.
          </p>
          <p className="mt-3">
            El antídoto: la empresa barata debe ser barata respecto a su valor intrínseco futuro, no solo a su historial pasado. Si el negocio está en declive estructural, el múltiplo bajo puede ser completamente justificado.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Error 2: sobre-diversificar hasta la irrelevancia
          </h2>
          <p>
            La teoría académica dice que diversificar reduce el riesgo. Es cierto hasta cierto punto. Pero más allá de 15-20 posiciones, la diversificación adicional diluye los rendimientos sin eliminar el riesgo de mercado sistémico.
          </p>
          <p className="mt-3">
            Buffett y Munger son explícitos: si tenés 40 ideas en un portafolio, las últimas 20 son claramente peores que las primeras 20. ¿Por qué tenerlas? La "diversificación diworsification", como la llama Lynch, lleva a invertir en ideas de segunda calidad para "reducir el riesgo" mientras se diluye el resultado potencial de las mejores ideas.
          </p>
          <p className="mt-3">
            El inversor concentrado que conoce profundamente 8-12 negocios tiene más ventaja que el que conoce superficialmente 50. La concentración razonada, con análisis riguroso, generalmente supera a la diversificación mecánica.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Error 3: subestimar la calidad del negocio por enfocarse en el precio
          </h2>
          <p>
            El pecado del seguidor de Graham puro: obsesionarse con los múltiplos y las estadísticas mientras ignora la calidad estructural del negocio. Una empresa trading a P/E 8 en un sector competitivo sin moat puede ser una trampa. Una empresa a P/E 25 con ventaja competitiva durable, crecimiento del FCF al 15% y ROIC del 30% puede ser una ganga.
          </p>
          <p className="mt-3">
            Fue exactamente el error que el joven Buffett cometió siguiendo el estilo de Graham. Compraba "colillas de cigarros" — empresas casi sin valor que todavía le quedaba una última calada — en lugar de negocios de calidad a precios razonables. Munger lo convenció de cambiar. La transformación fue su salto cuantitativo.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Error 4: usar solo el EBITDA como medida de rentabilidad
          </h2>
          <p>
            El <span translate="no">EBITDA</span> (ganancias antes de intereses, impuestos, depreciación y amortización) es popular entre directivos y banqueros de inversión porque hace que casi cualquier empresa parezca rentable. Excluye cuatro costos reales del negocio.
          </p>
          <p className="mt-3">
            Buffett lo llama directamente "fantasía financiera". La depreciación no es un número imaginario — representa el desgaste de activos que necesitarán ser reemplazados con capex real. Ignorar la depreciación es como ignorar el costo de reemplazar maquinaria que se desgasta. El inversor que valúa empresas solo por EBITDA sistemáticamente sobreestima el valor y paga de más.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Error 5: no respetar el margen de seguridad cuando "está obvio"
          </h2>
          <p>
            Paradójicamente, los inversores suelen abandonar el margen de seguridad cuando la oportunidad parece más evidente. Si el análisis sugiere fuertemente que una empresa vale $80 y cotiza a $70, el razonamiento típico es "está tan claro que no necesito el margen". Pero es exactamente cuando el análisis parece más sólido que hay que ser más cuidadoso — porque la confianza excesiva es una señal de alarma en sí misma.
          </p>
          <p className="mt-3">
            El margen de seguridad no es un ajuste por incertidumbre —  es un reconocimiento de que nuestros análisis tienen errores que no podemos ver. Si pudiéramos ver los errores, los corregiríamos. Los errores importantes son los que no detectamos, y para esos existe el margen.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Error 6: ignorar los cambios en la tesis de inversión
          </h2>
          <p>
            Una vez establecida la tesis, muchos inversores dejan de actualizarla. Si los fundamentales de la empresa cambian — entra un competidor disruptivo, cambia la regulación del sector, el CEO que construyó el moat se va — la tesis original puede no ser válida.
          </p>
          <p className="mt-3">
            Buffett tuvo posición en IBM durante años y eventualmente admitió que la tesis estaba equivocada — que no había entendido suficientemente bien los desafíos competitivos del negocio cloud. Reconocer el error y vender con pérdida es correcto. Mantener la posición porque "compraste con convicción" es el síndrome del compromiso con la tesis original que destruye carteras.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Error 7: no tener paciencia — el tiempo es parte del proceso
          </h2>
          <p>
            El value investing tiene un problema de timing: el mercado puede tardar años en reconocer el valor que el análisis identifica. Durante ese período, el inversor ve otras acciones subir, siente que "se equivocó", y vende exactamente antes de que ocurra la convergencia entre precio y valor.
          </p>
          <p className="mt-3">
            No se puede saber cuándo el mercado reconocerá el valor — pero si el análisis es correcto, el tiempo juega a favor. Las posiciones de Buffett en Coca-Cola, American Express y otras empresas tuvieron períodos de varios años donde el precio no se movió. Venderlas en esos períodos habría sido destruir el valor que el tiempo eventualmente entregó.
          </p>
        </section>

      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', margin: '2.5rem 0' }} />

      <section className="mb-8">
        <p className="text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(201,168,76,0.5)' }}>Guías relacionadas</p>
        <div className="flex flex-wrap gap-2">
          {[
            { slug: 'psicologia-del-inversor', label: 'Psicología del inversor' },
            { slug: 'margen-de-seguridad', label: 'Margen de seguridad' },
            { slug: 'precio-vs-valor', label: 'Precio vs valor' },
            { slug: 'buffett-criterios', label: '♥ Criterios Buffett' },
            { slug: 'interes-compuesto', label: 'Interés compuesto' },
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
          Análisis con los 6 maestros: más datos, menos sesgo.
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
