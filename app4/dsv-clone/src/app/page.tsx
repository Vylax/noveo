'use client';

import React, { useState, useEffect } from 'react';
import { Truck, Ship, Plane, Cpu, Zap, ShoppingBag, FlaskConical, Snowflake, Gem, HeartPulse } from 'lucide-react';

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="text-dsv-blue mb-4">{children}</div>
);

function Hero({ onSectionChange }: { onSectionChange: (section: 'quote' | 'logistics') => void }) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

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
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Optimisez vos flux. Dépensez moins. Agissez mieux.
        </h1>
        <h2 className="text-2xl md:text-3xl mb-6 font-light">
          Accélérez votre supply chain internationale
        </h2>
        <p className="text-xl md:text-2xl mb-8 font-light max-w-3xl mx-auto">
          Noveo Logistics est un commissionnaire de transport nouvelle génération, alliant technologies digitales et expertise métier pour connecter l'Europe avec le reste du monde en toute fluidité.
        </p>
      </div>
      
      {/* Service buttons positioned at bottom of hero */}
      <div className="relative z-20 w-full max-w-4xl mx-auto mb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          <div 
            className="p-8 text-center bg-noveo-teal hover:bg-noveo-teal-light cursor-pointer transition-colors"
            onClick={() => onSectionChange('quote')}
          >
            <h3 className="font-bold text-noveo-blue text-lg">Demander un devis</h3>
          </div>
          <div 
            className="p-8 text-center bg-noveo-teal hover:bg-noveo-teal-light cursor-pointer transition-colors"
            onClick={() => onSectionChange('logistics')}
          >
            <h3 className="font-bold text-noveo-blue text-lg">Solutions logistiques</h3>
          </div>
        </div>
      </div>

      {/* Optional: Video loading indicator for debugging */}
      {shouldLoadVideo && !videoLoaded && !videoError && !prefersReducedMotion && (
        <div className="absolute top-4 right-4 z-30 bg-black bg-opacity-50 text-white px-3 py-1 rounded text-sm">
          Loading video...
        </div>
      )}
    </section>
  );
}

function ServiceBar() {
  // This component is no longer needed as service buttons are now in Hero
  return null;
}

function DynamicSection({ activeSection }: { activeSection: 'quote' | 'logistics' }) {
  const [selectedOption, setSelectedOption] = useState('');

  if (activeSection === 'quote') {
    return (
      <section className="bg-white py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-8">
            Tell us what you need
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-6 items-end">
              <div className="flex-1">
                <div className="relative">
                  <select 
                    value={selectedOption}
                    onChange={(e) => setSelectedOption(e.target.value)}
                    className="w-full p-4 border border-gray-300 text-left bg-white appearance-none cursor-pointer text-gray-700"
                  >
                    <option value="">Choose</option>
                    <option value="spot">Spot quote - for your single shipment.</option>
                    <option value="tariff">Tariff quote - for multiple or frequent shipments.</option>
                    <option value="offer">Offer - To start a dialogue on Logistics solutions</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              <button className="px-8 py-4 bg-noveo-blue text-white font-bold text-lg hover:bg-noveo-blue-dark transition-colors duration-300 whitespace-nowrap">
                Request
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
        <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-8">
          Would you like to know more about our logistics solutions?
        </h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button className="px-8 py-4 bg-noveo-blue text-white font-bold text-lg hover:bg-noveo-blue-dark transition-colors duration-300">
            Contract Logistics offer
          </button>
          <button className="px-8 py-4 bg-noveo-blue text-white font-bold text-lg hover:bg-noveo-blue-dark transition-colors duration-300">
            Learn more about Contract Logistics
          </button>
        </div>
      </div>
    </section>
  );
}

function SpecialDriveSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">A special kind of drive</h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-8 text-lg">
          Keeping supply chains flowing in a world of change
        </p>
        <button className="px-8 py-3 bg-transparent text-dsv-blue font-semibold border border-dsv-blue hover:bg-dsv-blue hover:text-white transition-colors duration-300">
          Discover how
        </button>
      </div>
    </section>
  );
}

function PrecisionSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6">
            When precision matter most, talk to us
          </h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Supply chain success with cloud computing and data center infrastructure requires attention to detail from the initial site survey to final validation. DSV understands the critical and challenging nature of the data center environment and offers a range of flexible and best-in-class logistics solutions. We keep your critical cloud solutions running smoothly with secure, scalable and sustainable logistics solutions for data center operations.
          </p>
          <button className="px-8 py-3 bg-dsv-blue text-white font-semibold hover:bg-dsv-blue-dark transition-colors duration-300">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}

