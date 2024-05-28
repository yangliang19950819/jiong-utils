import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './locales/en/translation.json';
import translationZH from './locales/zh/translation.json';

const resources = {
    en: {
      translation: translationEN
    },
    zh: {
      translation: translationZH
    }
};

i18n.use(LanguageDetector)
    .init({
        resources,
        fallbackLng: "zh",
        debug: true,
        interpolation: {
            escapeValue: true
        }
    })

export default i18n