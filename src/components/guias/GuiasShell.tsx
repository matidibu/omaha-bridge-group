import Link from 'next/link'
import type { ReactNode } from 'react'

export function GuiasShell({ children, backHref = '/guias', backLabel = '← Guías' }: {
  children: ReactNode
  backHref?: string
  backLabel?: string
}) {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#051A10', color: '#E8EDF5' }}>
      <header style={{ borderBottom: '1px solid rgba(201,168,76,0.15)', background: 'rgba(7,43,24,0.9)' }}
        className="px-4 py-3 flex items-center justify-between sticky top-0 z-10 backdrop-blur">
        <Link href={backHref} className="text-xs uppercase tracking-wider hover:text-[#C9A84C] transition-colors"
          style={{ color: '#6A7A95' }}>
          {backLabel}
        </Link>
        <span className="text-xs uppercase tracking-widest" style={{ color: 'rgba(201,168,76,0.6)', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Omaha Bridge Group
        </span>
        <Link href="/" className="text-xs px-3 py-1 rounded-full border transition-colors hover:bg-[#C9A84C]/10"
          style={{ color: '#C9A84C', borderColor: 'rgba(201,168,76,0.3)' }}>
          Analizar →
        </Link>
      </header>

      <main className="flex-1 max-w-3xl mx-auto w-full px-6 py-12">
        {children}
      </main>

      <footer style={{ borderTop: '1px solid rgba(201,168,76,0.10)' }} className="px-6 py-5">
        <p className="text-center text-xs" style={{ color: '#4A5A72' }}>
          © 2025 <span translate="no">Omaha Bridge Group</span>. Todos los derechos reservados.{' '}
          <Link href="/" className="hover:text-[#C9A84C] transition-colors" style={{ color: 'rgba(201,168,76,0.45)' }}>Inicio</Link>
          {' · '}
          <Link href="/guias" className="hover:text-[#C9A84C] transition-colors" style={{ color: 'rgba(201,168,76,0.45)' }}>Guías</Link>
          {' · '}
          <Link href="/analisis" className="hover:text-[#C9A84C] transition-colors" style={{ color: 'rgba(201,168,76,0.45)' }}>Análisis</Link>
          {' · '}
          <Link href="/cartas-en-mesa" className="hover:text-[#C9A84C] transition-colors" style={{ color: 'rgba(201,168,76,0.45)' }}>Cartas en Mesa</Link>
          {' · '}
          <Link href="/nosotros" className="hover:text-[#C9A84C] transition-colors" style={{ color: 'rgba(201,168,76,0.45)' }}>Nosotros</Link>
          {' · '}
          <Link href="/privacidad" className="hover:text-[#C9A84C] transition-colors" style={{ color: 'rgba(201,168,76,0.45)' }}>Privacidad</Link>
        </p>
      </footer>
    </div>
  )
}
