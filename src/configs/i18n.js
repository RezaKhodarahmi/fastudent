import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'fa',
    fallbackLng: 'en', // use English if the translation isn't available
    whitelist: ['fa', 'en'], // only load these languages
    backend: {
      loadPath: '/locales/{{lng}}.json'
    },
    debug: false,
    keySeparator: false,
    react: {
      useSuspense: false
    },
    interpolation: {
      escapeValue: false,
      formatSeparator: ','
    },
    detection: {
      order: ['localStorage', 'navigator'], // use localStorage first, then browser language
      caches: ['localStorage'] // cache the language in localStorage
    }
  })

export default i18n
