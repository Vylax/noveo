'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Globe, User, X, Menu, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBannerOpen, setIsBannerOpen] = useState(true);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  const navLinks = [
    { 
      name: 'Why DSV', 
      dropdown: true,
      items: [
        { name: 'About DSV', href: '#' },
        { name: 'Our history', href: '#' },
        { name: 'Leadership team', href: '#' },
        { name: 'ESG & sustainability', href: '#' },
        { name: 'Innovation & technology', href: '#' },
        { name: 'Awards & recognition', href: '#' },
      ]
    },
    { 
      name: 'Our solutions', 
      dropdown: true,
      items: [
        { name: 'Air transport', href: '#' },
        { name: 'Sea transport', href: '#' },
        { name: 'Road transport', href: '#' },
        { name: 'Rail transport', href: '#' },
        { name: 'Contract logistics', href: '#' },
        { name: 'eCommerce solutions', href: '#' },
        { name: 'Healthcare & life sciences', href: '#' },
        { name: 'Fashion & lifestyle', href: '#' },
      ]
    },
    { name: 'Insights', dropdown: false },
    { name: 'Sustainability', dropdown: false },
    { name: 'Careers', dropdown: false },
    { name: 'About DSV', dropdown: false },
    { name: 'Support', dropdown: false },
  ];

  const getDropdownItems = (navName: string) => {
    const navItem = navLinks.find(link => link.name === navName);
    return navItem?.items || [];
  };

  return (
    <>
      {/* DSV x Schenker Banner */}
      {isBannerOpen && (
        <div className="bg-dsv-blue-light text-dsv-blue-dark text-center py-3 px-4 text-sm relative">
          <div className="max-w-screen-xl mx-auto flex items-center justify-center">
            <span className="font-bold mr-2">DSV x Schenker</span>
            <span>DSV and Schenker have joined forces, forming a world-leading player in transport and logistics.</span>
            <Link href="#" className="underline hover:text-dsv-blue ml-2 font-medium">
              Click here to read more
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
        <header className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Link href="/" aria-label="DSV Home">
                  <svg
                    className="h-8 w-auto"
                    viewBox="0 0 153 33"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M33.815.35h12.87v31.91h-12.87V.35Z" fill="currentColor" className="text-dsv-blue"></path>
                    <path d="M51.845.35h17.9c10.32 0 15.63 5.43 15.63 15.42 0 10.2-5.7 15.84-15.63 15.84h-17.9V.35Zm12.87 26.13c3.54 0 4.95-2.58 4.95-6.75s-1.4-6.81-4.95-6.81h-8.1v13.56h8.1Z" fill="currentColor" className="text-dsv-blue"></path>
                    <path d="M101.445 15.11c0-8.85-4.47-14.76-12.39-14.76-8.67 0-12.63 6.09-12.63 14.28 0 8.79 4.29 14.58 12.66 14.58 4.62 0 8.4-1.83 10.38-5.31l-5.1-2.85c-.99 2.1-2.46 3.03-4.95 3.03-3.21 0-4.59-1.83-5.34-4.2h15.39v-4.83Zm-15.21-3.12c.33-2.67 1.68-4.5 4.05-4.5s3.51 1.95 3.84 4.5h-7.89Z" fill="currentColor" className="text-dsv-blue"></path>
                    <path d="M125.135 32.26 112.985.35h5.88l8.16 22.29 8.13-22.29h5.88l-12.15 31.91-4.65-13.62-4.62 13.62Z" fill="currentColor" className="text-dsv-blue"></path>
                    <path d="M152.015 20.96V.35h4.77v31.91h-4.98l-11.85-15.3V.35h-4.77v31.91h4.29l12.54-16.29Z" fill="currentColor" className="text-dsv-blue"></path>
                  </svg>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-8">
                {navLinks.map(link => (
                  <div 
                    key={link.name} 
                    className="relative"
                    onMouseEnter={() => link.dropdown && setHoveredNav(link.name)}
                  >
                    <button className="flex items-center text-sm font-medium text-gray-700 hover:text-dsv-blue py-2 transition-colors duration-200">
                      <span>{link.name}</span>
                      {link.dropdown && <ChevronDown className="ml-1 h-4 w-4 text-gray-500" />}
                    </button>
                  </div>
                ))}
              </nav>

              {/* Right side controls */}
              <div className="flex items-center space-x-6">
                <button className="flex flex-col items-center text-gray-600 hover:text-dsv-blue">
                  <Search size={20} />
                  <span className="text-xs mt-1">Search</span>
                </button>
                <button className="hidden sm:flex flex-col items-center text-gray-600 hover:text-dsv-blue">
                  <Globe size={20} />
                  <span className="text-xs mt-1">Global</span>
                </button>
                <button className="hidden sm:flex flex-col items-center text-gray-600 hover:text-dsv-blue">
                  <User size={20} />
                  <span className="text-xs mt-1">myDSV</span>
                </button>
                
                {/* Mobile menu button */}
                <button
                  className="lg:hidden p-2 text-gray-600 hover:text-dsv-blue"
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
                     <Link key={link.name} href="#" className="text-gray-700 hover:text-dsv-blue">{link.name}</Link>
                  ))}
                </nav>
              </div>
            )}
          </div>
        </header>

        {/* Dropdown Navigation Bar */}
        <div 
          className={`overflow-hidden transition-all duration-300 ease-in-out bg-gray-50 border-t border-gray-200 ${
            hoveredNav ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          {hoveredNav && (
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
                {getDropdownItems(hoveredNav).map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-dsv-blue font-medium transition-colors duration-200 whitespace-nowrap"
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