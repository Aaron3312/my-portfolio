"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { websiteData, WebsiteData } from '@/data/dataWebsite';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  data: WebsiteData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('es');

  useEffect(() => {
    // Detectar idioma del navegador al cargar
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage) {
      setLanguageState(savedLanguage);
    } else {
      // Detectar idioma del navegador
      const browserLang = navigator.language.toLowerCase();
      const detectedLang = browserLang.startsWith('es') ? 'es' : 'en';
      setLanguageState(detectedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);

    // Actualizar el atributo lang del HTML
    document.documentElement.lang = lang;
  };

  // Helper function to get nested values using dot notation
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = websiteData[language];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key; // Return key if path not found
      }
    }

    return typeof value === 'string' ? value : key;
  };

  const data = websiteData[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, data }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
