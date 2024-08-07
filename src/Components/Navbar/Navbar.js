import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import About from '../../Pages/About/About';
import Home from '../../Pages/Home/Home';
import Contact from '../../Pages/Contact/Contact';
import Tours from '../../Pages/Tour/Tours';
import logo from '../../Assets/logo.png'
import TripPackage from '../../Pages/TripPackage/TripPackage';

const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  };
  return (
    <div>
      <nav>
        <div className="logo">
          <img src={logo} alt="logo" />
          <h1>Suhana Destination & Travels</h1>
        </div>
        <div className={click ? "menu active" : "menu"}>
          <NavLink to="/" element={<Home />}>Home</NavLink>
          <NavLink to='/tours' element={<Tours />}>Tours</NavLink>
          <NavLink to="/about" element={<About />}>Trip-Itinerary</NavLink>
          <NavLink to="/contact" element={<Contact />}>Contact</NavLink>
          <NavLink to="/package" element={<TripPackage />}>Trip-Package</NavLink>
        </div>
        <div className="hamburger" onClick={handleClick}>
          {
            click ? <FaTimes style={{ color: "rgb(143, 113, 58)" }} size={25} /> : <FaBars style={{ color: "rgb(143, 113, 58)" }} size={25} />
          }
        </div>
      </nav>
    </div>
  )
}

export default Navbar;