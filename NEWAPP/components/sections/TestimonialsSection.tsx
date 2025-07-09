'use client'

import { useState } from 'react'
import { Dictionary, Locale } from '@/lib/get-dictionary'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

interface TestimonialsSectionProps {
  dict: Dictionary
  lang: Locale
}

export function TestimonialsSection({ dict, lang }: TestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const testimonials = dict.testimonials.clients
  const itemsPerPage = 3

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerPage >= testimonials.length ? 0 : prev + itemsPerPage
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, testimonials.length - itemsPerPage) : prev - itemsPerPage
    )
  }

  const currentTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerPage)

  return (
    <section className="py-20 bg-noveo-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-noveo-primary mb-4">
            {dict.testimonials.title}
          </h2>
        </div>

        {/* Carrousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={prevSlide}
              className="bg-white shadow-lg rounded-full p-3 hover:bg-noveo-secondary/10 transition-colors border border-noveo-border"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="w-6 h-6 text-noveo-primary" />
            </button>
          </div>
          
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={nextSlide}
              className="bg-white shadow-lg rounded-full p-3 hover:bg-noveo-secondary/10 transition-colors border border-noveo-border"
              disabled={currentIndex + itemsPerPage >= testimonials.length}
            >
              <ChevronRight className="w-6 h-6 text-noveo-primary" />
            </button>
          </div>

          {/* Testimonials Grid */}
          <div className="mx-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
              {currentTestimonials.map((testimonial, index) => (
                <Card 
                  key={testimonial.id} 
                  className="group hover:shadow-lg transition-all duration-300 border-noveo-border hover:border-noveo-secondary bg-white h-full"
                >
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <Quote className="w-8 h-8 text-noveo-secondary" />
                      <Badge className="bg-noveo-secondary/20 text-noveo-primary hover:bg-noveo-secondary/30">
                        {testimonial.sector}
                      </Badge>
                    </div>
                    
                    <blockquote className="text-noveo-text font-inter mb-6 italic leading-relaxed flex-grow">
                      "{testimonial.content}"
                    </blockquote>
                    
                    <div className="border-t border-noveo-border pt-4">
                      <div className="font-poppins font-semibold text-noveo-primary">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-noveo-text font-inter">
                        {testimonial.role}
                      </div>
                      <div className="text-sm text-noveo-secondary font-inter font-medium">
                        {testimonial.company}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Indicateurs de pagination */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(testimonials.length / itemsPerPage) }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i * itemsPerPage)}
              className={`w-3 h-3 rounded-full transition-colors ${
                Math.floor(currentIndex / itemsPerPage) === i
                  ? 'bg-noveo-primary'
                  : 'bg-noveo-border hover:bg-noveo-secondary'
              }`}
            />
          ))}
        </div>

        {/* Statistiques */}
        <div className="text-center mt-12">
          <p className="text-noveo-text font-inter">
            {currentIndex + 1}-{Math.min(currentIndex + itemsPerPage, testimonials.length)} {lang === 'fr' ? 'sur' : lang === 'en' ? 'of' : '共'} {testimonials.length} {lang === 'fr' ? 'témoignages' : lang === 'en' ? 'testimonials' : '推荐'}
          </p>
        </div>
      </div>
    </section>
  )
} 