import React from 'react'
import { useTranslation } from 'react-i18next'
import { SOCIALS } from '../utils/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Footer = () => {
    const { t } = useTranslation()

    return (
        <footer>
            <div className="socials">
            {SOCIALS.map(({href, icon},i) => <a className="social-anchor" key={i} href={href} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={icon} className="icon"/>
                        </a>)}
            </div>
            <div className="location">
                <p>665 Sebastopol Road, Santa Rosa, CA, 95407</p>
                <p>Wednesday - Sunday, 12-9 PM</p>
                <p>+1 (707) 385 6465</p>
                <h6>CHARRO NEGRO FOOD @{ new Date().getFullYear()}</h6>
            </div>
            <div className="order">
                <button onClick={() => window.open("https://www.grubhub.com/restaurant/charro-negro-665-sebastopol-rd-santa-rosa/2576507")}>
                    {t('index.order')}
                </button>
            </div>
        </footer>
    )
}

export default Footer
