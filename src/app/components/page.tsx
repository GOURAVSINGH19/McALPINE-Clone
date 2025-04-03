"use client";
import Image from "next/image";
import McALPINE from "./mcalpine"
const Herosection = () => {
  return (
    <section className="w-full h-[190vh] relative z-[-1] herosection mb-[-100vh]">
      <div className="sticky top-0 left-0 h-[100svh] w-full">
        <div className="bg-video w-full h-full absolute top-0 left-0">
          <div className="hero-img w-full h-full absolute top-0 left-0 ">
            <Image
              src="/home-hero.webp"
              alt="center-img"
              className="object-cover bg-no-repeat w-full h-full"
            />
          </div>
          <video
            src="/c675ac1f-ef86ff95.mp4"
            className="object-cover w-full h-full absolute top-0 left-0"
            loop
            playsInline
            autoPlay
            muted
          ></video>
        </div>
        <div className="middle-text-svg flex justify-center h-full items-center w-full mx-auto my-auto  relative">
          <McALPINE/>
        </div>
      </div>
    </section>
  );
};

export default Herosection;
