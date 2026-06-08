'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const links = [
  { href: '/#angebote', label: 'Programm' },
  { href: '/schulen', label: 'Für Schulen' },
  { href: '/#unternehmen', label: 'Für Unternehmen' },
  { href: '/#plattform', label: "So funktioniert's" },
  { href: '/ueber-uns', label: 'Über uns' },
]

export default function SiteNav({ dark = false }: { dark?: boolean }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Focus trap for mobile menu
  useEffect(() => {
    if (!open) return
    const focusable = menuRef.current?.querySelectorAll<HTMLElement>(
      'a, button, [tabindex]:not([tabindex="-1"])'
    )
    focusable?.[0]?.focus()
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setOpen(false); return }
      if (e.key !== 'Tab' || !focusable?.length) return
      const first = focusable[0], last = focusable[focusable.length - 1]
      if (e.shiftKey ? document.activeElement === first : document.activeElement === last) {
        e.preventDefault()
        ;(e.shiftKey ? last : first).focus()
      }
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [open])

  const solid = !dark || scrolled

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image
            src="/fotos/Logo.png"
            alt="Skills-UP! Logo"
            width={36}
            height={36}
            className="rounded-xl"
          />
          <div className="leading-tight">
            <p className={`font-heading font-800 text-sm leading-none ${solid ? 'text-primary-dark' : 'text-white'}`}>
              Skills-UP!
            </p>
            <p className={`font-body text-xs leading-none mt-0.5 ${solid ? 'text-text-muted' : 'text-white/60'}`}>
              Digitale Zukunftsbildung
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Hauptnavigation">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-4 py-2 rounded-xl text-sm font-body font-600 transition-colors ${
                solid
                  ? 'text-text-secondary hover:text-primary-dark hover:bg-primary-50'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="/#kontakt"
            className={`ml-2 px-5 py-2.5 rounded-xl text-sm font-body font-700 transition-all active:scale-95 ${
              solid
                ? 'bg-primary-dark text-white hover:bg-primary-medium'
                : 'glass text-white border border-white/25 hover:bg-white/15'
            }`}
          >
            Kontakt
          </a>
        </nav>

        <button
          className={`md:hidden p-3 rounded-xl transition-colors ${solid ? 'text-text-secondary hover:bg-primary-50' : 'text-white hover:bg-white/10'}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            {open ? (
              <><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></>
            ) : (
              <><line x1="3" y1="8" x2="21" y2="8" /><line x1="3" y1="16" x2="21" y2="16" /></>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className="md:hidden bg-white border-t border-gray-200 px-4 pt-4 pb-4 shadow-lg"
          role="dialog"
          aria-label="Navigation"
          aria-modal="true"
        >
          <nav aria-label="Mobile Navigation">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm font-body font-600 text-text-secondary hover:text-primary-dark border-b border-gray-100 last:border-0"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="/#kontakt"
              onClick={() => setOpen(false)}
              className="mt-3 block text-center bg-primary-dark text-white px-5 py-3 rounded-xl text-sm font-body font-700"
            >
              Kontakt aufnehmen
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
