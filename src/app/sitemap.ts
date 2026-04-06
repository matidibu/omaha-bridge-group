import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://omaha-bridge-group.vercel.app'
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'daily', priority: 1 },
    { url: `${base}/ideas`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${base}/privacidad`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.3 },
  ]
}
