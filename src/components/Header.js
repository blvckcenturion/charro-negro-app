import React, { useState, useEffect } from 'react'
import { HamburgerSpin } from 'react-animated-burgers'
import secondaryLogo from '../assets/imgs/secondary-logo.png'
import { Link } from 'react-router-dom'
import { use100vh } from 'react-div-100vh'
import { SOCIALS } from '../utils/data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import gsap from 'gsap'
import { useHistory } from 'react-router'
const Header = () => {

    const [isActive, setIsActive] = useState(null);
    const [timerDone, setTimerDone] = useState(false);
    const history = useHistory();


    useEffect(() => {
        const tl = gsap.timeline()
        if (isActive === true) {
            tl
                .to('.header-nav', {display: 'block', duration: 0})
                .to('.header-nav', { opacity: 1, duration: 1, ease: 'power2.out' })
                .fromTo('.header-nav-links ul li', { opacity: 0, skewY: 10 }, { opacity: 1, skewY: 0, stagger: 0.2, duration: 1, ease: 'power2.out' })
                .fromTo('.header-nav-socials', {opacity: 0, skewX:10, y: 100}, {opacity: 1, skewX:0, y: 0,  duration: 1, ease: 'power2.out'})
        } else if(isActive === false) {
            tl
                .to('.header-nav-socials', {opacity: 0, y: 100, duration: 1, ease: 'power2.out'})
                .to('.header-nav-links ul li', { opacity: 0, y: 10, stagger: 0.2, duration: 1, ease: 'power2.out', delay: -1 })
                .to('.header-nav', { opacity: 0, duration: 1, ease: 'power2.out' })
        }
    }, [isActive])

    const toggleButton = () => {
        if (isActive === null) {
            setIsActive(true)
            setTimeout(() =>{setTimerDone(true)}, 3000)
        } else {
            if (timerDone) {
                setIsActive(!isActive)
                setTimerDone(false)
                setTimeout(() =>{setTimerDone(true)}, 3000)
            }
        }
    }

    return (
        <>
        <div className="header">
            <div className="header-logo">
                <Link to="/">
                    <img src={ secondaryLogo } alt="Charro Negro Alternative Logo"/>
                </Link>
            </div>
            <div className="header-toggler">
                <HamburgerSpin isActive={isActive} barColor={"#292929"} toggleButton={toggleButton}/>
            </div>
            </div>
            <div className="header-nav" style={{height: use100vh()}}>
                <nav>
                    <div className="header-nav-links">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/menu">Menu</Link></li>
                            <li><a href="https://www.grubhub.com/restaurant/charro-negro-665-sebastopol-rd-santa-rosa/2576507">Order Now</a></li>
                        </ul>
                    </div>
                    <div className="header-nav-socials">
                        {SOCIALS.map(({href, icon},i) => <a className="social-anchor" key={i} href={href} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={icon} className="icon"/>
                        </a>)}
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header
