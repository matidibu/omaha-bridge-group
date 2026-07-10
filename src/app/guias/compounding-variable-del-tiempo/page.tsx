import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'La paciencia al final se paga: cómo $10k se convierten en $1M (si esperas) | Omaha Bridge Group',
  description: 'El secreto que Buffett repite hace 60 años. No es el retorno anual, es el número de años. La geometría gana a la aritmética: el compounding explicado.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/compounding-variable-del-tiempo' },
  openGraph: {
    title: 'Compounding: el poder del tiempo | Omaha Bridge Group',
    description: 'La variable que hace ricos es el tiempo. Inversión en 30 años vs inversión en 5.',
    type: 'article',
  },
}

const COLOR = '#06B6D4'

export default function CompoundingPage() {
  return (
    <GuiasShell articleMeta={{
      title: 'La paciencia al final se paga: $10k a $1M (si esperas 50 años)',
      description: 'El compounding: la fuerza más silenciosa de la riqueza. Por qué los primeros 10 años generan poco y los últimos 20 generan todo.',
      publishDate: '2025-06-19',
      url: 'https://omaha-bridge-group.vercel.app/guias/compounding-variable-del-tiempo',
      image: 'https://omaha-bridge-group.vercel.app/og-guias.png',
      keywords: 'compounding, interés compuesto, tiempo, largo plazo, crecimiento exponencial',
      readingTimeMinutes: 6,
    }}>
      <div className="mb-10">
        <p className="text-sm md:text-base uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          ♥ &nbsp; Principios · Largo Plazo
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          Compounding: el secreto que Buffett repite desde hace 60 años
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          $10k a 12% anual: $50k en 15 años, $1M en 50 años. La geometría gana a la aritmética.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>6 min de lectura</span>
          <span>·</span>
          <span>Principios · Matemática Financiera</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-base md:text-lg leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          El compounding es aritmética simple pero con una dimensión temporal. Los primeros 10 años generan poco. El año 20-30 cambia todo. El año 40-50 es donde la riqueza realmente explota.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            La fórmula
          </h2>
          <p style={{ fontFamily: 'monospace', color: 'rgba(232,237,245,0.8)' }}>
            Valor Final = Inicial × (1 + tasa)^años
          </p>
          <p className="mt-3">
            $10,000 × (1.12)^50 = $2.4 millones
          </p>
          <p className="mt-3">
            La diferencia entre 10k en 30 años vs 50 años es monumental. 20 años extra no duplica la riqueza — la multiplica 5x.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Por qué empezar joven importa
          </h2>
          <p>
            A los 25 años, 50 años de inversión te dan valor final enorme. A los 45, solo 20 años, y la diferencia es brutal.
          </p>
          <p className="mt-3">
            Pero hay buena noticia: aunque empieces a los 45, 20 años de compounding a 12% aún multiplica tu capital 10x. Nunca es tarde, pero siempre es demasiado tarde para esperar.
          </p>
        </section>

        <blockquote className="border-l-2 pl-4 mt-4 italic"
          style={{ borderColor: 'rgba(212,168,67,0.4)', color: 'rgba(232,237,245,0.7)', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          &ldquo;La regla del 72: divide 72 por tu retorno anual, y ese es el número de años para duplicar dinero.&rdquo;
          <span className="block mt-1 not-italic text-xs" style={{ color: '#4A6A55' }}>— Regla rápida de Buffett</span>
        </blockquote>

      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', margin: '2.5rem 0' }} />

      <section className="mb-8">
        <p className="text-sm md:text-base uppercase tracking-widest mb-4" style={{ color: 'rgba(201,168,76,0.5)' }}>Largo plazo</p>
        <div className="flex flex-wrap gap-2">
          {[
            { slug: 'el-largo-plazo', label: 'Horizonte' },
            { slug: 'interes-compuesto', label: 'Interés Compuesto' },
            { slug: 'psicologia-del-inversor', label: 'Psicología' },
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
          Invierte hoy, siéntate, espera 30 años
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
