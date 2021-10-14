import { useEffect } from "react";
import gsap from "gsap";


const Title = ({ children }) => {

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
        tl.from(".page-title", {
            duration: 1,
            opacity: 0,
            y: -100,
            delay: 1,
        })
        .to('.page-title', {duration: 0, zIndex: 1})
        .from(".page-title h1", {opacity:0, y: 100, skewX: 30, duration: 1.5})
    }, [])

    return (
        <div className="page-title">
            <h1>
                {children}
            </h1>
        </div>
    )
}
export default Title;