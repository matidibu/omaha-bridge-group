import type { Metadata } from 'next'
import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'

export const metadata: Metadata = {
  title: 'Ponte en contacto',
  description: 'Ponte en contacto con el equipo de Omaha Bridge Group. Preguntas, sugerencias, reportes de errores.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/contacto' },
}

export default function ContactoPage() {
  return (
    <div className="min-h-screen flex flex-col text-[#E8EDF5]" style={{ background: 'linear-gradient(160deg, #0A0301 0%, #180804 25%, #1A0A05 50%, #120602 75%, #0C0402 100%)' }}>

      <header className="border-b border-[#C9A84C]/10 px-4 py-3 flex items-center justify-between bg-[#072B18]/80 backdrop-blur sticky top-0 z-10">
        <Link href="/" className="text-xs md:text-sm text-[#6A7A95] hover:text-[#C9A84C] transition-colors tracking-wider uppercase">
          ← Volver
        </Link>
        <Logo size="sm" tagline={false} onDark />
        <div className="w-20" />
      </header>

      <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-12 md:py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-[#C9A84C] mb-2" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Ponte en contacto
        </h1>
        <p className="text-[#4A5A72] text-base md:text-lg mb-12">Queremos escucharte. Preguntas, sugerencias o reportes de errores — todos bienvenidos.</p>

        <div className="space-y-12">

          {/* Email */}
          <section className="bg-[#0F0503]/40 border border-[#C9A84C]/20 rounded-lg p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#C9A84C] mb-4" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
              Email
            </h2>
            <p className="text-[#B4C0D4] text-base md:text-lg mb-4 leading-relaxed">
              La forma más rápida de contactarnos es por email. Respondemos en 24-48 horas.
            </p>
            <a
              href="mailto:diburzimatias@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A84C]/10 hover:bg-[#C9A84C]/20 text-[#C9A84C] rounded-lg font-medium transition-colors text-base md:text-lg border border-[#C9A84C]/30"
            >
              <span>✉️ diburzimatias@gmail.com</span>
            </a>
          </section>

          {/* Redes Sociales */}
          <section className="bg-[#0F0503]/40 border border-[#C9A84C]/20 rounded-lg p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#C9A84C] mb-4" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
              Redes Sociales
            </h2>
            <p className="text-[#B4C0D4] text-base md:text-lg mb-6 leading-relaxed">
              Seguinos en nuestras redes para estar al día con análisis, actualizaciones y reflexiones sobre inversión.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://x.com/omaha_bridge"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#1D9BF0]/10 hover:bg-[#1D9BF0]/20 text-[#1D9BF0] rounded-lg font-medium transition-colors text-base border border-[#1D9BF0]/30"
              >
                𝕏 Twitter
              </a>
              <a
                href="https://linkedin.com/company/omaha-bridge-group"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 text-[#0A66C2] rounded-lg font-medium transition-colors text-base border border-[#0A66C2]/30"
              >
                🔗 LinkedIn
              </a>
            </div>
          </section>

          {/* FAQ Rápido */}
          <section className="bg-[#0F0503]/40 border border-[#C9A84C]/20 rounded-lg p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#C9A84C] mb-6" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
              Preguntas frecuentes
            </h2>

            <div className="space-y-6">
              <details className="group">
                <summary className="cursor-pointer text-base md:text-lg font-medium text-[#C9A84C] hover:text-[#E8C76B] transition-colors flex items-center gap-2">
                  <span className="text-xl group-open:rotate-180 transition-transform">▶</span>
                  ¿Es asesoramiento financiero?
                </summary>
                <p className="text-[#B4C0D4] text-base md:text-lg mt-3 ml-6 leading-relaxed">
                  No. Omaha Bridge Group es una herramienta informativa y educativa. Ningún análisis constituye asesoramiento financiero. Siempre consultá a un asesor calificado antes de invertir.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer text-base md:text-lg font-medium text-[#C9A84C] hover:text-[#E8C76B] transition-colors flex items-center gap-2">
                  <span className="text-xl group-open:rotate-180 transition-transform">▶</span>
                  ¿Los datos son en tiempo real?
                </summary>
                <p className="text-[#B4C0D4] text-base md:text-lg mt-3 ml-6 leading-relaxed">
                  Sí. Los datos financieros se obtienen en tiempo real de Financial Modeling Prep, Yahoo Finance y FRED. Los análisis se generan bajo demanda.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer text-base md:text-lg font-medium text-[#C9A84C] hover:text-[#E8C76B] transition-colors flex items-center gap-2">
                  <span className="text-xl group-open:rotate-180 transition-transform">▶</span>
                  ¿Qué datos personales recopilan?
                </summary>
                <p className="text-[#B4C0D4] text-base md:text-lg mt-3 ml-6 leading-relaxed">
                  Ninguno. No almacenamos nombre, email ni datos de pago. Solo datos agregados de uso para mejorar la plataforma. Consultá nuestra <Link href="/privacidad" className="text-[#C9A84C] hover:underline">Política de Privacidad</Link>.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer text-base md:text-lg font-medium text-[#C9A84C] hover:text-[#E8C76B] transition-colors flex items-center gap-2">
                  <span className="text-xl group-open:rotate-180 transition-transform">▶</span>
                  ¿Puedo reportar un error?
                </summary>
                <p className="text-[#B4C0D4] text-base md:text-lg mt-3 ml-6 leading-relaxed">
                  Sí. Escribinos a <a href="mailto:diburzimatias@gmail.com" className="text-[#C9A84C] hover:underline">diburzimatias@gmail.com</a> con detalles de lo que encontraste. Tu feedback es valioso.
                </p>
              </details>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center py-8">
            <p className="text-[#B4C0D4] text-base md:text-lg mb-6 leading-relaxed">
              ¿Listo para explorar? Volvé a la plataforma de análisis.
            </p>
            <Link
              href="/analisis"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#C9A84C]/20 to-[#D4A843]/20 hover:from-[#C9A84C]/30 hover:to-[#D4A843]/30 text-[#C9A84C] rounded-lg font-semibold transition-colors text-base md:text-lg border border-[#C9A84C]/40"
            >
              Análisis de Acciones →
            </Link>
          </div>
        </div>
      </main>

      <footer className="border-t border-[#C9A84C]/10 px-6 py-4">
        <p className="text-center text-xs md:text-sm text-[#4A5A72]">
          © 2025 <span translate="no">Omaha Bridge Group</span>. Todos los derechos reservados.{' '}
          <Link href="/" className="text-[#C9A84C]/60 hover:text-[#C9A84C]">Inicio</Link>
          {' · '}
          <Link href="/nosotros" className="text-[#C9A84C]/60 hover:text-[#C9A84C]">Nosotros</Link>
          {' · '}
          <Link href="/privacidad" className="text-[#C9A84C]/60 hover:text-[#C9A84C]">Privacidad</Link>
        </p>
      </footer>
    </div>
  )
}
