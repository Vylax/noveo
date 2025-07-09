import Link from 'next/link'
import Image from 'next/image'
import { Dictionary, Locale } from '@/lib/get-dictionary'
import { Button } from '@/components/ui/button'
import { Check, Eye, Clock, Shield, Users } from 'lucide-react'

interface MissionSectionProps {
  dict: Dictionary
  lang: Locale
}

export function MissionSection({ dict, lang }: MissionSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre principal de la section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-noveo-primary mb-4">
            {dict.mission.title}
          </h2>
        </div>

        {/* Layout en deux colonnes selon Cahier des charges */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Colonne Gauche: Texte expliquant la synergie humain + digital */}
          <div className="space-y-8">
            {/* Section Technologie */}
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-semibold text-noveo-primary flex items-center">
                <div className="w-8 h-8 bg-noveo-secondary rounded-lg flex items-center justify-center mr-3">
                  <Eye className="w-4 h-4 text-noveo-primary" />
                </div>
                {dict.mission.tech.title}
              </h3>
              <p className="text-noveo-text font-sans leading-relaxed mb-4">
                Notre plateforme digitale transforme votre expérience logistique en vous offrant une visibilité totale et un contrôle complet de vos flux.
              </p>
              <ul className="space-y-3">
                {dict.mission.tech.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-noveo-text font-sans">
                    <Check className="w-5 h-5 text-noveo-accent mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section Expertise Humaine */}
            <div className="space-y-4">
              <h3 className="text-2xl font-display font-semibold text-noveo-primary flex items-center">
                <div className="w-8 h-8 bg-noveo-secondary rounded-lg flex items-center justify-center mr-3">
                  <Users className="w-4 h-4 text-noveo-primary" />
                </div>
                {dict.mission.human.title}
              </h3>
              <p className="text-noveo-text font-sans leading-relaxed mb-4">
                Nos experts vous accompagnent à chaque étape avec leur expertise métier approfondie et leur connaissance des réglementations internationales.
              </p>
              <ul className="space-y-3">
                {dict.mission.human.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-noveo-text font-sans">
                    <Check className="w-5 h-5 text-noveo-accent mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="pt-6">
              <Button 
                asChild 
                size="lg"
                className="bg-noveo-accent hover:bg-noveo-accent/90 text-white font-display font-semibold"
              >
                <Link href={`/${lang}/solutions`}>
                  {dict.mission.cta}
                </Link>
              </Button>
            </div>
          </div>

          {/* Colonne Droite: Maquette animée de l'interface selon guidelines */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-noveo-primary to-noveo-primary/80 rounded-2xl p-8 shadow-2xl">
              {/* Mockup de la plateforme */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Header de l'interface */}
                <div className="bg-noveo-primary px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-noveo-accent rounded-full"></div>
                    <div className="w-3 h-3 bg-noveo-secondary rounded-full"></div>
                    <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  </div>
                  <div className="text-white text-sm font-sans">Noveo Platform</div>
                  <div className="w-8 h-6"></div>
                </div>
                
                {/* Contenu de l'interface */}
                <div className="p-6 space-y-4">
                  {/* Barre de recherche animée */}
                  <div className="flex items-center space-x-3 animate-fade-in-up">
                    <div className="flex-1 h-10 bg-gray-100 rounded-lg flex items-center px-3">
                      <div className="w-4 h-4 bg-noveo-secondary rounded mr-2"></div>
                      <div className="h-2 bg-gray-300 rounded flex-1 mr-4"></div>
                      <div className="w-8 h-6 bg-noveo-accent rounded"></div>
                    </div>
                  </div>
                  
                  {/* Cards de tracking */}
                  <div className="space-y-3">
                    {[1, 2, 3].map((item, index) => (
                      <div 
                        key={item}
                        className="p-4 border border-noveo-border rounded-lg animate-fade-in-up"
                        style={{ animationDelay: `${0.2 * (index + 1)}s` }}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="w-20 h-3 bg-noveo-primary rounded"></div>
                          <div className="w-16 h-6 bg-noveo-secondary rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-noveo-primary rounded-full animate-pulse"></div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="w-full h-2 bg-gray-200 rounded"></div>
                          <div className="w-3/4 h-2 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Graphique animé */}
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-end space-x-2 h-20">
                      {[1, 2, 3, 4, 5].map((bar, index) => (
                        <div 
                          key={bar}
                          className="flex-1 bg-noveo-secondary rounded-t animate-fade-in-up"
                          style={{ 
                            height: `${Math.random() * 60 + 20}%`,
                            animationDelay: `${0.1 * index + 1}s`
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Éléments décoratifs flottants */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-noveo-accent rounded-lg animate-bounce" style={{ animationDelay: '1s' }}></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-noveo-secondary rounded-full opacity-80 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 