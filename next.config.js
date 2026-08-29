const { withSentryConfig } = require('@sentry/nextjs')

/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  {
    // Google Fonts are self-hosted via next/font (no CDN request at runtime).
    // 'unsafe-inline' for scripts/styles is required by Next.js hydration.
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      process.env.NODE_ENV === 'development'
        ? "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://browser.sentry-cdn.com https://js.sentry-cdn.com"
        : "script-src 'self' 'unsafe-inline' https://browser.sentry-cdn.com https://js.sentry-cdn.com",
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
      ...(process.env.NODE_ENV === 'production' ? ['upgrade-insecure-requests'] : []),
    ].join('; '),
  },
]

const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
  async redirects() {
    return [
      {
        // Vercel-Deployment-URL ist sonst als Duplikat der Domain indexierbar
        source: '/:path*',
        has: [{ type: 'host', value: 'digitale-zukunftsbildung.vercel.app' }],
        destination: 'https://www.digitale-zukunftsbildung.eu/:path*',
        permanent: true,
      },
    ]
  },
}

module.exports = withSentryConfig(nextConfig, {
  org: 'sustainista-gmbh',
  project: 'digitale-zukunftsbildung',
  authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: true,
  widenClientFileUpload: true,
  hideSourceMaps: true,
})
