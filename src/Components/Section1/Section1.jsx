import React,{useEffect} from 'react'
import "./Section1.css"
import Profile from "../../assets/Profile.png"
import { TypeAnimation } from "react-type-animation";
import DownloadIcon from '@mui/icons-material/Download';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import Aos from "aos";
import "aos/dist/aos.css";
const Section1 = () => {
  useEffect(() => {
    Aos.init();
  }, [])
  const downloadCV = ()=>{
    window.open("https://drive.google.com/file/d/1G9laUgLonBASX2Zjp1ncMQiJkJu61a3r/view?usp=sharing")
  }
  return (
    <section className='sec1-main'>
        <div className="sec1-cont"  data-aos="zoom-out-right" data-aos-anchor-placement="center-bottom"  data-aos-duration="2000" >
        <div className="typing">
          <TypeAnimation
            sequence={["Hello World </>", 1000, "I am Arpit", 1000]}
            wrapper="span"
            speed={0}
            style={{ fontSize: "2rem", display: "inline-block", color: "#ffffffd6"}}
            repeat={Infinity}
          />
          </div>
          <div className="cont-inner">
            <h2>Full Stack</h2>
            <h1>Web Developer</h1>
            <p>
            I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people
            </p>
            <div className="coonects">
                <button onClick={downloadCV} >Download CV <DownloadIcon/> </button>
                <div className="social">
               <a href="https://www.facebook.com/arpit.agrahari.5"><FacebookIcon className='social-Icon' /></a> 
               <a href="https://www.instagram.com/___arpit_._/"><InstagramIcon className='social-Icon' /></a> 
               <a href="https://www.linkedin.com/in/arpit-agrahari-54aa192a1/"><LinkedInIcon className='social-Icon' /></a> 
               <a href="https://github.com/Arpit10110"><GitHubIcon  className='social-Icon' /></a> 
               <a href="https://x.com/ArpitAgrahari26?t=IyDaE6R8sNL10VQlozEYrQ&s=09"><XIcon  className='social-Icon' /></a> 
                </div>
            </div>
          </div>
        </div>
        <div className="sec1-img" data-aos="fade-up"
     data-aos-duration="2500" >
            <img src={Profile} alt="profile" />
        </div>
    </section>
  )
}

export default Section1
