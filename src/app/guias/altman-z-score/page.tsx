import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'Los números que predicen la quiebra antes de que nadie lo vea | Omaha Bridge Group',
  description: 'Z-Score: 72% de precisión prediciendo quiebras un año antes. Los números que Altman vio en 1968 y siguen siendo iguales hoy.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/altman-z-score' },
  openGraph: {
    title: 'Altman Z-Score | Omaha Bridge Group',
    description: 'La métrica que detecta empresas camino a la quiebra. Evita disasters.',
    type: 'article',
  },
}

const COLOR = '#8B5CF6'

export default function AltmanZScorePage() {
  return (
    <GuiasShell articleMeta={{
      title: 'Los números que ven la quiebra venir: Altman Z-Score',
      description: '72% de precisión un año antes. Los números que Altman formuló en 1968 y siguen siendo iguales.',
      publishDate: '2025-06-19',
      url: 'https://omaha-bridge-group.vercel.app/guias/altman-z-score',
      image: 'https://omaha-bridge-group.vercel.app/og-guias.png',
      keywords: 'altman z-score, quiebra, insolvencia, riesgo crediticio',
      readingTimeMinutes: 7,
    }}>
      <div className="mb-10">
        <p className="text-sm md:text-base uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          ★ &nbsp; Riesgo · Análisis Defensivo
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          Altman Z-Score: la alarma que suena antes del crash
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Cómo Edward Altman predijo bancarrotas en 1968 y sigue siendo efectivo hoy.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>7 min de lectura</span>
          <span>·</span>
          <span>Riesgo Crediticio · Análisis Defensivo</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-base md:text-lg leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          En 1968, Edward Altman creó una fórmula matemática que predecía quiebras empresariales con asombrosa precisión. Décadas después sigue siendo un filtro defensivo efectivo para evitar trampas de valor.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            La fórmula del Z-Score
          </h2>
          <p style={{ fontFamily: 'monospace', fontSize: '12px', color: 'rgba(232,237,245,0.8)', lineHeight: '1.6' }}>
            Z = 1.2(A) + 1.4(B) + 3.3(C) + 0.6(D) + 1.0(E)
          </p>
          <p className="mt-3" style={{ fontSize: '13px' }}>
            A = Working Capital / Total Assets<br/>
            B = Retained Earnings / Total Assets<br/>
            C = EBIT / Total Assets<br/>
            D = Market Value of Equity / Total Liabilities<br/>
            E = Sales / Total Assets
          </p>
          <p className="mt-3">
            Z mayor a 3: Empresa segura. Z entre 1.8-3: Zona gris. Z menor a 1.8: Riesgo de quiebra.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Por qué funciona
          </h2>
          <p>
            La fórmula captura lo que importa: liquidez (working capital), rentabilidad (EBIT), apalancamiento (deuda vs equity) y eficiencia operativa (rotación de activos).
          </p>
          <p className="mt-3">
            Una empresa que quiebra típicamente tiene: bajo working capital, bajo EBIT, alto apalancamiento y baja rotación. El Z-Score detecta esta combinación.
          </p>
        </section>

        <blockquote className="border-l-2 pl-4 mt-4 italic"
          style={{ borderColor: 'rgba(212,168,67,0.4)', color: 'rgba(232,237,245,0.7)', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          &ldquo;Evitar desastres es tan importante como buscar gangas.&rdquo;
          <span className="block mt-1 not-italic text-xs" style={{ color: '#4A6A55' }}>— Principio de defensa en inversión</span>
        </blockquote>

      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', margin: '2.5rem 0' }} />

      <section className="mb-8">
        <p className="text-sm md:text-base uppercase tracking-widest mb-4" style={{ color: 'rgba(201,168,76,0.5)' }}>Análisis defensivo</p>
        <div className="flex flex-wrap gap-2">
          {[
            { slug: 'deuda-en-value-investing', label: 'Deuda' },
            { slug: 'riesgo-vs-volatilidad', label: 'Riesgo' },
            { slug: 'antifragilidad-taleb', label: 'Antifragilidad' },
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
          Filtra empresas seguras de las que quiebran
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
