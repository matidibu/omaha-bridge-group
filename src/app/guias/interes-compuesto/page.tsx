import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'El interés compuesto: por qué el tiempo es el mejor activo del inversor | Omaha Bridge Group',
  description: 'Einstein lo llamó la octava maravilla del mundo. Buffett debe el 99% de su fortuna a tenerlo después de los 52 años. Cómo el interés compuesto transforma rendimientos modestos en riqueza extraordinaria.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/interes-compuesto' },
  openGraph: {
    title: 'El interés compuesto | Omaha Bridge Group',
    description: 'El único factor que convierte rendimientos ordinarios en riqueza extraordinaria: el tiempo y la paciencia.',
    type: 'article',
  },
}

const COLOR = '#C9A84C'

export default function InteresCompuestoPage() {
  return (
    <GuiasShell articleMeta={{
      title: 'El interés compuesto: por qué el tiempo es el mejor activo del inversor',
      description: 'Einstein lo llamó la octava maravilla del mundo. Buffett debe el 99% de su fortuna a tenerlo después de los 52 años. Cómo el interés compuesto transforma rendimientos modestos en riqueza extraordinaria.',
      publishDate: '2025-05-15',
      url: 'https://omaha-bridge-group.vercel.app/guias/interes-compuesto',
      image: 'https://omaha-bridge-group.vercel.app/og-guias.png',
      keywords: 'compounding, poder del interés compuesto, crecimiento',
      readingTimeMinutes: 7,
    }}>
      <div className="mb-10">
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          Conceptos esenciales · Fundamentos de inversión
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          El interés compuesto
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          El 99% de la fortuna de Buffett fue acumulada después de sus 52 años. No por talento tardío — por décadas de compuesto.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>7 min de lectura</span>
          <span>·</span>
          <span>Fundamentos · Horizonte temporal</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-sm leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          Buffett empezó a invertir a los 11 años. A los 30, tenía un millón de dólares. A los 52, tenía $376 millones. A los 92, tiene más de $100.000 millones. La diferencia entre los 52 y los 92 no es haber tenido mejores ideas de inversión — es haber tenido cuarenta años adicionales de compuesto trabajando sobre una base cada vez más grande.
        </p>
        <p>
          El interés compuesto es el principio por el cual los rendimientos de un capital se reinvierten para generar rendimientos sobre los rendimientos. La fórmula es sencilla; la intuición sobre sus efectos a largo plazo, no tanto.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            La matemática del compuesto
          </h2>
          <p>
            $100.000 invertidos al 10% anual durante distintos períodos:
          </p>
          <div className="mt-3 rounded-lg overflow-hidden" style={{ border: '1px solid rgba(201,168,76,0.15)' }}>
            <table className="w-full text-xs">
              <thead>
                <tr style={{ background: 'rgba(7,43,24,0.8)' }}>
                  <th className="px-4 py-3 text-left" style={{ color: 'rgba(201,168,76,0.7)' }}>Años</th>
                  <th className="px-4 py-3 text-right" style={{ color: 'rgba(201,168,76,0.7)' }}>Capital final</th>
                  <th className="px-4 py-3 text-right" style={{ color: 'rgba(201,168,76,0.7)' }}>Ganancia total</th>
                </tr>
              </thead>
              <tbody style={{ color: '#B4C0D4' }}>
                {[
                  { years: '10 años', capital: '$259.000', gain: '159%' },
                  { years: '20 años', capital: '$673.000', gain: '573%' },
                  { years: '30 años', capital: '$1.745.000', gain: '1.645%' },
                  { years: '40 años', capital: '$4.526.000', gain: '4.426%' },
                ].map((row, i) => (
                  <tr key={i} style={{ borderTop: '1px solid rgba(201,168,76,0.06)', background: i % 2 === 0 ? 'rgba(7,43,24,0.4)' : 'rgba(7,43,24,0.2)' }}>
                    <td className="px-4 py-2.5">{row.years}</td>
                    <td className="px-4 py-2.5 text-right font-mono" style={{ color: '#E8EDF5' }}>{row.capital}</td>
                    <td className="px-4 py-2.5 text-right" style={{ color: '#22c55e' }}>{row.gain}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3">
            Lo que hace no lineal al compuesto es que la base sobre la que se aplica el 10% crece cada año. En el año 1, el 10% sobre $100.000 es $10.000. En el año 30, el 10% sobre $1.745.000 es $174.500. El último año del período genera más dinero que los primeros quince años juntos.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Por qué la tasa importa exponencialmente
          </h2>
          <p>
            Pequeñas diferencias en la tasa de retorno anual producen diferencias enormes a largo plazo. $100.000 durante 30 años:
          </p>
          <ul className="mt-3 space-y-2 pl-4">
            <li><strong style={{ color: '#C9D4E0' }}>Al 7%:</strong> <span style={{ color: '#8A9A85' }}>$761.000</span></li>
            <li><strong style={{ color: '#C9D4E0' }}>Al 10%:</strong> <span style={{ color: '#8A9A85' }}>$1.745.000 (2,3x más)</span></li>
            <li><strong style={{ color: '#C9D4E0' }}>Al 15%:</strong> <span style={{ color: '#8A9A85' }}>$6.621.000 (8,7x más)</span></li>
            <li><strong style={{ color: '#C9D4E0' }}>Al 20%:</strong> <span style={{ color: '#8A9A85' }}>$23.738.000 (31x más)</span></li>
          </ul>
          <p className="mt-3">
            Esa es la razón por la que Buffett — que durante décadas tuvo retornos del 20%+ anual — acumuló una fortuna radicalmente mayor que alguien con retornos del 10% durante el mismo período. No el doble, sino decenas de veces más. La diferencia de retorno es el 3-4%; la diferencia de resultado final es de órdenes de magnitud.
          </p>
          <p className="mt-3">
            Esto también explica por qué las comisiones de gestión importan tanto. Un fondo que cobra 2% anual vs uno que cobra 0,1% parece una diferencia pequeña. Sobre 30 años, esa diferencia puede consumir el 30-40% del capital final.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Los enemigos del compuesto
          </h2>
          <p>
            El compuesto requiere que los rendimientos se reinviertan, no se consuman. Sus principales enemigos son:
          </p>
          <ul className="mt-3 space-y-3 pl-4">
            <li>
              <strong style={{ color: '#C9D4E0' }}>Interrupciones del proceso.</strong>
              <span style={{ color: '#8A9A85' }}> Vender en pánico durante una crisis, retirar capital para gastos, o cambiar de estrategia en el peor momento interrumpe el compuesto justo cuando la base más importa.</span>
            </li>
            <li>
              <strong style={{ color: '#C9D4E0' }}>Pérdidas grandes.</strong>
              <span style={{ color: '#8A9A85' }}> Una pérdida del 50% requiere un 100% de recuperación para volver al punto de partida. Ese reinicio del compuesto puede costar años. Preservar capital en las malas épocas es casi tan importante como crecer en las buenas.</span>
            </li>
            <li>
              <strong style={{ color: '#C9D4E0' }}>Rotación excesiva.</strong>
              <span style={{ color: '#8A9A85' }}> Cada venta genera impuestos sobre ganancias de capital que reducen la base de reinversión. Mantener una buena inversión durante muchos años difiere el impuesto indefinidamente — un beneficio enorme para el compuesto.</span>
            </li>
            <li>
              <strong style={{ color: '#C9D4E0' }}>Comisiones elevadas.</strong>
              <span style={{ color: '#8A9A85' }}> Cada punto porcentual de comisión es un punto que deja de componer. A 30 años, la diferencia es enorme.</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            La bola de nieve: el modelo mental de Buffett
          </h2>
          <p>
            Buffett describe el compuesto como una bola de nieve que rueda cuesta abajo. La clave es empezar con una bola que ya tenga cierto tamaño (capital inicial) y encontrar una ladera larga de nieve húmeda (activos de buena calidad con retornos altos). El tiempo hace el resto.
          </p>
          <p className="mt-3">
            Lo que el modelo de la bola de nieve ilustra bien es que el comienzo importa mucho menos que la continuidad. La persona que empieza a los 25 con $10.000 y el 10% anual llega a los 65 con $453.000. La persona que empieza a los 35 con $10.000 al mismo retorno llega a $174.000. Diez años de diferencia al inicio producen 2,6x de diferencia al final — no por inteligencia ni esfuerzo, sino puramente por tiempo.
          </p>
        </section>

      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', margin: '2.5rem 0' }} />

      <section className="mb-8">
        <p className="text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(201,168,76,0.5)' }}>Guías relacionadas</p>
        <div className="flex flex-wrap gap-2">
          {[
            { slug: 'buffett-criterios', label: '♥ Criterios Buffett' },
            { slug: 'precio-vs-valor', label: 'Precio vs valor' },
            { slug: 'errores-comunes-value-investing', label: 'Errores comunes' },
            { slug: 'psicologia-del-inversor', label: 'Psicología del inversor' },
            { slug: 'margen-de-seguridad', label: 'Margen de seguridad' },
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
          ¿Genera retornos sostenidos la empresa que te interesa?
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
