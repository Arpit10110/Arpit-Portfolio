import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
//style
import "./Style/Style.css"
//Pages
import Home from "./Pages/Home.jsx"
import Project from "./Pages/Project.jsx"
import Allprojects from "./Pages/Allprojects.jsx"
import Frontend from "./Pages/Frontend.jsx"
import FullStack from "./Pages/FullStack.jsx"
import CertificatePage from "./Pages/CertificatePage.jsx"
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/certificate' element={<CertificatePage/>} />
        <Route path='/projects' element={<Project/>} >
          <Route path='/projects' element={<Allprojects/>}/>   
          <Route path='/projects/frontend' element={<Frontend/>}/>   
          <Route path='/projects/fullstack' element={<FullStack/>}/>   
        </Route>
      </Routes>
    </Router>
  )
}

export default App
