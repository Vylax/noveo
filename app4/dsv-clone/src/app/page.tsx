'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { Truck, Ship, Plane, Cpu, Zap, ShoppingBag, FlaskConical, Snowflake, Gem, HeartPulse, Search, User, Globe, ChevronLeft, ChevronRight, Check, ArrowRight, Fuel, Shield, Wine, Car, Package, Stethoscope } from 'lucide-react';
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="group relative h-48 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2">
            <Image
              src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=400&h=300&fit=crop"
              alt={t('expertise.services.airFreight')}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noveo-blue/80 via-noveo-blue/30 to-transparent transition-all duration-500 group-hover:from-noveo-blue/90 group-hover:via-noveo-blue/40 flex items-end justify-center pb-4">
              <h4 className="text-white font-bold text-lg text-center transform transition-all duration-500 group-hover:scale-110 group-hover:translate-y-[-4px]">{t('expertise.services.airFreight')}</h4>
            </div>
            <div className="absolute top-4 right-4 w-2 h-2 bg-noveo-teal rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          </div>
          <div className="group relative h-48 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2">
            <Image
              src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=400&h=300&fit=crop"
              alt={t('expertise.services.seaFreight')}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noveo-blue/80 via-noveo-blue/30 to-transparent transition-all duration-500 group-hover:from-noveo-blue/90 group-hover:via-noveo-blue/40 flex items-end justify-center pb-4">
              <h4 className="text-white font-bold text-lg text-center transform transition-all duration-500 group-hover:scale-110 group-hover:translate-y-[-4px]">{t('expertise.services.seaFreight')}</h4>
            </div>
            <div className="absolute top-4 right-4 w-2 h-2 bg-noveo-teal rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          </div>
          <div className="group relative h-48 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2">
            <Image
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400&h=300&fit=crop"
              alt={t('expertise.services.roadFreight')}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noveo-blue/80 via-noveo-blue/30 to-transparent transition-all duration-500 group-hover:from-noveo-blue/90 group-hover:via-noveo-blue/40 flex items-end justify-center pb-4">
              <h4 className="text-white font-bold text-lg text-center transform transition-all duration-500 group-hover:scale-110 group-hover:translate-y-[-4px]">{t('expertise.services.roadFreight')}</h4>
            </div>
            <div className="absolute top-4 right-4 w-2 h-2 bg-noveo-teal rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          </div>
          <div className="group relative h-48 overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2">
            <Image
              src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
              alt={t('expertise.services.multimodal')}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-noveo-blue/80 via-noveo-blue/30 to-transparent transition-all duration-500 group-hover:from-noveo-blue/90 group-hover:via-noveo-blue/40 flex items-end justify-center pb-4">
              <h4 className="text-white font-bold text-lg text-center transform transition-all duration-500 group-hover:scale-110 group-hover:translate-y-[-4px]">{t('expertise.services.multimodal')}</h4>
            </div>
            <div className="absolute top-4 right-4 w-2 h-2 bg-noveo-teal rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          </div>
        </div>
        <button className="px-8 py-4 bg-noveo-blue text-white font-bold text-lg hover:bg-noveo-blue-dark transition-colors duration-300">
          {t('expertise.cta')}
        </button>
      </div>
    </section>
  );
}

