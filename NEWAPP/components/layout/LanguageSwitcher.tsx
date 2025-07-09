'use client'

import { usePathname, useRouter } from 'next/navigation'
import { Locale } from '@/lib/get-dictionary'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

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
    <div className="flex items-center space-x-1 border border-border rounded-md p-1 bg-background">
      {Object.entries(languages).map(([code, lang]) => (
        <Button
          key={code}
          variant="ghost"
          size="sm"
          onClick={() => handleLanguageChange(code as Locale)}
          className={cn(
            "h-8 px-2 py-1 text-xs font-medium rounded transition-colors",
            currentLang === code
              ? 'bg-ovrsea-navy text-white hover:bg-ovrsea-navy/90'
              : 'text-foreground hover:bg-ovrsea-neutral hover:text-ovrsea-navy'
          )}
          aria-label={`Switch to ${lang.label}`}
        >
          <span className="mr-1">{lang.flag}</span>
          {lang.label}
        </Button>
      ))}
    </div>
  )
} 