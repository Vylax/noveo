import Link from 'next/link'
import { Dictionary, Locale } from '@/lib/get-dictionary'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

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
      color: 'bg-orange-500',
    },
    {
      key: 'dangerous',
      name: dict.expertise.sectors.dangerous,
      icon: '☣️',
      href: `/${lang}/industries/marchandises-dangereuses`,
      color: 'bg-red-500',
    },
    {
      key: 'aerospace',
      name: dict.expertise.sectors.aerospace,
      icon: '✈️',
      href: `/${lang}/industries/aeronautique-defense`,
      color: 'bg-blue-500',
    },
    {
      key: 'wine',
      name: dict.expertise.sectors.wine,
      icon: '🍷',
      href: `/${lang}/industries/vins-spiritueux`,
      color: 'bg-purple-500',
    },
    {
      key: 'automotive',
      name: dict.expertise.sectors.automotive,
      icon: '🚗',
      href: `/${lang}/industries/automobile`,
      color: 'bg-gray-500',
    },
    {
      key: 'ecommerce',
      name: dict.expertise.sectors.ecommerce,
      icon: '🛒',
      href: `/${lang}/industries/e-commerce`,
      color: 'bg-green-500',
    },
    {
      key: 'medical',
      name: dict.expertise.sectors.medical,
      icon: '🏥',
      href: `/${lang}/industries/dispositifs-medicaux`,
      color: 'bg-pink-500',
    },
  ]

  return (
    <section className="py-16 bg-ovrsea-neutral">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ovrsea-navy mb-4">
            {dict.expertise.title}
          </h2>
          <p className="text-lg text-ovrsea-darkgray max-w-3xl mx-auto">
            {dict.expertise.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sectors.map((sector) => (
            <Link
              key={sector.key}
              href={sector.href}
              className="group block"
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-border bg-white">
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                    {sector.icon}
                  </div>
                  <CardTitle className="text-ovrsea-navy font-poppins text-lg leading-tight">
                    {sector.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex justify-center">
                    <Badge variant="noveo_outline" className="text-xs">
                      En savoir plus
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 