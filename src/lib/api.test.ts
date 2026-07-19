import { describe, it, expect, vi, afterEach } from 'vitest'
import { createRateLimiter, getClientIp, isValidEmail, escapeHtml } from './api'

afterEach(() => {
  vi.useRealTimers()
})

describe('createRateLimiter', () => {
  it('erlaubt Anfragen bis zum Limit, blockt danach', () => {
    const isLimited = createRateLimiter(3, 60_000)
    expect(isLimited('1.2.3.4')).toBe(false)
    expect(isLimited('1.2.3.4')).toBe(false)
    expect(isLimited('1.2.3.4')).toBe(false)
    expect(isLimited('1.2.3.4')).toBe(true)
  })

  it('zählt IPs unabhängig voneinander', () => {
    const isLimited = createRateLimiter(1, 60_000)
    expect(isLimited('1.1.1.1')).toBe(false)
    expect(isLimited('2.2.2.2')).toBe(false)
    expect(isLimited('1.1.1.1')).toBe(true)
  })

  it('setzt nach Ablauf des Zeitfensters zurück', () => {
    vi.useFakeTimers()
    const isLimited = createRateLimiter(1, 60_000)
    expect(isLimited('1.2.3.4')).toBe(false)
    expect(isLimited('1.2.3.4')).toBe(true)
    vi.advanceTimersByTime(61_000)
    expect(isLimited('1.2.3.4')).toBe(false)
  })

  it('räumt abgelaufene Einträge auf (kein unbegrenztes Wachstum)', () => {
    vi.useFakeTimers()
    const isLimited = createRateLimiter(1, 1_000)
    for (let i = 0; i < 1001; i++) isLimited(`ip-${i}`)
    vi.advanceTimersByTime(2_000)
    // Triggers the prune path (map.size > 1000) without throwing
    expect(isLimited('fresh-ip')).toBe(false)
  })
})

describe('getClientIp', () => {
  const reqWith = (headers: Record<string, string>) => ({
    headers: { get: (name: string) => headers[name.toLowerCase()] ?? null },
  })

  it('nimmt die erste IP aus x-forwarded-for', () => {
    expect(getClientIp(reqWith({ 'x-forwarded-for': '9.9.9.9, 10.0.0.1' }))).toBe('9.9.9.9')
  })

  it('fällt auf x-real-ip zurück', () => {
    expect(getClientIp(reqWith({ 'x-real-ip': '8.8.8.8' }))).toBe('8.8.8.8')
  })

  it('liefert unknown ohne Header', () => {
    expect(getClientIp(reqWith({}))).toBe('unknown')
  })
})

describe('isValidEmail', () => {
  it('akzeptiert gültige Adressen', () => {
    expect(isValidEmail('lehrer@schule.at')).toBe(true)
    expect(isValidEmail('a.b+c@sub.domain.eu')).toBe(true)
  })

  it('lehnt ungültige Werte ab', () => {
    expect(isValidEmail('')).toBe(false)
    expect(isValidEmail('kein-at-zeichen')).toBe(false)
    expect(isValidEmail('zwei @leerzeichen.at')).toBe(false)
    expect(isValidEmail('ohne@tld')).toBe(false)
    expect(isValidEmail(42)).toBe(false)
    expect(isValidEmail(null)).toBe(false)
    expect(isValidEmail('x@y.z' + 'a'.repeat(200))).toBe(false)
  })
})

describe('escapeHtml', () => {
  it('escapt HTML-Sonderzeichen', () => {
    expect(escapeHtml('<script>alert("x") & mehr</script>')).toBe(
      '&lt;script&gt;alert(&quot;x&quot;) &amp; mehr&lt;/script&gt;'
    )
  })

  it('lässt normalen Text unverändert', () => {
    expect(escapeHtml('Grüße aus Wien')).toBe('Grüße aus Wien')
  })
})
