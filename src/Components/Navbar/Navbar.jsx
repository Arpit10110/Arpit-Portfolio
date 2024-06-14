import React, { useEffect, useState } from "react";
import "./Navbar.css";
//import
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Aos from "aos";
import "aos/dist/aos.css";
import Drawer from "@mui/material/Drawer";
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <nav>
      <div
        className="logo"
        data-aos="fade-down"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="2000"
      >
        <h3>Arpit</h3>
      </div>
      <div
        className="links"
        data-aos="fade-down"
        data-aos-anchor-placement="center-bottom"
        data-aos-duration="2500"
      >
        <Link to="/">Home</Link>
        <Link to="/projects" >Projects</Link>
        <HashLink to="/#skill">Skill</HashLink>
        <Link to="/certificate" >Certificate</Link>
        <HashLink to="/#contact">Contact me</HashLink>
      </div>
      <div className="mobile-links">
        <button 
          onClick={() => {
            setOpen(true);
          }}
        >
         <MenuIcon className="MenuIcon"/>
        </button>
        <Drawer
          anchor={"right"}
          open={open}
          onClose={() => {
            setOpen(false);
          }}
        >
          <div className="all-links">
            <Link to="/" onClick={() => {
            setOpen(false);
          }} >Home</Link>
            <Link to="/projects" onClick={() => {
            setOpen(false);
          }}>Projects</Link>
            <HashLink to="/#skill" onClick={() => {
            setOpen(false);
          }}>Skill</HashLink>
            <Link to="/certificate" onClick={() => {
            setOpen(false);
          }}>Certificate</Link>
            <HashLink to="/#contact" onClick={() => {
            setOpen(false);
          }}>Contact me</HashLink>
          </div>
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
