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
    title: `${dict.industries.title} - Noveo Logistics`,
    description: dict.industries.subtitle,
    openGraph: {
      title: `${dict.industries.title} - Noveo Logistics`,
      description: dict.industries.subtitle,
      type: 'website',
    },
  }
}

export default async function IndustriesPage({
  params,
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(params.lang)

  const industries = [
    {
      key: 'energy',
      name: dict.expertise.sectors.energy,
      icon: '⛽',
      description: dict.industries.sectors.energy.description,
      challenges: dict.industries.sectors.energy.challenges,
      solutions: dict.industries.sectors.energy.solutions
    },
    {
      key: 'dangerous',
      name: dict.expertise.sectors.dangerous,
      icon: '☣️',
      description: dict.industries.sectors.dangerous.description,
      challenges: dict.industries.sectors.dangerous.challenges,
      solutions: dict.industries.sectors.dangerous.solutions
    },
    {
      key: 'aerospace',
      name: dict.expertise.sectors.aerospace,
      icon: '✈️',
      description: dict.industries.sectors.aerospace.description,
      challenges: dict.industries.sectors.aerospace.challenges,
      solutions: dict.industries.sectors.aerospace.solutions
    },
    {
      key: 'wine',
      name: dict.expertise.sectors.wine,
      icon: '🍷',
      description: dict.industries.sectors.wine.description,
      challenges: dict.industries.sectors.wine.challenges,
      solutions: dict.industries.sectors.wine.solutions
    },
    {
      key: 'automotive',
      name: dict.expertise.sectors.automotive,
      icon: '🚗',
      description: dict.industries.sectors.automotive.description,
      challenges: dict.industries.sectors.automotive.challenges,
      solutions: dict.industries.sectors.automotive.solutions
    },
    {
      key: 'ecommerce',
      name: dict.expertise.sectors.ecommerce,
      icon: '🛒',
      description: dict.industries.sectors.ecommerce.description,
      challenges: dict.industries.sectors.ecommerce.challenges,
      solutions: dict.industries.sectors.ecommerce.solutions
    },
    {
      key: 'medical',
      name: dict.expertise.sectors.medical,
      icon: '🦷',
      description: dict.industries.sectors.medical.description,
      challenges: dict.industries.sectors.medical.challenges,
      solutions: dict.industries.sectors.medical.solutions
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-noveo-blue to-noveo-teal text-white py-20">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {dict.industries.title}
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-200">
              {dict.industries.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <div className="grid grid-cols-1 gap-12">
            {industries.map((industry, index) => (
              <div key={industry.key} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-4xl">{industry.icon}</div>
                    <h2 className="text-h2 font-display font-bold text-noveo-blue">
                      {industry.name}
                    </h2>
                  </div>
                  <p className="text-lg text-dark-gray mb-6">
                    {industry.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Challenges */}
                    <div>
                      <h4 className="font-semibold text-noveo-blue mb-3">{dict.industries.challenges}</h4>
                      <ul className="space-y-2">
                        {industry.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                            <span className="text-dark-gray text-sm">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Solutions */}
                    <div>
                      <h4 className="font-semibold text-noveo-teal mb-3">{dict.industries.solutions}</h4>
                      <ul className="space-y-2">
                        {industry.solutions.map((solution, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-noveo-teal rounded-full mt-2"></div>
                            <span className="text-dark-gray text-sm">{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Visual */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-gradient-to-br from-noveo-blue/10 to-noveo-teal/10 rounded-lg p-8 text-center">
                    <div className="text-6xl mb-4">{industry.icon}</div>
                    <div className="text-noveo-blue font-semibold text-lg">
                      {industry.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-noveo-blue text-white">
        <div className="container-max mx-auto text-center">
          <h2 className="text-h2 font-display font-bold mb-6">
            {dict.industries.ctaTitle}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {dict.industries.ctaDescription}
          </p>
          <Link
            href={`/${params.lang}/contact`}
            className="btn-primary bg-noveo-orange hover:bg-orange-600"
          >
            {dict.industries.ctaButton}
          </Link>
        </div>
      </section>
    </div>
  )
} 