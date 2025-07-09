import Link from 'next/link'
import Image from 'next/image'
import { Dictionary, Locale } from '@/lib/get-dictionary'

interface FooterProps {
  dict: Dictionary
  lang: Locale
}

export function Footer({ dict, lang }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-noveo-blue text-white">
      <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Logo & Mission */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src="/images/logos/logo-noveo-white.png"
                alt="Noveo Logistics"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-noveo-teal text-sm mb-4">
              {dict.footer.tagline}
            </p>
            <p className="text-gray-300 text-sm">
              {dict.hero.description}
            </p>
          </div>

          {/* Column 2: Site Map */}
          <div>
            <h4 className="font-semibold mb-4">{dict.footer.sitemap}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${lang}`} className="text-gray-300 hover:text-white transition-colors">
                  {dict.header.nav.home}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/a-propos`} className="text-gray-300 hover:text-white transition-colors">
                  {dict.header.nav.about}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/solutions`} className="text-gray-300 hover:text-white transition-colors">
                  {dict.header.nav.solutions}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/industries`} className="text-gray-300 hover:text-white transition-colors">
                  {dict.header.nav.industries}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/blog`} className="text-gray-300 hover:text-white transition-colors">
                  {dict.header.nav.blog}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/contact`} className="text-gray-300 hover:text-white transition-colors">
                  {dict.header.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Office Locations */}
          <div>
            <h4 className="font-semibold mb-4">{dict.footer.contact}</h4>
            <div className="space-y-4 text-sm">
              <div>
                <h5 className="font-medium text-noveo-teal">{dict.contact.offices.paris}</h5>
                <p className="text-gray-300">
                  123 Avenue des Champs-Élysées<br />
                  75008 Paris, France<br />
                  +33 1 23 45 67 89
                </p>
              </div>
              <div>
                <h5 className="font-medium text-noveo-teal">{dict.contact.offices.hongkong}</h5>
                <p className="text-gray-300">
                  Central Plaza<br />
                  Hong Kong<br />
                  +852 1234 5678
                </p>
              </div>
              <div>
                <h5 className="font-medium text-noveo-teal">{dict.contact.offices.guangzhou}</h5>
                <p className="text-gray-300">
                  Guangzhou International Finance Center<br />
                  Guangzhou, China<br />
                  +86 20 1234 5678
                </p>
              </div>
            </div>
          </div>

          {/* Column 4: Legal & Social */}
          <div>
            <h4 className="font-semibold mb-4">Liens utiles</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${lang}/mentions-legales`} className="text-gray-300 hover:text-white transition-colors">
                  {dict.footer.legal}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/cgv`} className="text-gray-300 hover:text-white transition-colors">
                  {dict.footer.cgv}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/politique-confidentialite`} className="text-gray-300 hover:text-white transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Certifications Section */}
        <div className="border-t border-gray-700 py-8">
          <div className="text-center mb-6">
            <h4 className="font-semibold mb-4 text-noveo-teal">Nos certifications</h4>
            <div className="flex justify-center items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Image
                  src="/images/certifications/oea-logo.svg"
                  alt="OEA Certification"
                  width={60}
                  height={40}
                  className="h-8 w-auto"
                />
                <span className="text-sm text-gray-300">OEA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Image
                  src="/images/certifications/iata-logo.svg"
                  alt="IATA CASS"
                  width={60}
                  height={40}
                  className="h-8 w-auto"
                />
                <span className="text-sm text-gray-300">IATA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Image
                  src="/images/certifications/rde-logo.svg"
                  alt="RDE Certification"
                  width={60}
                  height={40}
                  className="h-8 w-auto"
                />
                <span className="text-sm text-gray-300">RDE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-400">
          {dict.footer.copyright.replace('2025', currentYear.toString())}
        </div>
      </div>
    </footer>
  )
} 