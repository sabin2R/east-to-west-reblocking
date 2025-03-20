// src/pages/FAQ.js
import React from 'react';
import { Element } from 'react-scroll';
import { Helmet } from 'react-helmet';
import '../styles/style.css';

const FAQ = () => {
  return (
    <Element name="faq">
      <section className="faq-section">
        <Helmet>
          {/* <title>FAQ - East to West Reblocking</title> */}
          <meta name="description" content="Frequently Asked Questions about our services." />
        </Helmet>
        <div className="faq-content">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h3>What services do you offer?</h3>
            <p>
              We offer reblocking, restumping, underpinning, and floor levelling services to ensure your property remains safe and structurally sound.
            </p>
          </div>
          <div className="faq-item">
            <h3>How can I request a quote?</h3>
            <p>
              Simply click on the "Quote Request" link in the navigation or button on the homepage, fill out the form, and submit it.
            </p>
          </div>
          <div className="faq-item">
            <h3>Do you offer free consultations?</h3>
            <p>
              Yes, we provide free consultations to assess your needs and offer the best solutions.
            </p>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default FAQ;
