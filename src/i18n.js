// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import arTranslation from './Locales/ar/translation.json';
import enTranslation from './Locales/en/translation.json' ;

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      ar: { translation: arTranslation },
    },
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
