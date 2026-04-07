import { MetadataRoute } from 'next'

const base = 'https://omaha-bridge-group.vercel.app'

// Tier 1 — highest search volume (mega caps + Argentine CEDEAR favourites)
const TIER1_TICKERS = [
  'AAPL', 'MSFT', 'GOOGL', 'AMZN', 'META',
  'NVDA', 'TSLA', 'JPM', 'V', 'KO',
  'MELI', 'MA',   'NFLX', 'AMD',  'LLY',
]

// Tier 2 — strong search volume, popular CEDEARs
const TIER2_TICKERS = [
  'DIS',  'SBUX', 'NKE',  'WMT',  'MCD',
  'BAC',  'GS',   'JNJ',  'PFE',  'BABA',
  'COST', 'UNH',  'ADBE', 'XOM',  'PG',
  'PEP',  'ORCL', 'AXP',  'SPGI', 'CAT',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base,                    lastModified: new Date(), changeFrequency: 'daily',   priority: 1.0 },
    { url: `${base}/ideas`,         lastModified: new Date(), changeFrequency: 'daily',   priority: 0.9 },
    { url: `${base}/analisis`,      lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${base}/privacidad`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
  ]

  const tier1Routes: MetadataRoute.Sitemap = TIER1_TICKERS.map((ticker) => ({
    url: `${base}/analisis/${ticker}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.85,
  }))

  const tier2Routes: MetadataRoute.Sitemap = TIER2_TICKERS.map((ticker) => ({
    url: `${base}/analisis/${ticker}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.75,
  }))

  return [...staticRoutes, ...tier1Routes, ...tier2Routes]
}
