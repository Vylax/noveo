import { getDictionary, type Locale } from '@/lib/get-dictionary'
import { JsonLd } from '@/components/seo/JsonLd'
import { Metadata } from 'next'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { 
  ArrowRight, 
  Calendar,
  Clock,
  FileText,
  Gavel,
  Cpu,
  Ship,
  Globe,
  Leaf,
  ShoppingCart,
  Mail,
  Star,
  TrendingUp
} from 'lucide-react'

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const dict = await getDictionary(params.lang)
  
  return {
    title: `${dict.blog.title} - Noveo Logistics`,
    description: dict.blog.subtitle,
    openGraph: {
      title: `${dict.blog.title} - Noveo Logistics`,
      description: dict.blog.subtitle,
      type: 'website',
      url: `https://noveo-logistics.com/${params.lang}/blog`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${dict.blog.title} - Noveo Logistics`,
      description: dict.blog.subtitle,
    },
    alternates: {
      canonical: `https://noveo-logistics.com/${params.lang}/blog`,
      languages: {
        'fr': 'https://noveo-logistics.com/fr/blog',
        'en': 'https://noveo-logistics.com/en/blog',
        'zh': 'https://noveo-logistics.com/zh/blog',
      },
    },
  }
}

export default async function BlogPage({
  params,
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(params.lang)

  // Map categories to icons
  const categoryIcons: { [key: string]: any } = {
    'Réglementation': Gavel,
    'Regulation': Gavel,
    '法规': Gavel,
    'Innovation': Cpu,
    '创新': Cpu,
    'Transport': Ship,
    '运输': Ship,
    'Commerce international': Globe,
    'International trade': Globe,
    '国际贸易': Globe,
    'Durabilité': Leaf,
    'Sustainability': Leaf,
    '可持续性': Leaf,
    'E-commerce': ShoppingCart,
    '电商': ShoppingCart
  }

  const blogPosts = dict.blog.posts.map(post => ({
    ...post,
    date: '2024-01-15',
    icon: categoryIcons[post.category] || FileText
  }))

  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-noveo-primary to-noveo-primary/90 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-noveo-secondary rounded-full -translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-noveo-secondary rounded-full translate-x-48 translate-y-48"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-noveo-accent rounded-full -translate-x-16 -translate-y-16"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold mb-6 animate-fade-in-up">
              {dict.blog.title}
            </h1>
            <p className="text-xl md:text-2xl text-noveo-secondary font-inter mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {dict.blog.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Star className="w-6 h-6 text-noveo-accent" />
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-noveo-primary">
                {dict.blog.featured}
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-noveo-accent to-noveo-secondary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => {
              const Icon = post.icon
              return (
                <Card key={post.id} className="group cursor-pointer border-noveo-border hover:border-noveo-secondary transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <CardContent className="p-0">
                    {/* Image/Icon Header */}
                    <div className="relative h-48 bg-gradient-to-br from-noveo-primary/10 to-noveo-secondary/10 flex items-center justify-center">
                      <div className="w-20 h-20 bg-gradient-to-br from-noveo-primary to-noveo-secondary rounded-2xl p-5 shadow-xl group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-full h-full text-white" />
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-noveo-accent text-white px-3 py-1 rounded-full text-sm font-poppins font-medium shadow-lg">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-noveo-text mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <time>{new Date(post.date).toLocaleDateString(params.lang === 'fr' ? 'fr-FR' : params.lang === 'en' ? 'en-US' : 'zh-CN')}</time>
                        </div>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-poppins font-bold text-noveo-primary mb-4 group-hover:text-noveo-secondary transition-colors leading-tight">
                        {post.title}
                      </h3>
                      
                      <p className="text-noveo-text font-inter mb-6 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center text-noveo-accent group-hover:text-noveo-secondary transition-colors">
                        <span className="font-poppins font-medium">{dict.blog.readMore}</span>
                        <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 bg-noveo-neutral">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <FileText className="w-6 h-6 text-noveo-primary" />
              <h2 className="text-3xl md:text-4xl font-poppins font-bold text-noveo-primary">
                {dict.blog.allArticles}
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-noveo-primary to-noveo-secondary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => {
              const Icon = post.icon
              return (
                <Card key={post.id} className="group cursor-pointer border-noveo-border hover:border-noveo-secondary transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full">
                  <CardContent className="p-0 h-full flex flex-col">
                    {/* Image/Icon Header */}
                    <div className="relative h-40 bg-gradient-to-br from-noveo-primary/5 to-noveo-secondary/5 flex items-center justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-noveo-primary to-noveo-secondary rounded-xl p-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-full h-full text-white" />
                      </div>
                      <div className="absolute top-3 left-3">
                        <span className="bg-noveo-secondary text-white px-2 py-1 rounded-full text-xs font-poppins font-medium shadow-md">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex items-center space-x-3 text-xs text-noveo-text mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <time>{new Date(post.date).toLocaleDateString(params.lang === 'fr' ? 'fr-FR' : params.lang === 'en' ? 'en-US' : 'zh-CN')}</time>
                        </div>
                        <span>•</span>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-poppins font-bold text-noveo-primary mb-3 group-hover:text-noveo-secondary transition-colors leading-tight line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-noveo-text font-inter text-sm mb-4 leading-relaxed line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center text-noveo-accent group-hover:text-noveo-secondary transition-colors mt-auto">
                        <span className="font-poppins font-medium text-sm">{dict.blog.readMore}</span>
                        <ArrowRight className="w-3 h-3 ml-2 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-noveo-primary text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-64 h-64 bg-noveo-secondary rounded-full -translate-x-32 -translate-y-32"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-noveo-secondary rounded-full translate-x-48 translate-y-48"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-noveo-accent rounded-full -translate-x-16 -translate-y-16"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Mail className="w-8 h-8 text-noveo-secondary" />
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold">
                {dict.blog.newsletter.title}
              </h2>
            </div>
            <p className="text-xl md:text-2xl text-noveo-secondary font-inter mb-8 max-w-3xl mx-auto">
              {dict.blog.newsletter.description}
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-noveo-accent hover:bg-noveo-accent/90 text-white font-poppins font-semibold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href={`/${params.lang}/contact`}>
                {dict.blog.newsletter.cta}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <JsonLd
        type="article"
        lang={params.lang}
        dict={dict}
        data={{
          name: dict.blog.title,
          description: dict.blog.subtitle,
          author: "Noveo Logistics"
        }}
      />
    </div>
  )
} 