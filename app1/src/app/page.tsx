"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ChevronDown, ArrowRight, Globe, Menu, X, Play } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-ovrsea-mint rounded"></div>
              <span className="text-2xl font-bold text-ovrsea-navy">OVRSEA</span>
            </div>

            <div className="hidden lg:flex items-center space-x-6">
              <div className="flex items-center space-x-1 cursor-pointer hover:text-ovrsea-mint">
                <span className="text-ovrsea-navy">Solutions</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="flex items-center space-x-1 cursor-pointer hover:text-ovrsea-mint">
                <span className="text-ovrsea-navy">Industries</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <span className="text-ovrsea-navy cursor-pointer hover:text-ovrsea-mint">Decarbonization</span>
              <div className="flex items-center space-x-1 cursor-pointer hover:text-ovrsea-mint">
                <span className="text-ovrsea-navy">Resources</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <span className="text-ovrsea-navy cursor-pointer hover:text-ovrsea-mint">Careers</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden lg:flex border-ovrsea-navy text-ovrsea-navy hover:bg-ovrsea-mint">
              Log in
            </Button>
            <Button className="bg-ovrsea-mint text-ovrsea-navy hover:bg-ovrsea-lightmint">
              Talk to an Expert
            </Button>
            <div className="hidden lg:flex items-center space-x-1 cursor-pointer">
              <Globe className="w-4 h-4 text-ovrsea-navy" />
              <span className="text-ovrsea-navy">EN</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-8 h-8 flex items-center justify-center text-ovrsea-navy hover:text-ovrsea-mint transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}>
          <div className="absolute inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)}></div>

          {/* Mobile Menu Panel */}
          <div className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}>
            <div className="p-6 pt-20">
              {/* Mobile Navigation Items */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="border-b border-gray-200 pb-4">
                    <div className="flex items-center justify-between cursor-pointer hover:text-ovrsea-mint">
                      <span className="text-lg font-medium text-ovrsea-navy">Solutions</span>
                      <ChevronDown className="w-5 h-5 text-ovrsea-navy" />
                    </div>
                  </div>

                  <div className="border-b border-gray-200 pb-4">
                    <div className="flex items-center justify-between cursor-pointer hover:text-ovrsea-mint">
                      <span className="text-lg font-medium text-ovrsea-navy">Industries</span>
                      <ChevronDown className="w-5 h-5 text-ovrsea-navy" />
                    </div>
                  </div>

                  <div className="border-b border-gray-200 pb-4">
                    <span className="text-lg font-medium text-ovrsea-navy cursor-pointer hover:text-ovrsea-mint">Decarbonization</span>
                  </div>

                  <div className="border-b border-gray-200 pb-4">
                    <div className="flex items-center justify-between cursor-pointer hover:text-ovrsea-mint">
                      <span className="text-lg font-medium text-ovrsea-navy">Resources</span>
                      <ChevronDown className="w-5 h-5 text-ovrsea-navy" />
                    </div>
                  </div>

                  <div className="border-b border-gray-200 pb-4">
                    <span className="text-lg font-medium text-ovrsea-navy cursor-pointer hover:text-ovrsea-mint">Careers</span>
                  </div>
                </div>

                {/* Mobile Menu Actions */}
                <div className="space-y-4 pt-4">
                  <Button variant="outline" className="w-full border-ovrsea-navy text-ovrsea-navy hover:bg-ovrsea-mint">
                    Log in
                  </Button>
                  <Button className="w-full bg-ovrsea-mint text-ovrsea-navy hover:bg-ovrsea-lightmint">
                    Talk to an Expert
                  </Button>

                  {/* Language Selector */}
                  <div className="flex items-center justify-center space-x-2 pt-4">
                    <Globe className="w-4 h-4 text-ovrsea-navy" />
                    <span className="text-ovrsea-navy">EN</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-ovrsea-navy text-white overflow-hidden">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Step ahead in your
                <br />
                <span className="text-ovrsea-mint">supply chain</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-lg">
                OVRSEA is a freight forwarder combining digital technology and advanced business expertise.
              </p>
              <p className="text-lg text-gray-400 max-w-lg">
                Our goal: to make your supply chain more efficient, resilient and sustainable.
              </p>
              <Button className="bg-ovrsea-mint text-ovrsea-navy hover:bg-ovrsea-lightmint px-8 py-6 text-lg">
                Talk to an Expert
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://cdn.prod.website-files.com/65fd84b099e4888f89ea12c1/65fdad6eb271803805b011a7_Header%20Container%20Ovrsa%20Home.webp"
                alt="Container shipping"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Logos */}
      <section className="bg-ovrsea-neutral py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-ovrsea-navy text-center mb-8">
            More than 700 shippers trust us
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 grayscale">
            <img src="https://ext.same-assets.com/1432411594/351909007.svg" alt="Delsey" className="h-8" />
            <img src="https://ext.same-assets.com/1432411594/1760027104.svg" alt="Nuxe" className="h-8" />
            <img src="https://ext.same-assets.com/1432411594/3627319046.svg" alt="Seqens" className="h-8" />
            <img src="https://ext.same-assets.com/1432411594/1651227633.png" alt="Le Tanneur" className="h-8" />
            <img src="https://ext.same-assets.com/1432411594/2585748377.png" alt="Izipizi" className="h-8" />
            <img src="https://ext.same-assets.com/1432411594/2882545739.png" alt="Fives" className="h-8" />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-ovrsea-navy text-center mb-12">
            Entrusting your transport at OVRSEA means:
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-ovrsea-lightmint border-none text-center p-8">
              <CardContent className="space-y-4 p-0">
                <div className="w-12 h-12 bg-ovrsea-mint rounded-lg mx-auto flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-ovrsea-navy" />
                </div>
                <div className="text-4xl font-bold text-ovrsea-navy">12 min</div>
                <p className="text-ovrsea-darkgray">To launch a transport</p>
              </CardContent>
            </Card>

            <Card className="bg-ovrsea-lightmint border-none text-center p-8">
              <CardContent className="space-y-4 p-0">
                <div className="w-12 h-12 bg-ovrsea-mint rounded-lg mx-auto flex items-center justify-center">
                  <div className="w-6 h-6 bg-ovrsea-navy rounded"></div>
                </div>
                <div className="text-4xl font-bold text-ovrsea-navy">20 min</div>
                <p className="text-ovrsea-darkgray">Average response time from OVRSEA teams</p>
              </CardContent>
            </Card>

            <Card className="bg-ovrsea-lightmint border-none text-center p-8">
              <CardContent className="space-y-4 p-0">
                <div className="w-12 h-12 bg-ovrsea-mint rounded-lg mx-auto flex items-center justify-center">
                  <div className="w-3 h-3 bg-ovrsea-navy rounded transform rotate-45"></div>
                </div>
                <div className="text-4xl font-bold text-ovrsea-navy">+96%</div>
                <p className="text-ovrsea-darkgray">post-transport satisfaction</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Streamline Section */}
      <section className="bg-ovrsea-lightmint py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-ovrsea-navy">
                <span className="bg-ovrsea-mint px-2 py-1 rounded">Streamline</span>
                <br />
                your freight transport thanks to the best of technology and people
              </h2>
              <p className="text-lg text-ovrsea-darkgray">
                Our innovative technological solutions simplify the transport of goods, making it easier and more efficient for businesses of all sizes.
              </p>
              <p className="text-lg text-ovrsea-darkgray">
                Thanks to our team of dedicated operational experts, we provide transparent freight forwarding, inventory management, customs clearance, and ad valorem insurance services.
              </p>
              <Button className="bg-ovrsea-navy text-white hover:bg-ovrsea-darkgray">
                Talk to an Expert
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://cdn.prod.website-files.com/65fd84b099e4888f89ea12c1/65fd84b099e4888f89ea1333_paul-teysen-bukjsECgmeU-unsplash.webp"
                alt="Colorful containers"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visibility Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-ovrsea-navy">
              <span className="bg-ovrsea-mint px-2 py-1 rounded">Unparalleled visibility</span>
              <br />
              to make informed decisions
            </h2>
            <p className="text-lg text-ovrsea-darkgray">
              Our digital platform offers you an overview of your transport and allows you to centralize communications with all actors in your supply.
            </p>
            <p className="text-lg text-ovrsea-darkgray">
              With accurate data at your fingertips, you gain greater predictability.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-ovrsea-mint rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-ovrsea-navy rounded"></div>
                </div>
                <h3 className="text-2xl font-bold text-ovrsea-navy">Effective</h3>
                <p className="text-ovrsea-darkgray">Save time and resources with our freight shipping solutions and support.</p>
              </div>

              <div className="space-y-4">
                <div className="w-12 h-12 bg-ovrsea-mint rounded-lg flex items-center justify-center">
                  <div className="w-6 h-6 bg-ovrsea-navy rounded"></div>
                </div>
                <h3 className="text-2xl font-bold text-ovrsea-navy">Dependable</h3>
                <p className="text-ovrsea-darkgray">Count on our team to meet your freight forwarding needs with precision.</p>
              </div>
            </div>

            <Button className="bg-ovrsea-navy text-white hover:bg-ovrsea-darkgray mt-8">
              Learn more about our platform
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <div className="mt-12 relative">
              <img
                src="https://ext.same-assets.com/1432411594/861819935.jpeg"
                alt="Platform demo"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button className="bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30">
                  <Play className="w-6 h-6 text-white" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Support Section */}
      <section className="bg-ovrsea-mint py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-ovrsea-navy">
                Expert support for your growth
              </h2>
              <p className="text-lg text-ovrsea-darkgray">
                Benefit from our in-depth sectoral expertise in transport and on the themes of decarbonization and customs.
              </p>
              <p className="text-lg text-ovrsea-darkgray">
                We advise you in your transport strategy in line with your business imperatives.
              </p>
              <Button className="bg-ovrsea-navy text-white hover:bg-ovrsea-darkgray">
                Talk to an Expert
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://ext.same-assets.com/1432411594/1468758847.webp"
                alt="Expert consultation"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-ovrsea-navy">
              What do our customers say
            </h2>
            <p className="text-lg text-ovrsea-darkgray">
              Read what our customers have to say about their successful shipping experiences.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="p-8 border-none shadow-lg">
                <CardContent className="space-y-6 p-0">
                  <div className="text-4xl text-ovrsea-mint">"</div>
                  <p className="text-lg text-ovrsea-darkgray italic">
                    In the stressful environment we found ourselves in, OVRSEA helped us to overcome our difficulties with ease. Their proactive team and platform really made the difference for us.
                  </p>
                  <div className="text-4xl text-ovrsea-mint text-right">"</div>
                  <div className="border-t pt-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://ext.same-assets.com/1432411594/2120161978.png"
                        alt="Le Coq Sportif"
                        className="h-8"
                      />
                      <div className="text-left">
                        <p className="font-semibold text-ovrsea-navy">Melissa Stüsli</p>
                        <p className="text-ovrsea-darkgray">Transport Manager at Le Coq Sportif</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8 border-none shadow-lg">
                <CardContent className="space-y-6 p-0">
                  <div className="text-4xl text-ovrsea-mint">"</div>
                  <p className="text-lg text-ovrsea-darkgray italic">
                    I love OVRSEA's platform: it's easy to find quotes, check prices, book the shipments and contact the team. It's one of my favorite tools!
                  </p>
                  <div className="text-4xl text-ovrsea-mint text-right">"</div>
                  <div className="border-t pt-4">
                    <div className="flex items-center space-x-4">
                      <img
                        src="https://ext.same-assets.com/1432411594/3902868094.webp"
                        alt="Wander Beauty"
                        className="h-8"
                      />
                      <div className="text-left">
                        <p className="font-semibold text-ovrsea-navy">Noreen Nezaj</p>
                        <p className="text-ovrsea-darkgray">VP Sales & Operations @WanderBeauty</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How Ovrsea Transform Section */}
      <section className="bg-ovrsea-navy text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              How Ovrsea<br />
              <span className="bg-ovrsea-mint text-ovrsea-navy px-2 py-1 rounded">transform your expeditions</span>
            </h2>
            <p className="text-lg text-gray-300">
              From the quotation request to the final delivery, follow in real time all the imports and exports entrusted to our teams, find your documents and manage your supply from our platform.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <Card className="bg-ovrsea-mint border-none text-center p-8">
                <CardContent className="space-y-4 p-0">
                  <div className="text-6xl font-bold text-ovrsea-navy">4</div>
                  <p className="text-ovrsea-darkgray">hours saved on average per week for Seqens thanks to the OVRSEA platform</p>
                </CardContent>
              </Card>

              <Card className="bg-ovrsea-mint border-none text-center p-8">
                <CardContent className="space-y-4 p-0">
                  <div className="text-6xl font-bold text-ovrsea-navy">9/10</div>
                  <p className="text-ovrsea-darkgray">Average post-shipment satisfaction</p>
                </CardContent>
              </Card>
            </div>

            <Button className="bg-white text-ovrsea-navy hover:bg-gray-100 mt-8">
              Learn more
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <div className="mt-12 relative">
              <img
                src="https://ext.same-assets.com/1432411594/3427535392.jpeg"
                alt="Office environment"
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Button className="bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30">
                  <Play className="w-6 h-6 text-white" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Logos Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-ovrsea-navy text-center mb-12">
            Our customers
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-8 items-center opacity-60 grayscale">
            <img src="https://ext.same-assets.com/1432411594/3067270600.png" alt="Classic" className="h-12 mx-auto" />
            <img src="https://ext.same-assets.com/1432411594/3203000523.webp" alt="Christofle" className="h-12 mx-auto" />
            <img src="https://ext.same-assets.com/1432411594/689418740.webp" alt="LVMH" className="h-12 mx-auto" />
            <img src="https://ext.same-assets.com/1432411594/2485069229.webp" alt="Engie Solutions" className="h-12 mx-auto" />
            <img src="https://ext.same-assets.com/1432411594/1409100150.webp" alt="Expanscience" className="h-12 mx-auto" />
            <img src="https://ext.same-assets.com/1432411594/799453160.webp" alt="Anios" className="h-12 mx-auto" />
            <img src="https://ext.same-assets.com/1432411594/903720026.webp" alt="Reden" className="h-12 mx-auto" />
            <img src="https://ext.same-assets.com/1432411594/3476910940.webp" alt="Veja" className="h-12 mx-auto" />
            <img src="https://ext.same-assets.com/1432411594/3025381829.webp" alt="Clarins" className="h-12 mx-auto" />
            <img src="https://ext.same-assets.com/1432411594/2841898389.png" alt="Pasquier" className="h-12 mx-auto" />
            <img src="https://ext.same-assets.com/1432411594/513774131.webp" alt="Le Coq Sportif" className="h-12 mx-auto" />
            <img src="https://ext.same-assets.com/1432411594/127917470.webp" alt="The Kooples" className="h-12 mx-auto" />
            <img src="https://ext.same-assets.com/1432411594/574262443.png" alt="Toshiba" className="h-12 mx-auto" />
            <img src="https://ext.same-assets.com/1432411594/3435291366.png" alt="Monin" className="h-12 mx-auto" />
            <img src="https://ext.same-assets.com/1432411594/1396446292.webp" alt="Christian Louboutin" className="h-12 mx-auto" />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-ovrsea-navy py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://cdn.prod.website-files.com/65fd84b099e4888f89ea12c1/65fd84b099e4888f89ea1359_footer-cta-wagon-oz-seyrek.webp"
                alt="Freight container"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="space-y-6 text-white">
              <h2 className="text-4xl lg:text-5xl font-bold">
                <span className="bg-ovrsea-mint text-ovrsea-navy px-2 py-1 rounded">Simplify</span>
                <br />
                Freight transport
              </h2>
              <p className="text-lg text-gray-300">
                Experience hassle-free freight management with our innovative solutions and dedicated support team.
              </p>
              <Button className="bg-white text-ovrsea-navy hover:bg-gray-100">
                Talk to an Expert
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ovrsea-navy text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-ovrsea-mint rounded"></div>
                <span className="text-2xl font-bold">OVRSEA</span>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Solutions</h4>
              <div className="space-y-2 text-gray-300">
                <p className="hover:text-ovrsea-mint cursor-pointer">Freightforwarding</p>
                <p className="hover:text-ovrsea-mint cursor-pointer">Platform</p>
                <p className="hover:text-ovrsea-mint cursor-pointer">Maritime transport</p>
                <p className="hover:text-ovrsea-mint cursor-pointer">Air transport</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Resources</h4>
              <div className="space-y-2 text-gray-300">
                <p className="hover:text-ovrsea-mint cursor-pointer">Blog</p>
                <p className="hover:text-ovrsea-mint cursor-pointer">Customer cases</p>
                <p className="hover:text-ovrsea-mint cursor-pointer">The Charger</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">About</h4>
              <div className="space-y-2 text-gray-300">
                <p className="hover:text-ovrsea-mint cursor-pointer">Why Ovrsea</p>
                <p className="hover:text-ovrsea-mint cursor-pointer">Careers</p>
                <p className="hover:text-ovrsea-mint cursor-pointer">Contact</p>
              </div>
            </div>
          </div>

          <Separator className="bg-gray-600 mb-8" />

          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="text-gray-400">© 2024 OVRSEA. All rights reserved.</p>
            <div className="flex space-x-6 text-gray-400">
              <span className="hover:text-ovrsea-mint cursor-pointer">Legal information</span>
              <span className="hover:text-ovrsea-mint cursor-pointer">Confidentiality policy</span>
              <span className="hover:text-ovrsea-mint cursor-pointer">Master Services Agreement</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
