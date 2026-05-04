import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Nosotros — Omaha Bridge Group',
  description: 'Conocé el proyecto detrás de Omaha Bridge Group: qué es, cómo funciona y quién lo desarrolla.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/nosotros' },
}

export default function NosotrosPage() {
  return (
    <div className="min-h-screen flex flex-col text-[#E8EDF5]" style={{ background: 'linear-gradient(160deg, #0A0301 0%, #180804 25%, #1A0A05 50%, #120602 75%, #0C0402 100%)' }}>

      <header className="border-b border-[#C9A84C]/10 px-4 py-3 flex items-center justify-between bg-[#060201]/90 backdrop-blur sticky top-0 z-10">
        <Link href="/" className="text-xs text-[#6A7A95] hover:text-[#C9A84C] transition-colors tracking-wider uppercase">
          ← Volver
        </Link>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden relative" style={{ boxShadow: '0 0 0 2px rgba(201,168,76,0.50)' }}>
            <Image src="/obg-logo-new.png" alt="OBG" fill className="object-cover scale-[1.2]" />
          </div>
          <span style={{ color: '#C9A84C', fontSize: 13, letterSpacing: '0.30em', textTransform: 'uppercase', fontFamily: 'var(--font-playfair), Georgia, serif', fontWeight: 700 }}>Omaha Bridge Group</span>
        </div>
        <div className="w-20" />
      </header>

      <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-12">

        <h1 className="text-3xl font-bold text-[#C9A84C] mb-6" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Sobre el proyecto
        </h1>

        <div className="space-y-10 text-[#B4C0D4] text-sm leading-relaxed">

          <section>
            <h2 className="text-[#C9A84C] font-semibold text-base mb-3">¿Qué es Omaha Bridge Group?</h2>
            <p>
              <span translate="no">Omaha Bridge Group</span> es una herramienta de inteligencia de inversión que aplica los criterios documentados de seis de los inversores más influyentes de la historia — Warren Buffett, Peter Lynch, Joel Greenblatt, Nassim Taleb, Howard Marks y Larry Fink — a cualquier acción cotizada en los mercados estadounidenses.
            </p>
            <p className="mt-3">
              El nombre rinde homenaje a la pasión de Warren Buffett por el juego de cartas bridge, donde la toma de decisiones bajo incertidumbre se asemeja al análisis de inversiones. La metáfora de &ldquo;la mesa&rdquo; representa la deliberación colectiva de mentes distintas frente a un mismo activo.
            </p>
          </section>

          <section>
            <h2 className="text-[#C9A84C] font-semibold text-base mb-3">Cómo funciona</h2>
            <p>
              Al ingresar un ticker, la plataforma obtiene datos financieros reales de fuentes públicas (<span translate="no">Financial Modeling Prep</span>, <span translate="no">Yahoo Finance</span>, <span translate="no">FRED</span>) y los evalúa contra los criterios específicos de cada sabio:
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li><strong style={{ color: '#D4A843' }}>Buffett</strong> analiza el foso competitivo (<span translate="no">moat</span>), el <span translate="no">ROIC</span> y el precio justo relativo al flujo libre de caja.</li>
              <li><strong style={{ color: '#2EC47E' }}>Lynch</strong> busca crecimiento a precio razonable: el ratio <span translate="no">PEG</span> y la aceleración de <span translate="no">EPS</span>.</li>
              <li><strong style={{ color: '#7BBDE0' }}>Greenblatt</strong> aplica su fórmula mágica: <span translate="no">earnings yield</span> combinado con retorno sobre capital.</li>
              <li><strong style={{ color: '#A78BFA' }}>Fink</strong> evalúa la calidad institucional, gobernanza y estabilidad de largo plazo.</li>
              <li><strong style={{ color: '#A8BDD8' }}>Taleb</strong> detecta fragilidad oculta: deuda excesiva, riesgo de cola y exposición a eventos extremos.</li>
              <li><strong style={{ color: '#6AAFFA' }}>Marks</strong> posiciona la acción dentro del ciclo económico y evalúa la asimetría riesgo/recompensa.</li>
            </ul>
            <p className="mt-3">
              Cada análisis produce un veredicto concreto con precio objetivo, <span translate="no">stop-loss</span> sugerido y calificación general.
            </p>
          </section>

          <section>
            <h2 className="text-[#C9A84C] font-semibold text-base mb-3">Tecnología</h2>
            <p>
              La plataforma está construida con <span translate="no">Next.js</span> y utiliza modelos de lenguaje de gran escala para sintetizar los datos financieros en análisis narrativos coherentes con la filosofía de cada inversor. Los datos financieros son en tiempo real; los análisis se generan bajo demanda y no se almacenan de forma persistente vinculados a datos personales.
            </p>
          </section>

          <section>
            <h2 className="text-[#C9A84C] font-semibold text-base mb-3">Descargo de responsabilidad</h2>
            <p>
              <span translate="no">Omaha Bridge Group</span> es una herramienta informativa y educativa. Ningún análisis publicado en esta plataforma constituye asesoramiento financiero, de inversión, legal ni fiscal. Las decisiones de inversión son exclusiva responsabilidad del usuario. Siempre consultá a un asesor financiero calificado antes de tomar decisiones de inversión.
            </p>
          </section>

          <section>
            <h2 className="text-[#C9A84C] font-semibold text-base mb-3">Contacto</h2>
            <p>
              Si tenés preguntas, sugerencias o querés reportar un problema, podés escribirnos a{' '}
              <a href="mailto:contacto@omaha-bridge-group.com" className="text-[#C9A84C] hover:underline" translate="no">
                diburzimatias@gmail.com
              </a>.
            </p>
          </section>

        </div>
      </main>

      <footer className="border-t border-[#C9A84C]/10 px-6 py-4">
        <p className="text-center text-xs text-[#4A5A72]">
          © 2025 <span translate="no">Omaha Bridge Group</span>. Todos los derechos reservados.{' '}
          <Link href="/" className="text-[#C9A84C]/60 hover:text-[#C9A84C]">Inicio</Link>
          {' · '}
          <Link href="/guias" className="text-[#C9A84C]/60 hover:text-[#C9A84C]">Guías</Link>
          {' · '}
          <Link href="/analisis" className="text-[#C9A84C]/60 hover:text-[#C9A84C]">Análisis</Link>
          {' · '}
          <Link href="/privacidad" className="text-[#C9A84C]/60 hover:text-[#C9A84C]">Privacidad</Link>
        </p>
      </footer>
    </div>
  )
}
