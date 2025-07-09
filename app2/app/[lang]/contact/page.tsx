import { getDictionary, type Locale } from '@/lib/get-dictionary'
import { ContactForm } from '@/components/forms/ContactForm'
import { JsonLd } from '@/components/seo/JsonLd'
import { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang)
  
  return {
    title: dict.contact.title,
    description: dict.contact.subtitle,
    openGraph: {
      title: dict.contact.title,
      description: dict.contact.subtitle,
      type: 'website',
    },
  }
}

export default async function ContactPage({
  params,
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(params.lang)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-noveo-blue to-noveo-teal">
        <div className="container-max mx-auto text-center">
          <h1 className="text-h1 font-display font-bold text-white mb-6">
            {dict.contact.title}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            {dict.contact.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Info & Reassurance */}
            <div className="space-y-8">
              <div>
                <h2 className="text-h2 font-display font-bold text-noveo-blue mb-6">
                  {dict.contact.subtitle}
                </h2>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {dict.contact.reassurance.map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-noveo-teal rounded-full"></div>
                      <span className="text-dark-gray">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Office Locations */}
              <div className="space-y-6">
                <h3 className="text-h3 font-display font-semibold text-noveo-blue">
                  Nos bureaux
                </h3>
                
                <div className="space-y-4">
                  <div className="p-4 bg-off-white rounded-lg">
                    <h4 className="font-semibold text-noveo-blue mb-2">
                      {dict.contact.offices.paris}
                    </h4>
                    <p className="text-dark-gray text-sm">
                      123 Avenue des Champs-Élysées<br />
                      75008 Paris, France<br />
                      +33 1 23 45 67 89
                    </p>
                  </div>
                  
                  <div className="p-4 bg-off-white rounded-lg">
                    <h4 className="font-semibold text-noveo-blue mb-2">
                      {dict.contact.offices.hongkong}
                    </h4>
                    <p className="text-dark-gray text-sm">
                      Central Plaza<br />
                      Hong Kong<br />
                      +852 1234 5678
                    </p>
                  </div>
                  
                  <div className="p-4 bg-off-white rounded-lg">
                    <h4 className="font-semibold text-noveo-blue mb-2">
                      {dict.contact.offices.guangzhou}
                    </h4>
                    <p className="text-dark-gray text-sm">
                      Guangzhou International Finance Center<br />
                      Guangzhou, China<br />
                      +86 20 1234 5678
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <ContactForm dict={dict} lang={params.lang} />
            </div>
          </div>
        </div>
      </section>

      <JsonLd
        type="local-business"
        lang={params.lang}
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