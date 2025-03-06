import React,{useEffect} from 'react'
import "./EduExp.css"
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import Aos from "aos"; 
import "aos/dist/aos.css";
const EduExp = () => {
    useEffect(() => {
        Aos.init();
      }, [])
  return (
    <div className="EduExp-wrapper">
        <h1 data-aos="fade-up" data-aos-anchor-placement="center-bottom"  data-aos-duration="2000" className='EduExp-head' >Education & Experience</h1>
    <div className='EduExp-main'>
        <div data-aos="fade-right" data-aos-anchor-placement="center-bottom"  data-aos-duration="2500" className="education">
            <h2 className="education-logo"><SchoolIcon className='edu-Icon' />My Education</h2>
            <div className="education-detail">
                <div className="edudetail">
                    <h3>2022-Present</h3>
                    <h1>Btech(CSE)</h1>
                    <h2>Abdul Kalam Technical University</h2>
                </div>
                <div className="edudetail">
                    <h3>2020-2022</h3>
                    <h1>Class-XII(CBSE)</h1>
                    <h2>Surya International Academy</h2>
                </div>
                <div className="edudetail">
                    <h3>2008-2020</h3>
                    <h1>Class-X(ICSE)</h1>
                    <h2>St. Thomas School</h2>
                </div>
            </div>
        </div>
        <div data-aos="fade-left" data-aos-anchor-placement="center-bottom"  data-aos-duration="2500" className="Experience">
            <h2 className="experience-logo"><WorkspacePremiumIcon className='exp-Icon'/>My Experience</h2>
            <div className="exerience-detail">
                <div className="expdeatil">
                    <h3>Oct 2024-Jan 2025</h3>
                    <h1>Kudosware</h1>
                    <h2>Full Stack Developer</h2>
                </div>
                <div className="expdeatil">
                    <h3>March 2024-May 2024</h3>
                    <h1>Shoopy Store</h1>
                    <h2>Frontend Developer</h2>
                </div>
                <div className="expdeatil">
                    <h3>Dec 2023-Jan 2024</h3>
                    <h1>Edunet Foundation</h1>
                    <h2>Full Stack Developer</h2>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default EduExp
