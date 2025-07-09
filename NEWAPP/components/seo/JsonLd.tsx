import { Locale, Dictionary } from '@/lib/get-dictionary'

interface JsonLdProps {
  type: 'organization' | 'service' | 'article' | 'faq' | 'local-business'
  lang: Locale
  dict: Dictionary
  data?: any
}

export function JsonLd({ type, lang, dict, data }: JsonLdProps) {
  const getOrganizationSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Noveo Logistics',
    alternateName: 'Noveo',
    url: `https://noveo-logistics.com/${lang}`,
    logo: 'https://noveo-logistics.com/images/logos/logo_long_for_black_bg.png',
    description: dict.about.seo.description,
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
      name: dict.about.seo.serviceArea,
    },
    knowsAbout: dict.about.seo.expertise,
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'OEA (Operateur Economique Agréé)',
        credentialCategory: dict.about.seo.certifications.customs,
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'IATA CASS',
        credentialCategory: dict.about.seo.certifications.air,
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'RDE (Représentant en Douane Enregistré)',
        credentialCategory: dict.about.seo.certifications.representative,
      },
    ],
  })

  const getServiceSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data?.name || dict.about.seo.services.international,
    description: data?.description || dict.about.seo.services.description,
    provider: {
      '@type': 'Organization',
      name: 'Noveo Logistics',
    },
    serviceType: data?.serviceType || dict.about.seo.expertise[0],
    areaServed: {
      '@type': 'Place',
      name: 'Europe-Asia',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: dict.about.seo.services.catalogue,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: dict.about.seo.services.air,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: dict.about.seo.services.sea,
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: dict.about.seo.services.customs,
          },
        },
      ],
    },
  })

  const getLocalBusinessSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Noveo Logistics ${data?.location || 'Paris'}`,
    image: 'https://noveo-logistics.com/images/logos/logo_long_for_black_bg.png',
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
        url: 'https://noveo-logistics.com/images/logos/logo_long_for_black_bg.png',
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