import { faFacebookF, faInstagram,  } from "@fortawesome/free-brands-svg-icons";
import aguachile from '../assets/imgs/aguachile.jpeg'
import taco from '../assets/imgs/taco.jpeg'
import cocktail from '../assets/imgs/cocktail.jpeg'
import calamari from '../assets/imgs/calamari.jpeg'
import ceviche from '../assets/imgs/ceviche.jpeg'
import tostada from '../assets/imgs/tostada.jpeg'
import fajita from '../assets/imgs/fajita.jpeg'

export const SOCIALS = [
    {
        icon: faInstagram,
        href: 'https://www.instagram.com/charronegrofood/',   
    },
    {
        icon: faFacebookF,
        href: 'https://www.facebook.com/charronegrofood/',
    }
]

export const LINKS = [
    {
        path: '/',
        trans: 'index.home'
    },
    {
        path: '/about',
        trans: 'index.about'
    },
    {
        path: '/menu',
        trans: 'index.menu'
    },
    {
        path: '/articles',
        trans: 'index.articles'
    }
]



export const MENU = [
    {
        title: "Aguachiles",
        headings: ["menu.medium", "menu.large"],
        translateTitle: false,
        translateElements: false,
        img: aguachile,
        items: [
            {
                name: "Agua Chile Verde",
                prices: ["15.00", "20.00"]
            },
            {
                name: "Agua Chile Mango",
                prices: ["14.00", "18.00"]
            },
            {
                name: "Agua Chile Negro",
                prices: ["14.00", "18.00"]
            },
            {
                name: "Agua Chile Coco",
                prices: ["14.00", "18.00"]
            }
        ]
    },
    {
        title: "Ceviches",
        headings: ["menu.medium", "menu.large"],
        translateTitle: false,
        translateElements: true,
        img: ceviche,
        items: [
            {
                name: "menu.ceviches.c1",
                prices: ["16.00", "20.00"]
            },
            {
                name: "menu.ceviches.c2",
                prices: ["16.00", "20.00"]
            },
            {
                name: "menu.ceviches.c3",
                prices: ["16.00", "20.00"]
            }
        ]
    },
    {
        title: "menu.cocktails.title",
        headings: ["menu.medium", "menu.large"],
        translateTitle: true,
        translateElements: true,
        img: cocktail,
        items: [
            {
                name: "menu.cocktails.c1",
                prices: ["14.00", "18.00"]
            },
            {
                name: "menu.cocktails.c2",
                prices: ["16.00", "20.00"]
            },
            {
                name: "menu.cocktails.c3",
                prices: ["13.00", "18.00"]
            },
            {
                name: "menu.cocktails.c4",
                prices: ["16.00", "20.00"]
            }
        ]
    },
    {
        title: "Tacos",
        headings: [" "],
        translateTitle: false,
        translateElements: true,
        img: taco,
        items: [
            {
                name: "menu.tacos.t1",
                prices: ["15.00"]
            },
            {
                name: "menu.tacos.t2",
                prices: ["14.00"]
            },
            {
                name: "menu.tacos.t3",
                prices: ["13.00"]
            },
            {
                name: "menu.tacos.t4",
                prices: ["15.00"]
            },
            {
                name: "menu.tacos.t5",
                prices: ["14.00"]
            },
            {
                name: "menu.tacos.t6",
                prices: ["4.00"]
            },
            {
                name: "menu.tacos.t7",
                prices: ["4.00"]
            }
        ]
    },
    {
        title: "menu.specials.title",
        headings: [" "],
        translateTitle: true,
        translateElements: true,
        img: calamari,
        items: [
            {
                name: "menu.specials.s1",
                prices: ["14.00"]
            },
            {
                name: "menu.specials.s2",
                prices: ["15.00"]
            },
            {
                name: "menu.specials.s3",
                prices: ["11.00"]
            },
            {
                name: "menu.specials.s4",
                prices: ["13.00"]
            }
        ]
    },
    {
        title: "menu.fajita.title",
        headings: [" "],
        translateTitle: true,
        translateElements: true,
        img: fajita,
        items: [
            {
                name: "menu.fajita.f1",
                prices: ["14.00"]
            },
            {
                name: "menu.fajita.f2",
                prices: ["14.00"]
            },
            {
                name: "menu.fajita.f3",
                prices: ["16.00"]
            },
        ]
    },
    {
        title: "Tostadas",
        headings: [" "],
        translateTitle: false,
        translateElements: true,
        img: tostada,
        items: [
            {
                name: "menu.tostada.t1",
                prices: ["10.00"]
            },
            {
                name: "menu.tostada.t2",
                prices: ["10.00"]
            },
            {
                name: "menu.tostada.t3",
                prices: ["13.00"]
            },
        ]
    },
]


