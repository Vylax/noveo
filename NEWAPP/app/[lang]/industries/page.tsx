import { getDictionary, type Locale } from '@/lib/get-dictionary'
import { JsonLd } from '@/components/seo/JsonLd'
import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { 
  ArrowRight, 
  Fuel, 
  AlertTriangle, 
  Plane, 
  Wine, 
  Car, 
  ShoppingCart, 
  Heart,
  CheckCircle,
  X,
  Target,
  Lightbulb
} from 'lucide-react'

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
      url: `https://noveo-logistics.com/${params.lang}/industries`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${dict.industries.title} - Noveo Logistics`,
      description: dict.industries.subtitle,
    },
    alternates: {
      canonical: `https://noveo-logistics.com/${params.lang}/industries`,
      languages: {
        'fr': 'https://noveo-logistics.com/fr/industries',
        'en': 'https://noveo-logistics.com/en/industries',
        'zh': 'https://noveo-logistics.com/zh/industries',
      },
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
      icon: Fuel,
      description: dict.industries.sectors.energy.description,
      challenges: dict.industries.sectors.energy.challenges,
      solutions: dict.industries.sectors.energy.solutions,
      gradient: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50'
    },
    {
      key: 'dangerous',
      name: dict.expertise.sectors.dangerous,
      icon: AlertTriangle,
      description: dict.industries.sectors.dangerous.description,
      challenges: dict.industries.sectors.dangerous.challenges,
      solutions: dict.industries.sectors.dangerous.solutions,
      gradient: 'from-red-500 to-pink-500',
      bgColor: 'bg-red-50'
    },
    {
      key: 'aerospace',
      name: dict.expertise.sectors.aerospace,
      icon: Plane,
      description: dict.industries.sectors.aerospace.description,
      challenges: dict.industries.sectors.aerospace.challenges,
      solutions: dict.industries.sectors.aerospace.solutions,
      gradient: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-50'
    },
    {
      key: 'wine',
      name: dict.expertise.sectors.wine,
      icon: Wine,
      description: dict.industries.sectors.wine.description,
      challenges: dict.industries.sectors.wine.challenges,
      solutions: dict.industries.sectors.wine.solutions,
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50'
    },
    {
      key: 'automotive',
      name: dict.expertise.sectors.automotive,
      icon: Car,
      description: dict.industries.sectors.automotive.description,
      challenges: dict.industries.sectors.automotive.challenges,
      solutions: dict.industries.sectors.automotive.solutions,
      gradient: 'from-gray-600 to-gray-800',
      bgColor: 'bg-gray-50'
    },
    {
      key: 'ecommerce',
      name: dict.expertise.sectors.ecommerce,
      icon: ShoppingCart,
      description: dict.industries.sectors.ecommerce.description,
      challenges: dict.industries.sectors.ecommerce.challenges,
      solutions: dict.industries.sectors.ecommerce.solutions,
      gradient: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50'
    },
    {
      key: 'medical',
      name: dict.expertise.sectors.medical,
      icon: Heart,
      description: dict.industries.sectors.medical.description,
      challenges: dict.industries.sectors.medical.challenges,
      solutions: dict.industries.sectors.medical.solutions,
      gradient: 'from-teal-500 to-cyan-500',
      bgColor: 'bg-teal-50'
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
              {dict.industries.title}
            </h1>
            <p className="text-xl md:text-2xl text-noveo-secondary font-inter mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {dict.industries.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {industries.map((industry, index) => {
              const Icon = industry.icon
              const isEven = index % 2 === 0
              
              return (
                <div key={industry.key} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={!isEven ? 'lg:col-start-2' : ''}>
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.gradient} p-4 shadow-lg`}>
                        <Icon className="w-full h-full text-white" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-poppins font-bold text-noveo-primary">
                        {industry.name}
                      </h2>
                    </div>
                    <p className="text-lg text-noveo-text font-inter mb-8 leading-relaxed">
                      {industry.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Challenges */}
                      <div>
                        <div className="flex items-center space-x-2 mb-4">
                          <Target className="w-5 h-5 text-red-500" />
                          <h4 className="font-poppins font-semibold text-noveo-primary">{dict.industries.challenges}</h4>
                        </div>
                        <ul className="space-y-3">
                          {industry.challenges.map((challenge, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                                <X className="w-3 h-3 text-red-500" />
                              </div>
                              <span className="text-noveo-text font-inter text-sm leading-relaxed">{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Solutions */}
                      <div>
                        <div className="flex items-center space-x-2 mb-4">
                          <Lightbulb className="w-5 h-5 text-noveo-accent" />
                          <h4 className="font-poppins font-semibold text-noveo-primary">{dict.industries.solutions}</h4>
                        </div>
                        <ul className="space-y-3">
                          {industry.solutions.map((solution, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <div className="w-6 h-6 bg-noveo-accent rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                                <CheckCircle className="w-3 h-3 text-white" />
                              </div>
                              <span className="text-noveo-text font-inter text-sm leading-relaxed">{solution}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  {/* Visual Card */}
                  <div className={!isEven ? 'lg:col-start-1' : ''}>
                    <Card className={`${industry.bgColor} border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}>
                      <CardContent className="p-8 md:p-12">
                        <div className="text-center">
                          <div className={`w-24 h-24 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${industry.gradient} p-6 shadow-2xl`}>
                            <Icon className="w-full h-full text-white" />
                          </div>
                          <h3 className="text-xl font-poppins font-semibold text-noveo-primary mb-4">
                            {industry.name}
                          </h3>
                          <div className="flex justify-center space-x-4 text-sm text-noveo-text">
                            <div className="flex items-center space-x-1">
                              <Target className="w-4 h-4 text-red-500" />
                              <span>{industry.challenges.length} défis</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <CheckCircle className="w-4 h-4 text-noveo-accent" />
                              <span>{industry.solutions.length} solutions</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-noveo-neutral">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-noveo-primary mb-4">
              {dict.industries.stats.title}
            </h2>
            <p className="text-lg text-noveo-text font-inter max-w-3xl mx-auto">
              {dict.industries.stats.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dict.industries.stats.items.map((stat, index) => {
              const icons = [Target, CheckCircle, Lightbulb, Heart]
              const gradients = [
                'from-noveo-primary to-noveo-primary/80',
                'from-noveo-secondary to-noveo-secondary/80',
                'from-noveo-accent to-noveo-accent/80',
                'from-purple-500 to-purple-600'
              ]
              const Icon = icons[index]
              return (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${gradients[index]} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-poppins font-bold text-noveo-primary mb-2">{stat.value}</div>
                  <p className="text-noveo-text font-inter">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-noveo-primary text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-64 h-64 bg-noveo-secondary rounded-full -translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-noveo-secondary rounded-full translate-x-48 translate-y-48"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-noveo-accent rounded-full -translate-x-16 -translate-y-16"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold mb-6">
              {dict.industries.ctaTitle}
            </h2>
            <p className="text-xl md:text-2xl text-noveo-secondary font-inter mb-8 max-w-3xl mx-auto">
              {dict.industries.ctaDescription}
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-noveo-accent hover:bg-noveo-accent/90 text-white font-poppins font-semibold text-lg px-8 py-4"
            >
              <Link href={`/${params.lang}/contact`}>
                {dict.industries.ctaButton}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <JsonLd
        type="organization"
        lang={params.lang}
        dict={dict}
        data={{
          name: "Noveo Logistics",
          description: dict.industries.subtitle,
          serviceArea: dict.industries.title
        }}
      />
    </div>
  )
} 