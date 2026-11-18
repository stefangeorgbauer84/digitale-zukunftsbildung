import { NextResponse, type NextRequest } from 'next/server'

// Passwortschutz für noch nicht veröffentlichte Bereiche (HTTP Basic Auth).
// Das Passwort kommt aus WIRKUNG_PASSWORT (Vercel Production und Preview), nie aus dem Code:
// das Repo ist öffentlich. Fehlt die Variable, bleibt der Bereich zu (503), statt offen zu sein.

const REALM = 'Wirkungsmessung'

export function middleware(request: NextRequest) {
  const passwort = process.env.WIRKUNG_PASSWORT
  if (!passwort) {
    return new NextResponse('Bereich nicht konfiguriert', { status: 503 })
  }

  const header = request.headers.get('authorization') ?? ''
  const [schema, wert] = header.split(' ')
  if (schema === 'Basic' && wert) {
    const decoded = atob(wert)
    const eingabe = decoded.slice(decoded.indexOf(':') + 1)
    if (eingabe === passwort) {
      const res = NextResponse.next()
      res.headers.set('X-Robots-Tag', 'noindex, nofollow')
      res.headers.set('Cache-Control', 'private, no-store')
      return res
    }
  }

  return new NextResponse('Passwort erforderlich', {
    status: 401,
    headers: {
      'WWW-Authenticate': `Basic realm="${REALM}", charset="UTF-8"`,
      'X-Robots-Tag': 'noindex, nofollow',
    },
  })
}

export const config = {
  matcher: ['/wirkungsmessung', '/wirkungsmessung/:path*'],
}
