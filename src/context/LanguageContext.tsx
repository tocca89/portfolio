import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, TranslationContent, translations } from '../data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationContent;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function detectBrowserLanguage(): Language {
  if (typeof window === 'undefined') return 'en';

  const savedLang = localStorage.getItem('portfolio_lang') as Language | null;
  if (savedLang && (savedLang === 'it' || savedLang === 'es' || savedLang === 'en')) {
    return savedLang;
  }

  const browserLangs = navigator.languages || [navigator.language || 'en'];
  for (const lang of browserLangs) {
    const code = lang.toLowerCase().slice(0, 2);
    if (code === 'it') return 'it';
    if (code === 'es') return 'es';
    if (code === 'en') return 'en';
  }

  return 'en';
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => detectBrowserLanguage());

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio_lang', lang);
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
