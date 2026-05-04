import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'Calidad institucional según Larry Fink — Gobernanza y largo plazo | Omaha Bridge Group',
  description: 'La perspectiva del fundador de BlackRock: por qué el gobierno corporativo, el largo plazo y el retorno total al accionista determinan la calidad de una inversión.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/calidad-institucional-fink' },
  openGraph: {
    title: 'Calidad institucional según Larry Fink | Omaha Bridge Group',
    description: 'El marco de Fink para evaluar gobernanza, largo plazo y retorno total al accionista.',
    type: 'article',
  },
}

const COLOR = '#A78BFA'

export default function CalidadInstitucionalFinkPage() {
  return (
    <GuiasShell>
      <div className="mb-10">
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          ✦ &nbsp; Larry Fink · El Institucional
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          Calidad institucional según Fink
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          La perspectiva del gestor de $10 billones: gobernanza, largo plazo y retorno total al accionista.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>6 min de lectura</span>
          <span>·</span>
          <span>Gobierno corporativo · ESG · Largo plazo</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-sm leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          Larry Fink co-fundó <span translate="no">BlackRock</span> en 1988, desde una única habitación en Manhattan, y lo construyó hasta convertirlo en el gestor de activos más grande del mundo, con más de 10 billones de dólares bajo gestión. Cuando Fink habla, los CEOs de las empresas más grandes del mundo escuchan — porque <span translate="no">BlackRock</span> es accionista de casi todas ellas.
        </p>
        <p>
          Su perspectiva es la del inversor institucional a muy largo plazo: fondos de pensión, fondos soberanos, planes de jubilación. Esos clientes no pueden permitirse perder capital en el largo plazo. Por eso Fink piensa en calidad antes que en precio.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Por qué importa la perspectiva institucional
          </h2>
          <p>
            Los inversores institucionales representan más del 70% de la actividad en los mercados desarrollados. Cuando deciden que una empresa no alcanza sus estándares de gobernanza o calidad, el capital fluye hacia afuera — y el precio cae. Cuando la incluyen en índices o carteras de referencia, el capital fluye hacia adentro.
          </p>
          <p className="mt-3">
            Entender qué buscan estos inversores no es sólo un ejercicio académico: es entender qué determina el costo de capital de las empresas cotizadas. Las que tienen mejor gobernanza, mayor transparencia y métricas de largo plazo más sólidas obtienen capital más barato — lo que a su vez les da ventaja competitiva.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Las cartas anuales de Fink a los CEOs
          </h2>
          <p>
            Cada año desde 2012, Fink escribe una carta a los CEOs de las empresas en las que invierte <span translate="no">BlackRock</span>. Las cartas son públicas y han ido evolucionando: empezaron hablando de largo plazo vs. corto plazo, agregaron gobierno corporativo, luego riesgo climático, luego propósito corporativo.
          </p>
          <p className="mt-3">
            El tema central que se repite en todas las cartas es siempre el mismo: la presión por resultados trimestrales destruye valor a largo plazo. Los CEOs que recortan R&D para mejorar el próximo trimestre están sacrificando ventaja competitiva futura por una mejor foto presente.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Los criterios de gobierno corporativo
          </h2>
          <p className="mb-3">Fink evalúa la calidad de la gestión a través de criterios específicos:</p>
          <div className="space-y-3">
            {[
              {
                criterion: 'Independencia del directorio',
                detail: 'Un directorio dominado por insiders tiene incentivos para proteger a la gerencia, no a los accionistas. Fink prefiere directorios donde al menos el 75% de los miembros sean independientes y el presidente sea distinto al CEO.',
              },
              {
                criterion: 'Alineación de la remuneración con el largo plazo',
                detail: 'Cuando los ejecutivos cobran bonos por métricas de corto plazo (EPS trimestral, precio de la acción en 12 meses), sus incentivos divergen de los del accionista de largo plazo. La remuneración debería estar ligada a métricas de tres a cinco años.',
              },
              {
                criterion: 'Transparencia contable y de riesgos',
                detail: 'Fink desconfía de empresas que presentan múltiples métricas "ajustadas" sin claridad sobre qué se está ajustando y por qué. La opacidad contable suele esconder problemas estructurales.',
              },
              {
                criterion: 'Coherencia entre lo dicho y lo hecho',
                detail: 'El CEO que promete en la carta anual y no cumple en los hechos pierde credibilidad rápidamente. Fink lee las cartas de años anteriores para evaluar si los compromisos se cumplieron.',
              },
            ].map(({ criterion, detail }) => (
              <div key={criterion} className="rounded-lg p-3" style={{ background: 'rgba(7,43,24,0.5)', border: '1px solid rgba(167,139,250,0.08)' }}>
                <div className="text-xs font-semibold mb-1" style={{ color: COLOR }}>{criterion}</div>
                <p className="text-xs leading-relaxed" style={{ color: '#5A7A65' }}>{detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Total Shareholder Yield: más allá del dividendo
          </h2>
          <p>
            El <span translate="no">Dividend Yield</span> mide cuánto paga la empresa en dividendos en relación a su precio de mercado. Pero las empresas también retornan capital a través de recompras de acciones (<span translate="no">buybacks</span>). El <span translate="no">Total Shareholder Yield</span> (<span translate="no">TSY</span>) suma ambos:
          </p>
          <div className="my-4 p-4 rounded-lg text-center font-mono text-sm"
            style={{ background: 'rgba(7,43,24,0.6)', border: '1px solid rgba(167,139,250,0.2)', color: '#A78BFA' }}>
            TSY = (Dividendos + Recompras) ÷ Capitalización bursátil
          </div>
          <p>
            Una empresa que no paga dividendos pero recompra el 4% de sus acciones cada año tiene un <span translate="no">TSY</span> del 4% — equivalente a un dividendo, pero en forma de apreciación por acción. El <span translate="no">TSY</span> da una imagen más completa del capital que efectivamente retorna a los inversores.
          </p>
          <blockquote className="border-l-2 pl-4 mt-4 italic"
            style={{ borderColor: 'rgba(167,139,250,0.4)', color: 'rgba(232,237,245,0.7)', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            &ldquo;Sin un sentido de propósito, ninguna compañía puede alcanzar su pleno potencial. Con el tiempo, perderá ventaja con sus competidores.&rdquo;
            <span className="block mt-1 not-italic text-xs" style={{ color: '#4A6A55' }}>— Larry Fink, carta a CEOs 2018</span>
          </blockquote>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Cómo OBG aplica el filtro Fink
          </h2>
          <p>
            El sabio Fink en <span translate="no">Omaha Bridge Group</span> evalúa la calidad institucional de cada empresa a través de métricas de gobernanza disponibles en datos públicos: consistencia de resultados, volatilidad de ganancias, estructura de capital, historial de recompras y dividendos, y estabilidad de la gestión. El análisis produce un <em>Institutional Grade</em> (de A a D) y un puntaje de gobernanza que refleja la calidad del negocio desde la perspectiva del inversor institucional de largo plazo.
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
            { slug: 'ciclos-howard-marks', label: '♠ Marks' },
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
          ¿Querés ver el análisis institucional de una acción real?
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
