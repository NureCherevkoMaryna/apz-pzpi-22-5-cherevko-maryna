import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationUK from './locales/uk/translation.json';

const resources = {
  en: { translation: translationEN },
  uk: { translation: translationUK }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'uk',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;