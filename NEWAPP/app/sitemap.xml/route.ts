import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://noveo-logistics.com'
  const languages = ['fr', 'en', 'zh']
  
  const pages = [
    '',
    '/a-propos',
    '/solutions',
    '/industries',
    '/contact',
    '/blog',
  ]

  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
`

  // Add pages for each language
  for (const lang of languages) {
    for (const page of pages) {
      const url = `${baseUrl}/${lang}${page}`
      const alternateLinks = languages
        .filter(l => l !== lang)
        .map(l => `    <xhtml:link rel="alternate" hreflang="${l}" href="${baseUrl}/${l}${page}" />`)
        .join('\n')
      
      sitemap += `  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
    <xhtml:link rel="alternate" hreflang="${lang}" href="${url}" />
${alternateLinks}
  </url>
`
    }
  }

  sitemap += '</urlset>'

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  })
} 