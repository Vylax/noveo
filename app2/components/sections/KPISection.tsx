'use client'

import { useState, useEffect, useRef } from 'react'
import { Dictionary, Locale } from '@/lib/get-dictionary'

interface KPISectionProps {
  dict: Dictionary
  lang: Locale
}

interface CounterProps {
  end: number
  duration: number
  suffix?: string
  prefix?: string
}

function Counter({ end, duration, suffix = '', prefix = '' }: CounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const countRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let start = 0
    const increment = end / (duration * 60) // 60 FPS
    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)

    return () => clearInterval(timer)
  }, [isVisible, end, duration])

  return (
    <span ref={countRef} className="kpi-counter">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

export function KPISection({ dict, lang }: KPISectionProps) {
  const kpis = [
    {
      key: 'ports',
      value: 500,
      suffix: '',
      prefix: '+',
      label: dict.kpis.ports,
    },
    {
      key: 'freight',
      value: 25000,
      suffix: '',
      prefix: '+',
      label: dict.kpis.freight,
    },
    {
      key: 'response',
      value: 15,
      suffix: ' min',
      prefix: '',
      label: dict.kpis.response,
    },
    {
      key: 'clients',
      value: 250,
      suffix: '',
      prefix: '+',
      label: dict.kpis.clients,
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {kpis.map((kpi, index) => (
            <div
              key={kpi.key}
              className="text-center animate-on-scroll"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Counter
                end={kpi.value}
                duration={2}
                suffix={kpi.suffix}
                prefix={kpi.prefix}
              />
              <p className="text-dark-gray mt-2 font-medium">
                {kpi.label.replace(`${kpi.prefix}${kpi.value}${kpi.suffix}`, '').trim()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 