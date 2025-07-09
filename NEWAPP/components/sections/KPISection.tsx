import { Dictionary, Locale } from '@/lib/get-dictionary'
import { Card, CardContent } from '@/components/ui/card'

interface KPISectionProps {
  dict: Dictionary
  lang: Locale
}

export function KPISection({ dict, lang }: KPISectionProps) {
  const kpis = [
    {
      value: "+500",
      label: dict.kpis.ports.replace("+500 ", ""),
      icon: "🚢",
      color: "from-blue-500 to-cyan-500"
    },
    {
      value: "+25k",
      label: dict.kpis.freight.replace("+25 000 ", ""),
      icon: "✈️",
      color: "from-green-500 to-emerald-500"
    },
    {
      value: "15min",
      label: dict.kpis.response.replace("15 min ", ""),
      icon: "⚡",
      color: "from-yellow-500 to-orange-500"
    },
    {
      value: "+250",
      label: dict.kpis.clients.replace("+250 ", ""),
      icon: "🤝",
      color: "from-purple-500 to-pink-500"
    },
  ]

  return (
    <section className="py-16 bg-ovrsea-navy">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((kpi, index) => (
            <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-3">{kpi.icon}</div>
                <div className="text-3xl font-poppins font-bold text-white mb-2">
                  {kpi.value}
                </div>
                <div className="text-ovrsea-mint text-sm font-medium">
                  {kpi.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 