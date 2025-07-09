import Link from 'next/link'
import Image from 'next/image'
import { Dictionary, Locale } from '@/lib/get-dictionary'

interface MissionSectionProps {
  dict: Dictionary
  lang: Locale
}

export function MissionSection({ dict, lang }: MissionSectionProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-max mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-h2 font-display font-bold text-noveo-blue mb-6 max-w-4xl mx-auto">
            {dict.mission.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Technology */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-noveo-teal/10 rounded-full mb-4">
                <svg className="w-8 h-8 text-noveo-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-h3 font-display font-semibold text-noveo-blue mb-4">
                {dict.mission.tech.title}
              </h3>
            </div>

            <ul className="space-y-3">
              {dict.mission.tech.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-noveo-teal rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-dark-gray">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Human Expertise */}
          <div className="space-y-6">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-noveo-orange/10 rounded-full mb-4">
                <svg className="w-8 h-8 text-noveo-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                </svg>
              </div>
              <h3 className="text-h3 font-display font-semibold text-noveo-blue mb-4">
                {dict.mission.human.title}
              </h3>
            </div>

            <ul className="space-y-3">
              {dict.mission.human.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-5 h-5 bg-noveo-orange rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-dark-gray">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href={`/${lang}/solutions`}
            className="btn-primary"
          >
            {dict.mission.cta}
          </Link>
        </div>
      </div>
    </section>
  )
} 