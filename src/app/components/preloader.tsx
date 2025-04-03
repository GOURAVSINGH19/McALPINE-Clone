"use client"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useEffect } from "react"
gsap.registerPlugin(ScrollTrigger)
const Preloader = () => {

    useEffect(() => {
        setTimeout(() => {
            gsap.to(".Preloader", {
                opacity: 0,
                duration: 1,
                ease: "power4.inOut",
            })
        }, 1000);
    }, [])
    return (
        <div  className="preloader">
            <div className="loader-spinner"></div>
        </div>
    )
}

export default Preloader