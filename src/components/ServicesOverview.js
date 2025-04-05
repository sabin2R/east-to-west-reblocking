// src/components/ServicesOverview.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaTools, FaHome, FaHardHat, FaLevelUpAlt } from 'react-icons/fa';
// import Footer from './Footer';

const services = [
  {
    name: "Reblocking",
    icon: <FaHome />,
    path: "reblocking",
    description: "Strengthen your foundation by replacing old stumps."
  },
  {
    name: "Restumping",
    icon: <FaTools />,
    path: "restumping",
    description: "Restore stability by renewing weakened stumps."
  },
  {
    name: "Underpinning",
    icon: <FaHardHat />,
    path: "underpinning",
    description: "Reinforce foundations for structural safety."
  },
  {
    name: "Floor Levelling",
    icon: <FaLevelUpAlt />,
    path: "floor-levelling",
    description: "Ensure even, balanced flooring throughout your home."
  },
];

const ServicesOverview = () => {
  return (
    <section className='main'>
    <section className="services-overview">
      <div className="section-header">
        <h2 className="section-title" data-aos="fade-down">Our Core Services</h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          Reliable, affordable and trusted solutions to support your home's foundation.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div
            key={service.path}
            className="service-card"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <h2 className="service-heading">{service.icon} {service.name}</h2>
            <p>{service.description}</p>
            <Link to={`/service/${service.path}`} className="cta-link-button">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </section>
    {/* <Footer/> */}
    </section>
  );
};

export default ServicesOverview;