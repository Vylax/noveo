import Link from 'next/link'
import { Dictionary, Locale } from '@/lib/get-dictionary'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

interface FinalCTASectionProps {
  dict: Dictionary
  lang: Locale
}

export function FinalCTASection({ dict, lang }: FinalCTASectionProps) {
  return (
    <section className="py-16 bg-gradient-to-r from-ovrsea-navy to-ovrsea-navy/90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-8">
            {dict.final_cta.title}
          </h2>
          
          <Button asChild variant="noveo_mint" size="lg" className="text-lg px-8 py-4">
            <Link href={`/${lang}/contact`}>
              {dict.final_cta.cta}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
} 