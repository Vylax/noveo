import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],      // Inter pour le corps de texte
        display: ['var(--font-poppins)'], // Poppins pour les titres
        // Aliases pour compatibilité
        'inter': ['var(--font-inter)'],
        'poppins': ['var(--font-poppins)'],
      },
      fontSize: {
        'h1': ['48px', { lineHeight: '1.1', fontWeight: '700' }],
        'h2': ['36px', { lineHeight: '1.2', fontWeight: '700' }],
        'h3': ['24px', { lineHeight: '1.3', fontWeight: '600' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'small': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Couleurs Noveo Design System (comme dans CURRAPP)
        'noveo-blue': '#1D2F4E',   // Primaire (Confiance, Stature)
        'noveo-teal': '#96C2B8',   // Secondaire (Technologie, Modernité)
        'noveo-orange': '#EE9323', // Accent (Action, Conversion)
        'light-gray': '#EAEFF3',   // Bordures / Séparateurs
        'dark-gray': '#4A5568',    // Texte courant
        'off-white': '#F8FAFC',    // Fond principal
        // Couleurs du Cahier des charges - Système de Design obligatoire
        'noveo': {
          'primary': '#1D2F4E',      // Bleu Noveo (Confiance, Stature)
          'secondary': '#96C2B8',    // Teal Noveo (Technologie, Modernité)
          'accent': '#EE9323',       // Orange Vif (Action, Conversion)
          'neutral': '#F8FAFC',      // Fond
          'text': '#4A5568',         // Texte courant
          'border': '#EAEFF3',       // Bordures / Séparateurs
        },
        // Couleurs OVRSEA (pour compatibilité avec l'existant)
        'ovrsea': {
          'navy': '#0c3b41',
          'mint': '#a4dfd2',
          'neutral': '#f3f4f6',
          'sage': '#7aa395',
          'teal': '#4a9da1',
          'charcoal': '#2d3748',
          'pearl': '#f0f9f9',
          'steel': '#a0aec0',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'noveo': '0 4px 6px -1px rgba(29, 47, 78, 0.1), 0 2px 4px -1px rgba(29, 47, 78, 0.06)',
        'noveo-lg': '0 10px 15px -3px rgba(29, 47, 78, 0.1), 0 4px 6px -2px rgba(29, 47, 78, 0.05)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fadeInUp": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "counter": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "fadeInUp": "fadeInUp 0.6s ease-out",
        "counter": "counter 1.5s ease-out",
        "pulse-slow": "pulse 3s infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config; 