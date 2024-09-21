import React from 'react';
import '../css/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><a href="#home" className="navbar-link">Home</a></li>
        <li className="navbar-item"><a href="#hardwares" className="navbar-link">Hardwares</a></li>
        <li className="navbar-item"><a href="#periféricos" className="navbar-link">Periféricos</a></li>
        <li className="navbar-item"><a href="#gabinete" className="navbar-link">Gabinetes</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
