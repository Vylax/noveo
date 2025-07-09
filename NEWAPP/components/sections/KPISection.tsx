'use client'

import { useEffect, useRef, useState } from 'react'
import { Dictionary } from '@/lib/get-dictionary'

interface KPISectionProps {
  dict: Dictionary
}

// Hook pour détecter quand un élément entre dans le viewport
function useIntersectionObserver(threshold = 0.1) {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return [ref, isIntersecting] as const
}

// Composant pour animer un compteur
function AnimatedCounter({ 
  endValue, 
  suffix = '', 
  prefix = '',
  duration = 2000,
  startAnimation = false 
}: {
  endValue: number
  suffix?: string
  prefix?: string
  duration?: number
  startAnimation?: boolean
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!startAnimation) return

    let startTime: number
    const startValue = 0

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      // Fonction d'easing pour une animation plus naturelle
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart)
      
      setCount(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [endValue, duration, startAnimation])

  return (
    <span className="text-4xl font-poppins font-bold text-white">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

export function KPISection({ dict }: KPISectionProps) {
  const [sectionRef, isIntersecting] = useIntersectionObserver(0.3)

  const kpis = [
    {
      value: 500,
      prefix: '+',
      suffix: '',
      label: 'Ports desservis dans le monde',
      icon: '🚢',
    },
    {
      value: 25000,
      prefix: '+',
      suffix: '',
      label: 'tonnes de fret aérien par an',
      icon: '✈️',
    },
    {
      value: 15,
      prefix: '',
      suffix: ' min',
      label: 'de temps de réponse moyen',
      icon: '⚡',
    },
    {
      value: 250,
      prefix: '+',
      suffix: '',
      label: 'chargeurs nous font confiance',
      icon: '🤝',
    },
  ]

  return (
    <section className="py-20 bg-noveo-primary text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-noveo-secondary rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-noveo-secondary rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-noveo-accent rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={sectionRef}>
        {/* Titre de section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-white mb-4">
            Noveo en chiffres
          </h2>
          <p className="text-xl text-noveo-secondary font-inter">
            La performance au service de votre réussite
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {kpis.map((kpi, index) => (
            <div 
              key={index} 
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              {/* Icône */}
              <div className="text-5xl mb-4 group-hover:animate-bounce">
                {kpi.icon}
              </div>
              
              {/* Compteur animé */}
              <div className="mb-2">
                <AnimatedCounter
                  endValue={kpi.value}
                  prefix={kpi.prefix}
                  suffix={kpi.suffix}
                  duration={2000 + index * 200} // Décalage pour effet en cascade
                  startAnimation={isIntersecting}
                />
              </div>
              
              {/* Label */}
              <div className="text-lg text-noveo-secondary font-inter font-medium">
                {kpi.label}
              </div>
            </div>
          ))}
        </div>

        {/* Message de confiance */}
        <div className="text-center mt-16">
          <p className="text-lg text-noveo-secondary font-inter max-w-2xl mx-auto">
            Plus qu'un transitaire, Noveo Logistics est votre partenaire stratégique pour optimiser votre supply chain Europe-Asie
          </p>
        </div>
      </div>
    </section>
  )
} 