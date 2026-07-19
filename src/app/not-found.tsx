import type { Metadata } from 'next'
import Link from 'next/link'
import { Home, BookOpen, Mail } from 'lucide-react'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: '404 – Seite nicht gefunden | Skills-UP!',
  description: 'Diese Seite existiert nicht.',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <>
      <SiteNav />
      <main
        id="main-content"
        className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16"
        style={{
          background:
            'linear-gradient(135deg, #f3f1f9 0%, #e8e5f4 50%, #e6f4f1 100%)',
        }}
      >
        <div className="max-w-lg w-full text-center">
          <div
            className="font-heading font-800 leading-none mb-4 select-none"
            style={{ fontSize: 'clamp(6rem,20vw,10rem)', color: 'rgba(74,45,138,0.12)' }}
            aria-hidden="true"
          >
            404
          </div>

          <h1 className="font-heading font-800 text-2xl sm:text-3xl text-primary-dark mb-3">
            Seite nicht gefunden
          </h1>
          <p className="font-body text-text-secondary mb-10 leading-relaxed">
            Diese Seite gibt es leider nicht. Vielleicht wurde die URL geändert oder der Link
            ist veraltet.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary-dark text-white font-body font-700 text-sm hover:bg-primary-medium transition-colors active:scale-95"
            >
              <Home size={16} aria-hidden="true" />
              Zur Startseite
            </Link>
            <Link
              href="/schulen"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-gray-200 text-primary-dark font-body font-700 text-sm hover:bg-primary-50 transition-colors active:scale-95"
            >
              <BookOpen size={16} aria-hidden="true" />
              Für Schulen
            </Link>
            <Link
              href="/#kontakt"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-gray-200 text-primary-dark font-body font-700 text-sm hover:bg-primary-50 transition-colors active:scale-95"
            >
              <Mail size={16} aria-hidden="true" />
              Kontakt
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
