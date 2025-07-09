import Link from 'next/link'
import Image from 'next/image'
import { Dictionary, Locale } from '@/lib/get-dictionary'

interface FooterProps {
  dict: Dictionary
  lang: Locale
}

export function Footer({ dict, lang }: FooterProps) {
  return (
    <footer className="bg-ovrsea-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link href={`/${lang}`} className="flex items-center mb-4">
              <Image
                src="/images/logos/logo_long_for_black_bg.png"
                alt="Noveo Logistics"
                width={150}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-ovrsea-mint mb-4 max-w-md">
              {dict.footer.tagline}
            </p>
            <p className="text-ovrsea-mint mb-4 max-w-md">
              {dict.hero.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{dict.footer.sitemap}</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href={`/${lang}`}
                  className="text-ovrsea-mint hover:text-white transition-colors"
                >
                  {dict.header.nav.home}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${lang}/a-propos`}
                  className="text-ovrsea-mint hover:text-white transition-colors"
                >
                  {dict.header.nav.about}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${lang}/solutions`}
                  className="text-ovrsea-mint hover:text-white transition-colors"
                >
                  {dict.header.nav.solutions}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${lang}/industries`}
                  className="text-ovrsea-mint hover:text-white transition-colors"
                >
                  {dict.header.nav.industries}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${lang}/contact`}
                  className="text-ovrsea-mint hover:text-white transition-colors"
                >
                  {dict.header.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{dict.footer.contact}</h3>
            <div className="text-ovrsea-mint space-y-2">
              <div>
                <h4 className="font-medium text-white">Paris</h4>
                <p className="text-sm">
                  {dict.contact.offices.addresses.paris.street}<br />
                  {dict.contact.offices.addresses.paris.city}<br />
                  {dict.contact.offices.addresses.paris.phone}
                </p>
              </div>
              <div>
                <h4 className="font-medium text-white">Hong Kong</h4>
                <p className="text-sm">
                  {dict.contact.offices.addresses.hongkong.street}<br />
                  {dict.contact.offices.addresses.hongkong.city}<br />
                  {dict.contact.offices.addresses.hongkong.phone}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-ovrsea-mint/20 pt-8 mt-8 text-center text-ovrsea-mint">
          <p>{dict.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
} 