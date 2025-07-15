'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* DSV x Schenker Banner */}
      <div className="bg-blue-900 text-white text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center">
          <span className="mr-2">📢</span>
          <span className="font-medium">DSV x Schenker</span>
          <span className="ml-2">DSV and Schenker have joined forces, forming a world-leading player in transport and logistics.</span>
          <Link href="#" className="ml-2 underline hover:no-underline">
            Click here to read more
          </Link>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div className="text-2xl font-bold text-blue-600">DSV</div>
                <div className="text-sm text-gray-600 hidden md:block">
                  Global Transport and Logistics
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 py-2">
                  <span>Why DSV</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Innovation</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Solid and reliable partner</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Connectivity</Link>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 py-2">
                  <span>Our solutions</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Industries</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Modes of transport</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Contract logistics</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Lead logistics</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Decarbonizing Logistics</Link>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 py-2">
                  <span>Insights</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Expert opinions</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Supply chain case studies</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Reports</Link>
                  </div>
                </div>
              </div>

              <Link href="#" className="text-gray-700 hover:text-blue-600">Sustainability</Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600">Careers</Link>

              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 py-2">
                  <span>About DSV</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Winning As One</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Company structure</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Management</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Purpose and strategy</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Values</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Press</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Investor</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Data privacy</Link>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 py-2">
                  <span>Support</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Find your local DSV office</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Self services</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">FAQ</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Glossary</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Help and contact</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Quote request</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Digital solutions</Link>
                  </div>
                </div>
              </div>
            </nav>

            {/* Right side controls */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <button className="p-2 text-gray-600 hover:text-blue-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Country/Language selector */}
              <div className="hidden lg:flex items-center space-x-2 text-sm">
                <span>US / EN</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>

              {/* MyDSV */}
              <div className="relative group hidden lg:block">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 py-2">
                  <span>myDSV</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Login</Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign up</Link>
                  </div>
                </div>
              </div>

              {/* Mobile menu button */}
              <button
                className="lg:hidden p-2 text-gray-600 hover:text-blue-600"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <div className="space-y-4">
                <Link href="#" className="block text-gray-700 hover:text-blue-600">Why DSV</Link>
                <Link href="#" className="block text-gray-700 hover:text-blue-600">Our solutions</Link>
                <Link href="#" className="block text-gray-700 hover:text-blue-600">Insights</Link>
                <Link href="#" className="block text-gray-700 hover:text-blue-600">Sustainability</Link>
                <Link href="#" className="block text-gray-700 hover:text-blue-600">Careers</Link>
                <Link href="#" className="block text-gray-700 hover:text-blue-600">About DSV</Link>
                <Link href="#" className="block text-gray-700 hover:text-blue-600">Support</Link>
                <div className="pt-4 border-t">
                  <Link href="#" className="block text-gray-700 hover:text-blue-600">myDSV Login</Link>
                  <Link href="#" className="block text-gray-700 hover:text-blue-600">Sign up</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
} 