import React,{useEffect} from 'react'
import "./ProjectCard.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
const ProjectCard = ({name,github,link,techstack}) => {
    useEffect(() => {
        Aos.init();
      }, [])
  return (
   <>
        <div data-aos="fade-up" data-aos-anchor-placement="center-bottom"  data-aos-duration="2000"  className="project-card">
            <div className="project-links">
                <a className='github-link' target="_blanck" href={github} >
                <GitHubIcon className='github-icon' />
                </a>
                <a className='arrow-link' target="_blanck" href={link} >
                <ArrowOutwardIcon className='arrow-icon'/>
                </a>
            </div>
            <div className="project-name">
                <h2>{name}</h2>
            </div>
            <div className="project-techstack">
                {
                    techstack.map((i,index)=>{
                        return(
                            <h5 key={index} >{i}</h5>
                        )
                    })
                }
            </div>
        </div>
   </>
  )
}

export default ProjectCard
