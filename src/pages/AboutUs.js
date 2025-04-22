// src/pages/AboutUs.js
import React from 'react';
import { Element } from 'react-scroll';
import { Helmet } from 'react-helmet';
import '../styles/style.css';

const AboutUs = () => {
  return (
    <Element name="about">
      <section className="about-us-section" data-aos="fade-right">
      <Helmet>
  <title>About Us | East to West Reblocking</title>
  <meta name="description" content="East to West Reblocking is Melbourne’s trusted provider for reblocking, restumping, underpinning, and floor levelling. Learn more about our team and values." />
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "East to West Reblocking Pty Ltd",
      "url": "https://easttowestreblocking.com.au",
      "description": "We are Melbourne's trusted experts in reblocking, restumping, underpinning and floor levelling.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "7 Wimba Ct",
        "addressLocality": "Coolaroo",
        "addressRegion": "VIC",
        "postalCode": "3048",
        "addressCountry": "AU"
      },
      "telephone": "+61 433 185 183"
    })}
  </script>
</Helmet>
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
