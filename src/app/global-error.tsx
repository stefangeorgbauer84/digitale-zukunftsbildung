'use client'

import * as Sentry from '@sentry/nextjs'
import { useEffect } from 'react'

// Catches errors in the root layout itself; must render its own <html>/<body>.
export default function GlobalError({
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
    <html lang="de-AT">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif' }}>
        <main style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0 1.5rem',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #2d1b69 0%, #4a2d8a 55%, #1a5c4e 100%)',
          color: '#fff',
        }}>
          <h1 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Da ist etwas schiefgelaufen.</h1>
          <p style={{ opacity: 0.7, maxWidth: '28rem', marginBottom: '2rem' }}>
            Ein unerwarteter Fehler ist aufgetreten. Unser Team wurde automatisch informiert.
          </p>
          <button
            onClick={reset}
            style={{
              padding: '0.75rem 1.5rem',
              borderRadius: '0.75rem',
              border: 'none',
              fontWeight: 700,
              fontSize: '0.875rem',
              background: '#fff',
              color: '#4a2d8a',
              cursor: 'pointer',
            }}
          >
            Nochmal versuchen
          </button>
        </main>
      </body>
    </html>
  )
}
