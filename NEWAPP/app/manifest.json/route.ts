import { NextResponse } from 'next/server'

export async function GET() {
  const manifest = {
    name: 'Noveo Logistics - Commissionnaire de Transport Digital',
    short_name: 'Noveo Logistics',
    description: 'Commissionnaire de transport nouvelle génération, spécialisé dans la logistique Europe-Asie',
    start_url: '/',
    display: 'standalone',
    background_color: '#0c3b41',
    theme_color: '#0c3b41',
    orientation: 'portrait',
    scope: '/',
    lang: 'fr',
    icons: [
      {
        src: '/images/logos/logo_square_with_fffff_bg.jpg',
        sizes: '192x192',
        type: 'image/jpeg',
        purpose: 'any maskable',
      },
      {
        src: '/images/logos/logo_square_with_1e2e4f_bg.jpg',
        sizes: '512x512',
        type: 'image/jpeg',
        purpose: 'any maskable',
      },
    ],
    categories: ['logistics', 'transport', 'business'],
    screenshots: [
      {
        src: '/images/platform-mockup.png',
        sizes: '1920x1080',
        type: 'image/png',
        form_factor: 'wide',
      },
    ],
  }

  return NextResponse.json(manifest, {
    headers: {
      'Content-Type': 'application/manifest+json',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  })
} 