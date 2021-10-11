import React, { useEffect } from 'react'
import Header from '../components/Header'
import gsap from 'gsap'
import Footer from '../components/Footer'
const About = () => {

    useEffect(() => {
        const tl = gsap.timeline()
        tl.to('body', { duration: 1, ease: 'power3.out', backgroundColor: '#44EE74' })
    }, [])

    return (
        <div>
            <Header />
            <div className="content"></div>
            <Footer/>
        </div>
    )
}

export default About
