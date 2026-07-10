import type { MetadataRoute } from 'next'

const BASE_URL = 'https://omaha-bridge-group.vercel.app'

const guides = [
  'buffett-criterios', 'magic-formula-greenblatt', 'peg-peter-lynch', 'antifragilidad-taleb',
  'ciclos-howard-marks', 'calidad-institucional-fink', 'flujo-de-caja-libre', 'margen-de-seguridad',
  'tipos-de-moat', 'precio-vs-valor', 'interes-compuesto', 'psicologia-del-inversor',
  'errores-comunes-value-investing', 'deuda-en-value-investing', 'como-leer-un-balance', 'como-evaluar-un-ceo',
  'como-analizar-bancos', 'como-analizar-saas', 'como-analizar-empresas-energeticas', 'cedears-guia-completa',
  'dcf-valoracion', 'roe-roa-roic', 'ev-ebitda', 'dividendos-value-investing', 'small-caps',
  'value-investing-argentina', 'riesgo-vs-volatilidad', 'analisis-tecnico-vs-fundamental', 'el-largo-plazo',
  'como-analizar-consumo-masivo', 'ebitda-vs-fcf', 'como-analizar-retail', 'como-analizar-real-estate',
  'como-analizar-telecom', 'como-analizar-mineria', 'ocf-operating-cash-flow', 'price-to-book-pb',
  'price-to-sales-ps', 'altman-z-score', 'compounding-variable-del-tiempo', 'selectividad-concentracion',
  'spinoffs-oportunidades', 'fusiones-adquisiciones', 'empresas-defensivas', 'earnings-vs-cash',
  'capex-mantenimiento-vs-crecimiento', 'como-analizar-seguros', 'como-analizar-energia',
]

const tickers = ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'META', 'NVDA', 'TSLA', 'JPM', 'V', 'KO']

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().split('T')[0]

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: today, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE_URL}/guias`, lastModified: today, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${BASE_URL}/ideas`, lastModified: today, changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE_URL}/cartas-en-mesa`, lastModified: today, changeFrequency: 'daily', priority: 0.85 },
    { url: `${BASE_URL}/analisis`, lastModified: today, changeFrequency: 'daily', priority: 0.8 },
    { url: `${BASE_URL}/nosotros`, lastModified: today, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/contacto`, lastModified: today, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/privacidad`, lastModified: today, changeFrequency: 'monthly', priority: 0.3 },
  ]

  const guidePages = guides.map((guide) => ({
    url: `${BASE_URL}/guias/${guide}`,
    lastModified: today,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  const tickerPages = tickers.map((ticker) => ({
    url: `${BASE_URL}/analisis/${ticker}`,
    lastModified: today,
    changeFrequency: 'daily' as const,
    priority: 0.85,
  }))

  return [...staticPages, ...guidePages, ...tickerPages]
}
