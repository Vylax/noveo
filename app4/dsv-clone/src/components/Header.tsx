'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Globe, User, X, Menu, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useTranslation } from '@/contexts/TranslationContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBannerOpen, setIsBannerOpen] = useState(true);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const { t } = useTranslation();

  const navLinks = [
    { name: t('header.nav.home'), dropdown: false },
    { name: t('header.nav.aboutUs'), dropdown: false },
    { name: t('header.nav.solutions'), dropdown: false },
    { 
      name: t('header.nav.industries'), 
      dropdown: true,
      items: [
        { name: t('header.industriesDropdown.energy'), href: '#' },
        { name: t('header.industriesDropdown.dangerous'), href: '#' },
        { name: t('header.industriesDropdown.aeronautic'), href: '#' },
        { name: t('header.industriesDropdown.wines'), href: '#' },
        { name: t('header.industriesDropdown.automotive'), href: '#' },
        { name: t('header.industriesDropdown.ecommerce'), href: '#' },
        { name: t('header.industriesDropdown.medical'), href: '#' },
      ]
    },
    { name: t('header.nav.blog'), dropdown: false },
    { name: t('header.nav.contact'), dropdown: false },
  ];

  const getDropdownItems = (navName: string) => {
    const navItem = navLinks.find(link => link.name === navName);
    return navItem?.items || [];
  };

  return (
    <>
      {/* Noveo Banner */}
      {isBannerOpen && (
        <div className="bg-noveo-teal text-noveo-blue text-center py-3 px-4 text-sm fixed top-0 left-0 right-0 z-[60]">
          <div className="max-w-screen-xl mx-auto flex items-center justify-center">
            <span className="font-bold mr-2">{t('header.banner.company')}</span>
            <span>{t('header.banner.description')}</span>
            <Link href="#" className="underline hover:text-noveo-blue-dark ml-2 font-medium">
              {t('header.banner.learnMore')}
            </Link>
          </div>
          <button onClick={() => setIsBannerOpen(false)} className="absolute top-1/2 right-4 -translate-y-1/2">
            <X size={20} />
          </button>
        </div>
      )}

      {/* Main Header with Dropdown Container */}
      <div 
        className="relative"
        onMouseLeave={() => setHoveredNav(null)}
      >
        <header className={`bg-white shadow-md fixed left-0 right-0 z-50 transition-all duration-300 ${
          isBannerOpen ? 'top-[40px]' : 'top-0'
        }`}>
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link href="/" aria-label="Noveo Logistics Home">
                  <Image
                    src="/images/logo_long_for_white_bg.png"
                    alt="Noveo Logistics"
                    width={150}
                    height={40}
                    className="h-10 w-auto"
                  />
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-8">
                {navLinks.map(link => (
                  <div 
                    key={link.name} 
                    className="relative"
                    onMouseEnter={() => {
                      if (link.dropdown) {
                        setHoveredNav(link.name);
                      } else {
                        // Close dropdown when hovering over non-dropdown items
                        setHoveredNav(null);
                      }
                    }}
                  >
                    <button className="flex items-center text-sm font-medium text-gray-700 hover:text-noveo-blue py-2 transition-colors duration-200">
                      <span>{link.name}</span>
                      {link.dropdown && <ChevronDown className="ml-1 h-4 w-4 text-gray-500" />}
                    </button>
                  </div>
                ))}
              </nav>

              {/* Right side controls */}
              <div className="flex items-center space-x-6">
                <LanguageSwitcher />
                <button className="px-6 py-2 bg-noveo-blue text-white font-semibold hover:bg-noveo-blue-dark transition-colors duration-300 rounded">
                  {t('header.nav.requestStudy')}
                </button>
                
                {/* Mobile menu button */}
                <button
                  className="lg:hidden p-2 text-gray-600 hover:text-noveo-blue"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <Menu size={28} />
                </button>
              </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
              <div className="lg:hidden py-4 border-t">
                <nav className="flex flex-col space-y-4">
                  {navLinks.map(link => (
                     <Link key={link.name} href="#" className="text-gray-700 hover:text-noveo-blue">{link.name}</Link>
                  ))}
                  <button className="mt-4 px-6 py-2 bg-noveo-blue text-white font-semibold hover:bg-noveo-blue-dark transition-colors duration-300 rounded text-left">
                    {t('header.nav.requestStudy')}
                  </button>
                </nav>
              </div>
            )}
          </div>
        </header>

        {/* Dropdown Navigation Bar */}
        <div 
          className={`overflow-hidden transition-all duration-300 ease-in-out bg-gray-50 border-t border-gray-200 fixed left-0 right-0 z-40 ${
            isBannerOpen ? 'top-[120px]' : 'top-[80px]'
          } ${hoveredNav ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}
        >
          {hoveredNav && (
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
                {getDropdownItems(hoveredNav).map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-noveo-blue font-medium transition-colors duration-200 whitespace-nowrap"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
} 