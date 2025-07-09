import { getDictionary, type Locale } from '@/lib/get-dictionary'
import { HeroSection } from '@/components/sections/HeroSection'
import { ExpertiseSection } from '@/components/sections/ExpertiseSection'
import { MissionSection } from '@/components/sections/MissionSection'
import { KPISection } from '@/components/sections/KPISection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { FinalCTASection } from '@/components/sections/FinalCTASection'

interface PageProps {
  params: { lang: Locale }
}

export default async function HomePage({ params }: PageProps) {
  const dict = await getDictionary(params.lang)

  return (
    <>
      <HeroSection dict={dict} lang={params.lang} />
      <ExpertiseSection dict={dict} lang={params.lang} />
      <MissionSection dict={dict} lang={params.lang} />
      <KPISection dict={dict} />
      <TestimonialsSection dict={dict} lang={params.lang} />
      <FAQSection dict={dict} lang={params.lang} />
      <FinalCTASection dict={dict} lang={params.lang} />
    </>
  )
} 