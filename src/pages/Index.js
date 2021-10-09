import React from 'react'
import { ReactComponent as Logo } from '../assets/svg/main-logo.svg'
import { Link } from 'react-router-dom'
import { SOCIALS } from '../utils/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslation } from 'react-i18next'

const Index = () => {
    const { t, i18n } = useTranslation()
    return (
        <div className="index-wrapper">
            <div className="logo-wrapper">
                <Logo/>
            </div>
            <div className="links-wrapper">
                <Link to="/about">About Us</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/articles">Articles</Link>
                <a href="https://www.grubhub.com/restaurant/charro-negro-665-sebastopol-rd-santa-rosa/2576507">Order Now</a>
            </div>
            <div className="socials-wrapper">
                {SOCIALS.map(({href, icon},i) => <a className="social-anchor" key={i} href={href} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={icon} className="icon"/>
                </a>)}
            </div>
            <div className="language-wrapper">
                <div>
                    <span onClick={() => i18n.changeLanguage('es')}>ES</span>
                </div>
                <div>
                    <span onClick={() => i18n.changeLanguage('en')}>EN</span>
                </div>
            </div>
        </div>
    )
}

export default Index

