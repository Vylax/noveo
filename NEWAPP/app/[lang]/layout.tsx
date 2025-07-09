import { Inter, Poppins } from 'next/font/google'
import { getDictionary, type Locale } from '@/lib/get-dictionary'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { JsonLd } from '@/components/seo/JsonLd'
import { Metadata } from 'next'

// Configure fonts like CURRAPP
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang)
  
  return {
    metadataBase: new URL('https://noveo-logistics.com'),
    title: {
      template: '%s | Noveo Logistics',
      default: 'Commissionnaire de Transport Digital Europe-Asie | Noveo Logistics',
    },
    description: dict.hero.description,
    keywords: [
      'commissionnaire de transport',
      'transitaire international',
      'transport international',
      'logistique Europe Asie',
      'fret aérien',
      'fret maritime',
      'douane',
      'supply chain',
      'transport digital',
      'dédouanement',
      'OEA',
      'IATA',
    ],
    authors: [{ name: 'Noveo Logistics' }],
    creator: 'Noveo Logistics',
    publisher: 'Noveo Logistics',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      languages: {
        'fr': '/fr',
        'en': '/en',
        'zh': '/zh',
      },
    },
    openGraph: {
      title: 'Commissionnaire de Transport Digital Europe-Asie | Noveo Logistics',
      description: dict.hero.description,
      url: `https://noveo-logistics.com/${params.lang}`,
      siteName: 'Noveo Logistics',
      images: [
        {
          url: '/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Noveo Logistics - Commissionnaire de Transport Digital Europe-Asie',
        },
      ],
      locale: params.lang,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Commissionnaire de Transport Digital Europe-Asie | Noveo Logistics',
      description: dict.hero.description,
      images: ['/images/og-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
    },
    other: {
      'theme-color': '#1D2F4E',
    },
  }
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const dict = await getDictionary(params.lang)

  return (
    <html lang={params.lang} className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1D2F4E" />
      </head>
      <body className="font-sans antialiased bg-noveo-neutral text-noveo-text">
        <div className="min-h-screen flex flex-col">
          <Header dict={dict} lang={params.lang} />
          <main className="flex-1">
            {children}
          </main>
          <Footer dict={dict} lang={params.lang} />
          <JsonLd type="organization" lang={params.lang} dict={dict} />
        </div>
      </body>
    </html>
  )
} 