import Projects from "../Components/portfolio/Projects"
import { useState, useEffect } from "react"

const Portfolio = () => {
  const [render, setRender] = useState(false)
  useEffect(() => {
    window.scroll(0, 0)
    setRender(true)
  }, [])
  return (
    render ? <main className="max-w-[1200px] mx-auto flex flex-col items-center">
      <Projects />
    </main>  : <h1>Rendering</h1>
  )
}

export default Portfolio
