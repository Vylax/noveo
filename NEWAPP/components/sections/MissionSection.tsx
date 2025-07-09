import Link from 'next/link'
import { Dictionary, Locale } from '@/lib/get-dictionary'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Monitor, Users, ArrowRight } from 'lucide-react'

interface MissionSectionProps {
  dict: Dictionary
  lang: Locale
}

export function MissionSection({ dict, lang }: MissionSectionProps) {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ovrsea-navy mb-4 max-w-4xl mx-auto">
            {dict.mission.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Tech Column */}
          <Card className="bg-ovrsea-neutral border-ovrsea-mint">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-ovrsea-mint rounded-lg">
                  <Monitor className="w-6 h-6 text-ovrsea-navy" />
                </div>
                <CardTitle className="text-ovrsea-navy font-poppins text-xl">
                  {dict.mission.tech.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {dict.mission.tech.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Badge variant="noveo_mint" className="text-xs">
                      ✓
                    </Badge>
                    <span className="text-ovrsea-darkgray">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Human Column */}
          <Card className="bg-ovrsea-neutral border-ovrsea-mint">
            <CardHeader>
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-ovrsea-mint rounded-lg">
                  <Users className="w-6 h-6 text-ovrsea-navy" />
                </div>
                <CardTitle className="text-ovrsea-navy font-poppins text-xl">
                  {dict.mission.human.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {dict.mission.human.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Badge variant="noveo_mint" className="text-xs">
                      ✓
                    </Badge>
                    <span className="text-ovrsea-darkgray">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button asChild variant="noveo" size="lg">
            <Link href={`/${lang}/solutions`}>
              {dict.mission.cta}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
} 