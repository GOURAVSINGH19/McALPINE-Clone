import Herosection from "@/app/(Home)/page"
import Section2 from "./(Home)/page2"
import ReactLenis from "lenis/react"
import Section3 from "./(Home)/page3"
import Footer from "./(Home)/footer"
import Preloader from "./(Home)/preloader"
const HomePage = () => {
  return (
    <ReactLenis root options={{ lerp: .05 }}>
      <Preloader />
      <main>
        <div className="w-full relative">
          <Herosection />
          <Section2 />
          <Section3 />
          <Footer />
        </div>
      </main>
    </ReactLenis>
  )
}
export default HomePage