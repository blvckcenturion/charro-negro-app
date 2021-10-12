import React, { useEffect } from 'react'
import Header from '../components/Header'
import gsap from 'gsap'
import Footer from '../components/Footer'
import Title from '../components/Title'
import about from '../assets/imgs/about.jpeg'

const About = () => {

    useEffect(() => {
        const tl = gsap.timeline()
        tl.to('body', { duration: 1, ease: 'power3.out', backgroundColor: '#80C2AF' })
    }, [])

    return (
        <div>
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
                            <img src={about} alt="Charro Negro food truck and" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default About


