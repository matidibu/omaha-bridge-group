import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'El cliente que se va: cómo el churn destruye lo que parece estable | Omaha Bridge Group',
  description: 'Una telecom pierde 2% de clientes mensual = 24% anual. Necesita agregar 200k clientes mes solo para no retroceder. El negocio del cliente que huye.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/como-analizar-telecom' },
  openGraph: {
    title: 'Cómo analizar empresas de Telecomunicaciones | Omaha Bridge Group',
    description: 'Churn rate, ARPU, capex de infraestructura. Lo que los inversores en telecom necesitan saber.',
    type: 'article',
  },
}

const COLOR = '#F59E0B'

export default function AnalizarTelecomPage() {
  return (
    <GuiasShell articleMeta={{
      title: 'El negocio del cliente que se va: telecom desde adentro',
      description: 'Churn subiendo, ARPU bajando, capex infinito. Cómo una telecom que parece sólida se desmorona.',
      publishDate: '2025-06-19',
      url: 'https://omaha-bridge-group.vercel.app/guias/como-analizar-telecom',
      image: 'https://omaha-bridge-group.vercel.app/og-guias.png',
      keywords: 'telecom, telecomunicaciones, churn, ARPU, capex, infraestructura',
      readingTimeMinutes: 8,
    }}>
      <div className="mb-10">
        <p className="text-sm md:text-base uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          ★ &nbsp; Análisis Sectorial · Infraestructura
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          Telecom: el negocio de retener clientes y pagar por infraestructura
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Churn rate, ARPU y por qué un capex de $5B anual termina destruyendo el dividendo.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>8 min de lectura</span>
          <span>·</span>
          <span>Análisis Sectorial · Infraestructura Crítica</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-base md:text-lg leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          Las telecomunicaciones parecen negocios de dinero fácil: cobran por mes, tienen clientes "atrapados". La verdad es más incómoda: el churn (cambio de proveedor) destruye ingresos, el capex nunca termina, y la tecnología cambia cada 5 años.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Churn: el enemigo silencioso
          </h2>
          <p>
            Churn Rate = (Clientes Perdidos / Clientes Promedio) × 100
          </p>
          <p className="mt-3">
            En telecom, un churn de 2% mensual significa que pierdes 24% de base anual. Si una telefónica tiene 10M clientes y churn de 2%, pierden 200k clientes por mes. Necesita agregar 200k nuevos solo para mantener base plana.
          </p>
          <p className="mt-3">
            El problema: agregar nuevos clientes cuesta dinero (subsidios de equipos, campañas). Retener cuesta menos. Las telefónicas buenas tienen churn bajo (1-1.5%). Las malas, churn alto (2-3%).
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            ARPU: cuánto cobra realmente por cliente
          </h2>
          <p>
            <span translate="no">Average Revenue Per User</span> = Ingresos Totales / Cantidad de Clientes
          </p>
          <p className="mt-3">
            Una telefónica con $10B en ingresos y 100M clientes tiene ARPU de $100 por año. Si ARPU cae a $80, significa clientes cada vez más insatisfechos o menos valiosos.
          </p>
          <p className="mt-3">
            ARPU cayendo + Churn subiendo = catástrofe. La empresa pierde clientes valiosos y los nuevos que agrega generan menos ingresos.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Capex: la carrera infinita
          </h2>
          <p>
            Telecom necesita capex para mantener infraestructura. Redes 3G se vuelven obsoletas, necesitas 4G. Luego 5G. Luego lo que venga después.
          </p>
          <p className="mt-3">
            Un telecom grande genera $15B en FCF. Pero capex es $6B anual. ¿Por qué? Porque la infraestructura nunca se deprecia completamente — cada año hay que "refrescar" parte de la red. El capex nunca baja por debajo de $5-6B anual.
          </p>
          <p className="mt-3">
            Eso significa que el dinero para dividendos viene de lo que sobra. Y ese sobrante está bajo presión porque la competencia, los reguladores y la tecnología no descansan.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Señales de alerta en telecom
          </h2>
          <ul className="space-y-2 pl-4">
            <li><strong style={{ color: '#C9D4E0' }}>Churn subiendo:</strong> <span style={{ color: '#8A9A85' }}>Clientes insatisfechos. La competencia gana.</span></li>
            <li><strong style={{ color: '#C9D4E0' }}>ARPU bajando:</strong> <span style={{ color: '#8A9A85' }}>Los clientes gastan menos por mes. Margen presionado.</span></li>
            <li><strong style={{ color: '#C9D4E0' }}>Capex creciendo:</strong> <span style={{ color: '#8A9A85' }}>Inversión en tecnología requiere más gasto. FCF se reduce.</span></li>
            <li><strong style={{ color: '#C9D4E0' }}>Deuda alta + dividendos altos:</strong> <span style={{ color: '#8A9A85' }}>Están pagando dividendo endeudándose. Insostenible.</span></li>
          </ul>
        </section>

        <blockquote className="border-l-2 pl-4 mt-4 italic"
          style={{ borderColor: 'rgba(212,168,67,0.4)', color: 'rgba(232,237,245,0.7)', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          &ldquo;Telecom es un negocio de infraestructura que actúa como empresa de consumo. La realidad: es infraestructura y nunca termina el capex.&rdquo;
          <span className="block mt-1 not-italic text-xs" style={{ color: '#4A6A55' }}>— Lección de inversión</span>
        </blockquote>

      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', margin: '2.5rem 0' }} />

      <section className="mb-8">
        <p className="text-sm md:text-base uppercase tracking-widest mb-4" style={{ color: 'rgba(201,168,76,0.5)' }}>Más análisis de infraestructura</p>
        <div className="flex flex-wrap gap-2">
          {[
            { slug: 'flujo-de-caja-libre', label: 'FCF' },
            { slug: 'deuda-en-value-investing', label: 'Deuda' },
            { slug: 'dividendos-value-investing', label: 'Dividendos' },
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
          ¿Querés analizar una telecom con criterios de inversor?
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
