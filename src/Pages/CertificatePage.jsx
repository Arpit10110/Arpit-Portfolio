import React from 'react'
import CerificateCard from "../Components/CerificateCard/CerificateCard.jsx";
import Footer from '../Components/Footer/Footer.jsx';
import Navbar from '../Components/Navbar/Navbar.jsx';
import "../Components/CerificateCard/Certificate.css"
import { Certificate } from './Certificate'
const CertificatePage = () => {
  return (
    <>
    <Navbar/>
    <div className="mainCert-div">
        <h2>Certificates</h2>
        <div className="Certi-wraper">
        {
            Certificate.map((i,index)=>{
                return(
                    <CerificateCard key={index} imgSRC={i.img} />
                )
            })
        }
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default CertificatePage
