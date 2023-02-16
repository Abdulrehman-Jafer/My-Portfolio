import React from 'react'
import { BsFillMoonFill } from "react-icons/bs"
import { BsFillSunFill } from "react-icons/bs"

const Theme = () => {

    return (
        <main className='relative'>
            <section className='flex items-center hover:bg-slate-400 borderBlue'>
                <BsFillMoonFill className='text-black p-1' />
                <button className='noBorder bg-inherit p-1'>Theme</button>
            </section>
            <section className='absolute p-[0.5rem] borderGray bg-slate-300'>
                <div className='flex flex-col'>
                    <div className='flex items-center hover:bg-slate-600 p-[0.3rem] rounded-[0.2rem]'>
                        <BsFillSunFill className='text-slate-800' />
                        <button className='noBorder bg-inherit'>Light</button>
                    </div>
                    <div className='flex items-center hover:bg-slate-600 p-[0.3rem] rounded-[0.2rem]'>
                        <BsFillMoonFill className='text-slate-800' />
                        <button className='noBorder bg-inherit'>Dark</button>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Theme
