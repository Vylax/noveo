import { getDictionary, type Locale } from '@/lib/get-dictionary'
import { JsonLd } from '@/components/seo/JsonLd'
import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Plane, Ship, Truck, CheckCircle, Award, Shield, Clock, Globe } from 'lucide-react'

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang)
  
  return {
    title: dict.solutions.title,
    description: dict.solutions.subtitle,
    openGraph: {
      title: dict.solutions.title,
      description: dict.solutions.subtitle,
      type: 'website',
      url: `https://noveo-logistics.com/${params.lang}/solutions`,
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.solutions.title,
      description: dict.solutions.subtitle,
    },
    alternates: {
      canonical: `https://noveo-logistics.com/${params.lang}/solutions`,
      languages: {
        'fr': 'https://noveo-logistics.com/fr/solutions',
        'en': 'https://noveo-logistics.com/en/solutions',
        'zh': 'https://noveo-logistics.com/zh/solutions',
      },
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
      icon: Plane,
      features: dict.solutions.transport.air.features,
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      title: dict.solutions.transport.sea.title,
      description: dict.solutions.transport.sea.description,
      icon: Ship,
      features: dict.solutions.transport.sea.features,
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      title: dict.solutions.transport.multimodal.title,
      description: dict.solutions.transport.multimodal.description,
      icon: Truck,
      features: dict.solutions.transport.multimodal.features,
      gradient: 'from-green-500 to-emerald-500'
    }
  ]

  const customsIcons = [Shield, Globe, Clock]

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
              {dict.solutions.title}
            </h1>
            <p className="text-xl md:text-2xl text-noveo-secondary font-inter mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {dict.solutions.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Transport Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-noveo-primary mb-4">
              {dict.solutions.transport.title}
            </h2>
            <p className="text-lg text-noveo-text font-inter max-w-3xl mx-auto">
              {dict.solutions.transport.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transportServices.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="group border-noveo-border hover:border-noveo-secondary transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${service.gradient} p-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <Icon className="w-full h-full text-white" />
                      </div>
                      <h3 className="text-xl font-poppins font-semibold text-noveo-primary mb-3">
                        {service.title}
                      </h3>
                      <p className="text-noveo-text font-inter leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-noveo-accent rounded-full flex-shrink-0"></div>
                          <span className="text-noveo-text font-inter">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Customs & Compliance Section */}
      <section className="py-20 bg-noveo-neutral">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-noveo-primary mb-6">
                {dict.solutions.customs.title}
              </h2>
              <p className="text-lg text-noveo-text font-inter mb-8 leading-relaxed">
                {dict.solutions.customs.description}
              </p>
              <div className="space-y-6">
                {dict.solutions.customs.features.map((feature, index) => {
                  const Icon = customsIcons[index]
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-noveo-accent rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-poppins font-semibold text-noveo-primary mb-2">{feature.title}</h4>
                        <p className="text-noveo-text font-inter leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-noveo-primary to-noveo-primary/90 rounded-2xl p-8 md:p-10 text-white shadow-2xl">
                <div className="flex items-center mb-6">
                  <Award className="w-8 h-8 text-noveo-secondary mr-3" />
                  <h3 className="text-xl font-poppins font-semibold">{dict.solutions.certifications.title}</h3>
                </div>
                <div className="space-y-4">
                  {dict.solutions.certifications.items.map((certification, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-noveo-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-inter">{certification}</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-noveo-accent rounded-lg animate-bounce" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-noveo-secondary rounded-full opacity-80 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-noveo-primary mb-4">
              {dict.solutions.advantages.title}
            </h2>
            <p className="text-lg text-noveo-text font-inter max-w-3xl mx-auto">
              {dict.solutions.advantages.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dict.solutions.advantages.items.map((advantage, index) => {
              const icons = [Shield, Globe, Clock, Award]
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
                  <h3 className="font-poppins font-semibold text-noveo-primary mb-2">{advantage.title}</h3>
                  <p className="text-noveo-text font-inter text-sm">{advantage.description}</p>
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
              {dict.solutions.cta.title}
            </h2>
            <p className="text-xl md:text-2xl text-noveo-secondary font-inter mb-8 max-w-3xl mx-auto">
              {dict.solutions.cta.description}
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-noveo-accent hover:bg-noveo-accent/90 text-white font-poppins font-semibold text-lg px-8 py-4"
            >
              <Link href={`/${params.lang}/contact`}>
                {dict.solutions.cta.button}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <JsonLd
        type="service"
        lang={params.lang}
        dict={dict}
        data={{
          name: dict.solutions.title,
          description: dict.solutions.subtitle,
          serviceType: dict.solutions.transport.title
        }}
      />
    </div>
  )
} 