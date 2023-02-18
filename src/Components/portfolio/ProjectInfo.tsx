import React from 'react'
import { Link } from 'react-router-dom'
import Slider_Projects from '../Slider/Slider_Project'
import {TbClick} from "react-icons/tb"


const ProjectInfo = ({ title, desc, img, site = "/", github = "/",duration=100, }: { title: string, desc: string, img: string, site?: string, github?: string,duration:number }) => {
    
    return (
        <main className='flex gap-[4%] flex-wrap' >
            <section className='md:w-[38%] w-[100%] min-w-[270px] mediaWidth mb-3' style={{animation: `translateXani ${duration}ms linear`}}>
                <h2 className='text-primary dark:text-darkprimary'>{title}</h2>
                <p className={`my-4 [word-spacing:0.5rem] font-serif text-secondary dark:text-darksecondary`}>{desc}</p>
                <div className='flex gap-[1rem]'>
                    <Link to={site} target={'_blank'}>
                        <button className='border-emerald300 noBackground text-emerald300 border-3 text-[1.3rem]
                         bg-none px-[4px] rounded-[.3rem] cursor-pointer hover:text-emerald400 hover:border-emerald400'>
                            See Live
                        </button>
                    </Link>
                    <Link to={github} target={'_blank'}>
                        <button className='text-[1.3rem] noBackground border-0 text-emerald300 px-[4px] cursor-pointer hover:text-emerald400'>Source Code</button>
                    </Link>
                </div>
            </section>
            <section className='md:w-[58%] w-[100%]' style={{animation: `translateXani2 ${duration}ms linear`}}>
                <img src={img} alt={img} className="w-[100%] rounded-md min-w-[300px] mediaWidth" />
            </section>
        </main>
    )
}

export default ProjectInfo
