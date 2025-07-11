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
    <section className="py-20 bg-noveo-neutral">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-noveo-primary mb-4">
            {dict.about.timeline.title}
          </h2>
          <p className="text-lg text-noveo-text font-inter max-w-3xl mx-auto">
            {dict.about.timeline.description}
          </p>
        </div>

        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-noveo-border"></div>

          {dict.about.timeline.events.map((event, index) => (
            <div
              key={index}
              className={`timeline-item relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-noveo-accent rounded-full border-4 border-white shadow-lg hover:bg-noveo-secondary transition-colors duration-300 z-10"></div>

              {/* Content */}
              <div className={`bg-white rounded-2xl shadow-lg border border-noveo-border p-8 hover:shadow-xl hover:border-noveo-secondary transition-all duration-300 ${
                index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
              }`}>
                <div className="flex items-center mb-4">
                  <div className={`text-white px-4 py-2 rounded-lg ${
                    index % 2 === 0 
                      ? 'bg-[#95c2b8]' 
                      : 'bg-gradient-to-r from-noveo-primary to-noveo-primary/80'
                  }`}>
                    <span className="text-2xl font-poppins font-bold">
                      {event.year}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-poppins font-semibold text-noveo-primary mb-3">
                  {event.title}
                </h3>
                <p className="text-noveo-text font-inter leading-relaxed">
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