import {useEffect} from 'react'
import { ReactComponent as Logo } from '../assets/svg/main-logo.svg'
import { Link } from 'react-router-dom'
import { SOCIALS } from '../utils/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'
import gsap from 'gsap'
import { use100vh } from 'react-div-100vh'
import Head from '../components/head'

const Index = () => {
    const { t, i18n } = useTranslation()

    useEffect(() => {
        const tl = gsap.timeline()

        
        tl
            .to('body', { backgroundColor: '#EFBA1A' })
            .fromTo('.text-overlay h1', { opacity: 0, y: -100, skewX: 50 }, { opacity: 1, y: 0, duration: 1.5, skewX: 0, ease: 'power2.out' })
            .to('body', { backgroundColor: '#FA8812', duration: 1, ease: 'power2.out' })
            .to('.text-overlay h1', { opacity: 0, y: 100, duration: 1, ease: 'power2.out' })
            .to('.text-overlay', {display: 'none', duration: 0})
            .fromTo('.logo-wrapper', { opacity: 0, scale: 0, y: -100 }, { opacity: 1, scale: 1, y: 0, duration: 1, ease: 'power2.out' })
            .fromTo('.links-wrapper', {opacity: 0, y: -100, height:"1px"}, {opacity: 1, y: 0, height:"45%",duration: 1, ease: 'power2.out'})
            .fromTo('.links-wrapper a', { opacity: 0, x: -100, skewY: 30 }, { opacity: 1, x: 0, skewY: 0, stagger: 0.3, duration: .3, delay: 0, ease: 'power2.out' })
            .fromTo('.socials-wrapper', { opacity: 0, x: -100, skewX: 30 }, { opacity: 1, x: 0, skewX: 0, stagger: 0.5, duration: 1, ease: 'power2.out' })
            .fromTo('.language-wrapper', { opacity: 0, y: 200 }, {opacity: 1, y:0, ease: 'power2.out'})
    }, [])

    return (
        <div className="index-wrapper" style={{ height: use100vh() }}>
            <Head title={"Charro Negro Food Truck"}/>
            <div className="logo-wrapper">
                <Logo/>
            </div>
            <div className="links-wrapper">
                <Link to="/about">{ t("index.about")}</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/articles">{ t("index.articles")}</Link>
                <a href="https://www.grubhub.com/restaurant/charro-negro-665-sebastopol-rd-santa-rosa/2576507" target="_blank" rel="noreferrer">{ t("index.order")}</a>
            </div>
            <div className="socials-wrapper">
                {SOCIALS.map(({href, icon},i) => <a className="social-anchor" key={i} href={href} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={icon} className="icon"/>
                </a>)}
            </div>
            <div className="language-wrapper">
                <div>
                    <span className={ i18n.language === "es" ? "selected" : ""} onClick={() => i18n.changeLanguage('es')}>ES</span>
                </div>
                <div>
                    <span className={ i18n.language !== "es" ? "selected" : ""} onClick={() => i18n.changeLanguage('en')}>EN</span>
                </div>
            </div>
            <div className="text-overlay">
                <h1>Beach & Barrio Food</h1>
            </div>
        </div>
    )
}

export default Index

