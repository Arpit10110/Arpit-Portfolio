import React,{useEffect} from 'react'
import "./Skill.css"
import frontend from "../../assets/frontend.png"
import backend from "../../assets/backend.png"
import Aos from "aos";
import "aos/dist/aos.css";
const Skill = () => {
    useEffect(() => {
        Aos.init();
      }, [])
  return (
   <>
        <div className="skill-wrapper" id='skill'>
            <div className="skill-main">
                <div className="skill-head">
            <h2 data-aos="fade-up" data-aos-anchor-placement="center-bottom"  data-aos-duration="2000">SKILLS</h2>
                </div>
            <div className="web">
                <div className="frontend" data-aos="fade-right" data-aos-anchor-placement="center-bottom"  data-aos-duration="2000">
                    <h3>Frontend</h3>
                    <img src={frontend} alt="frontend" />
                </div>
                <div className="backend" data-aos="fade-left" data-aos-anchor-placement="center-bottom"  data-aos-duration="2000">
                    <h3>Backend</h3>
                    <img src={backend} alt="backend" />
                </div>
            </div>
            </div>
        </div>
   </>
  )
}

export default Skill