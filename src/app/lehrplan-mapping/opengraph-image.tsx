export const runtime = 'edge'
export { OG_SIZE as size, OG_CONTENT_TYPE as contentType } from '@/lib/og-image'
import { makeOgImage } from '@/lib/og-image'

export default function Image() {
  return makeOgImage(
    'Skills-UP! im Lehrplan verankern',
    'Welche Module passen zu welchem Lehrplan? Die vollständige Zuordnung für alle 7 Schultypen auf einen Blick.',
    'Lehrplan-Mapping 2025',
  )
}
