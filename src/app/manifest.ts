import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Skills-UP! – Finanzbildung für Schulen',
    short_name: 'Skills-UP!',
    description:
      'Finanzbildungsprogramm für 15- bis 20-Jährige an österreichischen Schulen. 12+ Module, 10+ Praxissimulationen, lehrplankonform.',
    start_url: '/',
    display: 'standalone',
    background_color: '#2d1b69',
    theme_color: '#4a2d8a',
    lang: 'de-AT',
    icons: [
      {
        src: '/capybara-mascot.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/capybara-mascot.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
