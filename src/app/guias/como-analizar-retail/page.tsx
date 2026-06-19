import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'Cómo analizar empresas de Retail — Márgenes, rotación e inventario | Omaha Bridge Group',
  description: 'Guía para invertir en retail: por qué la rotación de inventario importa más que la ganancia neta, cómo detectar obsolescencia de stock y por qué el real estate importa tanto como el comercio.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/como-analizar-retail' },
  openGraph: {
    title: 'Cómo analizar empresas de Retail | Omaha Bridge Group',
    description: 'Rotación de inventario, márgenes de tienda, y comparables inmobiliarios. Lo que los inversores en retail necesitan saber.',
    type: 'article',
  },
}

const COLOR = '#E84C89'

export default function AnalizarRetailPage() {
  return (
    <GuiasShell articleMeta={{
      title: 'Cómo analizar empresas de Retail — Márgenes, rotación e inventario',
      description: 'Guía para invertir en retail: rotación de inventario, márgenes de tienda y por qué el real estate es crítico en este sector.',
      publishDate: '2025-06-19',
      url: 'https://omaha-bridge-group.vercel.app/guias/como-analizar-retail',
      image: 'https://omaha-bridge-group.vercel.app/og-guias.png',
      keywords: 'retail, tienda, inventario, rotación, márgenes, análisis sectorial',
      readingTimeMinutes: 9,
    }}>
      <div className="mb-10">
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          ♣ &nbsp; Análisis Sectorial · Consumo Masivo
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          Cómo invertir en Retail sin perder dinero en obsolescencia de stock
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Rotación de inventario, márgenes de tienda y por qué el real estate es el negocio real en retail.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>9 min de lectura</span>
          <span>·</span>
          <span>Análisis Sectorial · Consumo Masivo</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-sm leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          Retail es una industria de escasos márgenes y rápida rotación. A diferencia de un fabricante que vende a crédito y espera, el retailer compra hoy, vende mañana, y si no vende, el stock se vuelve obsoleto. Esa presión revela la calidad del negocio.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            La métrica que no podés ignorar: Inventory Turnover
          </h2>
          <p>
            <span translate="no">Inventory Turnover</span> = COGS (Cost of Goods Sold) / Promedio de Inventario
          </p>
          <p className="mt-3">
            Un retailer con turnover de 8x por año vende su inventario cada 45-46 días. Uno con 2x por año lo vende cada 182 días. La diferencia determina si el stock se pudre o se vende.
          </p>
          <p className="mt-3">
            Zara rota inventario cada 3-4 semanas. Gap rota cada 2 meses. ¿Por qué la diferencia? Zara diseña y produce rápido, toma riesgos menores por prenda pero vende casi todo. Gap compra mucho upfront esperando aciertos de moda.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            El problema del over-buying
          </h2>
          <p>
            Cuando un retailer compra mal (predice mal la moda, los colores, el tamaño), tiene que hacer liquidaciones. Las liquidaciones destruyen márgenes. Una compra equivocada de $10M en remeras al 60% de margen se convierte en una liquidación al 10% de margen.
          </p>
          <p className="mt-3">
            Eso pasa cada temporada en retail. Los buenos operadores minimizan estas pérdidas. Los malos gastan enormes en "ajustes de inventario" cada trimestre.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            El margen que importa: Gross Margin vs Operating Margin
          </h2>
          <p>
            Gross Margin de retail es típicamente 35-45%. Eso está bien. Pero Operating Margin es el que mata — generalmente 3-8% porque los costos de la tienda física son enormes: personal, alquiler, servicios.
          </p>
          <ul className="mt-3 space-y-2 pl-4">
            <li><strong style={{ color: '#C9D4E0' }}>Personal:</strong> <span style={{ color: '#8A9A85' }}>15-20% de los ingresos en un mall.</span></li>
            <li><strong style={{ color: '#C9D4E0' }}>Alquiler:</strong> <span style={{ color: '#8A9A85' }}>8-12% de los ingresos (mall premium más).</span></li>
            <li><strong style={{ color: '#C9D4E0' }}>Utilidades, seguridad, etc:</strong> <span style={{ color: '#8A9A85' }}>3-5% de los ingresos.</span></li>
          </ul>
          <p className="mt-3">
            Así que de un Gross Margin de 40%, termina quedando un Operating Margin de 5% después de pagar tienda. Cuidado: si ves un retailer con Operating Margin de 20%, algo está mal en el análisis o tiene un moat extraordinario (tipo Amazon con Prime).
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Real estate es el negocio real
          </h2>
          <p>
            En muchos retailers, especialmente en propiedades propias, el real estate importa tanto como el comercio. Una tienda en una esquina privilegiada genera 3x más tráfico que una de la misma marca a 100m de distancia.
          </p>
          <p className="mt-3">
            Buffett compró Kraft (que posee propiedades valiosas) pero no compró empresas de ropa que no tenían real estate. El real estate es un activo, la moda es moda.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Señales de alerta en retail
          </h2>
          <ul className="space-y-2 pl-4">
            <li><strong style={{ color: '#C9D4E0' }}>Inventory Turnover cayendo:</strong> <span style={{ color: '#8A9A85' }}>La mercadería no se vende. Viene descuento.</span></li>
            <li><strong style={{ color: '#C9D4E0' }}>Stores de bajo tráfico abiertos:</strong> <span style={{ color: '#8A9A85' }}>Alquiler de dinero tirado.</span></li>
            <li><strong style={{ color: '#C9D4E0' }}>Gross margin estable pero cash flow débil:</strong> <span style={{ color: '#8A9A85' }}>Gran cantidad de stock invendido.</span></li>
            <li><strong style={{ color: '#C9D4E0' }}>Cierre de tiendas anunciado:</strong> <span style={{ color: '#8A9A85' }}>Significa que predijeron mal hace 2 años.</span></li>
          </ul>
        </section>

        <blockquote className="border-l-2 pl-4 mt-4 italic"
          style={{ borderColor: 'rgba(212,168,67,0.4)', color: 'rgba(232,237,245,0.7)', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          &ldquo;La mejor tienda de retail es la que no tiene exceso de inventario.&rdquo;
          <span className="block mt-1 not-italic text-xs" style={{ color: '#4A6A55' }}>— Charlie Munger en Berkshire Meetings</span>
        </blockquote>

      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', margin: '2.5rem 0' }} />

      <section className="mb-8">
        <p className="text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(201,168,76,0.5)' }}>Análisis sectorial relacionado</p>
        <div className="flex flex-wrap gap-2">
          {[
            { slug: 'como-analizar-consumo-masivo', label: 'Consumo Masivo' },
            { slug: 'flujo-de-caja-libre', label: 'FCF' },
            { slug: 'roe-roa-roic', label: 'ROIC' },
            { slug: 'tipos-de-moat', label: 'Moat' },
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
          ¿Querés analizar una empresa de retail con criterios de inversor?
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
