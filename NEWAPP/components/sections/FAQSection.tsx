'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Dictionary } from '@/lib/get-dictionary'
import { JsonLd } from '@/components/seo/JsonLd'

interface FAQSectionProps {
  dict: Dictionary
  lang: 'fr' | 'en' | 'zh'
}

export function FAQSection({ dict, lang }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-noveo-primary mb-4">
            {dict.faq.title}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {dict.faq.questions.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border border-noveo-border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-noveo-secondary/10 transition-colors"
              >
                <h3 className="text-lg font-display font-semibold text-noveo-primary pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-noveo-accent flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-noveo-accent flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6 pt-2 border-t border-noveo-border">
                  <p className="text-noveo-text font-sans leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* JSON-LD for FAQ */}
      <JsonLd 
        type="faq" 
        lang={lang} 
        dict={dict} 
        data={{ questions: dict.faq.questions }} 
      />
    </section>
  )
} 