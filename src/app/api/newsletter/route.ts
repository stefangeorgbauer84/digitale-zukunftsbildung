import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { createRateLimiter, getClientIp, isValidEmail } from '@/lib/api'

// Max 2 signups per 10 minutes per IP
const isRateLimited = createRateLimiter(2, 10 * 60 * 1000)

export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: 'Nicht konfiguriert' }, { status: 503 })
  }

  if (isRateLimited(getClientIp(req))) {
    return NextResponse.json({ error: 'Zu viele Anfragen' }, { status: 429 })
  }

  let body: unknown
  try { body = await req.json() } catch {
    return NextResponse.json({ error: 'Ungültige Anfrage' }, { status: 400 })
  }

  const { email, website } = body as Record<string, unknown>
  if (website) return NextResponse.json({ ok: true }) // honeypot

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Ungültige E-Mail-Adresse' }, { status: 400 })
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'Skills-UP! Website <info@digitale-zukunftsbildung.eu>',
      to: [process.env.CONTACT_EMAIL ?? 'info@digitale-zukunftsbildung.eu'],
      subject: `Neue Newsletter-Anmeldung: ${email}`,
      text: `Neue Anmeldung für das Lehrplanmapping:\n\nE-Mail: ${email}\n\nDiese Person möchte das kostenlose Lehrplanmapping-PDF erhalten.`,
    })
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Fehler beim Senden' }, { status: 500 })
  }
}
