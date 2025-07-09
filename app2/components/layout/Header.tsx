'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Dictionary, Locale } from '@/lib/get-dictionary'
import { LanguageSwitcher } from './LanguageSwitcher'

interface HeaderProps {
  dict: Dictionary
  lang: Locale
}

export function Header({ dict, lang }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigationItems = [
    { href: `/${lang}`, label: dict.header.nav.home },
    { href: `/${lang}/a-propos`, label: dict.header.nav.about },
    { href: `/${lang}/solutions`, label: dict.header.nav.solutions },
    { href: `/${lang}/industries`, label: dict.header.nav.industries },
    { href: `/${lang}/blog`, label: dict.header.nav.blog },
    { href: `/${lang}/contact`, label: dict.header.nav.contact },
  ]

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-max mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center">
            <Image
              src="/images/logos/logo-noveo.png"
              alt="Noveo Logistics"
              width={120}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Language Switcher & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher currentLang={lang} />
            <Link
              href={`/${lang}/contact`}
              className="btn-primary"
            >
              {dict.header.cta}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-light-gray">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-dark-gray hover:text-noveo-blue"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center justify-between px-3 py-2 space-x-4">
                <LanguageSwitcher currentLang={lang} />
                <Link
                  href={`/${lang}/contact`}
                  className="btn-primary text-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {dict.header.cta}
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
} 