import { getDictionary, type Locale } from '@/lib/get-dictionary'
import { TimelineSection } from '@/components/sections/TimelineSection'
import { JsonLd } from '@/components/seo/JsonLd'
import { Metadata } from 'next'

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
    },
  }
}

export default async function AboutPage({
  params,
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(params.lang)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-noveo-blue to-noveo-teal">
        <div className="container-max mx-auto text-center">
          <h1 className="text-h1 font-display font-bold text-white mb-6">
            {dict.about.title}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            {dict.about.description}
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <TimelineSection dict={dict} lang={params.lang} />

      {/* Engagements Section */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-h2 font-display font-bold text-noveo-blue mb-4">
              {dict.about.engagements.title}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dict.about.engagements.items.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-noveo-teal rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-semibold text-noveo-blue mb-2">
                  {item.title}
                </h3>
                <p className="text-dark-gray">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <JsonLd type="organization" lang={params.lang} dict={dict} />
    </div>
  )
} 