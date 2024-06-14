import React from 'react'
import { Frontendapi } from '../APi/Frontendapi'
import Footer from '../Components/Footer/Footer'
import ProjectCard from '../Components/ProjectCard/ProjectCard'
import "../Style/Allproject.css"
const Frontend = () => {
  return (
    <>
    <div className="frontend-main">
        {
            Frontendapi.map((i,index)=>{
                return(
                    <ProjectCard key={index} name={i.name} link={i.link} github={i.github} techstack={i.techstack} />
                )
            })
        }
    </div>
    <Footer/>
    </>
  )
}

export default Frontend
