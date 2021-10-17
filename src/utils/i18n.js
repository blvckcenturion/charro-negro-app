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
                        "menu": "Our Menu"
                    },
                    "about": {
                        "title1": "Who we are.",
                        "desc1": "We deliver Beach and Barrio food to the city of Santa Rosa.",
                        "desc2": "Every dish we serve connects the Roseland neighborhood to the Pacific Ocean.",
                        "desc3": "Inspired by Mexican style “mariscos” our food truck is filled with colorful, earthy and high tide flavors.",
                        "desc4": "The driver of this urban sea monster is owner Rodrigo Mendoza, the former chef of Willi’s Seafood in Healdsburg, California.",
                        "title2": "Come visit us.",
                        "hours": {
                            "title": "Working Hours",
                            "desc": "OPEN WEDNESDAY-SUNDAY, 12-9 PM"
                        },
                        "address": {
                            "title": "Location",
                            "desc": "Sebastopol Road, Santa Rosa, CA, 95407"
                        },
                        "pickUp": {
                            "title": "PickUps",
                            "desc": "+1 (707) 385-6465"
                        }
                    }
                }
            },
            es: {
                translation: {
                    "index": {
                        "home": "Inicio",
                        "about": "Sobre Nosotros",
                        "articles": "Articulos Relacionados",
                        "order": "Ordenar Ahora",
                        "menu":"Nuestro Menu"
                    },
                    "about": {
                        "title1": "Quienes Somos.",
                        "desc1": "Distribuimos comida de Playa y Barrio a la ciudad de Santa Rosa",
                        "desc2": "Cada plato que servimos conecta el vecindario de Roseland con el Océano Pacífico.",
                        "desc3": "Inspirado en los mariscos al estilo mexicano, nuestro camión de comida está lleno de sabores coloridos, terrosos y de marea alta.",
                        "desc4": "El conductor de este monstruo marino urbano es el propietario Rodrigo Mendoza, ex chef de Willi’s Seafood en Healdsburg, California.",
                        "title2": "Ven a Visitarnos.",
                        "hours": {
                            "title": "Horario de Atencion",
                            "desc": "Abierto de Miercoles a Domingo, de 12 a 9PM "
                        },
                        "address": {
                            "title": "Ubicacion",
                            "desc": "Sebastopol Road, Santa Rosa, CA, 95407"
                        },
                        "pickUp": {
                            "title": "Recogidas",
                            "desc": "+1 (707) 385-6465"
                        }
                    }
                }
            }
        },
        interpolation: {
        escapeValue: false, 
        }
  });


export default i18n;