// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import '../styles/style.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" smooth={true} duration={500} onClick={closeMenu}>
          <img src="/images/E2W3.png" alt="East to West Reblocking Logo" />
        </Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <span className="hamburger-icon">{isOpen ? '✖' : '☰'}</span>
      </div>
      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" smooth={true} duration={500} onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} onClick={closeMenu}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="services" smooth={true} duration={500} onClick={closeMenu}>
            Services
          </Link>
        </li>
        
        <li>
          <Link to="faq" smooth={true} duration={500} onClick={closeMenu}>
            FAQ
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} onClick={closeMenu}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
