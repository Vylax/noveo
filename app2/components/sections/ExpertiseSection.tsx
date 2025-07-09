import Link from 'next/link'
import Image from 'next/image'
import { Dictionary, Locale } from '@/lib/get-dictionary'

interface ExpertiseSectionProps {
  dict: Dictionary
  lang: Locale
}

export function ExpertiseSection({ dict, lang }: ExpertiseSectionProps) {
  const sectors = [
    {
      key: 'energy',
      name: dict.expertise.sectors.energy,
      icon: '⛽',
      href: `/${lang}/industries/energies-oil-gas`,
      image: '/images/sectors/energy.svg',
    },
    {
      key: 'dangerous',
      name: dict.expertise.sectors.dangerous,
      icon: '☣️',
      href: `/${lang}/industries/marchandises-dangereuses`,
      image: '/images/sectors/dangerous-goods.svg',
    },
    {
      key: 'aerospace',
      name: dict.expertise.sectors.aerospace,
      icon: '✈️',
      href: `/${lang}/industries/aeronautique-defense`,
      image: '/images/sectors/aerospace.svg',
    },
    {
      key: 'wine',
      name: dict.expertise.sectors.wine,
      icon: '🍷',
      href: `/${lang}/industries/vins-spiritueux`,
      image: '/images/sectors/wine.svg',
    },
    {
      key: 'automotive',
      name: dict.expertise.sectors.automotive,
      icon: '🚗',
      href: `/${lang}/industries/automobile`,
      image: '/images/sectors/automotive.svg',
    },
    {
      key: 'ecommerce',
      name: dict.expertise.sectors.ecommerce,
      icon: '🛒',
      href: `/${lang}/industries/e-commerce`,
      image: '/images/sectors/ecommerce.svg',
    },
    {
      key: 'medical',
      name: dict.expertise.sectors.medical,
      icon: '🦷',
      href: `/${lang}/industries/dispositifs-medicaux`,
      image: '/images/sectors/medical.svg',
    },
  ]

  return (
    <section className="section-padding bg-off-white">
      <div className="container-max mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-h2 font-display font-bold text-noveo-blue mb-4">
            {dict.expertise.title}
          </h2>
          <p className="text-lg text-dark-gray max-w-3xl mx-auto">
            {dict.expertise.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sectors.map((sector, index) => (
            <Link
              key={sector.key}
              href={sector.href}
              className="group block"
            >
              <div className="card relative overflow-hidden h-48 hover:shadow-noveo-lg transition-all duration-300 hover-scale">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={sector.image}
                    alt={sector.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-noveo-blue/80 to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                      {sector.icon}
                    </div>
                    <h3 className="text-white font-display font-semibold text-lg leading-tight">
                      {sector.name}
                    </h3>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-noveo-teal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 