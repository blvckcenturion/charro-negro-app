import { faFacebookF, faInstagram,  } from "@fortawesome/free-brands-svg-icons";

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