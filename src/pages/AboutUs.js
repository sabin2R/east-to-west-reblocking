import React from 'react';
import { Element } from 'react-scroll';

import '../styles/style.css';


const AboutUs = () => {

  
  return (
    <Element name="about">
      <section className="about-us-section" data-aos="fade-right">
      
        <div className="about-us-content">
          <h2 data-aos="fade-up" data-aos-delay="100">About Us</h2>
          <p data-aos="fade-up" data-aos-delay="200">
            At East to West Reblocking, we pride ourselves on our commitment to quality and excellence.
            Our experienced team specializes in reblocking, restumping, underpinning, and floor levelling.
            We deliver reliable and affordable solutions to ensure your property is both safe and visually appealing.
          </p>
        </div>
      </section>
    </Element>
  );
};

export default AboutUs;
