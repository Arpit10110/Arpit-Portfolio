import React,{useEffect} from 'react'
import "./Contact.css"
import { useForm} from '@formspree/react';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import RoomIcon from '@mui/icons-material/Room';
import Aos from "aos"; 
import "aos/dist/aos.css";
const Contact = () => {
    const [state, handleSubmit] = useForm("xwkgdvdn");
    if (state.succeeded) {
      toast.success("Message sent", { position: "top-right", autoClose: 3000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, theme: "dark",});
      document.getElementById("myForm").reset();
    }
    useEffect(() => {
        Aos.init();
      }, [])
  return (
    <>
    <div className='Contact' id="contact">
        <div data-aos="flip-left" data-aos-anchor-placement="center-bottom"  data-aos-duration="2000" className="contactbox-wrapper">
            <h1>Let's work together!</h1>
            <form  id='myForm' onSubmit={handleSubmit}   className="contact-box">
                <div className="inputs">
                    <input type="text" name='FirstName' placeholder='First Name' required/>
                    <input type="text" name='LastName' placeholder='Last Name' required />
                </div>
                <div className="inputs">
                    <input type="text" name='Email' placeholder='Email address' required/>
                    <input type="text" name='Phone' placeholder='Phone number'  required/>
                </div>
                <div className="message-input">
                    <input type="text" name='Message' placeholder='Message'  required/>
                </div>
                <button>Send Messgae</button>
            </form>
        </div>
        <div data-aos="flip-right" data-aos-anchor-placement="center-bottom"  data-aos-duration="2000" className="personalD-wrapper">
            <div className="personal-deatil">
                <div className="Pdeatil">
                    <div className="deatil-Icon">
                        <PhoneIcon className='Contact-Icon' />
                    </div>
                    <div className="Pdeatil-cont">
                        <h3>Phone</h3>
                        <a href="tel:+918840689883">+918840689883</a>
                    </div>
                </div>
                <div className="Pdeatil">
                    <div className="deatil-Icon">
                        <EmailIcon  className='Contact-Icon'/>
                    </div>
                    <div className="Pdeatil-cont">
                        <h3>Email</h3>
                        <a href="mailto:omagrahari55@gmail.com">omagrahari55@gmail.com</a>
                    </div>
                </div>
                <div className="Pdeatil">
                    <div className="deatil-Icon">
                        <RoomIcon  className='Contact-Icon'/>
                    </div>
                    <div className="Pdeatil-cont">
                        <h3>Address</h3>
                        <a href="https://maps.app.goo.gl/C5xyqjCSJLu8smft5">Knowledge Park 3,Greater Noida,India</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark"/>
    </>
  )
}

export default Contact
