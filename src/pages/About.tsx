import { useRef } from 'react'
import Info_about_me from '../Components/About/Info_about_me'
import Home_bottom from '../Components/Globles/Contact_me'
import Footer from '../Components/Globles/Footer'
const About = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <>
      <main className='flex flex-col justify-center gap-[15rem] py-10'>
        <Info_about_me />
        <div className='bg-primary dark:bg-darkprimary p-3 flex justify-center'>
          <div className='max-w-[800px] w-[100%]'>
            <Home_bottom inputRef={inputRef} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default About
