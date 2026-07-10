import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'CEDEARS: cómo invertir en Wall Street desde Argentina | Omaha Bridge Group',
  description: 'Acciones de Wall Street sin salir de Argentina. Cómo funcionan. Ventajas. Riesgos. Cómo empezar hoy.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/cedears-guia-completa' },
  openGraph: {
    title: 'CEDEARs: guía completa | Omaha Bridge Group',
    description: 'Todo lo que necesitás saber sobre CEDEARs: ratio, CCL implícito, prima/descuento y cómo invertir en acciones globales desde Argentina.',
    type: 'article',
  },
}

const COLOR = '#C9A84C'

export default function CedearsGuiaCompletaPage() {
  return (
    <GuiasShell articleMeta={{
      title: 'CEDEARs: Wall Street desde Argentina',
      description: 'Cómo funcionan. Ventajas. Riesgos. Cómo empezar.',
      publishDate: '2025-05-15',
      url: 'https://omaha-bridge-group.vercel.app/guias/cedears-guia-completa',
      image: 'https://omaha-bridge-group.vercel.app/og-guias.png',
      keywords: 'cedears, inversión argentina, mercado local',
      readingTimeMinutes: 8,
    }}>
      <div className="mb-10">
        <p className="text-sm md:text-base uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          🇦🇷 Conceptos esenciales · Mercado argentino
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          CEDEARs: guía completa
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Cómo acceder al mercado americano desde Argentina, qué mirar antes de comprar y cómo calcular si el precio es razonable.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>8 min de lectura</span>
          <span>·</span>
          <span>Mercado argentino · BYMA · Inversión internacional</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-base md:text-lg leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          Los <strong style={{ color: '#C9D4E0' }}>CEDEARs</strong> (Certificados de Depósito Argentinos) son instrumentos que cotizan en pesos en la Bolsa argentina (BYMA) y representan acciones de empresas extranjeras, principalmente norteamericanas. Le permiten al inversor argentino comprar una fracción de Apple, Microsoft, Coca-Cola o Nvidia desde una cuenta comitente local, sin necesidad de abrir una cuenta en el exterior ni operar en dólares directamente.
        </p>
        <p>
          La popularidad de los CEDEARs creció enormemente desde 2020, cuando la inflación en Argentina y las restricciones cambiarias impulsaron la búsqueda de instrumentos en pesos que preserven valor en dólares. Hoy representan uno de los activos más operados del mercado local.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Cómo funciona el mecanismo de un CEDEAR
          </h2>
          <p>
            Cada CEDEAR representa una fracción de una acción del exterior. Esa fracción se denomina <strong style={{ color: '#C9D4E0' }}>ratio</strong> de conversión. Por ejemplo, si el ratio de AAPL (Apple) es 10:1, cada CEDEAR representa 1/10 de una acción de Apple en NYSE.
          </p>
          <p className="mt-3">
            El precio en pesos de un CEDEAR debería equivaler (en términos teóricos) al precio en dólares de la acción subyacente en NYSE, multiplicado por el ratio de conversión, y convertido a pesos al tipo de cambio implícito del mercado (CCL o dólar contado con liquidación).
          </p>
          <div className="mt-3 p-4 rounded-lg" style={{ background: 'rgba(7,43,24,0.6)', border: '1px solid rgba(201,168,76,0.15)' }}>
            <p className="font-mono text-sm" style={{ color: '#E8EDF5' }}>
              Precio teórico CEDEAR (ARS) = Precio NYSE (USD) × CCL × (1 / ratio)
            </p>
          </div>
          <p className="mt-3">
            Si Apple cotiza a $200 en NYSE, el CCL está en $1.000 por dólar, y el ratio es 10:1, el precio teórico del CEDEAR de Apple es: $200 × $1.000 / 10 = $20.000 ARS.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            El CCL implícito: el tipo de cambio oculto
          </h2>
          <p>
            El precio al que cotiza el CEDEAR en BYMA refleja el tipo de cambio que el mercado argentino le asigna al dólar en ese momento. Calculando el CCL implícito de cada CEDEAR se puede saber si el mercado está valuando el dólar más caro o más barato que el CCL oficial.
          </p>
          <div className="mt-3 p-4 rounded-lg" style={{ background: 'rgba(7,43,24,0.6)', border: '1px solid rgba(201,168,76,0.15)' }}>
            <p className="font-mono text-sm" style={{ color: '#E8EDF5' }}>
              CCL implícito = Precio CEDEAR (ARS) × ratio / Precio NYSE (USD)
            </p>
          </div>
          <p className="mt-3">
            Si el CEDEAR de Apple cotiza a $21.000 ARS cuando el precio en NYSE es $200 y el ratio es 10:1, el CCL implícito es: $21.000 × 10 / $200 = $1.050. El mercado está pagando $1.050 por dólar a través del CEDEAR — más caro que el CCL oficial de $1.000. Hay una prima del 5%.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Prima y descuento: cuándo comprar y cuándo evitar
          </h2>
          <p>
            Los CEDEARs raramente cotizan exactamente a su valor teórico. Pueden tener prima (el precio en pesos es más caro que lo que resultaría del CCL de referencia) o descuento (más barato). Las razones incluyen diferencias horarias entre mercados, liquidez, acceso limitado al mercado exterior, y preferencias de inversores locales.
          </p>
          <p className="mt-3">
            Una prima elevada significa que estás pagando caro el dólar a través del CEDEAR. Un descuento puede ser una oportunidad — aunque también puede reflejar menor liquidez o algún factor técnico que haga el descuento persistente.
          </p>
          <p className="mt-3">
            Como referencia: primas o descuentos de hasta el 3-5% son normales y no relevantes para el análisis fundamental. Primas superiores al 10% merecen precaución — significa que incluso si la acción subyacente sube, esa apreciación puede ser absorbida por la compresión de la prima.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            CEDEARs vs cuenta en el exterior: ¿qué conviene?
          </h2>
          <p>
            La respuesta depende del tamaño del portafolio y el horizonte temporal:
          </p>
          <ul className="mt-3 space-y-3 pl-4">
            <li>
              <strong style={{ color: '#C9D4E0' }}>CEDEARs.</strong>
              <span style={{ color: '#8A9A85' }}> Convienen para montos menores, inversores que prefieren operar en pesos, y quien quiere simplicidad operativa. El activo está en Argentina, bajo regulación local, y puede venderse en cualquier momento en horario BYMA. Desventaja: la prima, y la dependencia del marco regulatorio argentino para operar.</span>
            </li>
            <li>
              <strong style={{ color: '#C9D4E0' }}>Cuenta en el exterior (Interactive Brokers, TD Ameritrade, etc.).</strong>
              <span style={{ color: '#8A9A85' }}> Convienen para montos mayores y quien quiere diversificación jurisdiccional. Acceso directo al NYSE/NASDAQ sin prima ni ratio de conversión. El activo está fuera de Argentina, protegido de eventuales restricciones locales. Requiere transferencia al exterior (sujeto a normativas cambiarias vigentes).</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            El análisis fundamental no cambia
          </h2>
          <p>
            Un punto crítico: el hecho de que una empresa tenga CEDEAR no cambia en absoluto su análisis fundamental. Apple sigue siendo Apple — con el mismo moat, los mismos flujos de caja, la misma calidad de gestión — tanto si la comprás en NYSE como en BYMA. El CEDEAR es solo el vehículo de acceso.
          </p>
          <p className="mt-3">
            El análisis que aplica OBG — filtro Buffett, GARP de Lynch, Magic Formula de Greenblatt — es idéntico para las empresas con CEDEAR. Lo único adicional que se muestra para el mercado argentino es el CCL implícito del CEDEAR y la prima o descuento respecto al precio NYSE, para ayudar al inversor a decidir si el momento de compra en pesos es razonable.
          </p>
          <p className="mt-3">
            Un buen negocio comprado con margen de seguridad sigue siendo un buen negocio, independientemente del instrumento. La decisión de CEDEAR o cuenta exterior es logística; la decisión de qué comprar es la que importa.
          </p>
        </section>

      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', margin: '2.5rem 0' }} />

      <section className="mb-8">
        <p className="text-sm md:text-base uppercase tracking-widest mb-4" style={{ color: 'rgba(201,168,76,0.5)' }}>Guías relacionadas</p>
        <div className="flex flex-wrap gap-2">
          {[
            { slug: 'buffett-criterios', label: '♥ Criterios Buffett' },
            { slug: 'precio-vs-valor', label: 'Precio vs valor' },
            { slug: 'ciclos-howard-marks', label: '♠ Ciclos Marks' },
            { slug: 'interes-compuesto', label: 'Interés compuesto' },
            { slug: 'margen-de-seguridad', label: 'Margen de seguridad' },
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
          Analizamos el CEDEAR que te interesa: precio NYSE, CCL implícito y veredicto de los 6 maestros.
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
