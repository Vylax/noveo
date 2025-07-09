'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Dictionary, Locale } from '@/lib/get-dictionary'
import { LanguageSwitcher } from './LanguageSwitcher'
import { Button } from '@/components/ui/button'
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger 
} from '@/components/ui/navigation-menu'

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
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={`/${lang}`} className="flex items-center">
            <Image
              src="/images/logos/logo_long_for_black_bg.png"
              alt="Noveo Logistics"
              width={120}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-ovrsea-neutral hover:text-ovrsea-navy focus:bg-ovrsea-neutral focus:text-ovrsea-navy focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-ovrsea-neutral/50 data-[state=open]:bg-ovrsea-neutral/50"
                      >
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Language Switcher & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher currentLang={lang} />
            <Button asChild variant="noveo" size="default">
              <Link href={`/${lang}/contact`}>
                {dict.header.cta}
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-ovrsea-navy hover:bg-ovrsea-neutral rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center justify-between px-3 py-2 space-x-4">
                <LanguageSwitcher currentLang={lang} />
                <Button asChild variant="noveo" size="sm">
                  <Link
                    href={`/${lang}/contact`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {dict.header.cta}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
} 