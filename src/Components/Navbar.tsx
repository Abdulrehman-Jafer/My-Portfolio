import navLogo from "../assets/navLogo.jpg"
import { Link, useLocation } from "react-router-dom"
import Resume from "../assets/Resume-Abdulrehman-Jafer.pdf"
import Theme from "./Theme"

const Navbar = () => {
    const currentPath = useLocation()
    return (
        <main className="flex justify-between items-center py-[5rem] max-w-[1200px] mx-auto">
            <section className="w-[80px] hover:scale-[1.001] border-slate-400 border rounded-[0.5rem] translateY transition-transform hidden sm:block">
                <Link to={"/"}><img src={navLogo} alt="navLogo" className={"rounded-[0.5rem] w-[100%] min-w-[40px]"} /></Link>
            </section>
            <section className="flex gap-[2rem] font-semibold text-slate-300 text-[1.2rem] mediaFont mediaGap items-center">
                <Link className={`${currentPath.pathname === "/" ? "text-third dark:text-darkthird underline decoration-4" : "text-primary dark:text-darkprimary scale-[1]"}
                 hover:scale-[1.02] hover:text-third dark:hover:text-darkthird`} to={"/"}>
                    Home
                </Link>
                <Link className={`${currentPath.pathname === "/portfolio" ? "text-third dark:text-darkthird underline decoration-4" : "text-primary dark:text-darkprimary scale-[1]"} 
                hover:scale-[1.02] hover:text-third dark:hover:text-darkthird`} to={"/portfolio"}>
                    Portfolio
                </Link>
                <Link className={`${currentPath.pathname === "/about" ? "text-third dark:text-darkthird underline decoration-4" : "text-primary dark:text-darkprimary scale-[1]"}
                 hover:scale-[1.02] hover:text-third dark:hover:text-darkthird`} to={"/about"}>
                    About
                </Link>
                <button onClick={() => window.open(Resume)} className=" bg-none text-[1.2rem] mediaFont noBackground noBorder font-semibold decoration-4 text-primary dark:text-darkprimary hover:text-third md:hover:scale-[1.02] md:dark:hover:text-darkthird">
                    Resume
                 </button>
                <Theme />
            </section>
        </main>
    )
}

export default Navbar
