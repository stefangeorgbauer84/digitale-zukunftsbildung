import { ImageResponse } from 'next/og'

export const OG_SIZE = { width: 1200, height: 630 }
export const OG_CONTENT_TYPE = 'image/png'

export function makeOgImage(
  headline: string,
  sub: string,
  badge?: string,
): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          padding: '72px 80px',
          background: 'linear-gradient(135deg, #1a1040 0%, #2d1b69 55%, #1a5c4e 100%)',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Orb top-right */}
        <div style={{ position: 'absolute', top: -80, right: -80, width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle, rgba(155,126,212,0.3) 0%, transparent 70%)' }} />
        {/* Orb bottom-left */}
        <div style={{ position: 'absolute', bottom: -60, left: -60, width: 360, height: 360, borderRadius: '50%', background: 'radial-gradient(circle, rgba(42,138,118,0.25) 0%, transparent 70%)' }} />

        {/* Badge */}
        <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 999, padding: '8px 20px', marginBottom: 24, color: 'rgba(255,255,255,0.75)', fontSize: 14, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          {badge ?? 'Skills-UP! · Finanzbildung Österreich'}
        </div>

        {/* Headline */}
        <div style={{ fontSize: headline.length > 40 ? 52 : 64, fontWeight: 800, color: '#ffffff', lineHeight: 1.1, marginBottom: 20, maxWidth: 900 }}>
          {headline}
        </div>

        {/* Sub */}
        <div style={{ fontSize: 24, color: 'rgba(255,255,255,0.6)', marginBottom: 44, maxWidth: 750, lineHeight: 1.4 }}>
          {sub}
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)', borderRadius: 12, padding: '10px 24px', color: '#fff', fontSize: 18, fontWeight: 700 }}>
            Skills-UP!
          </div>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 16 }}>
            digitale-zukunftsbildung.eu
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE },
  )
}
