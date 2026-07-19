export const runtime = 'edge'
export { OG_SIZE as size, OG_CONTENT_TYPE as contentType } from '@/lib/og-image'
import { makeOgImage } from '@/lib/og-image'

export default function Image() {
  return makeOgImage(
    'Finanzbildung für jede Schulform',
    'Skills-UP! — passend für AHS, HAK, HTL, HLW, BAfEP, PTS und Berufsschulen. Jetzt Schultyp auswählen.',
    'Skills-UP! für Schulen',
  )
}
