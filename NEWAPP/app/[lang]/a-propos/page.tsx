import { getDictionary, type Locale } from '@/lib/get-dictionary'
import { TimelineSection } from '@/components/sections/TimelineSection'
import { JsonLd } from '@/components/seo/JsonLd'
import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, CheckCircle, MapPin, Users, Award, Target } from 'lucide-react'

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang)
  
  return {
    title: dict.about.title,
    description: dict.about.description,
    openGraph: {
      title: dict.about.title,
      description: dict.about.description,
      type: 'website',
      url: `https://noveo-logistics.com/${params.lang}/a-propos`,
    },
    twitter: {
      card: 'summary_large_image',
      title: dict.about.title,
      description: dict.about.description,
    },
    alternates: {
      canonical: `https://noveo-logistics.com/${params.lang}/a-propos`,
      languages: {
        'fr': 'https://noveo-logistics.com/fr/a-propos',
        'en': 'https://noveo-logistics.com/en/about',
        'zh': 'https://noveo-logistics.com/zh/about',
      },
    },
  }
}

export default async function AboutPage({
  params,
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(params.lang)

  const engagementIcons = [Target, Users, Award]

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
              {dict.about.title}
            </h1>
            <p className="text-xl md:text-2xl text-noveo-secondary font-inter mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {dict.about.description}
            </p>
            
                         {/* Stats preview */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
               <div className="text-center">
                 <div className="text-3xl font-poppins font-bold text-noveo-accent mb-2">{dict.about.hero_stats.founded.value}</div>
                 <div className="text-sm text-noveo-secondary">{dict.about.hero_stats.founded.label}</div>
               </div>
               <div className="text-center">
                 <div className="text-3xl font-poppins font-bold text-noveo-accent mb-2">{dict.about.hero_stats.offices.value}</div>
                 <div className="text-sm text-noveo-secondary">{dict.about.hero_stats.offices.label}</div>
               </div>
               <div className="text-center">
                 <div className="text-3xl font-poppins font-bold text-noveo-accent mb-2">{dict.about.hero_stats.clients.value}</div>
                 <div className="text-sm text-noveo-secondary">{dict.about.hero_stats.clients.label}</div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <TimelineSection dict={dict} lang={params.lang} />

      {/* Engagements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-noveo-primary mb-4">
              {dict.about.engagements.title}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dict.about.engagements.items.map((item, index) => {
              const Icon = engagementIcons[index]
              return (
                <Card key={index} className="text-center border-noveo-border hover:border-noveo-secondary transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-noveo-accent to-noveo-accent/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-poppins font-semibold text-noveo-primary mb-4">
                      {item.title}
                    </h3>
                    <p className="text-noveo-text font-inter leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 bg-noveo-neutral">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-noveo-primary mb-4">
              {dict.about.certifications.title}
            </h2>
          </div>
          
          <div className="flex justify-center items-center space-x-12">
            {dict.about.certifications.items.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg border-2 border-noveo-border">
                  <Award className="w-8 h-8 text-noveo-primary" />
                </div>
                <span className="text-noveo-primary font-poppins font-semibold">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-noveo-primary mb-4">
              {dict.about.team.title}
            </h2>
          </div>
          
                     <div className="bg-gradient-to-br from-noveo-primary to-noveo-primary/90 rounded-2xl p-8 md:p-12 text-white text-center">
             <Users className="w-16 h-16 mx-auto mb-6 text-noveo-secondary" />
             <h3 className="text-2xl font-poppins font-bold mb-4">
               {dict.about.team.subtitle}
             </h3>
             <p className="text-lg text-noveo-secondary mb-8 max-w-2xl mx-auto">
               {dict.about.team.description}
             </p>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <div className="text-center">
                 <div className="text-3xl font-poppins font-bold text-noveo-accent mb-2">{dict.about.team.stats.experience.value}</div>
                 <div className="text-sm text-noveo-secondary">{dict.about.team.stats.experience.label}</div>
               </div>
               <div className="text-center">
                 <div className="text-3xl font-poppins font-bold text-noveo-accent mb-2">{dict.about.team.stats.support.value}</div>
                 <div className="text-sm text-noveo-secondary">{dict.about.team.stats.support.label}</div>
               </div>
               <div className="text-center">
                 <div className="text-3xl font-poppins font-bold text-noveo-accent mb-2">{dict.about.team.stats.satisfaction.value}</div>
                 <div className="text-sm text-noveo-secondary">{dict.about.team.stats.satisfaction.label}</div>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* Sites Section */}
      <section className="py-20 bg-noveo-neutral">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold text-noveo-primary mb-4">
              {dict.about.sites.title}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(dict.about.sites.locations).map(([key, location]) => (
              <Card key={key} className="text-center border-noveo-border hover:border-noveo-secondary transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-noveo-secondary to-noveo-secondary/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-poppins font-semibold text-noveo-primary mb-2">
                    {location}
                  </h3>
                                     <p className="text-noveo-text font-inter">
                     {dict.about.sites.description}
                   </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-noveo-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">
            {dict.about.final_cta}
          </h2>
          <Button 
            asChild 
            size="lg"
            className="bg-noveo-accent hover:bg-noveo-accent/90 text-white font-poppins font-semibold text-lg px-8 py-4"
          >
            <Link href={`/${params.lang}/contact`}>
              {dict.final_cta.cta}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <JsonLd type="organization" lang={params.lang} dict={dict} />
    </div>
  )
} 