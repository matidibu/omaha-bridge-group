import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'Guías de value investing — Buffett, Lynch, Greenblatt | Omaha Bridge Group',
  description: 'Aprendé los métodos exactos de Warren Buffett, Peter Lynch, Joel Greenblatt, Nassim Taleb, Howard Marks y Larry Fink. Guías de inversión en español.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias' },
  openGraph: {
    title: 'Guías de value investing — Los 6 maestros | Omaha Bridge Group',
    description: 'Seis métodos de inversión documentados en profundidad: Buffett, Lynch, Greenblatt, Taleb, Marks y Fink. En español.',
    type: 'website',
  },
}

const ARTICLES = [
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

export default function GuiasIndexPage() {
  return (
    <GuiasShell backHref="/" backLabel="← Inicio">

      <section className="text-center mb-14">
        <p className="text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(201,168,76,0.5)' }}>
          ♣ &nbsp; Guías de inversión &nbsp; ♣
        </p>
        <h1 style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}
          className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
          Los métodos de los 6 maestros
        </h1>
        <p className="text-sm max-w-xl mx-auto leading-relaxed" style={{ color: '#6A8A75' }}>
          El value investing no es una fórmula única. Es un conjunto de filosofías desarrolladas a lo largo de décadas por inversores que batieron al mercado de formas distintas. Estas guías explican cómo piensa cada uno y cómo Omaha Bridge Group aplica su método a cada análisis.
        </p>
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
        {ARTICLES.map(({ slug, sage, symbol, color, title, desc, readTime }) => (
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
            <h2 className="font-bold text-base leading-tight group-hover:text-[#C9A84C] transition-colors"
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#E8EDF5' }}>
              {title}
            </h2>
            <p className="text-xs leading-relaxed" style={{ color: '#5A7A65' }}>{desc}</p>
            <span className="text-xs mt-auto" style={{ color: `${color}80` }}>Leer guía →</span>
          </Link>
        ))}
      </div>

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
            Cada guía de esta sección explica un método en detalle y muestra cómo Omaha Bridge Group lo aplica para generar los análisis que ves en la plataforma.
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
