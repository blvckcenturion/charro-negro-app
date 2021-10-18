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
                    },
                    "menu": {
                        "medium": "Medium",
                        "large": "Large",
                        "units3": "3 Units",
                        "ceviches": {
                            "c1": "Shrimp Ceviche",
                            "c2": "Octopus Ceviche",
                            "c3": "Mixed Ceviche"
                        },
                        "cocktails": {
                            "title": "Cocktails",
                            "c1": "Shrimp",
                            "c2": "Shrimp & Octopus",
                            "c3": "Scallop",
                            "c4": "Campechana"
                        },
                        "tacos": {
                            "t1": "3 Shrimp Tacos",
                            "t2": "3 Fish Tacos",
                            "t3": "3 Oyster Tacos",
                            "t4": "3 Octopus Tacos",
                            "t5": "3 Calamari Tacos",
                            "t6": "1 Pork Belly Taco",
                            "t7": "1 Carne Asada Taco"
                        },
                        "specials": {
                            "title": "Specials",
                            "s1": "Shrimp Quesadilla al Pastor",
                            "s2": "Surf and Turf Burrito",
                            "s3": "Fried Calamari",
                            "s4": "Fried Oyster 8 each"
                        },
                        "fajita": {
                            "title": "Fajita Bowl",
                            "f1": "Shrimp & Chorizo",
                            "f2": "Octopus & Chorizo",
                            "f3": "Shrimp, Octopus, Calamari & Chorizo",
                        },
                        "tostada": {
                            "t1": "Shrimp Tostada",
                            "t2": "Octopus Tostada",
                            "t3": "Mixed Tostada",
                        }   
                    },
                    "articles": {
                        "btn": "Read Article.",
                        "a1": "Latino community's food trucks part of Santa Rosa neighborhood revitalization.",
                        "a2": "New Mexican Food Park Is Taking Shape in Santa Rosa.",
                        "a3": "New Sebastopol Food Hall Taking Shape.",
                        "a4": "12 New Food Trucks to Check Out Right Now in Sonoma County.",
                        "a5": "Celebration for the creation of El Mitote in Roseland.",
                        "a6": "Sonoma County’s Best Restaurant Dishes 2020.",
                        "a7": "Biggest 2020 Sonoma County Restaurant Openings and Closings.",
                        "a8": "Check Out These Up-And-Coming Taco Trucks in Sonoma County.",

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
                    },
                    "menu": {
                        "medium": "Mediano",
                        "large": "Grande",
                        "units1": " Unidades",
                        "ceviches": {
                            "c1": "Ceviche de Camarón",
                            "c2": "Ceviche de Pulpo",
                            "c3": "Ceviche Mixto"
                        },
                        "cocktails": {
                            "title": "Cócteles",
                            "c1": "Camarón",
                            "c2": "Camarón y Pulpo",
                            "c3": "Vieira",
                            "c4": "Campechana"
                        },
                        "tacos": {
                            "t1": "3 Tacos de Camarón",
                            "t2": "3 Tacos de Pescado",
                            "t3": "3 Tacos de Ostra",
                            "t4": "3 Tacos de Pulpo",
                            "t5": "3 Tacos de Calamar",
                            "t6": "1 Taco de Panceta de Cerdo",
                            "t7": "1 Taco de Carne Asada"
                        },
                        "specials": {
                            "title": "Especiales",
                            "s1": "Quesadilla de Camarón al Pastor",
                            "s2": "Burrito Mar y Tierra ",
                            "s3": "Calamar Frito",
                            "s4": "8 Ostras Fritas"
                        },
                        "fajita": {
                            "title": "Bowl de Fajita",
                            "f1": "Camarón y Chorizo",
                            "f2": "Pulpo y Chorizo",
                            "f3": "Camarón, Pulpo, Calamar y Chorizo",
                        },
                        "tostada": {
                            "t1": "Tostada de Camarón",
                            "t2": "Tostada de Pulpo",
                            "t3": "Tostada Mixta",
                        }
                    },
                    "articles": {
                        "btn": "Leer Articulo.",
                        "a1": "Los camiones de comida de la comunidad latina son parte de la revitalización de Santa Rosa.",
                        "a2": "Nuevo parque de comida mexicana toma forma en Santa Rosa.",
                        "a3": "Toma forma la nueva sala de alimentación de Sebastopol.",
                        "a4": "12 nuevos camiones de comida para visitar ahora mismo en el condado de Sonoma.",
                        "a5": "Celebrarán la creación de El Mitote en Roseland.",
                        "a6": "Los mejores platos de restaurante del condado de Sonoma 2020.",
                        "a7": "Las mayores aperturas y cierres de restaurantes del condado de Sonoma en 2020.",
                        "a8": "Echa un vistazo a estos nuevos camiones de tacos en el condado de Sonoma.",
                    }
                }
            }
        },
        interpolation: {
        escapeValue: false, 
        }
  });


export default i18n;