import Herosection from "@/app/(Home)/page"
import Section2 from "./(Home)/page2"
import ReactLenis from "lenis/react"
import Section3 from "./(Home)/page3"
const HomePage = () => {
  return (
    <ReactLenis root options={{ lerp: .05 }}>
      <main>
        <div className="w-full relative">
          <Herosection />
          <Section2 />
          <Section3/>
        </div>
      </main>
    </ReactLenis>
  )
}

export default HomePage