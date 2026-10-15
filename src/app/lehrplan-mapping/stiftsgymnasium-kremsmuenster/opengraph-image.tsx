export const runtime = 'edge'
export { OG_SIZE as size, OG_CONTENT_TYPE as contentType } from '@/lib/og-image'
import { makeOgImage } from '@/lib/og-image'

export default function Image() {
  return makeOgImage(
    'Stiftsgymnasium Kremsmünster',
    'Skills-UP! im AHS-Lehrplan: Fach für Fach, Klasse für Klasse, abgeglichen mit der Stundentafel 2026/27.',
    'Lehrplanmapping',
  )
}
