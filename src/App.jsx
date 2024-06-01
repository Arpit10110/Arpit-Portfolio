import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
//style
import "./Style/Style.css"
//Pages
import Home from "./Pages/Home.jsx"
import CertificatePage from "./Pages/CertificatePage.jsx"
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/certificate' element={<CertificatePage/>} />
      </Routes>
    </Router>
  )
}

export default App
