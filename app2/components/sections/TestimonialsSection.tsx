'use client'

import { useState, useEffect, useRef } from 'react'
import { Dictionary, Locale } from '@/lib/get-dictionary'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface TestimonialsSectionProps {
  dict: Dictionary
  lang: Locale
}

export function TestimonialsSection({ dict, lang }: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Témoignages clients depuis le dictionnaire
  const testimonials = dict.testimonials.clients.map(client => ({
    ...client,
    rating: 5
  }))

  // Auto scroll functionality
  useEffect(() => {
    if (isAutoScrolling) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        )
      }, 4000) // Change every 4 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isAutoScrolling, testimonials.length])

  const handlePrevious = () => {
    setIsAutoScrolling(false)
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)
    // Resume auto scroll after 10 seconds
    setTimeout(() => setIsAutoScrolling(true), 10000)
  }

  const handleNext = () => {
    setIsAutoScrolling(false)
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)
    // Resume auto scroll after 10 seconds
    setTimeout(() => setIsAutoScrolling(true), 10000)
  }

  const goToSlide = (index: number) => {
    setIsAutoScrolling(false)
    setCurrentIndex(index)
    // Resume auto scroll after 10 seconds
    setTimeout(() => setIsAutoScrolling(true), 10000)
  }

  return (
    <section className="section-padding bg-off-white">
      <div className="container-max mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-h2 font-display font-bold text-noveo-blue mb-6">
            {dict.testimonials.title}
          </h2>
        </div>

        <div className="relative">
          {/* Main Testimonial Display */}
          <div className="bg-white rounded-2xl shadow-noveo p-8 md:p-12 mb-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-noveo-blue to-noveo-teal"></div>
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Quote Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-noveo-blue to-noveo-teal rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-lg md:text-xl text-dark-gray mb-6 italic leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h4 className="font-bold text-noveo-blue text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-dark-gray">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-noveo-teal font-semibold">
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-4 md:mt-0">
                    <span className="text-sm text-gray-500">{testimonials[currentIndex].sector}</span>
                    <div className="flex">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6">
            {/* Previous Button */}
            <button
              onClick={handlePrevious}
              className="p-3 rounded-full bg-white shadow-noveo hover:shadow-noveo-lg transition-all duration-300 hover:bg-noveo-blue hover:text-white"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dots Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-noveo-blue w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white shadow-noveo hover:shadow-noveo-lg transition-all duration-300 hover:bg-noveo-blue hover:text-white"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 