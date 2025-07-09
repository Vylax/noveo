/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Noveo Design System Colors
        'noveo-blue': '#1D2F4E',   // Primaire (Confiance, Stature)
        'noveo-teal': '#96C2B8',   // Secondaire (Technologie, Modernité)
        'noveo-orange': '#EE9323', // Accent (Action, Conversion)
        'light-gray': '#EAEFF3',   // Bordures / Séparateurs
        'dark-gray': '#4A5568',    // Texte courant
        'off-white': '#F8FAFC',    // Fond principal
      },
      fontFamily: {
        sans: ['var(--font-inter)'],      // Inter pour le corps de texte
        display: ['var(--font-poppins)'], // Poppins pour les titres
      },
      fontSize: {
        'h1': ['48px', { lineHeight: '1.1', fontWeight: '700' }],
        'h2': ['36px', { lineHeight: '1.2', fontWeight: '700' }],
        'h3': ['24px', { lineHeight: '1.3', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'small': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'counter': 'counter 2s ease-out',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        counter: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        'noveo': '0 4px 6px -1px rgba(29, 47, 78, 0.1), 0 2px 4px -1px rgba(29, 47, 78, 0.06)',
        'noveo-lg': '0 10px 15px -3px rgba(29, 47, 78, 0.1), 0 4px 6px -2px rgba(29, 47, 78, 0.05)',
      },
    },
  },
  plugins: [],
}; 