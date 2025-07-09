import { getDictionary, type Locale } from '@/lib/get-dictionary'
import { ContactForm } from '@/components/forms/ContactForm'
import { JsonLd } from '@/components/seo/JsonLd'
import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Globe, 
  CheckCircle, 
  Smartphone, 
  Zap, 
  MapPin, 
  Phone, 
  Mail
} from 'lucide-react'

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang)
  
  return {
    title: `${dict.contact.title} - Noveo Logistics`,
    description: dict.contact.subtitle,
    openGraph: {
      title: `${dict.contact.title} - Noveo Logistics`,
      description: dict.contact.subtitle,
      type: 'website',
      url: `https://noveo-logistics.com/${params.lang}/contact`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${dict.contact.title} - Noveo Logistics`,
      description: dict.contact.subtitle,
    },
    alternates: {
      canonical: `https://noveo-logistics.com/${params.lang}/contact`,
      languages: {
        'fr': 'https://noveo-logistics.com/fr/contact',
        'en': 'https://noveo-logistics.com/en/contact',
        'zh': 'https://noveo-logistics.com/zh/contact',
      },
    },
  }
}

export default async function ContactPage({
  params,
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(params.lang)

  // Icônes de réassurance selon le cahier des charges
  const reassuranceItems = [
    {
      icon: Globe,
      text: dict.contact.reassurance[0], // Spécialiste
      gradient: 'from-noveo-primary to-noveo-primary/80'
    },
    {
      icon: CheckCircle,
      text: dict.contact.reassurance[1], // Certifié
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: Smartphone,
      text: dict.contact.reassurance[2], // Plateforme digitale
      gradient: 'from-noveo-secondary to-noveo-secondary/80'
    },
    {
      icon: Zap,
      text: dict.contact.reassurance[3], // Réactivité
      gradient: 'from-noveo-accent to-noveo-accent/80'
    }
  ]

  const offices = [
    {
      city: dict.contact.offices.paris,
      address: dict.contact.offices.addresses.paris,
      flag: '🇫🇷'
    },
    {
      city: dict.contact.offices.hongkong,
      address: dict.contact.offices.addresses.hongkong,
      flag: '🇭🇰'
    },
    {
      city: dict.contact.offices.guangzhou,
      address: dict.contact.offices.addresses.guangzhou,
      flag: '🇨🇳'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-noveo-primary to-noveo-primary/90 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-noveo-secondary rounded-full -translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-noveo-secondary rounded-full translate-x-48 translate-y-48"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-noveo-accent rounded-full -translate-x-16 -translate-y-16"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6 animate-fade-in-up">
              {dict.contact.title}
            </h1>
            <p className="text-xl md:text-2xl text-noveo-secondary font-inter mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {dict.contact.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section - Layout 2 colonnes selon cahier des charges */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Colonne de gauche - Info & Réassurance */}
            <div className="space-y-8">
              {/* Titre selon cahier des charges */}
              <div>
                <h2 className="text-3xl md:text-4xl font-poppins font-bold text-noveo-primary mb-6">
                  {dict.contact.heroTitle}
                </h2>
                
                {/* Icônes de réassurance selon cahier des charges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {reassuranceItems.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <div key={index} className="flex items-center space-x-3 p-4 bg-noveo-neutral rounded-xl hover:shadow-lg transition-all duration-300">
                        <div className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <span className="font-poppins font-medium text-noveo-primary">{item.text}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Adresses complètes des 3 bureaux selon cahier des charges */}
              <div className="space-y-6">
                <h3 className="text-2xl font-poppins font-semibold text-noveo-primary flex items-center">
                  <MapPin className="w-6 h-6 mr-2 text-noveo-accent" />
                  {dict.contact.offices.title}
                </h3>
                
                <div className="space-y-4">
                  {offices.map((office, index) => (
                    <Card key={index} className="border-noveo-border hover:border-noveo-secondary transition-all duration-300 hover:shadow-lg">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="text-3xl">{office.flag}</div>
                          <div className="flex-1">
                            <h4 className="font-poppins font-semibold text-noveo-primary mb-3 text-lg">
                              {office.city}
                            </h4>
                            <div className="space-y-2 text-noveo-text font-inter">
                              <div className="flex items-start space-x-2">
                                <MapPin className="w-4 h-4 mt-1 text-noveo-accent flex-shrink-0" />
                                <div>
                                  <p>{office.address.street}</p>
                                  <p>{office.address.city}</p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Phone className="w-4 h-4 text-noveo-accent" />
                                <a 
                                  href={`tel:${office.address.phone}`}
                                  className="hover:text-noveo-accent transition-colors"
                                >
                                  {office.address.phone}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Contact général */}
                <Card className="border-noveo-accent/20 bg-gradient-to-r from-noveo-accent/5 to-noveo-secondary/5">
                  <CardContent className="p-6">
                    <h4 className="font-poppins font-semibold text-noveo-primary mb-4 flex items-center">
                      <Mail className="w-5 h-5 mr-2 text-noveo-accent" />
                      {dict.contact.general.title}
                    </h4>
                    <div className="space-y-2 text-noveo-text font-inter">
                      <p>
                        <strong>{dict.contact.general.email}</strong>{' '}
                        <a 
                          href={`mailto:${dict.contact.general.emailValue}`} 
                          className="text-noveo-accent hover:text-noveo-secondary transition-colors"
                        >
                          {dict.contact.general.emailValue}
                        </a>
                      </p>
                      <p><strong>{dict.contact.general.hours}</strong> {dict.contact.general.hoursValue}</p>
                      <p><strong>{dict.contact.general.response}</strong> {dict.contact.general.responseValue}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Colonne de droite - Formulaire de contact */}
            <div>
              <ContactForm dict={dict} lang={params.lang} />
            </div>
          </div>
        </div>
      </section>

      <JsonLd
        type="local-business"
        lang={params.lang}
        dict={dict}
        data={{
          location: 'Paris',
          telephone: '+33-1-23-45-67-89',
          address: {
            street: '123 Avenue des Champs-Élysées',
            city: 'Paris',
            postal: '75008',
            country: 'FR',
          },
          geo: {
            lat: 48.8566,
            lng: 2.3522,
          },
        }}
      />
    </div>
  )
} 