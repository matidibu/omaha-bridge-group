import type { Metadata } from 'next'
import Link from 'next/link'
import { GuiasShell } from '@/components/guias/GuiasShell'

export const metadata: Metadata = {
  title: 'Value investing en Argentina: donde la inflación mata millones | Omaha Bridge Group',
  description: 'La inflación es el enemigo número 1. Cómo ajustar criterios. Cuándo pesos, cuándo dólares, cuándo CEDEARs.',
  alternates: { canonical: 'https://omaha-bridge-group.vercel.app/guias/value-investing-argentina' },
  openGraph: {
    title: 'Value investing en Argentina | Omaha Bridge Group',
    description: 'La disciplina value funciona en Argentina también. Pero necesitas ajustar para inflación, devaluación y volatilidad política.',
    type: 'article',
  },
}

const COLOR = '#C9A84C'

export default function ValueInvestingArgentinaPage() {
  return (
    <GuiasShell articleMeta={{
      title: 'Value investing argentino: adaptación a la inflación',
      description: 'Cómo ajustar criterios cuando el dinero pierde valor. Pesos vs dólares.',
      publishDate: '2026-05-15',
      url: 'https://omaha-bridge-group.vercel.app/guias/value-investing-argentina',
      image: 'https://omaha-bridge-group.vercel.app/og-guias.png',
      keywords: 'value investing argentina, mercado local, cedears',
      readingTimeMinutes: 10,
    }}>
      <div className="mb-10">
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color: COLOR }}>
          🇦🇷 Contexto local · Estrategia
        </p>
        <h1 className="text-3xl font-bold leading-tight mb-3"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif', color: '#EEF2FF' }}>
          Value investing en Argentina
        </h1>
        <p className="text-base italic" style={{ color: '#8A9A85', fontFamily: 'var(--font-playfair), Georgia, serif' }}>
          Los principios value funcionan. Pero el contexto macroeconómico cambia las reglas.
        </p>
        <div className="mt-3 flex gap-4 text-xs" style={{ color: '#3A5A45' }}>
          <span>10 min de lectura</span>
          <span>·</span>
          <span>Contexto local · Macro</span>
        </div>
      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', marginBottom: '2rem' }} />

      <div className="space-y-8 text-sm leading-relaxed" style={{ color: '#B4C0D4' }}>

        <p>
          Un value investor en USA proyecta FCF de una empresa a 10 años. En Argentina, proyectar a 3 años ya es optimista. La razón: variables macro que en países desarrollados son estables (tipo de cambio, inflación, estabilidad política) aquí son dinámicas y pueden destruir el mejor análisis fundamental en semanas.
        </p>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            El problema de invertir en pesos
          </h2>
          <p>
            En pesos, experimentas inflación constante. Una empresa que creció 8% en pesos reales mientras inflación fue 60% no creció realmente — perdió poder de compra. Cuando analizás financials en pesos, necesitás ajustar por inflación para comparar años.
          </p>
          <p className="mt-3">
            El segundo problema: devaluación. Un peso que valía $0.50 USD hace un año ahora vale $0.25. Si eras accionista, tu ganancia en pesos puede no significar nada si el peso se deprecia. Por eso muchos inversores argentinos miden retornos en dólares, no en pesos.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            CEDEARs: acceso a mercados globales con riesgo local
          </h2>
          <p>
            Un CEDEAR es un certificado de depósito que representa acciones de empresas globales. En vez de comprar Apple directamente en NASDAQ (complicado desde Argentina), comprás MELI (cedear Apple) en MERVAL.
          </p>
          <p className="mt-3">
            Ventaja: acceso a empresas globales de calidad, reduciendo riesgo puro-Argentina. Desventaja: seguís expuesto a devaluación del peso. Si Apple sube 20% en dólares pero el peso se devalúa 30%, tu retorno en pesos es negativo.
          </p>
          <p className="mt-3">
            Estrategia value con CEDEARs: invertís en empresas excelentes a precio justo, pero en dólares (o con cobertura de FX). Es el balance entre disciplina fundamental y protección macro.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Ciclos políticos y volatilidad de policy
          </h2>
          <p>
            En Argentina, el ciclo político afecta el ciclo económico mucho más que en otros países. Un cambio de gobierno puede significar nuevo régimen cambiario, restricciones a importaciones, o cambios de política monetaria drásticos.
          </p>
          <p className="mt-3">
            Esto impacta diferentes sectores diferente: exportadores pueden verse beneficiados por devaluación; importadores perjudicados. Empresas con ingresos en dólares (turismo, commodities) tienen otro ciclo que empresas 100% locales.
          </p>
          <p className="mt-3">
            La recomendación: sé muy cauteloso con empresa con ingresos puro-pesos en ciclos de incertidumbre política. O: invierte en empresas con ingresos en dólares o commodities-linked.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold mb-3" style={{ color: COLOR, fontFamily: 'var(--font-playfair), Georgia, serif' }}>
            Cómo OBG adapta value investing a Argentina
          </h2>
          <p>
            Miramos empresas argentinas excepto cuando el horizonte es corto o macro está incierta. Preferimos CEDEARs de empresas globales: reducimos risk de country, mantenemos disciplina fundamental. En pesos, invertimos solo en empresas que: (1) tienen ingresos en dólares, (2) tienen FCF que permite cobertura, o (3) están tan baratas que incluso con devaluación siguen siendo bargain.
          </p>
        </section>

      </div>

      <hr style={{ borderColor: 'rgba(201,168,76,0.08)', margin: '2.5rem 0' }} />

      <section className="mb-8">
        <p className="text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(201,168,76,0.5)' }}>Guías relacionadas</p>
        <div className="flex flex-wrap gap-2">
          {[
            { slug: 'cedears-guia-completa', label: 'CEDEARs' },
            { slug: 'dcf-valoracion', label: 'DCF' },
            { slug: 'margen-de-seguridad', label: 'Margen de seguridad' },
            { slug: 'small-caps', label: 'Small caps' },
            { slug: 'buffett-criterios', label: '♥ Criterios Buffett' },
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
          ¿Querés analizar empresas argentinas y CEDEARs?
        </p>
        <Link href="/"
          className="inline-block px-6 py-2.5 rounded-full font-semibold text-sm transition-all hover:opacity-90"
          style={{ background: '#C9A84C', color: '#051A10' }}>
          Ver análisis →
        </Link>
      </section>
    </GuiasShell>
  )
}
