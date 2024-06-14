import React,{useEffect} from 'react'
import { Allprojectsapi } from '../APi/Allprojects-api'
import Footer from '../Components/Footer/Footer'
import ProjectCard from '../Components/ProjectCard/ProjectCard'
import "../Style/Allproject.css"

const Allprojects = () => {
 
  return (
    <>
    <div className="allproject-main">
        {
            Allprojectsapi.map((i,index)=>{
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

export default Allprojects
