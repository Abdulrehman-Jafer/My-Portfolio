import bg from "../../assets/bg-walpaper.jfif"
import { Link } from "react-router-dom"
import { RefObject } from "react"

const Home_top = ({ inputRef }: { inputRef: RefObject<HTMLInputElement> }) => {
    return (
        <main className="flex items-center gap-[2rem] flex-wrap transformY100rem">
            <section className="flex-1 flex flex-col gap-[3rem] min-w-[350px] " >
                <div>
                    <h5 className="text-3xl text-primary">Abdulrehman Jafer</h5>
                    <p className="text-2xl text-secondary font-thin">Web Developer</p>
                </div>
                <p className="min-w-[320px] text-secondary text-2xl [word-spacing:0.5rem] [font-weight:50] leading-10">
                    Hey there! I'm a front-end web developer. I can build
                    attractive and user-friendly UI's with alot of functionality.
                    I am very passionate about my projects and do my best to make
                    it perfect. I am <span className="text-primary">hard-working</span>, <span className="text-primary">cooperative</span>,&nbsp;
                    <span className="text-primary">innovative</span> and I am always ready to explore and learn new technologies and tools to
                    keep myself <span className="text-primary">up-to-date</span>.
                </p>
                <div className="flex gap-[3rem]">
                    <Link to={"/portfolio"}>
                        <button className="bg-primary px-3 py-2 font-bold text-main rounded-[0.3rem] hover:text-third noBorder md:text-[1.3rem]">
                            Portfolio
                        </button>
                    </Link>
                    <a href="#scroll"
                        onClick={() => {
                            setTimeout(() => {
                                inputRef.current?.focus()
                            }, 1000)
                        }}>
                        <button className="bg-primary px-3 py-2 font-bold text-main rounded-[0.3rem] hover:text-third noBorder md:text-[1.3rem]">
                            Contact Me
                        </button>
                    </a>
                </div>
            </section>
            <section className="flex-1 relative min-w-[300px] sm:min-w-[400px]">
                <img src={bg} alt="bg" className="rounded-[1rem] w-[100%] object-cover min-h-[500px] " />
                <div className="absolute top-[40%] left-[15%] fontStyle">
                    <p className="text-primary text-2xl mi-w-[300px]">"You are what you believe yourself to be" </p>
                    <h4 className="text-primary text-2xl">- Paulo Coehlo</h4>
                </div>
            </section>
        </main>
    )
}

export default Home_top