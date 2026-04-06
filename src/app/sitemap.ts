import { MetadataRoute } from 'next'

const base = 'https://omaha-bridge-group.vercel.app'

const TOP_TICKERS = [
  'AAPL', 'MSFT', 'GOOGL', 'AMZN', 'META',
  'NVDA', 'TSLA', 'JPM', 'V', 'KO',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base,                    lastModified: new Date(), changeFrequency: 'daily',   priority: 1.0 },
    { url: `${base}/ideas`,         lastModified: new Date(), changeFrequency: 'daily',   priority: 0.9 },
    { url: `${base}/privacidad`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
  ]

  const tickerRoutes: MetadataRoute.Sitemap = TOP_TICKERS.map((ticker) => ({
    url: `${base}/analisis/${ticker}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.85,
  }))

  return [...staticRoutes, ...tickerRoutes]
}