function MissionSection() {
  const { t } = useTranslation();
  
  return (
    <section className="bg-noveo-teal-light py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 lg:h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=500&fit=crop"
              alt="Notre mission - expertise logistique et technologie"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover shadow-lg"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-l from-noveo-blue/10 to-transparent"></div>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-light text-noveo-blue mb-6">
              {t('mission.title')}
            </h2>
            <h3 className="text-xl md:text-2xl text-noveo-blue mb-8 font-semibold">
              {t('mission.subtitle')}
            </h3>
            <p className="text-lg text-noveo-blue mb-8">
              {t('mission.description')}
            </p>
            <div className="text-left mb-8">
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
            <button className="px-8 py-4 bg-noveo-blue text-white font-bold text-lg hover:bg-noveo-blue-dark transition-colors duration-300">
              {t('mission.cta')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustrySolutions() {
  const { t } = useTranslation();
  
  const sectors = [
    { 
      key: 'energy', 
      icon: Fuel, 
      gradient: 'from-orange-500 to-red-600',
      bgGradient: 'from-orange-100 to-red-100',
      index: '01'
    },
    { 
      key: 'dangerous', 
      icon: Shield, 
      gradient: 'from-red-500 to-pink-600',
      bgGradient: 'from-red-100 to-pink-100',
      index: '02'
    },
    { 
      key: 'aeronautic', 
      icon: Plane, 
      gradient: 'from-blue-500 to-indigo-600',
      bgGradient: 'from-blue-100 to-indigo-100',
      index: '03'
    },
    { 
      key: 'wines', 
      icon: Wine, 
      gradient: 'from-purple-500 to-pink-600',
      bgGradient: 'from-purple-100 to-pink-100',
      index: '04'
    },
    { 
      key: 'automotive', 
      icon: Car, 
      gradient: 'from-gray-600 to-gray-800',
      bgGradient: 'from-gray-100 to-gray-200',
      index: '05'
    },
    { 
      key: 'ecommerce', 
      icon: Package, 
      gradient: 'from-green-500 to-emerald-600',
      bgGradient: 'from-green-100 to-emerald-100',
      index: '06'
    },
    { 
      key: 'medical', 
      icon: Stethoscope, 
      gradient: 'from-teal-500 to-cyan-600',
      bgGradient: 'from-teal-100 to-cyan-100',
      index: '07'
    },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-noveo-blue transform rotate-45" style={{ clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))' }}></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-noveo-teal transform -rotate-12" style={{ clipPath: 'polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)' }}></div>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-light text-noveo-blue mb-4">
            {t('industries.title')}
          </h2>
          <p className="text-lg text-noveo-blue max-w-2xl mx-auto">
            Découvrez nos secteurs d'expertise avec des solutions sur mesure
          </p>
        </div>
        
        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {sectors.map((sector) => {
            const IconComponent = sector.icon;
            
            return (
              <div
                key={sector.key}
                className="group relative bg-white hover:-translate-y-4 transition-all duration-500 ease-out hover:shadow-2xl"
                style={{ 
                  clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
                }}
              >
                {/* Card Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Index Number */}
                  <div className="absolute top-4 right-6 text-3xl font-bold text-gray-200 group-hover:text-gray-300 transition-colors duration-300">
                    {sector.index}
                  </div>

                  {/* Icon Container */}
                  <div 
                    className={`w-16 h-16 bg-gradient-to-br ${sector.gradient} mb-6 flex items-center justify-center text-white relative`}
                    style={{ 
                      clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)',
                    }}
                  >
                    <IconComponent size={28} />
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="font-bold text-xl text-noveo-blue mb-4 group-hover:text-noveo-blue-dark transition-colors duration-300">
                      {t(`industries.sectors.${sector.key}.title`)}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                      {t(`industries.sectors.${sector.key}.description`)}
                    </p>
                  </div>

                  {/* Learn More Link */}
                  <div className="flex items-center text-noveo-blue group-hover:text-noveo-blue-dark transition-colors duration-300">
                    <span className="text-sm font-semibold mr-2">En savoir plus</span>
                    <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>

                  {/* Hover Gradient Overlay */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${sector.bgGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}
                    style={{ 
                      clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
                    }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <button 
            className="px-8 py-4 bg-noveo-blue text-white font-bold text-lg hover:bg-noveo-blue-dark transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl relative group"
            style={{ 
              clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))',
            }}
          >
            <span className="relative z-10">Découvrez nos solutions sur mesure</span>
            <div className="absolute inset-0 bg-gradient-to-r from-noveo-blue-dark to-noveo-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ 
              clipPath: 'polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px))',
            }}></div>
          </button>
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
                <Check className="text-noveo-teal mr-3 mt-1 flex-shrink-0" size={20} />
                <span>{t('fluidLogistics.feature1')}</span>
              </li>
              <li className="flex items-start">
                <Check className="text-noveo-teal mr-3 mt-1 flex-shrink-0" size={20} />
                <span>{t('fluidLogistics.feature2')}</span>
              </li>
              <li className="flex items-start">
                <Check className="text-noveo-teal mr-3 mt-1 flex-shrink-0" size={20} />
                <span>{t('fluidLogistics.feature3')}</span>
              </li>
              <li className="flex items-start">
                <Check className="text-noveo-teal mr-3 mt-1 flex-shrink-0" size={20} />
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
              className="object-cover"
              priority={false}
            />
        </div>
        </div>
      </div>
    </section>
  );
}

// Composant de compteur animé
function AnimatedCounter({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const startCount = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Animation avec courbe d'accélération
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(startCount + (end - startCount) * easeOutQuart);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <p 
      ref={ref}
      className="text-4xl lg:text-5xl font-light text-noveo-teal mb-4 transition-all duration-300"
    >
      {count.toLocaleString()}{suffix}
    </p>
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
            <AnimatedCounter end={500} suffix="+" duration={2500} />
            <p className="text-lg">{t('stats.items.ports.label')}</p>
          </div>
          <div>
            <AnimatedCounter end={25000} duration={3000} />
            <p className="text-lg">{t('stats.items.volumes.label')}</p>
          </div>
          <div>
            <AnimatedCounter end={15} duration={1500} />
            <p className="text-lg">{t('stats.items.response.label')}</p>
            </div>
          <div>
            <AnimatedCounter end={250} duration={2000} />
            <p className="text-lg">{t('stats.items.clients.label')}</p>
        </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  const testimonials = [
    {
      quote: t('testimonials.items.0.quote'),
      name: t('testimonials.items.0.name'),
      role: t('testimonials.items.0.role'),
      company: t('testimonials.items.0.company'),
      category: t('testimonials.items.0.category')
    },
    {
      quote: t('testimonials.items.1.quote'),
      name: t('testimonials.items.1.name'),
      role: t('testimonials.items.1.role'),
      company: t('testimonials.items.1.company'),
      category: t('testimonials.items.1.category')
    },
    {
      quote: t('testimonials.items.2.quote'),
      name: t('testimonials.items.2.name'),
      role: t('testimonials.items.2.role'),
      company: t('testimonials.items.2.company'),
      category: t('testimonials.items.2.category')
    },
    {
      quote: t('testimonials.items.3.quote'),
      name: t('testimonials.items.3.name'),
      role: t('testimonials.items.3.role'),
      company: t('testimonials.items.3.company'),
      category: t('testimonials.items.3.category')
    },
    {
      quote: t('testimonials.items.4.quote'),
      name: t('testimonials.items.4.name'),
      role: t('testimonials.items.4.role'),
      company: t('testimonials.items.4.company'),
      category: t('testimonials.items.4.category')
    },
    {
      quote: t('testimonials.items.5.quote'),
      name: t('testimonials.items.5.name'),
      role: t('testimonials.items.5.role'),
      company: t('testimonials.items.5.company'),
      category: t('testimonials.items.5.category')
    },
    {
      quote: t('testimonials.items.6.quote'),
      name: t('testimonials.items.6.name'),
      role: t('testimonials.items.6.role'),
      company: t('testimonials.items.6.company'),
      category: t('testimonials.items.6.category')
    },
    {
      quote: t('testimonials.items.7.quote'),
      name: t('testimonials.items.7.name'),
      role: t('testimonials.items.7.role'),
      company: t('testimonials.items.7.company'),
      category: t('testimonials.items.7.category')
    },
    {
      quote: t('testimonials.items.8.quote'),
      name: t('testimonials.items.8.name'),
      role: t('testimonials.items.8.role'),
      company: t('testimonials.items.8.company'),
      category: t('testimonials.items.8.category')
    },
    {
      quote: t('testimonials.items.9.quote'),
      name: t('testimonials.items.9.name'),
      role: t('testimonials.items.9.role'),
      company: t('testimonials.items.9.company'),
      category: t('testimonials.items.9.category')
    }
  ];

  // Check screen size and set responsive items per page
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Reset to first page when switching between mobile/desktop
  useEffect(() => {
    setCurrentIndex(0);
  }, [isMobile]);
  
  const itemsPerPage = isMobile ? 1 : 3;
  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentTestimonials = () => {
    const start = currentIndex * itemsPerPage;
    return testimonials.slice(start, start + itemsPerPage);
  };

  return (
    <section className="py-20 bg-noveo-teal-light">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-light text-noveo-blue mb-12 text-center">{t('testimonials.title')}</h2>
        
        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-noveo-blue/80 hover:bg-noveo-blue text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-noveo-blue/80 hover:bg-noveo-blue text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={24} />
          </button>

          {/* Testimonials Grid */}
          <div className={`grid gap-8 px-16 ${isMobile ? 'grid-cols-1 h-[500px]' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
            {getCurrentTestimonials().map((testimonial, index) => (
              <div 
                key={currentIndex * itemsPerPage + index}
                className={`bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col ${isMobile ? 'h-full' : 'h-full'}`}
              >
                {/* Quote Icon */}
                <div className="text-4xl text-noveo-teal mb-4 font-serif">"</div>
                
                {/* Category */}
                <div className="text-sm text-noveo-blue font-semibold mb-4 uppercase tracking-wide">
                  {testimonial.category}
                </div>
                
                {/* Quote */}
                <blockquote className={`text-gray-700 font-light leading-relaxed mb-6 flex-grow italic ${isMobile ? 'text-base' : ''}`}>
                  {testimonial.quote}
                </blockquote>
                
                {/* Attribution */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-bold text-noveo-blue text-lg">{testimonial.name}</div>
                  <div className="text-noveo-blue font-medium">{testimonial.role}</div>
                  <div className="text-noveo-teal text-sm">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 transition-all duration-300 ${
                  index === currentIndex ? 'bg-noveo-blue scale-125' : 'bg-noveo-blue/30 hover:bg-noveo-blue/60'
                }`}
              />
            ))}
          </div>
                     <div className="text-gray-600 text-sm ml-4">
             {isMobile 
               ? `${currentIndex + 1} of ${testimonials.length} testimonials`
               : `${currentIndex * itemsPerPage + 1}-${Math.min((currentIndex + 1) * itemsPerPage, testimonials.length)} of ${testimonials.length} testimonials`
             }
           </div>
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
        <button className="px-8 py-4 bg-noveo-blue text-white font-bold text-lg hover:bg-noveo-blue-dark transition-colors duration-300">
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
  const [activeSection, setActiveSection] = useState<'quote' | 'logistics'>('quote');

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
      <IndustrySolutions />
      <MissionSection />
      <FluidLogisticsSection />
      <StatsSection />
      <TestimonialsSection />
      <FinalCTASection />
      <FAQSection />
    </>
  );
}

