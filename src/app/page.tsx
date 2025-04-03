import Herosection from "@/app/components/page"
import Section2 from "./components/page2"
import ReactLenis from "lenis/react"
import Section3 from "./components/page3"
import Footer from "./components/footer"
import Preloader from "./components/preloader"
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