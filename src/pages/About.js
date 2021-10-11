import React, { useEffect } from 'react'
import Header from '../components/Header'
import gsap from 'gsap'
const About = () => {

    useEffect(() => {
        const tl = gsap.timeline()
        tl.to('body', { duration: 1, ease: 'power3.out', backgroundColor: '#44EE74' })
    }, [])

    return (
        <div>
            <Header/>
        </div>
    )
}

export default About
