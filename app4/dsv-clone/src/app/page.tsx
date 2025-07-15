import React from 'react';

// Hero Section Component
function HeroSection() {
  return (
    <section className="gradient-gray py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Connect your business with the world
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            It doesn&apos;t matter if you run a global powerhouse or local startup. We&apos;re here to help your business grow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Explore our solutions
            </button>
            <button className="btn-secondary">
              Get a quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// Service Tools Section Component
function ServiceToolsSection() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-600 text-white p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">Contract Logistics</h3>
            <button className="bg-white text-blue-600 px-4 py-2 rounded font-medium">
              Book
            </button>
          </div>
          
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Track & Trace</h3>
            <input
              type="text"
              placeholder="Enter Track & Trace ID"
              className="w-full p-3 border rounded-md"
            />
          </div>
          
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Tell us what you need</h3>
            <select className="w-full p-3 border rounded-md mb-4">
              <option>Choose</option>
              <option>Spot quote - for your single shipment</option>
              <option>Tariff quote - for multiple or frequent shipments</option>
            </select>
            <button className="w-full bg-blue-600 text-white py-2 rounded font-medium">
              Request
            </button>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h4 className="font-semibold mb-2">Would you like to know more about our logistics solutions?</h4>
            <p className="text-gray-600 mb-4">Contract Logistics offer</p>
            <button className="text-blue-600 font-medium">Learn more about Contract Logistics</button>
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h4 className="font-semibold mb-4">Book your next shipment directly</h4>
            <div className="space-y-2">
              <button className="block w-full text-left text-blue-600">New to DSV</button>
              <button className="block w-full text-left text-blue-600">Already a customer</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Industry Solutions Section Component
function IndustrySolutions() {
  const industries = [
    { name: 'Aerospace', description: 'Dedicated teams to move your aerospace cargo around the globe in the safest fashion.', icon: '✈️' },
    { name: 'Energy', description: 'Innovative, reliable and tailored solutions for energy transport logistics, whenever and wherever needed.', icon: '⚡' },
    { name: 'Automotive', description: 'Transportation and logistics services to optimize supply chains and meet tighter production schedules.', icon: '🚗' },
    { name: 'Healthcare', description: 'Dedicated teams and a wide range of solutions to ensure compliance with quality standards and regulations.', icon: '🏥' },
    { name: 'Consumer', description: 'Transport to warehouse, distribution center or direct-to-store so goods can reach the retailers directly.', icon: '🛍️' },
    { name: 'Industrial', description: 'Tailor-made solutions to manage complex demands and make supply chains leaner and more agile.', icon: '🏭' },
    { name: 'Chemicals', description: 'Regulatory, safety and security compliance, and dedicated solutions to maintain product integrity during transportation.', icon: '🧪' },
    { name: 'Perishables', description: 'Expertise in refrigerated cargo shipping and cold-chain management to ensure shipments arrive in pristine condition.', icon: '❄️' },
    { name: 'Exhibitions and events', description: 'Delivery of time-critical trade show and exhibition materials whenever, wherever you need them.', icon: '🎪' },
    { name: 'Technology', description: 'End-to-end, integrated and reliable supply chain solutions to link production sites with distribution sites around the world.', icon: '💻' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Whatever your industry, we are your global freight forwarder
        </h2>
        
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mt-12">
           {industries.map((industry, index) => (
             <div key={index} className="card hover-lift p-6 cursor-pointer">
               <div className="text-3xl mb-3">{industry.icon}</div>
               <h3 className="font-semibold text-lg mb-2">{industry.name}</h3>
               <p className="text-gray-600 text-sm">{industry.description}</p>
             </div>
           ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">In a different industry?</p>
          <button className="text-blue-600 font-semibold hover:underline">
            See our tailor-made solutions
          </button>
        </div>
      </div>
    </section>
  );
}

// Self Service Section Component
function SelfServiceSection() {
  const services = [
    { name: 'Track & Trace', icon: '📍' },
    { name: 'Get a quote or contact us', icon: '💬' },
    { name: 'payDSV', icon: '💳' },
    { name: 'Supply Chain Management Services', icon: '📊' },
    { name: 'Online booking', icon: '📅' },
    { name: 'Warehouse management', icon: '🏢' },
    { name: 'Schenker customers', icon: '👥' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Self service</h2>
            <p className="text-xl text-gray-600 mb-8">Manage your shipments</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
                  <span className="text-2xl">{service.icon}</span>
                  <span className="font-medium">{service.name}</span>
                </div>
              ))}
            </div>
            
            <button className="mt-6 text-blue-600 font-semibold hover:underline">
              Self Service Tools
            </button>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-blue-600 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Stay ahead of the curve</h3>
              <p className="text-xl mb-6">with our latest e-news!</p>
              <button className="bg-white text-blue-600 px-6 py-3 rounded font-semibold hover:bg-gray-50 transition-colors">
                Subscribe to our e-newsletter today!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Latest News Section Component
function LatestNewsSection() {
  const news = [
    {
      date: '07-03-2025',
      title: 'Updates to U.S. reciprocal tariffs',
      description: 'U.S. and Vietnam reach initial trade deal imposing 20% tariffs on U.S. imports'
    },
    {
      date: '05-08-2025',
      title: 'DSV Celebrates Grand Opening of 1.2 Million Sq. Ft. Facility near Columbus, Ohio with Ribbon Cutting Ceremony',
      description: 'DSV celebrated the opening of its newest warehouse in New Albany, Ohio, on May 7, 2025, with a ribbon-cutting ceremony. The addition of this high-tech facility creates a centralized hub, underscoring its commitment to supporting the expanding semiconductor industry.'
    },
    {
      date: '05-07-2025',
      title: 'DSV Launches Chicago-Shanghai Air Freight Charter for Enhanced Connectivity',
      description: "DSV's new air freight charter, \"Shanghai Star,\" delivers multiple weekly scheduled service to streamline shipping and support reliable, time-sensitive trade between the US and China."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">Latest news</h2>
        
        <div className="space-y-6">
          {news.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer">
              <div className="text-blue-600 text-sm font-medium mb-2">{item.date}</div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <button className="text-blue-600 font-semibold hover:underline">
            More news
          </button>
        </div>
      </div>
    </section>
  );
}

// Customer Testimonials Section Component
function TestimonialsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12">What our customers say</h2>
        
        <div className="bg-blue-50 p-8 rounded-lg">
          <blockquote className="text-xl italic text-gray-700 mb-6">
            &quot;The people at DSV listen to our dreams and help us turn them into reality. It&apos;s a relationship worth an incredible amount, at all levels&quot;
          </blockquote>
          <div className="font-semibold">Morten Fullerton, CEO of Rawbite</div>
          <button className="mt-4 text-blue-600 font-medium hover:underline">
            Read the case study
          </button>
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-8">Learn about transport and logistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">📋</div>
              <h4 className="text-xl font-semibold">Case studies</h4>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💡</div>
              <h4 className="text-xl font-semibold">Expert opinions</h4>
            </div>
          </div>
          <button className="mt-6 text-blue-600 font-semibold hover:underline">
            Explore our insights
          </button>
        </div>
      </div>
    </section>
  );
}

// DSV Statistics Section Component
function StatsSection() {
  const stats = [
    { number: '3,000+', label: 'Offices and logistics facilities' },
    { number: '90+', label: 'Countries worldwide' },
    { number: '160,000~', label: 'Employees' }
  ];

  return (
    <section className="py-16 gradient-blue text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">DSV in numbers</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
              <div className="text-xl">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="text-white font-semibold hover:underline">
            See our global network
          </button>
        </div>
      </div>
    </section>
  );
}

// Contact Section Component
function ContactSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Any questions?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Our experts are ready to help. Get in touch and we&apos;ll find the solution you need.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-semibold transition-colors">
          Contact us online
        </button>
      </div>
    </section>
  );
}

// Main Page Component
export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServiceToolsSection />
      <IndustrySolutions />
      <SelfServiceSection />
      <LatestNewsSection />
      <TestimonialsSection />
      <StatsSection />
      <ContactSection />
    </div>
  );
}
