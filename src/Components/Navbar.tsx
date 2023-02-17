import navLogo from "../assets/navLogo.jpg"
import { Link, useLocation } from "react-router-dom"
import Resume from "../assets/Resume-Abdulrehman-Jafer.pdf"
import Theme from "./Theme"

const Navbar = () => {
    const currentPath = useLocation()
    return (
        <main className="flex justify-between items-center my-[5rem] max-w-[1200px] mx-auto">
            <section className="w-[80px] hover:scale-[1.001] border-slate-400 border rounded-[0.5rem] translateY transition-transform hidden sm:block">
                <Link to={"/"}><img src={navLogo} alt="navLogo" className={"rounded-[0.5rem] w-[100%] min-w-[40px]"} /></Link>
            </section>
            <section className="flex gap-[2rem] font-semibold text-slate-300 text-[1.2rem] mediaFont mediaGap">
                <Link className={`${currentPath.pathname === "/" ? "text-third underline decoration-4" : "text-primary scale-[1]"}
                 hover:scale-[1.02] hover:text-third`} to={"/"}>
                    Home
                </Link>
                <Link className={`${currentPath.pathname === "/portfolio" ? "text-third underline decoration-4" : "text-primary scale-[1]"} 
                hover:scale-[1.02] hover:text-third`} to={"/portfolio"}>
                    Portfolio
                </Link>
                <Link className={`${currentPath.pathname === "/about" ? "text-third underline decoration-4" : "text-primary scale-[1]"}
                 hover:scale-[1.02] hover:text-third`} to={"/about"}>
                    About
                </Link>
                <Link className={`${currentPath.pathname === "/resume" ? "text-third underline decoration-4" : "text-primary scale-[1]"} hover:scale-[1.02] hover:text-slate-400`}
                    to={""} download={Resume}  >
                    <button onClick={() => window.open(Resume)}>Resume</button>
                </Link>
                {/* <Theme/> */}
            </section>
        </main>
    )
}

export default Navbar
