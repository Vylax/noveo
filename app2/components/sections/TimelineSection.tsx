'use client'

import { useEffect, useRef } from 'react'
import { Dictionary, Locale } from '@/lib/get-dictionary'

interface TimelineSectionProps {
  dict: Dictionary
  lang: Locale
}

export function TimelineSection({ dict, lang }: TimelineSectionProps) {
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
          }
        })
      },
      { threshold: 0.1 }
    )

    const timelineItems = timelineRef.current?.querySelectorAll('.timeline-item')
    timelineItems?.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  const timelineEvents = [
    {
      year: '2020',
      title: 'Fondation de Noveo Logistics',
      description: 'Benjamin Tapiero fonde Noveo Logistics avec une vision claire : révolutionner la logistique Europe-Asie.',
      image: '/images/timeline/foundation.jpg',
    },
    {
      year: '2021',
      title: 'Expansion en Asie',
      description: 'Ouverture des bureaux de Hong Kong et Guangzhou pour ancrer notre présence en Asie.',
      image: '/images/timeline/expansion.jpg',
    },
    {
      year: '2022',
      title: 'Lancement de la plateforme digitale',
      description: 'Développement et déploiement de notre TMS propriétaire pour une logistique augmentée.',
      image: '/images/timeline/platform.jpg',
    },
    {
      year: '2023',
      title: 'Certifications internationales',
      description: 'Obtention des certifications OEA, IATA CASS et RDE pour une expertise reconnue.',
      image: '/images/timeline/certifications.jpg',
    },
    {
      year: '2024',
      title: 'Leadership sectorial',
      description: 'Noveo devient leader sur plusieurs niches industrielles stratégiques.',
      image: '/images/timeline/leadership.jpg',
    },
  ]

  return (
    <section className="section-padding bg-off-white">
      <div className="container-max mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-h2 font-display font-bold text-noveo-blue mb-4">
            Notre Histoire
          </h2>
          <p className="text-lg text-dark-gray max-w-3xl mx-auto">
            Découvrez les étapes clés de notre évolution depuis notre création
          </p>
        </div>

        <div ref={timelineRef} className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-light-gray"></div>

          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className={`timeline-item relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-noveo-teal rounded-full border-4 border-white shadow-lg hover:bg-noveo-orange transition-colors duration-300"></div>

              {/* Content */}
              <div className={`bg-white rounded-lg shadow-noveo p-6 hover:shadow-noveo-lg transition-shadow duration-300 ${
                index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
              }`}>
                <div className="flex items-center mb-4">
                  <span className="text-3xl font-display font-bold text-noveo-blue">
                    {event.year}
                  </span>
                </div>
                <h3 className="text-xl font-display font-semibold text-noveo-blue mb-2">
                  {event.title}
                </h3>
                <p className="text-dark-gray">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 