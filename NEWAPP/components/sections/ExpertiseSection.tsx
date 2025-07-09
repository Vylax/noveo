import Link from 'next/link'
import Image from 'next/image'
import { Dictionary, Locale } from '@/lib/get-dictionary'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'

interface ExpertiseSectionProps {
  dict: Dictionary
  lang: Locale
}

export function ExpertiseSection({ dict, lang }: ExpertiseSectionProps) {
  const sectors = [
    {
      key: 'energy',
      title: dict.expertise.sectors.energy,
      icon: '/images/sectors/energy.svg',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      key: 'dangerous',
      title: dict.expertise.sectors.dangerous,
      icon: '/images/sectors/dangerous-goods.svg',
      gradient: 'from-red-500 to-pink-500',
    },
    {
      key: 'aerospace',
      title: dict.expertise.sectors.aerospace,
      icon: '/images/sectors/aerospace.svg',
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      key: 'wine',
      title: dict.expertise.sectors.wine,
      icon: '/images/sectors/wine.svg',
      gradient: 'from-purple-500 to-violet-500',
    },
    {
      key: 'automotive',
      title: dict.expertise.sectors.automotive,
      icon: '/images/sectors/automotive.svg',
      gradient: 'from-gray-500 to-slate-500',
    },
    {
      key: 'ecommerce',
      title: dict.expertise.sectors.ecommerce,
      icon: '/images/sectors/ecommerce.svg',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      key: 'medical',
      title: dict.expertise.sectors.medical,
      icon: '/images/sectors/medical.svg',
      gradient: 'from-cyan-500 to-blue-500',
    },
  ]

  return (
    <section className="py-20 bg-noveo-neutral">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-noveo-primary mb-4">
            {dict.expertise.title}
          </h2>
          <p className="text-xl text-noveo-text font-inter max-w-3xl mx-auto">
            {dict.expertise.description}
          </p>
        </div>

        {/* Grille des secteurs selon guidelines (grille visuelle) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {sectors.map((sector, index) => (
            <Link 
              key={sector.key} 
              href={`/${lang}/industries/${sector.key}`}
              className="group"
            >
              <Card className="h-full border-noveo-border hover:border-noveo-secondary transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white">
                <CardContent className="p-6 text-center">
                  {/* Icône avec fond coloré */}
                  <div className="relative mb-4">
                    <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${sector.gradient} p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <Image
                        src={sector.icon}
                        alt={sector.title}
                        width={32}
                        height={32}
                        className="w-full h-full text-white filter brightness-0 invert"
                      />
                    </div>
                  </div>
                  
                  {/* Titre */}
                  <h3 className="text-lg font-poppins font-semibold text-noveo-primary mb-2 group-hover:text-noveo-accent transition-colors">
                    {sector.title}
                  </h3>
                  
                  {/* Indicateur de lien */}
                  <div className="flex items-center justify-center text-noveo-secondary group-hover:text-noveo-accent transition-colors">
                    <span className="text-sm font-inter mr-1">{dict.expertise.learn_more}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-lg border border-noveo-border">
          <h3 className="text-2xl font-poppins font-bold text-noveo-primary mb-4">
            {dict.expertise.cta.title}
          </h3>
          <p className="text-noveo-text font-inter mb-6 max-w-2xl mx-auto">
            {dict.expertise.cta.description}
          </p>
          <Link 
            href={`/${lang}/contact`}
            className="inline-flex items-center bg-noveo-accent hover:bg-noveo-accent/90 text-white font-poppins font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            {dict.expertise.cta.button}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
} 