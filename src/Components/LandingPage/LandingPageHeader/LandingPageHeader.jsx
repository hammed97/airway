import React from 'react';
import './LandingPageHeader.css';

const Navbar = () => (
  <div className="navbarr">
    <div className="logo-container">
      <img src="src/Components/LandingPage/images/Vector-3.png" alt="Airplane Logo" className="logo-img" />
      <span className="logo">Airway</span>
    </div>
    <ul className="menu">
      <li><a href="#" className="menu-item">Home</a></li>
      <li><a href="#" className="menu-item">About us</a></li>
      <li><button className="button">Sign Up</button></li>
    </ul>
  </div>
); 
export default Navbar;