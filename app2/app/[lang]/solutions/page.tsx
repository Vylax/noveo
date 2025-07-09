import { getDictionary, type Locale } from '@/lib/get-dictionary'
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang)
  
  return {
    title: dict.solutions.title,
    description: dict.solutions.transport.air.description,
    openGraph: {
      title: dict.solutions.title,
      description: dict.solutions.transport.air.description,
      type: 'website',
    },
  }
}

export default async function SolutionsPage({
  params,
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(params.lang)

  const transportServices = [
    {
      title: dict.solutions.transport.air.title,
      description: dict.solutions.transport.air.description,
      icon: '✈️',
      features: [
        'Express 24h-48h',
        'Fret consolidé',
        'Marchandises dangereuses',
        'Température contrôlée'
      ]
    },
    {
      title: dict.solutions.transport.sea.title,
      description: dict.solutions.transport.sea.description,
      icon: '🚢',
      features: [
        'FCL (Full Container Load)',
        'LCL (Less Container Load)',
        'Groupage optimisé',
        'Suivi en temps réel'
      ]
    },
    {
      title: dict.solutions.transport.multimodal.title,
      description: dict.solutions.transport.multimodal.description,
      icon: '🚛',
      features: [
        'Air + Route',
        'Mer + Route',
        'Rail + Route',
        'Optimisation coûts'
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-noveo-blue to-noveo-teal text-white py-20">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {dict.solutions.title}
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-200">
              Des solutions logistiques sur mesure pour optimiser votre chaîne d'approvisionnement
            </p>
          </div>
        </div>
      </section>

      {/* Transport Services Section */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-h2 font-display font-bold text-noveo-blue mb-4">
              {dict.solutions.transport.title}
            </h2>
            <p className="text-lg text-dark-gray max-w-3xl mx-auto">
              Choisissez le mode de transport le plus adapté à vos besoins
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transportServices.map((service, index) => (
              <div key={index} className="card hover:shadow-noveo-lg transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-h3 font-display font-semibold text-noveo-blue mb-2">
                    {service.title}
                  </h3>
                  <p className="text-dark-gray">
                    {service.description}
                  </p>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-noveo-teal rounded-full"></div>
                      <span className="text-dark-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customs & Compliance Section */}
      <section className="section-padding bg-off-white">
        <div className="container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-h2 font-display font-bold text-noveo-blue mb-6">
                {dict.solutions.customs.title}
              </h2>
              <p className="text-lg text-dark-gray mb-8">
                {dict.solutions.customs.description}
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-noveo-teal rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-noveo-blue">Représentant en Douane Enregistré</h4>
                    <p className="text-dark-gray">Statut RDE pour toutes vos formalités</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-noveo-teal rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-noveo-blue">Expertise réglementaire</h4>
                    <p className="text-dark-gray">Veille réglementaire continue</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-noveo-teal rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-noveo-blue">Dédouanement rapide</h4>
                    <p className="text-dark-gray">Traitement accéléré de vos déclarations</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-noveo-teal to-noveo-blue rounded-lg p-8 text-white">
                <h3 className="text-xl font-semibold mb-4">Nos certifications</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <span>Opérateur Économique Agréé (OEA)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <span>IATA CASS</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold">✓</span>
                    </div>
                    <span>Représentant en Douane Enregistré</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-noveo-blue text-white">
        <div className="container-max mx-auto text-center">
          <h2 className="text-h2 font-display font-bold mb-6">
            Prêt à optimiser votre logistique ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez nos experts pour une étude personnalisée de vos besoins
          </p>
          <Link
            href={`/${params.lang}/contact`}
            className="btn-primary bg-noveo-orange hover:bg-orange-600"
          >
            Demander un devis gratuit
          </Link>
        </div>
      </section>
    </div>
  )
} 