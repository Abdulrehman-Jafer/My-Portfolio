import { BsMoonStars } from "react-icons/bs"
import { BsSun } from "react-icons/bs"
import { useState, useEffect } from "react"

const Theme = () => {
    const [theme, setTheme] = useState("")
    useEffect(()=>{
        if(window.matchMedia('(prefers-color-scheme):dark').matches){
            setTheme("NIGHTMODE")
        }
        else{
            setTheme("DAYMODE")
        }
    },[])
    useEffect(() => {
        if (theme === "NIGHTMODE") {
            document.documentElement.classList.add("dark")
        }
        else {
            document.documentElement.classList.remove("dark")
        }
    }, [theme])
    return (
        <main 
        className={`borderBlue flex bg-primary dark:bg-third dark:text-darksecondary justify-start rounded-[2rem] 
        ${theme === "NIGHTMODE" ? "boxShadowNight" : "boxShadowDay"} hover:cursor-default`} 
        onClick={() => setTheme(prev => prev === "NIGHTMODE" ? "DAYMODE" : "NIGHTMODE")}>
            <section className={`flex ${theme === "DAYMODE" ? "flex-row-reverse" : "" } items-center gap-1 p-1  transition-all`}>
                {theme === "DAYMODE" ? <BsSun className="bg-darksecondary dark:bg-secondary p-[0.3rem] rounded-full text-darkmain"/> : <BsMoonStars className="bg-darksecondary dark:bg-secondary p-[0.3rem] rounded-full"/>}
                <small className="font-thin hidden sm:block">{theme}</small>
            </section>
        </main>
    )
}

export default Theme
