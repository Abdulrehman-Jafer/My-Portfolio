import { Link } from "react-router-dom"
const Footer = () => {
    return (
        <div className="flex gap-[2rem] p-10 justify-end">
            <Link to={"https://www.linkedin.com/in/abdulrehman-jafer-489339260/"} target={"_blank"}>
                <div className="text-primary font-semibold hover:text-secondary">LINKEDIN</div>
            </Link>
            <Link to={"https://github.com/Abdulrehman-Jafer"} target={"_blank"}>
                <div className="text-primary font-semibold hover:text-secondary">GITHUB</div>
            </Link>
        </div>
    )
}

export default Footer
