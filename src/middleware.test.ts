import { afterEach, describe, expect, it } from 'vitest'
import { NextRequest } from 'next/server'
import { config, middleware } from './middleware'

const URL = 'https://www.digitale-zukunftsbildung.eu/wirkungsmessung'

function anfrage(auth?: string) {
  return new NextRequest(URL, { headers: auth ? { authorization: auth } : {} })
}

const basic = (pw: string) => `Basic ${btoa(`egal:${pw}`)}`

describe('Passwortschutz Wirkungsmessung', () => {
  afterEach(() => {
    delete process.env.WIRKUNG_PASSWORT
  })

  it('bleibt zu, wenn die Variable fehlt (fail closed)', () => {
    expect(middleware(anfrage(basic('irgendwas'))).status).toBe(503)
  })

  it('verlangt ein Passwort', () => {
    process.env.WIRKUNG_PASSWORT = 'test-pw'
    const res = middleware(anfrage())
    expect(res.status).toBe(401)
    expect(res.headers.get('www-authenticate')).toContain('Basic')
  })

  it('lehnt ein falsches Passwort ab', () => {
    process.env.WIRKUNG_PASSWORT = 'test-pw'
    expect(middleware(anfrage(basic('falsch'))).status).toBe(401)
  })

  it('lässt mit richtigem Passwort durch, ohne Indexierung', () => {
    process.env.WIRKUNG_PASSWORT = 'test-pw'
    const res = middleware(anfrage(basic('test-pw')))
    expect(res.status).toBe(200)
    expect(res.headers.get('x-robots-tag')).toContain('noindex')
  })

  it('schützt nur den Wirkungsbereich', () => {
    expect(config.matcher).toEqual(['/wirkungsmessung', '/wirkungsmessung/:path*'])
  })
})
