import Link from 'next/link'
import { Dictionary, Locale } from '@/lib/get-dictionary'

interface FinalCTASectionProps {
  dict: Dictionary
  lang: Locale
}

export function FinalCTASection({ dict, lang }: FinalCTASectionProps) {
  return (
    <section className="section-padding bg-gradient-to-r from-noveo-blue to-noveo-teal">
      <div className="container-max mx-auto text-center">
        <h2 className="text-h2 font-display font-bold text-white mb-8 max-w-4xl mx-auto">
          {dict.final_cta.title}
        </h2>
        
        <Link
          href={`/${lang}/contact`}
          className="btn-primary bg-noveo-orange hover:bg-orange-600 text-lg px-8 py-4"
        >
          {dict.final_cta.cta}
        </Link>
      </div>
    </section>
  )
} 