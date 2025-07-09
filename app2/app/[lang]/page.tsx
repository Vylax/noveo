import { getDictionary, type Locale } from '@/lib/get-dictionary'
import { HeroSection } from '@/components/sections/HeroSection'
import { ExpertiseSection } from '@/components/sections/ExpertiseSection'
import { MissionSection } from '@/components/sections/MissionSection'
import { PlatformSection } from '@/components/sections/PlatformSection'
import { KPISection } from '@/components/sections/KPISection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { FinalCTASection } from '@/components/sections/FinalCTASection'
import { JsonLd } from '@/components/seo/JsonLd'
import { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang)
  
  return {
    title: 'Commissionnaire de Transport Digital Europe-Asie',
    description: dict.hero.description,
    openGraph: {
      title: dict.hero.title,
      description: dict.hero.description,
      type: 'website',
    },
  }
}

export default async function HomePage({
  params,
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(params.lang)

  return (
    <>
      <HeroSection dict={dict} lang={params.lang} />
      <ExpertiseSection dict={dict} lang={params.lang} />
      <MissionSection dict={dict} lang={params.lang} />
      <PlatformSection dict={dict} lang={params.lang} />
      <KPISection dict={dict} lang={params.lang} />
      <TestimonialsSection dict={dict} lang={params.lang} />
      <FAQSection dict={dict} lang={params.lang} />
      <FinalCTASection dict={dict} lang={params.lang} />
      
      <JsonLd
        type="faq"
        lang={params.lang}
        data={{ questions: dict.faq.questions }}
      />
    </>
  )
} 