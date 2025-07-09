import { Locale } from '@/lib/get-dictionary'

interface JsonLdProps {
  type: 'organization' | 'service' | 'article' | 'faq' | 'local-business'
  lang: Locale
  data?: any
}

export function JsonLd({ type, lang, data }: JsonLdProps) {
  const getOrganizationSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Noveo Logistics',
    alternateName: 'Noveo',
    url: `https://noveo-logistics.com/${lang}`,
    logo: 'https://noveo-logistics.com/images/logo-noveo.svg',
    description: 'Commissionnaire de transport nouvelle génération, spécialisé dans la logistique Europe-Asie',
    foundingDate: '2020',
    founder: {
      '@type': 'Person',
      name: 'Benjamin Tapiero',
    },
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: '123 Avenue des Champs-Élysées',
        addressLocality: 'Paris',
        postalCode: '75008',
        addressCountry: 'FR',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: 'Central Plaza',
        addressLocality: 'Hong Kong',
        addressCountry: 'HK',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: 'Guangzhou International Finance Center',
        addressLocality: 'Guangzhou',
        addressCountry: 'CN',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+33-1-23-45-67-89',
      contactType: 'customer service',
      availableLanguage: ['French', 'English', 'Chinese'],
    },
    sameAs: [
      'https://www.linkedin.com/company/noveo-logistics',
      'https://twitter.com/noveo_logistics',
    ],
    serviceArea: {
      '@type': 'Place',
      name: 'Europe-Asia logistics corridor',
    },
    knowsAbout: [
      'Freight forwarding',
      'International logistics',
      'Air freight',
      'Sea freight',
      'Customs clearance',
      'Supply chain management',
      'Dangerous goods transport',
      'Medical devices logistics',
      'Aerospace logistics',
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'OEA (Operateur Economique Agréé)',
        credentialCategory: 'Customs certification',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'IATA CASS',
        credentialCategory: 'Air transport certification',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'RDE (Représentant en Douane Enregistré)',
        credentialCategory: 'Customs representative',
      },
    ],
  })

  const getServiceSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data?.name || 'Logistique internationale',
    description: data?.description || 'Services de transport et logistique Europe-Asie',
    provider: {
      '@type': 'Organization',
      name: 'Noveo Logistics',
    },
    serviceType: data?.serviceType || 'Freight forwarding',
    areaServed: {
      '@type': 'Place',
      name: 'Europe-Asia',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Logistics services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Transport aérien',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Transport maritime',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Dédouanement',
          },
        },
      ],
    },
  })

  const getLocalBusinessSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Noveo Logistics ${data?.location || 'Paris'}`,
    image: 'https://noveo-logistics.com/images/logo-noveo.svg',
    '@id': `https://noveo-logistics.com/${lang}`,
    url: `https://noveo-logistics.com/${lang}`,
    telephone: data?.telephone || '+33-1-23-45-67-89',
    address: {
      '@type': 'PostalAddress',
      streetAddress: data?.address?.street || '123 Avenue des Champs-Élysées',
      addressLocality: data?.address?.city || 'Paris',
      postalCode: data?.address?.postal || '75008',
      addressCountry: data?.address?.country || 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: data?.geo?.lat || 48.8566,
      longitude: data?.geo?.lng || 2.3522,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    sameAs: [
      'https://www.linkedin.com/company/noveo-logistics',
    ],
  })

  const getArticleSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data?.title,
    description: data?.description,
    image: data?.image,
    datePublished: data?.publishedAt,
    dateModified: data?.updatedAt,
    author: {
      '@type': 'Organization',
      name: 'Noveo Logistics',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Noveo Logistics',
      logo: {
        '@type': 'ImageObject',
        url: 'https://noveo-logistics.com/images/logo-noveo.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': data?.url,
    },
  })

  const getFaqSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data?.questions?.map((q: any) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  })

  const getSchema = () => {
    switch (type) {
      case 'organization':
        return getOrganizationSchema()
      case 'service':
        return getServiceSchema()
      case 'local-business':
        return getLocalBusinessSchema()
      case 'article':
        return getArticleSchema()
      case 'faq':
        return getFaqSchema()
      default:
        return getOrganizationSchema()
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getSchema()),
      }}
    />
  )
} 