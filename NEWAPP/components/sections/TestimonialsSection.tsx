import Link from 'next/link'
import { Dictionary, Locale } from '@/lib/get-dictionary'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Quote, ArrowRight } from 'lucide-react'

interface TestimonialsSectionProps {
  dict: Dictionary
  lang: Locale
}

export function TestimonialsSection({ dict, lang }: TestimonialsSectionProps) {
  // Display first 3 testimonials
  const testimonials = dict.testimonials.clients.slice(0, 3)

  return (
    <section className="py-16 bg-ovrsea-neutral">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-ovrsea-navy mb-4">
            {dict.testimonials.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-white border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-ovrsea-mint rounded-full">
                    <Quote className="w-4 h-4 text-ovrsea-navy" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-ovrsea-navy font-poppins text-lg">
                      {testimonial.name}
                    </CardTitle>
                    <CardDescription className="text-ovrsea-darkgray">
                      {testimonial.role}
                    </CardDescription>
                    <CardDescription className="text-ovrsea-darkgray font-medium">
                      {testimonial.company}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-ovrsea-darkgray mb-4 italic">
                  "{testimonial.content}"
                </p>
                <Badge variant="noveo_mint" className="text-xs">
                  {testimonial.sector}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="noveo_outline" size="lg">
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