import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://noveo-logistics.com'
  
  const robots = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Specific crawl rules
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 1

# Disallow dynamic routes that shouldn't be indexed
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /private/

# Allow images and static assets
Allow: /images/
Allow: /icons/
Allow: /*.css
Allow: /*.js
Allow: /*.woff2
Allow: /*.woff
Allow: /*.ttf
Allow: /*.eot
Allow: /*.svg
Allow: /*.png
Allow: /*.jpg
Allow: /*.jpeg
Allow: /*.gif
Allow: /*.webp
Allow: /*.ico
`

  return new NextResponse(robots, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  })
} 