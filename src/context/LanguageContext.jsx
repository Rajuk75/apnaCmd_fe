import React, { createContext, useContext, useState } from 'react';
import { APP_TEXT, BUTTON_TEXT, ERROR_TEXT, FOOTER_TEXT, SHOWCASE_TEXT, SERVICES_TEXT } from '../constants/text';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // 'en' or 'hi'

  const toggleLanguage = (lang) => {
    if (lang) {
      setLanguage(lang);
    } else {
      setLanguage((prev) => (prev === 'en' ? 'hi' : 'en'));
    }
  };

  const getText = (obj) => {
    if (!obj) return '';
    return obj[language] || obj['en'];
  };

  const value = {
    language,
    toggleLanguage,
    getText,
    text: {
      app: { ...APP_TEXT, FOOTER_TEXT, SHOWCASE: SHOWCASE_TEXT, SERVICES: SERVICES_TEXT },
      button: BUTTON_TEXT,
      error: ERROR_TEXT,
    }
  };

  return (
    <LanguageContext.Provider value={value}>
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
