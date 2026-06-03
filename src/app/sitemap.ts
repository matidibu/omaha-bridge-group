import { MetadataRoute } from 'next'

const base = 'https://omaha-bridge-group.vercel.app'

// 10 showcase tickers — cached analysis pages indexed by Google.
// Kept intentionally small: users who search other tickers find the hub
// and are directed to the live analysis, preserving the interactive experience.
const CACHED_TICKERS = [
  'AAPL', 'MSFT', 'GOOGL', 'AMZN', 'META',
  'NVDA', 'TSLA', 'JPM',   'V',    'KO',
]

// 30 guides on value investing
const GUIDES = [
  // Los 6 maestros
  'buffett-criterios',
  'magic-formula-greenblatt',
  'peg-peter-lynch',
  'antifragilidad-taleb',
  'ciclos-howard-marks',
  'calidad-institucional-fink',
  // Conceptos esenciales
  'flujo-de-caja-libre',
  'margen-de-seguridad',
  'tipos-de-moat',
  'precio-vs-valor',
  'interes-compuesto',
  'psicologia-del-inversor',
  'errores-comunes-value-investing',
  'deuda-en-value-investing',
  'como-leer-un-balance',
  'como-evaluar-un-ceo',
  'como-analizar-bancos',
  'como-analizar-saas',
  'como-analizar-empresas-energeticas',
  'cedears-guia-completa',
  // Valoración y estrategia
  'dcf-valoracion',
  'roe-roa-roic',
  'ev-ebitda',
  'dividendos-value-investing',
  'small-caps',
  'value-investing-argentina',
  'riesgo-vs-volatilidad',
  'analisis-tecnico-vs-fundamental',
  'el-largo-plazo',
  'como-analizar-consumo-masivo',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base,                          lastModified: new Date(), changeFrequency: 'daily',   priority: 1.0 },
    { url: `${base}/guias`,               lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.95 },
    { url: `${base}/ideas`,               lastModified: new Date(), changeFrequency: 'daily',   priority: 0.9 },
    { url: `${base}/cartas-en-mesa`,      lastModified: new Date(), changeFrequency: 'daily',   priority: 0.85 },
    { url: `${base}/analisis`,            lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${base}/nosotros`,            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${base}/privacidad`,          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
  ]

  const guideRoutes: MetadataRoute.Sitemap = GUIDES.map((slug) => ({
    url: `${base}/guias/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }))

  const tickerRoutes: MetadataRoute.Sitemap = CACHED_TICKERS.map((ticker) => ({
    url: `${base}/analisis/${ticker}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.85,
  }))

  return [...staticRoutes, ...guideRoutes, ...tickerRoutes]
}
