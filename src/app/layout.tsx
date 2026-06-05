import type { Metadata } from 'next'
import { Baloo_2, Nunito } from 'next/font/google'
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
  title: 'Verein zur Entwicklung der digitalen Zukunftsbildung',
  description: 'Skills-UP! – Digitale Bildung, die wirklich wirkt. Innovative Kurse für Unternehmen, Schulen und Einzelpersonen in Österreich.',
  metadataBase: new URL('https://www.digitale-zukunftsbildung.eu'),
  openGraph: {
    title: 'Digitale Zukunftsbildung – Skills-UP!',
    description: 'Digitale Bildung, die wirklich wirkt.',
    locale: 'de_AT',
    type: 'website',
    images: [{ url: '/fotos/Logo.png', width: 180, height: 180, alt: 'Skills-UP! Logo' }],
  },
  twitter: {
    card: 'summary',
    title: 'Skills-UP! – Digitale Zukunftsbildung',
    description: 'Echte digitale Kompetenz für Unternehmen, Schulen und Privatpersonen in Österreich.',
    images: ['/fotos/Logo.png'],
  },
  keywords: ['Digitale Bildung', 'Skills-UP', 'KI Kurs Österreich', 'Digitale Kompetenz', 'Weiterbildung Wien', 'Inhouse Schulung', 'WKÖ zertifiziert'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${baloo2.variable} ${nunito.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-xl focus:bg-primary-dark focus:text-white focus:font-body focus:text-sm focus:font-700"
        >
          Zum Hauptinhalt springen
        </a>
        {children}
      </body>
    </html>
  )
}