export const ARTICLES = [
    {
        title: "articles.a1",
        date: "10.24.2021",
        publisher: "KTVU FOX 2",
        img: "https://www.sonomamag.com/wp-content/uploads/2020/07/cc0715_CharroNegro_CevicheAugachile-1024x683.jpg",
        link: "https://www.ktvu.com/news/latino-communitys-food-trucks-part-of-santa-rosa-neighborhood-revitalization"
    },
    {
        title: "articles.a2",
        date: "09.2021",
        publisher: "Sonoma Magazine",
        img: "https://www.sonomamag.com/wp-content/uploads/2021/09/charro-negro-1024x683.jpg",
        link: "https://www.sonomamag.com/new-mexican-food-park-is-taking-shape-in-santa-rosa"
    },
    {
        title: "articles.a5",
        date: "09.10.2021",
        publisher: "La Prensa Sonoma",
        img: "https://imengine.prod.srp.navigacloud.com/?uuid=64306663-3036-406c-b073-2d3336353633&type=primary&q=72&width=1023",
        link: "https://www.laprensasonoma.com/articulo/comunidad-lps/celebraran-la-creacion-de-el-mitote-en-roseland/"
    },
    {
        title: "articles.a3",
        date: "08.19.2021",
        publisher: "Sonoma County",
        img: "https://www.sonomacounty.com/sites/default/files/styles/editorial_hero_xl/public/2021-02/dining_charro_negro_mitote_park_sonoma_county_004_1920x968.jpg?itok=iZ12uVPT",
        link: "https://www.sonomacounty.com/blog/12-new-food-trucks-sonoma-county"
    },
    {
        title: "articles.a8",
        date: "07.20.2021",
        publisher: "Sonoma Magazine",
        img: "https://www.sonomamag.com/wp-content/uploads/2020/07/cc0715_CharroNegro_Truck-1024x694.jpg",
        link: "https://www.sonomamag.com/new-mexican-food-trucks-to-check-out-in-sonoma-county/?gSlide=2"
    },
    {
        title: "articles.a4",
        date: "01.29.2021",
        publisher: "Sonoma Magazine",
        img: "https://www.sonomamag.com/wp-content/uploads/2020/07/cc0715_CharroNegro_Augachile-1024x680.jpg",
        link: "https://www.sonomamag.com/food-trucks-in-sonoma-county-to-check-out-right-now"
    },
    {
        title: "articles.a6",
        date: "12.18.2020",
        publisher: "Sonoma Magazine",
        img: "https://www.sonomamag.com/wp-content/uploads/2020/07/cc0715_CharroNegro_TacoVariety-1024x686.jpg",
        link: "https://www.sonomamag.com/sonoma-countys-best-restaurant-dishes-2020/?gSlide=19"
    },
    {
        title: "articles.a7",
        date: "12.06.2020",
        publisher: "Argus Courier",
        img: "https://imengine.prod.srp.navigacloud.com/?uuid=5fbf3b31-a40b-57a8-bd58-604bba071a91&type=primary&q=72&width=1024",
        link: "https://www.petaluma360.com/article/entertainment/biggest-2020-sonoma-county-restaurant-openings-and-closings/",
    }
]

