import { getDictionary, type Locale } from '@/lib/get-dictionary'
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

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
    },
  }
}

export default async function BlogPage({
  params,
}: {
  params: { lang: Locale }
}) {
  const dict = await getDictionary(params.lang)

  const blogPosts = dict.blog.posts.map(post => ({
    ...post,
    date: '2024-01-15',
    image: `/images/blog/post-${post.id}.jpg`
  }))

  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-noveo-blue to-noveo-teal text-white py-20">
        <div className="container-max mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {dict.blog.title}
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-200">
              {dict.blog.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="section-padding bg-white">
        <div className="container-max mx-auto">
          <h2 className="text-h2 font-display font-bold text-noveo-blue mb-8 text-center">
            {dict.blog.featured}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="bg-white rounded-lg shadow-noveo hover:shadow-noveo-lg transition-all duration-300 overflow-hidden">
                  {/* Image */}
                  <div className="relative h-48 bg-gradient-to-br from-noveo-blue/10 to-noveo-teal/10">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl">{post.category === dict.blog.posts[0].category ? '📋' : '🤖'}</div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-noveo-orange text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <time>{new Date(post.date).toLocaleDateString(params.lang === 'fr' ? 'fr-FR' : params.lang === 'en' ? 'en-US' : 'zh-CN')}</time>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-noveo-blue mb-3 group-hover:text-noveo-teal transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center text-noveo-blue group-hover:text-noveo-teal transition-colors">
                      <span className="text-sm font-medium">{dict.blog.readMore}</span>
                      <svg className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="section-padding bg-off-white">
        <div className="container-max mx-auto">
          <h2 className="text-h2 font-display font-bold text-noveo-blue mb-8 text-center">
            {dict.blog.allArticles}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article key={post.id} className="group cursor-pointer">
                <div className="bg-white rounded-lg shadow-noveo hover:shadow-noveo-lg transition-all duration-300 overflow-hidden h-full">
                  {/* Image */}
                  <div className="relative h-40 bg-gradient-to-br from-noveo-blue/10 to-noveo-teal/10">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-4xl">
                        {post.category === dict.blog.posts[2].category ? '🚢' : 
                         post.category === dict.blog.posts[3].category ? '🌍' : 
                         post.category === dict.blog.posts[4].category ? '🌱' : 
                         post.category === dict.blog.posts[5].category ? '🛒' : '📄'}
                      </div>
                    </div>
                    <div className="absolute top-3 left-3">
                      <span className="bg-noveo-teal text-white px-2 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-center space-x-2 text-xs text-gray-500 mb-2">
                      <time>{new Date(post.date).toLocaleDateString(params.lang === 'fr' ? 'fr-FR' : params.lang === 'en' ? 'en-US' : 'zh-CN')}</time>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold text-noveo-blue mb-2 group-hover:text-noveo-teal transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center text-noveo-blue group-hover:text-noveo-teal transition-colors">
                      <span className="text-sm font-medium">{dict.blog.readMore}</span>
                      <svg className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-noveo-blue text-white">
        <div className="container-max mx-auto text-center">
          <h2 className="text-h2 font-display font-bold mb-6">
            {dict.blog.newsletter.title}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {dict.blog.newsletter.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder={dict.blog.newsletter.placeholder}
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-noveo-orange"
            />
            <button className="btn-primary bg-noveo-orange hover:bg-orange-600 whitespace-nowrap">
              {dict.blog.newsletter.cta}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
} 