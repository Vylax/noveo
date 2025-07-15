import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Online tools */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Online tools</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Book</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Get a Quote</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Track & Trace</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Self services</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Subscribe to our newsletter</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Legal notice</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Data privacy</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Cookies</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Terms and conditions</Link></li>
            </ul>
            <div className="mt-6">
              <div className="flex items-center space-x-2 text-sm">
                <span>US / EN</span>
                <span>Change</span>
              </div>
            </div>
          </div>

          {/* Our solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our solutions</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Industry solutions</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Air Freight</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Sea Freight</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Road Freight</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Project transport</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Contract Logistics</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">All solutions</Link></li>
            </ul>
          </div>

          {/* DSV */}
          <div>
            <h3 className="text-lg font-semibold mb-4">DSV</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Contact us</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">About DSV</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Investor</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Press</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Sustainability</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-white transition-colors">Support</Link></li>
            </ul>
          </div>
        </div>

        {/* Social media and additional info */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  LinkedIn
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Facebook
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  X
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Instagram
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  YouTube
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Newsletter
                </Link>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                  Social Media House Rules
                </Link>
              </div>
            </div>

            <div className="mt-6 lg:mt-0">
              <h4 className="text-lg font-semibold mb-4">Stock quote prices</h4>
              <div className="text-gray-300">
                Retrieving Stock Quotes...
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="max-w-md">
            <h4 className="text-lg font-semibold mb-4">Sign up for our e-newsletter!</h4>
            <p className="text-gray-300 mb-4">Stay up-to-date with our latest news & info.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 text-gray-900 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-r-md transition-colors">
                Sign up today
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">© DSV - All rights reserved</p>
        </div>
      </div>
    </footer>
  );
} 