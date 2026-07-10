import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'Consumo masivo: cómo vender más a gente que es pobre',
  description: 'Márgenes finos, volumen gigante. Moat de marca. Cómo ver quién gana.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/como-analizar-consumo-masivo' },
  openGraph: {
    title: 'Cómo analizar consumo masivo',
    description: 'Marca, moat, márgenes. Las tres cosas que definen empresas de consumo excelentes versus mediocres.',
    type: 'article',
  },
}

const COLOR = '#C9A84C'

export default function ComoAnalizarConsumoMasivoPage() {
  return (
    <GuiasShell articleMeta={{
      title: 'Consumo masivo: marca que vende a volumen',
      description: 'Cómo ver quién tiene moat real. Cómo no confundir volumen con rentabilidad.',
      publishDate: '2026-05-15',
      url: 'https://omaha-bridge-group.vercel.app/guias/como-analizar-consumo-masivo',
      image: 'https://omaha-bridge-group.vercel.app/og-guias.png',
      keywords: 'consumo masivo, moat, empresas de consumo',
      readingTimeMinutes: 9,
    }}>
      <div className="mb-10">
        <p className="text-sm md:text-base uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          Análisis sectorial · Consumo
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          Cómo analizar consumo masivo
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Coca-Cola costó $1 en 1919. Hoy cuesta $100. No es por innovación, es por brand moat.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>9 min de lectura</span>
          <span>·</span>
          <span>Análisis sectorial · Consumo</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-base md:text-lg leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          Las empresas de consumo masivo son entre las inversiones más aburridas y entre las más valiosas del mundo. Coca-Cola es aburrida: vende agua azucarada desde 1886. Pero ese aburrimiento es consistencia. Y la consistencia, compuesta 100+ años, es riqueza monumental.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Moat de marca: pagar más porque la marca lo vale
          </h2>
          <p>
            Coca-Cola vende a precio 30-50% más que genéricos. ¿Es mejor? Objetivamente no. Es la misma agua azucarada. Pero los consumidores pagan más porque conocen la marca, la probaron, la asocian a consistencia.
          </p>
          <p className="mt-3">
            Ese premium de precio es moat. Mientras la marca sea valiosa, la empresa puede subir precios sin perder volumen significativo. Eso comprime margen operativo en ciclos inflacionarios.
          </p>
          <p className="mt-3">
            Test: ¿si la empresa sube precio 15%, cuántos clientes se van a la competencia? Para Coca-Cola, muy pocos. Para bebida genérica, muchos. Eso es moat de marca cuantificado.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Márgenes operativos predecibles y establ Es
          </h2>
          <p>
            Las empresas de consumo tienen ventaja: demanda muy predecible. Cada año, billones de personas comen, beben, usan higiene personal. Eso no cambia con ciclos económicos como inversión en construcción o tecnología.
          </p>
          <p className="mt-3">
            Resultado: márgenes operativos que pueden proyectarse a 10+ años. Coca-Cola tenía 27% margen operativo hace 10 años, tiene 32% hoy. No varía drásticamente. Eso es útil para FCF projections.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Capex bajo: el dinero fluye a accionistas
          </h2>
          <p>
            Una planta de producción de Coca-Cola tiene 50 años de vida. Después, se reemplaza. Pero mientras funciona, el capex es bajo — solo mantenimiento. Eso significa FCF es cercano a EBIT porque capex no consume dinero.
          </p>
          <p className="mt-3">
            Compara con telecom o energía donde capex es 30-50% de ingresos. En consumo masivo, es 2-5%. De ahí que puedan distribuir dividendos masivos sin quebrar el negocio.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Dónde fallar: commodities, saturación, cambio de hábitos
          </h2>
          <p>
            El riesgo #1: el commodity del que es hecha la bebida o producto sube. Cacao subió 300% en 2 años. Eso presiona márgenes si no podés trasladar a precio.
          </p>
          <p className="mt-3">
            El riesgo #2: cambio de hábitos. Consumo de refrescos bajó 20% en 15 años en USA porque la gente se pasó a agua, jugos, etc. Una empresa centrada en "bebidas azucaradas" pierde mercado.
          </p>
          <p className="mt-3">
            Buffett ve esto: por eso diversifica. Coca-Cola ahora vende agua, café, jugos. No apuesta a que azúcar sea el futuro — apuesta a que bebidas calientes/frías serán demandadas siempre.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Cómo OBG lo analiza
          </h2>
          <p>
            Miramos: (1) fuerza de marca (premium de precio vs competencia), (2) estabilidad de margen últimos 10 años, (3) capex como % de revenue, (4) crecimiento de volumen y precios, (5) moat de distribución (controlán los canales de venta).
          </p>
          <p className="mt-3">
            Si una empresa de consumo tiene marca fuerte, márgenes estables, capex bajo y dividendo growing, suele ser excelente inversión. Aburrida pero excelente.
          </p>
        </section>

      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', margin: '2.5rem 0' }} />

      <section className="mb-8">
        <p className="text-sm md:text-base uppercase tracking-widest mb-4" style={{ color: 'rgba(201,168,76,0.5)' }}>Guías relacionadas</p>
        <div className="flex flex-wrap gap-2">
          {[
            { slug: 'tipos-de-moat', label: 'Tipos de moat' },
            { slug: 'buffett-criterios', label: '♥ Criterios Buffett' },
            { slug: 'dividendos-value-investing', label: 'Dividendos' },
            { slug: 'roe-roa-roic', label: 'ROE, ROA, ROIC' },
            { slug: 'flujo-de-caja-libre', label: 'Flujo de caja libre' },
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
          ¿Querés analizar empresas de consumo masivo?
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
