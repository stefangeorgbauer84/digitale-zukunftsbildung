// In-memory rate limiter shared by the API routes: works across warm Lambda
// instances; for higher scale replace with Upstash Redis.
type RateEntry = { count: number; resetAt: number }

export function createRateLimiter(limit: number, windowMs: number) {
  const map = new Map<string, RateEntry>()

  return function isRateLimited(ip: string): boolean {
    const now = Date.now()

    // Prune expired entries so the map cannot grow unbounded on warm instances
    if (map.size > 1000) {
      for (const [key, entry] of map) {
        if (now > entry.resetAt) map.delete(key)
      }
    }

    const entry = map.get(ip)
    if (!entry || now > entry.resetAt) {
      map.set(ip, { count: 1, resetAt: now + windowMs })
      return false
    }
    if (entry.count >= limit) return true
    entry.count++
    return false
  }
}

type HeaderCarrier = { headers: { get(name: string): string | null } }

export function getClientIp(req: HeaderCarrier): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    req.headers.get('x-real-ip') ??
    'unknown'
  )
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function isValidEmail(email: unknown): email is string {
  return typeof email === 'string' && email.length <= 200 && EMAIL_REGEX.test(email)
}

export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
