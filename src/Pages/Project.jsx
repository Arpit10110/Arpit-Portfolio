import React from 'react'
import Navbar from "../Components/Navbar/Navbar"
import { Link, Outlet } from 'react-router-dom'
import "../Style/Project.css"
const Project = () => {
  return (
   <>
   <Navbar/>
   <div className="project-main">
    <div className="project-nav">
        <Link to="frontend" >Frontend Projects</Link>
        <Link to="all">ALL Projects</Link>
        <Link to="fullstack" >Full Stack Projects</Link>
    </div>
   </div>   
    <Outlet/>
   </>
  )
}

export default Project
