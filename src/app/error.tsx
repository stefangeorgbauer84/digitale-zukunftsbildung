'use client'

import * as Sentry from '@sentry/nextjs'
import Link from 'next/link'
import { useEffect } from 'react'

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    Sentry.captureException(error)
  }, [error])

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center"
      style={{ background: 'linear-gradient(135deg, #2d1b69 0%, #4a2d8a 55%, #1a5c4e 100%)' }}>
      <h1 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
        Da ist etwas schiefgelaufen.
      </h1>
      <p className="font-body text-white/70 text-base max-w-md mb-8">
        Ein unerwarteter Fehler ist aufgetreten. Unser Team wurde automatisch informiert.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={reset}
          className="px-6 py-3 rounded-xl font-body font-700 text-sm bg-white text-primary-dark hover:bg-gray-100 transition-all active:scale-95"
        >
          Nochmal versuchen
        </button>
        <Link
          href="/"
          className="px-6 py-3 rounded-xl font-body font-600 text-sm text-white border border-white/25 hover:bg-white/10 transition-all"
        >
          Zur Startseite
        </Link>
      </div>
    </main>
  )
}
