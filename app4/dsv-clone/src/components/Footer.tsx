import React from 'react';
import Link from 'next/link';
import { Linkedin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { href: "#", icon: <Linkedin size={20} /> },
    { href: "#", icon: <Facebook size={20} /> },
    { href: "#", icon: <Twitter size={20} /> },
    { href: "#", icon: <Instagram size={20} /> },
    { href: "#", icon: <Youtube size={20} /> },
  ];

  return (
    <footer className="bg-dsv-blue-dark text-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: Online tools */}
          <div className="space-y-4">
            <h3 className="font-semibold">Online tools</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="#" className="hover:text-white">Book</Link></li>
              <li><Link href="#" className="hover:text-white">Get a Quote</Link></li>
              <li><Link href="#" className="hover:text-white">Track & Trace</Link></li>
              <li><Link href="#" className="hover:text-white">Self-services</Link></li>
            </ul>
          </div>

          {/* Column 2: Our solutions */}
          <div className="space-y-4">
            <h3 className="font-semibold">Our solutions</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="#" className="hover:text-white">Industry solutions</Link></li>
              <li><Link href="#" className="hover:text-white">Air Freight</Link></li>
              <li><Link href="#" className="hover:text-white">Sea Freight</Link></li>
              <li><Link href="#" className="hover:text-white">Road Freight</Link></li>
              <li><Link href="#" className="hover:text-white">All solutions</Link></li>
            </ul>
          </div>

          {/* Column 3: DSV */}
          <div className="space-y-4">
            <h3 className="font-semibold">DSV</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="#" className="hover:text-white">About DSV</Link></li>
              <li><Link href="#" className="hover:text-white">Careers</Link></li>
              <li><Link href="#" className="hover:text-white">Investor</Link></li>
              <li><Link href="#" className="hover:text-white">Press</Link></li>
              <li><Link href="#" className="hover:text-white">Sustainability</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Support */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact & Support</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="#" className="hover:text-white">Contact us</Link></li>
              <li><Link href="#" className="hover:text-white">Support</Link></li>
              <li><Link href="#" className="hover:text-white">Subscribe to newsletter</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} className="text-gray-400 hover:text-white">
                {link.icon}
              </a>
            ))}
          </div>
          <div className="text-sm text-gray-400 mt-8 md:mt-0">
            <Link href="#" className="hover:text-white">Legal notice</Link> | <Link href="#" className="hover:text-white">Data privacy</Link> | <Link href="#" className="hover:text-white">Cookies</Link> | <Link href="#" className="hover:text-white">Terms and conditions</Link>
          </div>
        </div>
        
        <div className="mt-8 text-center text-xs text-gray-500">
          <p>© DSV - All rights reserved</p>
        </div>
      </div>
    </footer>
  );
} 