import { describe, it, expect } from 'vitest'
import { buildContentSecurityPolicy, VERCEL_ANALYTICS_DEV_SCRIPT_HOST } from './csp'

/** Alle Host-Quellen einer Policy — Keywords ('self') und Schema-Quellen (data:) fallen raus. */
function hostSources(policy: string): string[] {
  return policy
    .split(';')
    .flatMap((directive) => directive.trim().split(/\s+/).slice(1))
    .filter((source) => source.length > 0)
    .filter((source) => !source.startsWith("'")) // 'self', 'unsafe-inline', 'nonce-…'
    .filter((source) => !/^[a-z][a-z0-9+.-]*:$/i.test(source)) // data:, blob:, https:
    .filter((source) => source !== 'upgrade-insecure-requests')
}

/**
 * Der Stern ist in einer CSP-Quelle nur als ganzer Host ('*') oder als komplettes
 * linkes Label ('*.host.tld') erlaubt. Steht er mitten im Label ('o*.host.tld'),
 * verwirft der Browser die GANZE Quelle — still, die Direktive bleibt gültig.
 */
function hasInvalidWildcard(source: string): boolean {
  const host = source
    .replace(/^[a-z][a-z0-9+.-]*:\/\//i, '') // Schema weg
    .split('/')[0] // Pfad weg
    .split(':')[0] // Port weg
  if (!host.includes('*')) return false
  return host !== '*' && !/^\*\.[^*]+$/.test(host)
}

describe('hasInvalidWildcard (Wächter über den Wächter)', () => {
  it.each(['https://o*.ingest.sentry.io', 'https://host.*.tld', 'https://*.*.tld', 'https://va.*'])(
    'erkennt %s als ungültig',
    (source) => {
      expect(hasInvalidWildcard(source)).toBe(true)
    },
  )

  it.each(['https://*.sentry.io', '*', 'https://va.vercel-scripts.com', 'data:', "'self'"])(
    'lässt %s durch',
    (source) => {
      expect(hasInvalidWildcard(source)).toBe(false)
    },
  )
})

describe('buildContentSecurityPolicy', () => {
  const environments = ['development', 'production', 'test', undefined]

  it.each(environments)('enthält in NODE_ENV=%s keine ungültige Wildcard', (nodeEnv) => {
    const invalid = hostSources(buildContentSecurityPolicy(nodeEnv)).filter(hasInvalidWildcard)
    expect(invalid).toEqual([])
  })

  it('erlaubt den Vercel-Analytics-Debug-Host nur in development', () => {
    // In Produktion proxyt Vercel das Skript unter /_vercel/insights/script.js ('self').
    expect(buildContentSecurityPolicy('development')).toContain(VERCEL_ANALYTICS_DEV_SCRIPT_HOST)
    expect(buildContentSecurityPolicy('production')).not.toContain(VERCEL_ANALYTICS_DEV_SCRIPT_HOST)
  })

  it('erlaubt unsafe-eval nur in development', () => {
    expect(buildContentSecurityPolicy('development')).toContain("'unsafe-eval'")
    expect(buildContentSecurityPolicy('production')).not.toContain("'unsafe-eval'")
  })

  it('nimmt Dev-Lockerungen bei unbekanntem NODE_ENV nicht mit', () => {
    // Positiv-Gate: ein `!== 'production'` würde hier still lockern.
    for (const nodeEnv of ['test', 'staging', undefined]) {
      const policy = buildContentSecurityPolicy(nodeEnv)
      expect(policy).not.toContain("'unsafe-eval'")
      expect(policy).not.toContain(VERCEL_ANALYTICS_DEV_SCRIPT_HOST)
    }
  })

  it('setzt upgrade-insecure-requests nur in production', () => {
    expect(buildContentSecurityPolicy('production')).toContain('upgrade-insecure-requests')
    expect(buildContentSecurityPolicy('development')).not.toContain('upgrade-insecure-requests')
  })

  it('hält den Produktions-Header unverändert gegenüber dem Stand vor dem Analytics-Fix', () => {
    expect(buildContentSecurityPolicy('production')).toBe(
      [
        "default-src 'self'",
        "script-src 'self' 'unsafe-inline' https://browser.sentry-cdn.com https://js.sentry-cdn.com",
        "style-src 'self' 'unsafe-inline'",
        "font-src 'self'",
        "img-src 'self' data: https://img.youtube.com https://vz-b03180be-aa5.b-cdn.net",
        "frame-src https://www.youtube-nocookie.com https://iframe.mediadelivery.net",
        "connect-src 'self' https://*.sentry.io",
        "object-src 'none'",
        "base-uri 'self'",
        "form-action 'self'",
        "frame-ancestors 'self'",
        'upgrade-insecure-requests',
      ].join('; '),
    )
  })
})
