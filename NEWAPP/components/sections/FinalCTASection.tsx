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
            {dict.final_cta.title}
          </h2>
          
          <p className="text-xl md:text-2xl text-noveo-secondary font-inter mb-8 max-w-3xl mx-auto">
            {dict.final_cta.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild 
              size="lg"
              className="bg-noveo-accent hover:bg-noveo-accent/90 text-white font-poppins font-semibold text-lg px-8 py-4"
            >
              <Link href={`/${lang}/contact`}>
                {dict.final_cta.cta}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="noveo_outline"
              size="lg"
              className="border-noveo-secondary text-noveo-secondary hover:bg-noveo-secondary hover:text-noveo-primary font-poppins font-semibold text-lg px-8 py-4"
            >
              <Link href={`/${lang}/solutions`}>
                {dict.final_cta.discover_solutions}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
} 