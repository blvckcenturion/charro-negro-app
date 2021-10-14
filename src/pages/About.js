import React, { useEffect } from 'react'
import Header from '../components/Header'
import gsap from 'gsap'
import Footer from '../components/Footer'
import Title from '../components/Title'
import about from '../assets/imgs/about.jpeg'
import ScrollToTop from '../utils/scrollToTop'
const About = () => {

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
        tl.add('body')
            .to('body', { duration: 1, backgroundColor: '#80C2AF' }, 'body')
            .to('body', { duration: 0, overflow: 'hidden' }, 'body')
            .to('.about-page-wrapper', { duration: 1, opacity: 1, delay: 1.5 })
            .to('body', { duration: 0, overflow: 'initial' })
    }, [])

    return (
        <div>
            <ScrollToTop/>
            <Header bgColor={"#80C2AF"}/>
            <div className="content">
                <Title>About Us</Title>
                <div className="about-page-wrapper">
                    <div className="card">
                        <div className="card-content">
                            <div className="card-content-title">
                                <h2>Who we are.</h2>
                            </div>
                            <div className="card-content-section">
                                <p>
                                    We deliver Beach and Barrio food to the city of Santa Rosa. <br /><br />
                                    Every dish we serve connects the Roseland neighborhood to the Pacific Ocean. <br /><br />
                                    Inspired by Mexican style “mariscos” our food truck is filled with colorful, earthy and high tide flavors. <br/><br />
                                    The driver of this urban sea monster is owner Luis Arce Catacora, the former chef of Willi’s Seafood in Healdsburg, California.
                                </p>
                            </div>
                        </div>
                        <div className="card-image">
                            <img src={about} alt="Charro Negro food truck and" />
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-content">
                            <div className="card-content-title">
                                <h2>Come visit us.</h2>
                            </div>
                            <div className="card-content-section">
                                <div>
                                    <h3>Working Hours</h3>
                                    <p>OPEN WEDNESDAY-SUNDAY, 12-9 PM</p>
                                </div>
                                <div>
                                    <h3>Location</h3>
                                    <p>665 SEBASTOPOL ROAD, SANTA ROSA, CA, 95407</p>
                                </div>
                                <div>
                                    <h3>Pick Ups</h3>
                                    <p>+1 (707) 385-6465</p>
                                </div>
                            </div>
                        </div>
                        <div className="card-image">
                            <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1592.741065997349!2d-122.73055257647611!3d38.430448444277964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808437f9c2b2a735%3A0x3640ba696aabbc42!2s665%20Sebastopol%20Rd%2C%20Santa%20Rosa%2C%20CA%2095407%2C%20USA!5e0!3m2!1sen!2sbo!4v1634163445588!5m2!1sen!2sbo" loading="lazy"></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default About


