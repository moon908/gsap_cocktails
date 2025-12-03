import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all"

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className="flex-center h-screen">
      <h1 className="text-5xl mt-5 text-indigo-300 font-bold">Hello GSAP!</h1>
    </div>
  )
}

export default App