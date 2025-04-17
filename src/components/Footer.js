// src/components/Footer.js
import React from 'react';
import '../styles/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top Section */}
      <div className="footer-top">
        <div className="footer-column">
          <h4>East to West Reblocking</h4>
          <p>
            Ensuring your property’s foundation is secure and level. We specialize in
            reblocking, restumping, underpinning, and floor levelling.
            
          </p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="#about">About Us</a>
          <a href="/service">Services</a>
          <a href="/quote-request">Quote Request</a>
          <a href="/faq">FAQ</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>
            {/* When clicked, opens Google Maps to show directions to this address */}
            <a
              href="https://maps.google.com/?q=7 Wimba Ct, Coolaroo, VIC 3048"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <i className="fas fa-map-marker-alt"></i> 7 Wimba Ct, Coolaroo, VIC 3048
              If using the React package:  */}
              <FontAwesomeIcon icon={faMapMarkerAlt} /> 7 Wimba Ct, Coolaroo, VIC 3048
             
            </a>
          </p>
          <p>
            {/* When clicked, initiates a phone call */}
            <a href="tel:+61 433 185 183">
              <FontAwesomeIcon icon={faPhone} /> +61 433 185 183
            </a>
          </p>
          <p>
            {/* When clicked, opens email client */}
            <a href="mailto:east2westreblocking@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} /> east2westreblocking@gmail.com
            </a>
          </p>
        </div>
      </div>
      {/* Membership Badge */}
<div className="footer-membership">
  <p>Proud Member of<img src="/images/hia-logo.svg" alt="HIA Member Logo" className="hia-logo" />
  </p>
</div>


      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>ABN 75 138 126 146</p>
        <p>&copy; {new Date().getFullYear()} East to West Reblocking. All rights reserved. </p>
      </div>
    </footer>
  );
};

export default Footer;
