import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: 'E-Mail-Dienst nicht konfiguriert' }, { status: 503 })
  }

  const { name, email, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Fehlende Felder' }, { status: 400 })
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const esc = (s: string) =>
      s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

    await resend.emails.send({
      from: 'Website <kontakt@digitale-zukunftsbildung.eu>',
      to: [process.env.CONTACT_EMAIL ?? 'kontakt@digitale-zukunftsbildung.eu'],
      replyTo: [email],
      subject: `Neue Kontaktanfrage von ${name}`,
      text: `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`,
      html: `
        <p><strong>Name:</strong> ${esc(name)}</p>
        <p><strong>E-Mail:</strong> <a href="mailto:${esc(email)}">${esc(email)}</a></p>
        <hr />
        <p>${esc(message).replace(/\n/g, '<br />')}</p>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'E-Mail konnte nicht gesendet werden' }, { status: 500 })
  }
}
