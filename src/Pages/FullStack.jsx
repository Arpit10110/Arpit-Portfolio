import React from 'react'
import { FullstackApi } from '../APi/FullstackApi'
import Footer from '../Components/Footer/Footer'
import ProjectCard from '../Components/ProjectCard/ProjectCard'
import "../Style/Allproject.css"
const FullStack = () => {
  return (
    <>
    <div className="fullstack-main">
        {
            FullstackApi.map((i,index)=>{
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

export default FullStack
