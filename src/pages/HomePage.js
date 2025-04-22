// src/pages/HomePage.js
import React, { useEffect } from 'react';
import { Element } from 'react-scroll';
import ServicesOverview from '../components/ServicesOverview';
import AboutUs from './AboutUs';
import FAQ from './FAQ';
import '../styles/style.css';
import Footer from '../components/Footer';
import CountUp from 'react-countup';
import AOS from 'aos';
import { Helmet } from 'react-helmet';
import 'aos/dist/aos.css';

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  
    // const handleScroll = () => AOS.refresh();
    // window.addEventListener('scroll', handleScroll);
  
    // return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  return (
    
    <>
    <Helmet>
      <title>East to West Reblocking Pty Ltd | Melbourne Reblocking & Restumping Experts</title>
      <meta name="description" content="Reblocking, restumping, underpinning, and floor levelling services across Melbourne. Trusted, reliable, and fully insured." />
      <script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "East to West Reblocking Pty Ltd",
  "url": "https://easttowestreblocking.com.au",
  "logo": "https://easttowestreblocking.com.au/images/logo512.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+61-433-185-183",
    "contactType": "Customer Service",
    "areaServed": "AU",
    "availableLanguage": "English"
  },
  "sameAs": []
})}
</script>
    </Helmet>
      <Element name="home">
        <header className="hero-section1">
          <div className="hero-overlay">
            <div className="hero-content1" data-aos="fade-up">
              <h1>Welcome to East to West Reblocking</h1>
              <p>Your trusted partner for reblocking, restumping, underpinning, and floor levelling.</p>
              <div className="stats-container">
                <div className="stat-item">
                  <h2>Est: <CountUp start={2025} end={2008} duration={5} /></h2>
                </div>
                <div className="stat-item">
                  <h2><CountUp start={0} end={1000} duration={3} />+ Projects Completed</h2>
                </div>
              </div>
              <a href="/quote-request" className="cta-button1">
                Get a Free Quote
              </a>
            </div>
          </div>
        </header>
      </Element>

      <div className="svg-divider">
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z" fill="#eeeeee" />
        </svg>
      </div>

      <AboutUs />

      <div className="svg-divider" data-aos='fade-up'>
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z" fill="#eeeeee" />
        </svg>
      </div>

      <Element name="services">
        <ServicesOverview />
      </Element>
      <div className="svg-divider" data-aos='fade-up'>
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z" fill="#eeeeee" />
        </svg>
      </div>

      <FAQ  previewCount={6}/>

      <div className="svg-divider" data-aos='fade-up'>
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
          <path d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z" fill="#eeeeee" />
        </svg>
      </div>

      <Element name="contact">
        <section className="homepage-contact-glimpse" data-aos="fade-right">
          <h2>Need Help With Reblocking?</h2>
          <p>
            Whether it's reblocking, restumping, or floor levelling — we're just a message away.
          </p>
          <a href="/contact" className="cta-link-button">Get in Touch</a>
        </section>
      </Element>

      <div className="svg-divider flip" style={{marginBottom: '-30px'}} data-aos='fade-up'>
  <svg viewBox="0 0 1440 100" preserveAspectRatio="none">
    <path d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z" fill="#eeeeee" />
  </svg>
</div>


      <Footer />
    </>
  );
};

export default HomePage;
