import Link from 'next/link'
import { Dictionary, Locale } from '@/lib/get-dictionary'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Quote } from 'lucide-react'

interface TestimonialsSectionProps {
  dict: Dictionary
  lang: Locale
}

export function TestimonialsSection({ dict, lang }: TestimonialsSectionProps) {
  const testimonials = dict.testimonials.clients.slice(0, 6)

  return (
    <section className="py-20 bg-noveo-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-noveo-primary mb-4">
            {dict.testimonials.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="group hover:shadow-lg transition-all duration-300 border-noveo-border hover:border-noveo-secondary bg-white">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Quote className="w-8 h-8 text-noveo-secondary" />
                  <Badge className="bg-noveo-secondary/20 text-noveo-primary hover:bg-noveo-secondary/30">
                    {testimonial.sector}
                  </Badge>
                </div>
                
                <blockquote className="text-noveo-text font-inter mb-6 italic leading-relaxed">
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

        <div className="text-center">
          <Button 
            asChild 
            variant="noveo_outline" 
            size="lg"
            className="font-poppins font-semibold"
          >
            <Link href={`/${lang}/testimonials`}>
              {dict.testimonials.cta}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
} 