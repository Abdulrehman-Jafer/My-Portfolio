import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import About from "./pages/About"
import { Routes, Route } from "react-router-dom"
import Navbar from "./Components/Navbar"
import { Toaster } from "./Components/Globles/ToastContainer"
import ErrorResponse from "./Components/Globles/ErrorResponse"
const App = () => {
  return (
    <main className="px-[1rem] mediaPadding bg-main dark:bg-darkmain transition-colors">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/about' element={<About />} />
        <Route path="*" element={<ErrorResponse/>}/>
      </Routes>
      <Toaster />
    </main>
  )
}

export default App
