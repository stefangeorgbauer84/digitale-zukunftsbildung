import { describe, expect, it } from 'vitest'
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import sitemap from '../sitemap'

// Der Wirkungsbericht ist seit 10.11.2026 öffentlich (vorher Basic Auth über src/middleware.ts).
describe('Wirkungsbericht öffentlich', () => {
  it('steht in der Sitemap', () => {
    expect(sitemap().map((e) => e.url)).toContain('https://www.digitale-zukunftsbildung.eu/wirkungsmessung')
  })

  it('hat keinen Passwortschutz mehr', () => {
    expect(existsSync(join(__dirname, '..', '..', 'middleware.ts'))).toBe(false)
  })
})
