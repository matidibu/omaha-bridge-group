import Link from 'next/link'
import type { ReactNode } from 'react'
import { AdUnit } from '@/components/ui/AdUnit'

export function GuiasShell({ children, backHref = '/guias', backLabel = '← Guías', articleMeta }: {
  children: ReactNode
  backHref?: string
  backLabel?: string
  articleMeta?: {
    title: string
    description: string
    publishDate: string
    url: string
    image?: string
    keywords?: string
    readingTimeMinutes?: number
  }
}) {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: '#051A10', color: '#E8EDF5' }}>
      {articleMeta && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Article',
              headline: articleMeta.title,
              description: articleMeta.description,
              image: articleMeta.image || 'https://omaha-bridge-group.vercel.app/og-image.png',
              author: {
                '@type': 'Organization',
                name: 'Omaha Bridge Group',
                url: 'https://omaha-bridge-group.vercel.app',
              },
              datePublished: articleMeta.publishDate,
              dateModified: articleMeta.publishDate,
              url: articleMeta.url,
              inLanguage: 'es',
              keywords: articleMeta.keywords || 'value investing, análisis fundamental',
              articleSection: 'Inversión',
              timeRequired: articleMeta.readingTimeMinutes ? `PT${articleMeta.readingTimeMinutes}M` : 'PT8M',
              publisher: {
                '@type': 'Organization',
                name: 'Omaha Bridge Group',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://omaha-bridge-group.vercel.app/logo.png',
                },
              },
            }),
          }}
        />
      )}
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
        {articleMeta && (
          <p className="text-xs mb-6" style={{ color: '#3A5A45' }}>
            Actualizado: {new Date(articleMeta.publishDate).toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
          </p>
        )}
        {children}
        {articleMeta && <AdUnit slot="6317829450" />}
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
