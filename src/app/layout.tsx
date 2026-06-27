import type { Metadata } from 'next'
import { Baloo_2, Nunito } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const baloo2 = Baloo_2({
  subsets: ['latin'],
  variable: '--font-baloo2',
  weight: ['400', '600', '700', '800'],
})

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/capybara-mascot.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: '/capybara-mascot.png',
    shortcut: '/favicon.ico',
  },
  title: 'Skills-UP! – Finanzbildung für Schulen | Verein zur Entwicklung der digitalen Zukunftsbildung',
  description: 'Skills-UP! – Finanzbildung, die wirklich ankommt. Das Unterrichtsprogramm für 15- bis 20-Jährige: 12+ Module, 10+ Praxissimulationen, lehrplankonform und DSGVO-sicher. Für AHS, BHS und PTS.',
  metadataBase: new URL('https://www.digitale-zukunftsbildung.eu'),
  alternates: {
    canonical: 'https://www.digitale-zukunftsbildung.eu',
    languages: {
      'de-AT': 'https://www.digitale-zukunftsbildung.eu',
      'x-default': 'https://www.digitale-zukunftsbildung.eu',
    },
  },
  openGraph: {
    title: 'Skills-UP! – Finanzbildung, die wirklich ankommt',
    description: 'Das Unterrichtsprogramm für 15- bis 20-Jährige. 12+ Module, 10+ Praxissimulationen, lehrplankonform und sofort einsetzbar.',
    url: 'https://www.digitale-zukunftsbildung.eu',
    siteName: 'Skills-UP! – Digitale Zukunftsbildung',
    locale: 'de_AT',
    type: 'website',
    // opengraph-image.tsx generates the 1200×630 image automatically
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skills-UP! – Finanzbildung für Schulen',
    description: 'Finanzbildung für 15- bis 20-Jährige: Module, Praxissimulationen und Gamification. Lehrplankonform, für AHS, BHS und PTS.',
  },
  keywords: ['Finanzbildung', 'Skills-UP', 'Finanzbildung Schule Österreich', 'Wirtschaftsbildung', 'Finanzkompetenz Jugendliche', 'Unterrichtsprogramm Finanzen', 'AHS BHS PTS', 'WKÖ zertifiziert', 'Finanzbildung Pflichtfach 2027'],
  authors: [{ name: 'Verein zur Entwicklung der digitalen Zukunftsbildung', url: 'https://www.digitale-zukunftsbildung.eu' }],
  creator: 'Digitale Zukunftsbildung',
  publisher: 'Verein zur Entwicklung der digitalen Zukunftsbildung',
  other: {
    'article:publisher': 'https://www.linkedin.com/company/verein-zur-entwicklung-der-digitalen-zukunftsbildung',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de-AT" className={`${baloo2.variable} ${nunito.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-xl focus:bg-primary-dark focus:text-white focus:font-body focus:text-sm focus:font-700"
        >
          Zum Hauptinhalt springen
        </a>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
