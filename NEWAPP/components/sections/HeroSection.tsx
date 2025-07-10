import Link from 'next/link'
import Image from 'next/image'
import { Dictionary, Locale } from '@/lib/get-dictionary'
import { Button } from '@/components/ui/button'
import { ArrowRight, ChevronDown } from 'lucide-react'

interface HeroSectionProps {
  dict: Dictionary
  lang: Locale
}

export function HeroSection({ dict, lang }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-noveo-primary to-noveo-primary/90 flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-noveo-secondary to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(150,194,184,0.1),transparent_70%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Text Content */}
          <div key="hero-text" className="text-center lg:text-left text-white">
            {/* H1 Principal selon guidelines */}
            <h1 key="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-in-up">
              {dict.hero.title}
            </h1>
            
            {/* Sous-titre avec accent */}
            <h2 key="hero-subtitle" className="text-xl md:text-2xl lg:text-3xl font-display font-semibold mb-6 text-noveo-secondary animate-fade-in-up [animation-delay:0.2s]">
              {dict.hero.subtitle}
            </h2>
            
            {/* Description */}
            <p key="hero-description" className="text-lg md:text-xl mb-8 text-gray-200 font-sans animate-fade-in-up [animation-delay:0.4s]">
              {dict.hero.description}
            </p>
            
            {/* CTA Principal avec couleur orange accent selon guidelines */}
            <div key="hero-cta" className="animate-fade-in-up mb-8 [animation-delay:0.6s]">
              <Button 
                asChild 
                size="lg"
                className="bg-noveo-accent hover:bg-noveo-accent/90 text-white font-display font-semibold text-lg px-8 py-4 rounded-lg hover:scale-105 transition-all duration-200 shadow-lg"
              >
                <Link href={`/${lang}/contact`}>
                  {dict.hero.cta}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>

            {/* Badge de confiance - certifications */}
            <div key="hero-certifications" className="animate-fade-in-up [animation-delay:0.8s]">
              <p className="text-sm text-noveo-secondary/80 mb-4 font-sans">{dict.hero.certifications.title}</p>
              <div className="flex justify-center lg:justify-start items-center space-x-8 text-xs text-white/70">
                {dict.hero.certifications.items.map((cert, index) => (
                  <span key={`cert-${index}`} className="flex items-center space-x-2">
                    <div className="w-8 h-6 bg-noveo-secondary rounded flex items-center justify-center">
                      <span className="text-noveo-primary text-xs font-bold">{cert}</span>
                    </div>
                    <span>{cert}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div key="hero-image" className="order-first lg:order-last animate-fade-in-up [animation-delay:0.3s]">
            <div className="relative">
              <Image 
                src="/images/temp.webp" 
                alt="Noveo Logistics Supply Chain" 
                width={0}
                height={0}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto"
                priority
              />
            </div>
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