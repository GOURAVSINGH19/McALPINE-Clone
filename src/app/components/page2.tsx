"use client"
import { useEffect, useRef, useState } from "react"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger)

const Section2 = () => {
    const [play, setPlay] = useState(false);
    const videoRef = useRef<null>(null);
    const mainContainer = useRef<null>(null);
    const cimgref = useRef<null>(null);

    const handlePlay = () => {
        setPlay(true);
    }

    useEffect(() => {
        const tl = gsap.timeline();
        tl.to(mainContainer.current, {
            duration: 1.5,
            ease: "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
            clipPath: "inset(-1px 0%)",
            scrollTrigger: {
                trigger: mainContainer.current,
                start: "top +=75%",
                end: "bottom bottom",
                scrub: 1,
            }
        }).to(cimgref.current, {
            clipPath: "inset(126.4px 211.14px)",
            duration: 1,
            delay: .5,
            ease: "linear",
            scrollTrigger: {
                trigger: mainContainer.current,
                start: "top +=80%",
                end: "+=130% bottom",
                scrub: 1,
            }
        }).to(videoRef.current, {
            clipPath: "inset(0.001px)",
            duration: 1,
            delay: .5,
            ease: "linear",
        })
    }, [])

    return (
        <section ref={mainContainer} className="w-full  bg-white showreel o-container relative">
            <div className=" w-full c_text">
                <span>McAlpine</span>
                <span>Showreel</span>
            </div>
            <div ref={cimgref} className="c_img_center">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="hero-img w-full h-full absolute top-0 left-0 transform scale-[.68] ">
                        <div className="w-full h-full relative">
                            <Image
                                src="/mcapline.webp"
                                alt="center-img"
                                className="object-cover bg-no-repeat  bg-center w-full h-full"
                            />
                        </div>
                    </div>
                    <video
                        ref={videoRef}
                        onClick={handlePlay}
                        src="/mcalpine_finding-home-2025.mp4"
                        className="object-cover w-full h-full absolute top-0  left-0"
                        playsInline
                        autoPlay
                        loop
                        controls
                    ></video>
                </div>
            </div>
        </section>
    )
}

export default Section2