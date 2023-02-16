import React from "react"
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import About from "./pages/About"
import {Routes,Route,useLocation} from "react-router-dom"
import Navbar from "./Components/Navbar"
import { Toaster } from "./Components/Globles/ToastContainer"
const App = () => {
  return (
    <main className="px-[1rem]">
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    <Toaster/>
    </main>
  )
}

export default App
