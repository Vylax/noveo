import Link from 'next/link'
import { Dictionary, Locale } from '@/lib/get-dictionary'

interface HeroSectionProps {
  dict: Dictionary
  lang: Locale
}

export function HeroSection({ dict, lang }: HeroSectionProps) {
  return (
    <section className="hero-section bg-gradient-to-br from-noveo-blue to-noveo-teal">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src="/videos/hero-logistics.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-noveo-blue/80 to-noveo-teal/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-max mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 animate-fade-in-up">
            {dict.hero.title}
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl font-display font-semibold mb-6 text-noveo-teal animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {dict.hero.subtitle}
          </h2>
          
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {dict.hero.description}
          </p>
          
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Link
              href={`/${lang}/contact`}
              className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2 hover:scale-105 transition-transform duration-200"
            >
              <span>{dict.hero.cta}</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
} 