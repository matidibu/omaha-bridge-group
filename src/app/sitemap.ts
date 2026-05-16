import { MetadataRoute } from 'next'

const base = 'https://omaha-bridge-group.vercel.app'

// 10 showcase tickers — cached analysis pages indexed by Google.
// Kept intentionally small: users who search other tickers find the hub
// and are directed to the live analysis, preserving the interactive experience.
const CACHED_TICKERS = [
  'AAPL', 'MSFT', 'GOOGL', 'AMZN', 'META',
  'NVDA', 'TSLA', 'JPM',   'V',    'KO',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base,                          lastModified: new Date(), changeFrequency: 'daily',   priority: 1.0 },
    { url: `${base}/ideas`,               lastModified: new Date(), changeFrequency: 'daily',   priority: 0.9 },
    { url: `${base}/cartas-en-mesa`,      lastModified: new Date(), changeFrequency: 'daily',   priority: 0.85 },
    { url: `${base}/analisis`,            lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${base}/privacidad`,          lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
  ]

  const tickerRoutes: MetadataRoute.Sitemap = CACHED_TICKERS.map((ticker) => ({
    url: `${base}/analisis/${ticker}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.85,
  }))

  return [...staticRoutes, ...tickerRoutes]
}
