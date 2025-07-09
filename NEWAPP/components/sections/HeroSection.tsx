import Link from 'next/link'
import { Dictionary, Locale } from '@/lib/get-dictionary'
import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronDown } from 'lucide-react'

interface HeroSectionProps {
  dict: Dictionary
  lang: Locale
}

export function HeroSection({ dict, lang }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-ovrsea-navy to-ovrsea-navy/90 flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-ovrsea-mint to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(164,223,210,0.1),transparent_70%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6 animate-fade-in-up">
            {dict.hero.title}
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl font-poppins font-semibold mb-6 text-ovrsea-mint animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {dict.hero.subtitle}
          </h2>
          
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {dict.hero.description}
          </p>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              asChild 
              variant="noveo_mint" 
              size="lg"
              className="text-lg px-8 py-4 hover:scale-105 transition-transform duration-200"
            >
              <Link href={`/${lang}/contact`}>
                {dict.hero.cta}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <ChevronDown className="w-6 h-6 text-white" />
        </div>
      </div>
    </section>
  )
} 