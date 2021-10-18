import {useEffect} from 'react'
import Header from '../components/Header'
import gsap from 'gsap'
import Footer from '../components/Footer'
import Title from '../components/Title'
import ScrollToTop from '../utils/scrollToTop'
import Head from '../components/head'
const BasicLayout = ({ children, bgColor, wrapperClass, pageTitle, pageDesc }) => {
    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
        tl.add('body')
            .to('body', { duration: 1, backgroundColor: bgColor }, 'body')
            .to('body', { duration: 0, overflow: 'hidden' }, 'body')
            .to(wrapperClass, { duration: 2, opacity: 1, delay: 1.5 })
            .to('body', { duration: 0, overflow: 'initial' })
    }, [wrapperClass, bgColor])

    return (
        <div>
            <Head title={pageTitle} bgColor={ bgColor}/>
            <ScrollToTop />
            <Header bgColor={bgColor} />
            <div className="content">
                <Title>{pageTitle}</Title>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default BasicLayout
