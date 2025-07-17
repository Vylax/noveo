'use client';

import React from 'react';
import { useTranslation, Locale } from '@/contexts/TranslationContext';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { locale, switchLocale } = useTranslation();

  const toggleLanguage = () => {
    const newLocale: Locale = locale === 'fr' ? 'en' : 'fr';
    switchLocale(newLocale);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-noveo-blue transition-colors duration-200 border border-gray-300"
      aria-label={`Switch to ${locale === 'fr' ? 'English' : 'French'}`}
    >
      <Globe size={16} />
      <span className="text-sm font-medium">
        {locale.toUpperCase()}
      </span>
      <span className="text-xs text-gray-500">→</span>
      <span className="text-xs text-gray-500">
        {locale === 'fr' ? 'EN' : 'FR'}
      </span>
    </button>
  );
} 