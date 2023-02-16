import { useRef } from 'react'
import Home_bottom from '../Components/Globles/Contact_me'
import Home_top from '../Components/Home/Home_top'
import Footer from '../Components/Globles/Footer'
const Home = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <main>
            <>
            <div className='flex flex-col gap-[15rem] py-10 max-w-[1200px] mx-auto'>
                <Home_top inputRef={inputRef} />
                <Home_bottom inputRef={inputRef} />
            </div>
            <Footer />
            </>
        </main>
    )
}

export default Home
