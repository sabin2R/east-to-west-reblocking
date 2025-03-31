import React, { useState } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import '../styles/style.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {isHomePage ? (
          <ScrollLink to="home" smooth={true} duration={500} onClick={closeMenu}>
            <img src="/images/E2W3.png" alt="East to West Reblocking Logo" />
          </ScrollLink>
        ) : (
          <RouterLink to="/" onClick={closeMenu}>
            <img src="/images/E2W3.png" alt="East to West Reblocking Logo" />
          </RouterLink>
        )}
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        <span className="hamburger-icon">{isOpen ? '✖' : '☰'}</span>
      </div>

      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        {isHomePage ? (
          <>
            <li>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active-link"
                onClick={closeMenu}
              >
                About Us
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active-link"
                onClick={closeMenu}
              >
                Services
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="faq"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active-link"
                onClick={closeMenu}
              >
                FAQ
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                activeClass="active-link"
                onClick={closeMenu}
              >
                Contact
              </ScrollLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <RouterLink
                to="/"
                className={isActive('/') ? 'active-link' : ''}
                onClick={closeMenu}
              >
                Home
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/quote-request"
                className={isActive('/quote-request') ? 'active-link' : ''}
                onClick={closeMenu}
              >
                Request a Quote
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/service"
                className={isActive('/service') ? 'active-link' : ''}
                onClick={closeMenu}
              >
                Services
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/contact"
                className={isActive('/contact') ? 'active-link' : ''}
                onClick={closeMenu}
              >
                Contact
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/faq"
                className={isActive('/faq') ? 'active-link' : ''}
                onClick={closeMenu}
              >
                FAQ
              </RouterLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
