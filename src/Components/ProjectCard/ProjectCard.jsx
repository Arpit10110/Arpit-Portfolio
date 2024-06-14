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
                <Link className='github-link' to={github} >
                <GitHubIcon className='github-icon' />
                </Link>
                <Link className='arrow-link' to={link} >
                <ArrowOutwardIcon className='arrow-icon'/>
                </Link>
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
