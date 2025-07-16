'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import frMessages from '../../messages/fr.json';
import enMessages from '../../messages/en.json';

export type Locale = 'en' | 'fr';

interface TranslationMessages {
  [key: string]: any;
}

interface TranslationContextType {
  locale: Locale;
  t: (key: string) => string;
  switchLocale: (newLocale: Locale) => void;
}

// All messages imported statically
const allMessages: Record<Locale, TranslationMessages> = {
  fr: frMessages,
  en: enMessages,
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('fr');

  // Initialize locale from localStorage on mount
  useEffect(() => {
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && (savedLocale === 'en' || savedLocale === 'fr')) {
      setLocale(savedLocale);
      console.log(`Initialized locale from localStorage: ${savedLocale}`);
    }
  }, []);

  // Debug: Log whenever locale changes
  useEffect(() => {
    console.log(`Current locale: ${locale}`);
  }, [locale]);

  const t = (key: string): string => {
    const messages = allMessages[locale] || allMessages.fr;
    const keys = key.split('.');
    let value: any = messages;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key} for locale ${locale}`);
        return key; // Return key if translation not found
      }
    }
    
    return typeof value === 'string' ? value : key;
  };

  const switchLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
    console.log(`Switched locale to: ${newLocale}`);
  };

  return (
    <TranslationContext.Provider value={{ locale, t, switchLocale }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
} 