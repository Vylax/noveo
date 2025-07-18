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
    <footer className="bg-white text-noveo-blue border-t border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1: Online tools */}
          <div className="space-y-4">
            <h3 className="font-semibold text-noveo-blue">Online tools</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-noveo-blue transition-colors">Book</Link></li>
              <li><Link href="#" className="hover:text-noveo-blue transition-colors">Get a Quote</Link></li>
              <li><Link href="#" className="hover:text-noveo-blue transition-colors">Track & Trace</Link></li>
              <li><Link href="#" className="hover:text-noveo-blue transition-colors">Self-services</Link></li>
            </ul>
          </div>

          {/* Column 2: Our solutions */}
          <div className="space-y-4">
            <h3 className="font-semibold text-noveo-blue">Our solutions</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-noveo-blue transition-colors">Industry solutions</Link></li>
              <li><Link href="#" className="hover:text-noveo-blue transition-colors">Air Freight</Link></li>
              <li><Link href="#" className="hover:text-noveo-blue transition-colors">Sea Freight</Link></li>
              <li><Link href="#" className="hover:text-noveo-blue transition-colors">Road Freight</Link></li>
              <li><Link href="#" className="hover:text-noveo-blue transition-colors">All solutions</Link></li>
            </ul>
          </div>

          {/* Column 3: Noveo */}
          <div className="space-y-4">
            <h3 className="font-semibold text-noveo-blue">Noveo</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-noveo-blue transition-colors">About Noveo</Link></li>
              <li><Link href="#" className="hover:text-noveo-blue transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-noveo-blue transition-colors">Investor</Link></li>
              <li><Link href="#" className="hover:text-noveo-blue transition-colors">Press</Link></li>
              <li><Link href="#" className="hover:text-noveo-blue transition-colors">Sustainability</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Support */}
          <div className="space-y-4">
            <h3 className="font-semibold text-noveo-blue">Contact & Support</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="#" className="hover:text-noveo-blue transition-colors">Contact us</Link></li>
              <li><Link href="#" className="hover:text-noveo-blue transition-colors">Support</Link></li>
              <li><Link href="#" className="hover:text-noveo-blue transition-colors">Subscribe to newsletter</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.href} className="text-gray-600 hover:text-noveo-blue transition-colors">
                {link.icon}
              </a>
            ))}
          </div>
          <div className="text-sm text-gray-600 mt-8 md:mt-0">
            <Link href="#" className="hover:text-noveo-blue transition-colors">Legal notice</Link> | <Link href="#" className="hover:text-noveo-blue transition-colors">Data privacy</Link> | <Link href="#" className="hover:text-noveo-blue transition-colors">Cookies</Link> | <Link href="#" className="hover:text-noveo-blue transition-colors">Terms and conditions</Link>
          </div>
        </div>
        
        <div className="mt-8 text-center text-xs text-gray-500">
          <p>© Noveo Logistics - All rights reserved</p>
        </div>
      </div>
    </footer>
  );
} 