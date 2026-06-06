import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://digitale-zukunftsbildung.vercel.app'
  const now = new Date()

  return [
    { url: base, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/ueber-uns`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/schulen`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/schulen/ahs`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/schulen/hak`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/schulen/htl`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/schulen/hlw`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/schulen/bafep`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/schulen/pts`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/schulen/berufsschule`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/impressum`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
