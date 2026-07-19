import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'
import { createRateLimiter, getClientIp, isValidEmail, escapeHtml } from '@/lib/api'

// Max 3 submissions per 10 minutes per IP
const isRateLimited = createRateLimiter(3, 10 * 60 * 1000)

export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: 'E-Mail-Dienst nicht konfiguriert' }, { status: 503 })
  }

  if (isRateLimited(getClientIp(req))) {
    return NextResponse.json({ error: 'Zu viele Anfragen. Bitte kurz warten.' }, { status: 429 })
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Ungültige Anfrage' }, { status: 400 })
  }

  const { name, email, message, website } = body as Record<string, unknown>

  // Honeypot: bots fill this hidden field, humans leave it empty
  if (website) {
    return NextResponse.json({ ok: true })
  }

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Fehlende Felder' }, { status: 400 })
  }

  if (
    typeof name !== 'string' || name.length > 200 ||
    typeof message !== 'string' || message.length > 5000
  ) {
    return NextResponse.json({ error: 'Ungültige Eingabe' }, { status: 400 })
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: 'Ungültige E-Mail-Adresse' }, { status: 400 })
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: 'Website <info@digitale-zukunftsbildung.eu>',
      to: [process.env.CONTACT_EMAIL ?? 'info@digitale-zukunftsbildung.eu'],
      replyTo: [email],
      subject: `Neue Kontaktanfrage von ${name}`,
      text: `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`,
      html: `
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>E-Mail:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
        <hr />
        <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'E-Mail konnte nicht gesendet werden' }, { status: 500 })
  }
}
