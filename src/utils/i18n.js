import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
i18n

    .use(LanguageDetector)
    .use(initReactI18next)

    .init({
        lng: 'en',
        fallbackLng: 'en',
        debug: true,
        resources: {
            en: {
                translation: {
                    "title": "Welcome"
                }
            },
            es: {
                translation: {
                    "title": "Bien puta"
                }
            }
        },
        interpolation: {
        escapeValue: false, 
        }
  });


export default i18n;