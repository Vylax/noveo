import { getDictionary, type Locale } from '@/lib/get-dictionary'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface ContactPageProps {
  params: { lang: Locale }
}

export default async function ContactPage({ params }: ContactPageProps) {
  const dict = await getDictionary(params.lang)

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-poppins font-bold text-ovrsea-navy mb-4">
          {dict.header.nav.contact}
        </h1>
        <p className="text-lg text-ovrsea-darkgray max-w-2xl mx-auto">
          Contactez-nous pour découvrir comment nous pouvons optimiser vos flux logistiques.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="bg-ovrsea-neutral border-ovrsea-mint">
          <CardHeader>
            <CardTitle className="text-ovrsea-navy font-poppins">
              {dict.about?.sites?.locations?.paris || "Paris"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-ovrsea-darkgray">
              123 Avenue des Champs-Élysées<br />
              75008 Paris, France<br />
              +33 1 23 45 67 89
            </p>
          </CardContent>
        </Card>

        <Card className="bg-ovrsea-neutral border-ovrsea-mint">
          <CardHeader>
            <CardTitle className="text-ovrsea-navy font-poppins">
              {dict.about?.sites?.locations?.hongkong || "Hong Kong"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-ovrsea-darkgray">
              Central Plaza<br />
              Hong Kong<br />
              +852 1234 5678
            </p>
          </CardContent>
        </Card>

        <Card className="bg-ovrsea-neutral border-ovrsea-mint">
          <CardHeader>
            <CardTitle className="text-ovrsea-navy font-poppins">
              {dict.about?.sites?.locations?.guangzhou || "Guangzhou"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-ovrsea-darkgray">
              Guangzhou International Finance Center<br />
              Guangzhou, China<br />
              +86 20 1234 5678
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-12">
        <Button variant="noveo" size="lg">
          Demander un devis
        </Button>
      </div>
    </div>
  )
} 