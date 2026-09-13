// Single source of truth for the Content-Security-Policy.
// CommonJS, weil next.config.js die Datei direkt requiren muss (kein TS-Loader dort).
// Der Guard-Test daneben (csp.test.ts) haelt die Quellen-Syntax fest.

// @vercel/analytics und @vercel/speed-insights laden ihr Skript zur LAUFZEIT von
// zwei verschiedenen Orten (getScriptSrc() im jeweiligen Paket):
//   NODE_ENV=development|test → https://va.vercel-scripts.com/v1/[speed-insights/]script.debug.js
//   sonst                     → /_vercel/insights/script.js bzw. /_vercel/speed-insights/script.js
// In Produktion proxyt Vercels Edge das Skript unter der eigenen Domain; 'self' deckt es ab.
// Der externe Host gehoert deshalb ausschliesslich in den Dev-Zweig — die Produktions-CSP
// bleibt so eng wie vorher. Die Beacons (/_vercel/insights/view, /_vercel/speed-insights/vitals)
// sind ebenfalls same-origin und brauchen keinen eigenen connect-src-Eintrag.
const VERCEL_ANALYTICS_DEV_SCRIPT_HOST = 'https://va.vercel-scripts.com'

/**
 * @param {string | undefined} nodeEnv Wert von process.env.NODE_ENV
 * @returns {string} vollstaendiger CSP-Header-Wert
 */
function buildContentSecurityPolicy(nodeEnv) {
  // Positiv auf 'development' pruefen, nicht `!== 'production'`: sonst wuerde jeder
  // unbekannte NODE_ENV-Wert die Lockerungen still mitnehmen.
  const isDev = nodeEnv === 'development'

  const scriptSrc = [
    "script-src 'self'",
    "'unsafe-inline'",
    ...(isDev ? ["'unsafe-eval'", VERCEL_ANALYTICS_DEV_SCRIPT_HOST] : []),
    'https://browser.sentry-cdn.com',
    'https://js.sentry-cdn.com',
  ].join(' ')

  return [
    "default-src 'self'",
    scriptSrc,
    "style-src 'self' 'unsafe-inline'",
    "font-src 'self'",
    "img-src 'self' data: https://img.youtube.com https://vz-b03180be-aa5.b-cdn.net",
    "frame-src https://www.youtube-nocookie.com https://iframe.mediadelivery.net",
    // 'o*.ingest…' ist keine gültige CSP-Wildcard — Browser verwarf die ganze Quelle
    "connect-src 'self' https://*.sentry.io",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    // Modern replacement for X-Frame-Options (kept above for legacy browsers)
    "frame-ancestors 'self'",
    // Only in production: would rewrite http://localhost assets in dev
    ...(nodeEnv === 'production' ? ['upgrade-insecure-requests'] : []),
  ].join('; ')
}

module.exports = { buildContentSecurityPolicy, VERCEL_ANALYTICS_DEV_SCRIPT_HOST }
