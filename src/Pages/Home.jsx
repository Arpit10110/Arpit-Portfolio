import React from "react";
import Navbar from "../Components/Navbar/Navbar.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import Section1 from "../Components/Section1/Section1.jsx";
import Skill from "../Components/Skill/Skill.jsx";
import EduExp from "../Components/EduExp/EduExp.jsx";
import Contact from "../Components/Contact/Contact.jsx";
const Home = () => {
  return (
    <>
      <Navbar />
      <Section1/>
      <Skill/>
      <EduExp/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Home;
