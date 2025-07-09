import 'server-only';

export type Locale = 'fr' | 'en' | 'zh';

// Import dictionaries
const dictionaries = {
  fr: () => import('@/dictionaries/fr.json').then((module) => module.default),
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  zh: () => import('@/dictionaries/zh.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  if (!dictionaries[locale]) {
    throw new Error(`Dictionary for locale '${locale}' not found`);
  }
  return dictionaries[locale]();
};

// Type for dictionary structure
export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

// Utility function to get supported locales
export const getSupportedLocales = (): Locale[] => {
  return Object.keys(dictionaries) as Locale[];
};

// Utility function to validate locale
export const isValidLocale = (locale: string): locale is Locale => {
  return getSupportedLocales().includes(locale as Locale);
}; 