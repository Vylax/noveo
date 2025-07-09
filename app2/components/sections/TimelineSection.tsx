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

  return (
    <section className="section-padding bg-off-white">
      <div className="container-max mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-h2 font-display font-bold text-noveo-blue mb-4">
            {dict.about.timeline.title}
          </h2>
          <p className="text-lg text-dark-gray max-w-3xl mx-auto">
            {dict.about.timeline.description}
          </p>
        </div>

        <div ref={timelineRef} className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-light-gray"></div>

          {dict.about.timeline.events.map((event, index) => (
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