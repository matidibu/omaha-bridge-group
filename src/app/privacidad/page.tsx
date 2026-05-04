import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'

export const metadata = {
  title: 'Política de Privacidad — Omaha Bridge Group',
  description: 'Política de privacidad y uso de datos de Omaha Bridge Group.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/privacidad' },
}

export default function PrivacidadPage() {
  return (
    <div className="min-h-screen flex flex-col text-[#E8EDF5]" style={{ background: 'linear-gradient(160deg, #0A0301 0%, #180804 25%, #1A0A05 50%, #120602 75%, #0C0402 100%)' }}>

      <header className="border-b border-[#C9A84C]/10 px-4 py-3 flex items-center justify-between bg-[#072B18]/80 backdrop-blur sticky top-0 z-10">
        <Link href="/" className="text-xs text-[#6A7A95] hover:text-[#C9A84C] transition-colors tracking-wider uppercase">
          ← Volver
        </Link>
        <Logo size="sm" tagline={false} onDark />
        <div className="w-20" />
      </header>

      <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-12">
        <h1 className="text-3xl font-bold text-[#C9A84C] mb-2" style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Política de Privacidad
        </h1>
        <p className="text-[#4A5A72] text-sm mb-10">Última actualización: abril 2025</p>

        <div className="space-y-8 text-[#B4C0D4] text-sm leading-relaxed">

          <section>
            <h2 className="text-[#C9A84C] font-semibold text-base mb-3">1. Información general</h2>
            <p>
              <span translate="no">Omaha Bridge Group</span> (&ldquo;<span translate="no">OBG</span>&rdquo;, &ldquo;nosotros&rdquo;) opera el sitio web{' '}
              <span translate="no">omaha-bridge-group.vercel.app</span>. Esta política explica qué información recopilamos, cómo la usamos y qué derechos tenés sobre ella.
            </p>
          </section>

          <section>
            <h2 className="text-[#C9A84C] font-semibold text-base mb-3">2. Información que recopilamos</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Datos de uso:</strong> páginas visitadas, tickers consultados, duración de sesión. No recopilamos nombre, email ni datos de pago.</li>
              <li><strong>Cookies técnicas:</strong> utilizadas para recordar preferencias básicas del usuario (por ejemplo, si ya viste el modal de bienvenida).</li>
              <li><strong>Cookies de terceros:</strong> utilizamos <span translate="no">Google AdSense</span>, que puede colocar cookies para mostrar publicidad relevante. Consultá la{' '}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#C9A84C] hover:underline" translate="no">
                  Política de Privacidad de Google
                </a>.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-[#C9A84C] font-semibold text-base mb-3">3. Publicidad — Google AdSense</h2>
            <p>
              Este sitio utiliza <span translate="no">Google AdSense</span> para mostrar anuncios. <span translate="no">Google</span> puede usar cookies para personalizar anuncios en función de tus visitas previas a este u otros sitios.
              Podés optar por no participar en la publicidad personalizada visitando{' '}
              <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-[#C9A84C] hover:underline" translate="no">
                Google Ads Settings
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-[#C9A84C] font-semibold text-base mb-3">4. Uso de la información</h2>
            <p>Usamos los datos recopilados únicamente para:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Mejorar el funcionamiento y la experiencia del sitio</li>
              <li>Analizar el uso agregado (sin identificación personal)</li>
              <li>Mostrar publicidad a través de <span translate="no">Google AdSense</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-[#C9A84C] font-semibold text-base mb-3">5. Datos financieros de terceros</h2>
            <p>
              Los análisis se generan a partir de datos públicos de <span translate="no">Financial Modeling Prep (FMP)</span>, <span translate="no">Yahoo Finance</span> y <span translate="no">FRED (Federal Reserve)</span>.
              No almacenamos datos personales vinculados a los tickers que consultás.
            </p>
          </section>

          <section>
            <h2 className="text-[#C9A84C] font-semibold text-base mb-3">6. Tus derechos</h2>
            <p>Tenés derecho a:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Saber qué datos tenemos sobre vos</li>
              <li>Solicitar la eliminación de cualquier dato identificable</li>
              <li>Optar por no recibir publicidad personalizada</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[#C9A84C] font-semibold text-base mb-3">7. Cookies — cómo desactivarlas</h2>
            <p>
              Podés configurar tu navegador para rechazar o eliminar cookies. Tené en cuenta que algunas funciones del sitio pueden verse afectadas.
              Instrucciones para los navegadores más comunes:{' '}
              <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#C9A84C] hover:underline" translate="no">Chrome</a>,{' '}
              <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer" className="text-[#C9A84C] hover:underline" translate="no">Firefox</a>,{' '}
              <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#C9A84C] hover:underline" translate="no">Safari</a>.
            </p>
          </section>

          <section>
            <h2 className="text-[#C9A84C] font-semibold text-base mb-3">8. Cambios a esta política</h2>
            <p>
              Podemos actualizar esta política ocasionalmente. Los cambios se publicarán en esta página con la fecha de actualización. El uso continuado del sitio implica aceptación de los cambios.
            </p>
          </section>

          <section>
            <h2 className="text-[#C9A84C] font-semibold text-base mb-3">9. Contacto</h2>
            <p>
              Si tenés preguntas sobre esta política, podés escribirnos a{' '}
              <a href="mailto:diburzimatias@gmail.com" className="text-[#C9A84C] hover:underline" translate="no">
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
          <Link href="/nosotros" className="text-[#C9A84C]/60 hover:text-[#C9A84C]">Nosotros</Link>
        </p>
      </footer>
    </div>
  )
}
