'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { Truck, Ship, Plane, Cpu, Zap, ShoppingBag, FlaskConical, Snowflake, Gem, HeartPulse, Search, User, Globe } from 'lucide-react';
import { useTranslation } from '@/contexts/TranslationContext';

// SEO Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "FreightCompany",
  "name": "Noveo Logistics",
  "description": "Commissionnaire de transport nouvelle génération, alliant technologies digitales et expertise métier pour connecter l'Europe avec le reste du monde en toute fluidité.",
  "url": "https://noveo-logistics.com",
  "logo": "https://noveo-logistics.com/images/logo_long_for_white_bg.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33-1-00-00-00-00",
    "contactType": "Customer Service",
    "availableLanguage": ["French", "English"]
  },
  "areaServed": {
    "@type": "Place",
    "name": "Europe and Asia"
  },
  "service": [
    {
      "@type": "Service",
      "name": "Transport international",
      "description": "Transport aérien, maritime, multimodal"
    },
    {
      "@type": "Service", 
      "name": "Dédouanement",
      "description": "Conformité douanière et formalités"
    }
  ]
};

function Hero({ onSectionChange }: { onSectionChange: (section: 'quote' | 'logistics') => void }) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    // Start loading video immediately but with timeout fallback
    if (!mediaQuery.matches) {
      setShouldLoadVideo(true);
      
      // Fallback timeout - if video doesn't load in 3 seconds, show static background
      const timeoutId = setTimeout(() => {
        if (!videoLoaded) {
          setVideoError(true);
          console.log('Video loading timeout - falling back to static background');
        }
      }, 3000);

      return () => {
        mediaQuery.removeEventListener('change', handleChange);
        clearTimeout(timeoutId);
      };
    }
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [videoLoaded]);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
    setVideoError(false);
  };

  const handleVideoError = () => {
    setVideoError(true);
    setVideoLoaded(false);
    console.log('Video failed to load - using static background');
  };

  // Show video only if it loaded successfully and user doesn't prefer reduced motion
  const showVideo = !prefersReducedMotion && videoLoaded && !videoError;

  return (
    <section className="relative h-[85vh] overflow-hidden text-white flex flex-col items-center justify-center">
      {/* Video Background - with aggressive optimization */}
      {!prefersReducedMotion && shouldLoadVideo && !videoError ? (
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            showVideo ? 'opacity-100' : 'opacity-0'
          }`}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect width='100%25' height='100%25' fill='%23444'/%3E%3C/svg%3E"
          aria-label="Background video showing logistics operations"
          onLoadedData={handleVideoLoad}
          onCanPlayThrough={handleVideoLoad}
          onError={handleVideoError}
          onLoadStart={() => console.log('Video loading started')}
        >
          <source src="/videos/bg.mp4" type="video/mp4" />
        </video>
      ) : null}
      
      {/* Static fallback background - always available for instant loading */}
      <div 
        className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-700 ${
          showVideo ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559403838-80f0a78d5e6e?q=80&w=2070&auto=format&fit=crop')" }}
      />
      
      {/* Video Overlay */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl flex-1 flex flex-col justify-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-white">
          {t('hero.title')}
        </h1>
        <h2 className="text-2xl md:text-3xl mb-6 font-light text-white">
          {t('hero.subtitle')}
        </h2>
        <p className="text-xl md:text-2xl mb-8 font-light max-w-3xl mx-auto text-white">
          {t('hero.description')}
        </p>
      </div>
      
      {/* Service buttons positioned at bottom of hero */}
      <div className="relative z-20 w-full max-w-4xl mx-auto mb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          <div 
            className="p-8 text-center bg-noveo-teal hover:bg-noveo-teal-light cursor-pointer transition-colors"
            onClick={() => onSectionChange('quote')}
          >
            <h3 className="font-bold text-noveo-blue text-lg">{t('hero.requestQuote')}</h3>
          </div>
          <div 
            className="p-8 text-center bg-noveo-teal hover:bg-noveo-teal-light cursor-pointer transition-colors"
            onClick={() => onSectionChange('logistics')}
          >
            <h3 className="font-bold text-noveo-blue text-lg">{t('hero.logisticsSolutions')}</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

function DynamicSection({ activeSection }: { activeSection: 'quote' | 'logistics' }) {
  const [selectedOption, setSelectedOption] = useState('');
  const { t } = useTranslation();

  if (activeSection === 'quote') {
    return (
      <section className="bg-white py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-noveo-blue mb-8">
            {t('dynamic.quote.title')}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-end">
              <div className="flex-1">
                <div className="relative">
                  <select 
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="w-full p-4 border border-noveo-teal text-left bg-white appearance-none cursor-pointer text-noveo-blue"
                  >
                    <option value="">{t('dynamic.quote.choose')}</option>
                    <option value="spot">{t('dynamic.quote.spotQuote')}</option>
                    <option value="tariff">{t('dynamic.quote.tariffQuote')}</option>
                    <option value="offer">{t('dynamic.quote.offer')}</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg className="w-4 h-4 text-noveo-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              <button className="px-8 py-4 bg-noveo-blue text-white font-bold text-lg hover:bg-noveo-blue-dark transition-colors duration-300 whitespace-nowrap">
                {t('dynamic.quote.request')}
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-light text-noveo-blue mb-8">
          {t('dynamic.logistics.title')}
        </h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="px-8 py-4 bg-noveo-blue text-white font-bold text-lg hover:bg-noveo-blue-dark transition-colors duration-300">
            {t('dynamic.logistics.contractOffer')}
          </button>
          <button className="px-8 py-4 bg-noveo-blue text-white font-bold text-lg hover:bg-noveo-blue-dark transition-colors duration-300">
            {t('dynamic.logistics.learnMore')}
          </button>
        </div>
      </div>
    </section>
  );
}

function ExpertiseSection() {
  const { t } = useTranslation();
  
  return (
    <section className="bg-noveo-teal-light py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-light text-noveo-blue mb-4">{t('expertise.title')}</h2>
        <p className="max-w-2xl mx-auto text-noveo-blue mb-4 text-lg">
          {t('expertise.description')}
        </p>
        <p className="max-w-2xl mx-auto text-noveo-blue mb-8 text-lg font-semibold">
          {t('expertise.subtitle')}
        </p>
        <div className="mb-8">
          <h3 className="text-xl font-bold text-noveo-blue">{t('expertise.transitaire')}</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="relative h-48 overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
              alt="Fret aérien"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
              className="object-cover"
              priority={false}
            />
            <div className="absolute inset-0 bg-noveo-blue bg-opacity-20 flex items-center justify-center">
              <h4 className="text-white font-bold text-lg">Fret aérien</h4>
            </div>
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1565365354813-b0b6cd12cd4c?w=400&h=300&fit=crop"
              alt="Fret maritime"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
              className="object-cover"
              priority={false}
            />
            <div className="absolute inset-0 bg-noveo-blue bg-opacity-20 flex items-center justify-center">
              <h4 className="text-white font-bold text-lg">Fret maritime</h4>
            </div>
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop"
              alt="Plateforme digitale"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
              className="object-cover"
              priority={false}
            />
            <div className="absolute inset-0 bg-noveo-blue bg-opacity-20 flex items-center justify-center">
              <h4 className="text-white font-bold text-lg">Plateforme digitale</h4>
            </div>
          </div>
        </div>
        <button className="px-8 py-3 bg-transparent text-noveo-blue font-semibold border border-noveo-blue hover:bg-noveo-blue hover:text-white transition-colors duration-300">
          {t('expertise.cta')}
        </button>
      </div>
    </section>
  );
}

function MissionSection() {
  const { t } = useTranslation();
  
  return (
    <section className="bg-white py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-noveo-blue mb-6">
            {t('mission.title')}
          </h2>
          <h3 className="text-xl md:text-2xl text-noveo-blue mb-8 font-semibold">
            {t('mission.subtitle')}
          </h3>
          <p className="text-lg text-noveo-blue mb-8">
            {t('mission.description')}
          </p>
          <div className="text-left max-w-2xl mx-auto mb-8">
            <ul className="space-y-3 text-noveo-blue">
              <li className="flex items-start">
                <span className="text-noveo-teal mr-2">•</span>
                <span>{t('mission.feature1')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-noveo-teal mr-2">•</span>
                <div className="flex-1">
                  <span>{t('mission.feature2')}</span>
                  <ul className="space-y-2 mt-2 ml-4">
                    <li className="flex items-start">
                      <span className="text-noveo-teal mr-2">◦</span>
                      <span>{t('mission.feature3')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-noveo-teal mr-2">◦</span>
                      <span>{t('mission.feature4')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-noveo-teal mr-2">◦</span>
                      <span>{t('mission.feature5')}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-noveo-teal mr-2">◦</span>
                      <span>{t('mission.feature6')}</span>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <button className="px-8 py-3 bg-noveo-blue text-white font-semibold hover:bg-noveo-blue-dark transition-colors duration-300">
            {t('mission.cta')}
          </button>
        </div>
      </div>
    </section>
  );
}

function IndustrySolutions() {
  const { t } = useTranslation();
  
  const sectors = [
    { key: 'energy', icon: '⛽', color: 'bg-orange-100' },
    { key: 'dangerous', icon: '☣️', color: 'bg-red-100' },
    { key: 'aeronautic', icon: '✈️', color: 'bg-blue-100' },
    { key: 'wines', icon: '🍷', color: 'bg-purple-100' },
    { key: 'automotive', icon: '🚗', color: 'bg-green-100' },
    { key: 'ecommerce', icon: '🛒', color: 'bg-yellow-100' },
    { key: 'medical', icon: '🦷', color: 'bg-pink-100' },
  ];

  return (
    <section className="py-20 bg-noveo-teal-light">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-noveo-blue mb-4">
            {t('industries.title')}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector) => (
            <div key={sector.key} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className={`w-12 h-12 ${sector.color} rounded-full flex items-center justify-center text-2xl mb-4`}>
                {sector.icon}
              </div>
              <h3 className="font-bold text-lg text-noveo-blue mb-3">
                {t(`industries.sectors.${sector.key}.title`)}
              </h3>
              <p className="text-sm text-noveo-blue">
                {t(`industries.sectors.${sector.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FluidLogisticsSection() {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-noveo-blue mb-6">
              {t('fluidLogistics.title')}
            </h2>
            <h3 className="text-xl text-noveo-blue mb-6 font-semibold">
              {t('fluidLogistics.subtitle')}
            </h3>
            <p className="text-lg text-noveo-blue mb-6">
              {t('fluidLogistics.description')}
            </p>
            <ul className="space-y-4 text-noveo-blue mb-8">
              <li className="flex items-start">
                <span className="text-noveo-teal mr-3 mt-1">✓</span>
                <span>{t('fluidLogistics.feature1')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-noveo-teal mr-3 mt-1">✓</span>
                <span>{t('fluidLogistics.feature2')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-noveo-teal mr-3 mt-1">✓</span>
                <span>{t('fluidLogistics.feature3')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-noveo-teal mr-3 mt-1">✓</span>
                <span>{t('fluidLogistics.feature4')}</span>
              </li>
            </ul>
            <button className="px-8 py-3 bg-noveo-blue text-white font-semibold hover:bg-noveo-blue-dark transition-colors duration-300">
              {t('fluidLogistics.cta')}
            </button>
          </div>
          <div className="relative h-96">
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop"
              alt="Plateforme logistique connectée"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover rounded-lg"
              priority={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 bg-noveo-blue text-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-light text-center mb-12">{t('stats.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl lg:text-5xl font-light text-noveo-teal mb-4">
              {t('stats.items.ports.number')}
            </p>
            <p className="text-lg">{t('stats.items.ports.label')}</p>
          </div>
          <div>
            <p className="text-4xl lg:text-5xl font-light text-noveo-teal mb-4">
              {t('stats.items.volumes.number')}
            </p>
            <p className="text-lg">{t('stats.items.volumes.label')}</p>
          </div>
          <div>
            <p className="text-4xl lg:text-5xl font-light text-noveo-teal mb-4">
              {t('stats.items.response.number')}
            </p>
            <p className="text-lg">{t('stats.items.response.label')}</p>
          </div>
          <div>
            <p className="text-4xl lg:text-5xl font-light text-noveo-teal mb-4">
              {t('stats.items.clients.number')}
            </p>
            <p className="text-lg">{t('stats.items.clients.label')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 bg-noveo-teal-light">
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-light text-noveo-blue mb-8">{t('testimonials.title')}</h2>
        <div className="mb-12">
          <blockquote className="text-2xl lg:text-3xl font-light mb-6 text-noveo-blue">
            {t('testimonials.quote')}
          </blockquote>
          <cite className="font-semibold not-italic text-lg text-noveo-blue">
            {t('testimonials.profiles')}
          </cite>
        </div>
        <div className="text-center">
          <p className="text-noveo-blue font-semibold">{t('testimonials.moreTestimonials')}</p>
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 bg-white">
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-light text-noveo-blue mb-8">
          {t('finalCTA.title')}
        </h2>
        <button className="px-8 py-4 bg-noveo-blue text-white font-bold text-lg hover:bg-noveo-blue-dark transition-colors duration-300 rounded-lg">
          {t('finalCTA.cta')}
        </button>
      </div>
    </section>
  );
}

function FAQSection() {
  const { t } = useTranslation();
  
  return (
    <section className="py-20 bg-noveo-teal-light">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-light text-noveo-blue mb-8">{t('faq.title')}</h2>
        <p className="text-lg text-noveo-blue">{t('faq.description')}</p>
        {/* FAQ content can be expanded later */}
      </div>
    </section>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState<'quote' | 'logistics'>('logistics');

  return (
    <>
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      
      <Hero onSectionChange={setActiveSection} />
      <DynamicSection activeSection={activeSection} />
      <ExpertiseSection />
      <MissionSection />
      <IndustrySolutions />
      <FluidLogisticsSection />
      <StatsSection />
      <TestimonialsSection />
      <FinalCTASection />
      <FAQSection />
    </>
  );
}

