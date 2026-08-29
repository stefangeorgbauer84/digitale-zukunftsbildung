import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.digitale-zukunftsbildung.eu'

  return [
    { url: base, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/ueber-uns`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/schulen`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/schulen/ahs`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/schulen/hak`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/schulen/htl`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/schulen/hlw`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/schulen/bafep`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/schulen/tourismus`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/schulen/pts`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/schulen/berufsschule`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/aktuelles`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/aktuelles/finanzbildung-pflichtfach-2027`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/aktuelles/finanzbildung-berufsschule`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/aktuelles/finanzbildung-10-minuten-unterricht`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/aktuelles/finanzbildung-kosten-schule`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/faq`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/blog`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/blog/inflation-einfach-erklaert-unterrichtsmaterial`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/lehrplan-mapping`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/lernziele`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/demo-anfragen`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/demo`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/aktiengame`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/impressum`, changeFrequency: 'yearly', priority: 0.3 },
  ]
}
