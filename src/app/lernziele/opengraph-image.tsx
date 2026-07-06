export const runtime = 'edge'
export { OG_SIZE as size, OG_CONTENT_TYPE as contentType } from '@/lib/og-image'
import { makeOgImage } from '@/lib/og-image'

export default function Image() {
  return makeOgImage(
    'Alle Lernziele auf einen Blick',
    'Jedes Modul, jede Simulation, jedes Lernziel — das vollständige Verzeichnis von Skills-UP!.',
    'Lernziel-Verzeichnis',
  )
}
