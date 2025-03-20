// src/pages/HomePage.js
import React from 'react';
import { Element } from 'react-scroll';
import ServicesOverview from '../components/ServicesOverview';
import AboutUs from './AboutUs';
import FAQ from './FAQ';
import '../styles/style.css';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>

      <Element name="home">
        <header className="hero-section">
          <div className="hero-overlay">
            <div className="hero-content">
              <h1>Welcome to East to West Reblocking</h1>
              <p>Your trusted partner for reblocking, restumping, underpinning, and floor levelling.</p>
              <a href="/quote-request" className="cta-button">
                Get a Free Quote
              </a>
            </div>
          </div>
        </header>
      </Element>
      <AboutUs />
      <Element name="services">
        <ServicesOverview />
      </Element>
      
      <FAQ />
      <Element name="contact">
        <section className="contact-section">
          <h2>Contact Us</h2>
          <p>Please get in touch with us for any inquiries.</p>
          {/* Include your contact form or additional contact info here */}
        </section>
      </Element>
      <Footer />
    </>
  );
};

export default HomePage;
