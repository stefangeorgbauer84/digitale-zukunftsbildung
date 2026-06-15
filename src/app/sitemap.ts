import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.digitale-zukunftsbildung.eu'
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
    { url: `${base}/schulen/tourismus`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/schulen/pts`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/schulen/berufsschule`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/aktuelles`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/aktuelles/finanzbildung-pflichtfach-2027`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/aktuelles/finanzbildung-berufsschule`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/aktuelles/finanzbildung-10-minuten-unterricht`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/aktuelles/finanzbildung-kosten-schule`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/lehrplan-mapping`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/demo-anfragen`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/aktiengame`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/impressum`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
