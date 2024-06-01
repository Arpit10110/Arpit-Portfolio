import React from 'react'
import "./Certificate.css"
const CerificateCard = ({imgSRC}) => {
  return (
    <div className='CardCert' >
        <img src={imgSRC} alt="imgSRC" />
    </div>
  )
}

export default CerificateCard 