import Link from 'next/link'
import Image from 'next/image'
import { Dictionary, Locale } from '@/lib/get-dictionary'

interface PlatformSectionProps {
  dict: Dictionary
  lang: Locale
}

export function PlatformSection({ dict, lang }: PlatformSectionProps) {
  return (
    <section className="section-padding bg-gradient-to-br from-noveo-blue to-noveo-teal">
      <div className="container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="text-white">
            <h2 className="text-h2 font-display font-bold mb-6">
              {dict.platform.title}
            </h2>
            
            <div className="mb-8">
              <Link
                href={`/${lang}/contact`}
                className="btn-primary bg-noveo-orange hover:bg-orange-600"
              >
                {dict.platform.cta}
              </Link>
            </div>
          </div>

          {/* Right Column - Platform Interface Mockup */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
              <div className="relative h-80 bg-white rounded-xl overflow-hidden">
                <Image
                  src="/images/platform-mockup.png"
                  alt="Noveo Platform Interface"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                
                {/* Animated elements overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-noveo-teal/20">
                  <div className="absolute top-4 right-4 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-16 h-2 bg-noveo-orange rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 