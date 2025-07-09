'use client'

import { usePathname, useRouter } from 'next/navigation'
import { Locale } from '@/lib/get-dictionary'

interface LanguageSwitcherProps {
  currentLang: Locale
}

const languages = {
  fr: { code: 'fr', label: 'FR', flag: '🇫🇷' },
  en: { code: 'en', label: 'EN', flag: '🇬🇧' },
  zh: { code: 'zh', label: 'ZH', flag: '🇨🇳' },
}

export function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const pathname = usePathname()
  const router = useRouter()

  const handleLanguageChange = (newLang: Locale) => {
    // Remove the current language from the pathname
    const segments = pathname.split('/')
    segments[1] = newLang // Replace the language segment
    const newPath = segments.join('/')
    
    router.push(newPath)
  }

  return (
    <div className="flex items-center space-x-1 border border-light-gray rounded-md p-1">
      {Object.entries(languages).map(([code, lang]) => (
        <button
          key={code}
          onClick={() => handleLanguageChange(code as Locale)}
          className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
            currentLang === code
              ? 'bg-noveo-blue text-white'
              : 'text-dark-gray hover:bg-gray-100'
          }`}
          aria-label={`Switch to ${lang.label}`}
        >
          <span className="mr-1">{lang.flag}</span>
          {lang.label}
        </button>
      ))}
    </div>
  )
} 