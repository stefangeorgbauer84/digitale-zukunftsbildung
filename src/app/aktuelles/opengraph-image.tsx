export const runtime = 'edge'
export { OG_SIZE as size, OG_CONTENT_TYPE as contentType } from '@/lib/og-image'
import { makeOgImage } from '@/lib/og-image'

export default function Image() {
  return makeOgImage(
    'Aktuelles zur Finanzbildung',
    'Neuigkeiten, Praxistipps und Hintergründe rund um Finanzbildung an österreichischen Schulen.',
    'Skills-UP! Blog',
  )
}
