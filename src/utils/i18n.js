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
                    "index": {
                        "home": "Home",
                        "about": "About Us",
                        "articles": "Featured Articles",
                        "order": "Order Now",
                        "menu": "menu"
                    }
                }
            },
            es: {
                translation: {
                    "index": {
                        "home": "Inicio",
                        "about": "Sobre Nosotros",
                        "articles": "Articulos Relacionados",
                        "order": "Pedir Ahora",
                        "menu":"menu"
                    }
                }
            }
        },
        interpolation: {
        escapeValue: false, 
        }
  });


export default i18n;