import React from 'react'
import ProjectInfo from './ProjectInfo'
import bankApp from "../../assets/bankApp.png"
import mern from "../../assets/mern.png"
import capstone from "../../assets/capstone.png"
import portfolio from "../../assets/portfolio.png"


const Projects = () => {
  return (
    <main className='flex flex-col gap-10'>
      <ProjectInfo
      title='Mern App' 
      desc='This is a MERN blogging app with full authentication and authorization and after logging in you can write blogs in your account and look other people blogs. I have used Typescript and tailwind for frontend and expressJs and Monogodb for backend.'
      img={mern}
      github={"https://github.com/Abdulrehman-Jafer/MERN_FrontEnd"}
      site={"https://myblogsmernapp.netlify.app/"}
      duration={250}
      />
       <ProjectInfo
      title='Banking App Dashboard' 
      desc='This is a dummy but properly designed dashboard of a banking app and in this project I demonstrated my skills as a responsive web developer. This layout is totally responsive and also contained a Graph totally made by me from the scratch.'
      img={bankApp}
      github={"https://github.com/Abdulrehman-Jafer/Dashboard-UI"}
      site={"https://myresponsivedashboard.netlify.app/"}
      duration={500}
      />
       <ProjectInfo
      title='Capstone' 
      desc='This minor project is the example of a simple Ecommerce site and in this project I have done proper use of advance React concepts such as custom hooks and used Context api for managing state globally.Please do check it out this tiny website.'
      img={capstone}
      github={"https://github.com/Abdulrehman-Jafer/Capstone-Project"}
      site={"https://mycapstoneproject.netlify.app/"}
      duration={750}
      />
      <ProjectInfo
      title='Portfolio Template'
      desc='This was a simple portfolio template that I made and it represents the proper use of tailwind Css and in this project I mastered my tailwind skills.In this awesome project I used a very great combination of colors which looks amazing together.'
      img={portfolio}
      github='https://github.com/Abdulrehman-Jafer/PortFolio-Template'
      site={'https://mysimpleportfoliotemplate.netlify.app/'}
      duration={1000}
      />
    </main>
      
  )
}

export default Projects