function IndustrySolutions() {
  const industries = [
    { name: 'Automotive', description: 'Transportation and logistics services to optimise supply chains and meet tighter production schedules.', icon: <Truck size={32} /> },
    { name: 'Technology', description: 'End-to-end, integrated and reliable supply chain solutions to link production sites with distribution channels across the world.', icon: <Cpu size={32} /> },
    { name: 'Healthcare', description: 'Dedicated teams and a wide range of solutions to ensure compliance with quality standards and regulations.', icon: <HeartPulse size={32} /> },
    { name: 'Industrial', description: 'Tailor-made solutions to manage complex demands and make supply chains leaner and more agile.', icon: <Zap size={32} /> },
    { name: 'Consumer', description: 'Transport to warehouse, distribution centre or direct-to-store so goods can reach the retailers directly.', icon: <ShoppingBag size={32} /> },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
            Whatever your industry, we are your global freight forwarder
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {industries.map((industry) => (
            <div key={industry.name} className="text-center group cursor-pointer">
              <IconWrapper>{industry.icon}</IconWrapper>
              <h3 className="font-bold text-lg text-gray-800 mb-2">{industry.name}</h3>
              <p className="text-sm text-gray-600">{industry.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">In a different industry?</p>
          <button className="text-dsv-blue font-semibold hover:underline">
            See our tailor-made solutions
          </button>
        </div>
      </div>
    </section>
  );
}

function SelfServiceSection() {
  const services = [
    { name: 'Track & Trace' },
    { name: 'Get a quote or contact us' },
    { name: 'Supply Chain Management Services' },
    { name: 'Online booking' },
    { name: 'Warehouse management' },
    { name: 'LCL Sailing Schedule' },
    { name: 'Schenker customers' },
    { name: 'Other services' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">Self service</h2>
          <p className="text-xl text-gray-600">Manage your shipments</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {services.map((service) => (
            <div key={service.name} className="text-center p-6 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
              <h3 className="font-semibold text-gray-800">{service.name}</h3>
            </div>
          ))}
        </div>
        <div className="text-center">
          <button className="text-dsv-blue font-semibold hover:underline">
            Self Service Tools
          </button>
        </div>
      </div>
    </section>
  );
}

function LatestNewsSection() {
  const news = [
    { 
      date: '26-05-2025', 
      title: 'DSV and UNICEF expand their partnership with an increased focus on humanitarian action for children',
      description: 'An expansion of the partnership between DSV and UNICEF will provide more in-kind flights during emergencies and increase access to essential supplies for children worldwide.'
    },
    { 
      date: '30-04-2025', 
      title: 'DSV completes acquisition of Schenker',
      description: 'After all conditions and requirements for the approx. DKK 106.7 billion (approx. EUR 14.3 billion) acquisition of Schenker from Deutsche Bahn have been met, DSV has formally completed the acquisition of Schenker.'
    },
    { 
      date: '15-04-2025', 
      title: 'DSV announces changes to its executive management',
      description: 'After obtaining all regulatory clearances for DSV\'s acquisition of Schenker, DSV announces the first executive leadership appointments to maintain momentum.'
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-12">Latest news</h2>
        <div className="space-y-8">
          {news.map((item) => (
            <div key={item.title} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <p className="text-sm text-dsv-blue font-medium mb-2">{item.date}</p>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="text-dsv-blue font-semibold hover:underline">
            More news
          </button>
        </div>
      </div>
    </section>
  );
}

function ContractsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6">
          Navigate logistics contracts with expert guidance
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-4xl mx-auto">
          Are you ready to improve your skills in logistics contract negotiations? Setting up a service contract involves several critical clauses that can impact the success of your partnership. Understanding the components can enhance your long-term collaborations and improve customer satisfaction. Curious to learn more?
        </p>
        <button className="px-8 py-3 bg-dsv-blue text-white font-semibold hover:bg-dsv-blue-dark transition-colors duration-300">
          Access our full expert guide here
        </button>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-20 bg-dsv-blue text-white">
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <blockquote className="text-2xl lg:text-3xl font-light mb-6">
            "The people at DSV listen to our dreams and help us turn them into reality. It's a relationship worth an incredible amount, at all levels"
          </blockquote>
          <cite className="font-semibold not-italic text-lg">Morten Fullerton, CEO of Rawbite</cite>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { number: '3,000+', label: 'Offices and logistics facilities' },
    { number: '90+', label: 'Countries worldwide' },
    { number: '160,000~', label: 'Employees' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-light text-center text-gray-800 mb-12">DSV in numbers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-6xl lg:text-7xl font-light text-dsv-blue mb-4">{stat.number}</p>
              <p className="text-lg text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="text-dsv-blue font-semibold hover:underline">
            See our global network
          </button>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">Any questions?</h2>
        <p className="text-lg text-gray-600 mb-8">
          Our experts are ready to help. Get in touch and we'll find the solution you need.
        </p>
        <button className="px-8 py-3 bg-dsv-blue text-white font-semibold hover:bg-dsv-blue-dark transition-colors duration-300">
          Contact us online
        </button>
      </div>
    </section>
  );
}

export default function Home() {
  const [activeSection, setActiveSection] = useState<'quote' | 'logistics'>('logistics');

  return (
    <>
      <Hero onSectionChange={setActiveSection} />
      <DynamicSection activeSection={activeSection} />
      <SpecialDriveSection />
      <PrecisionSection />
      <IndustrySolutions />
      <SelfServiceSection />
      <LatestNewsSection />
      <ContractsSection />
      <TestimonialsSection />
      <StatsSection />
      <ContactSection />
    </>
  );
}

