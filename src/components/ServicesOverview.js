// src/components/ServicesOverview.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaTools, FaHome, FaHardHat, FaLevelUpAlt, FaHammer, FaBug, FaClipboardCheck, FaTree, FaDoorOpen } from 'react-icons/fa';

const coreServices = [
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
  }
];

const additionalServices = [
  {
    name: "Floor Levelling",
    icon: <FaLevelUpAlt />,
    path: "floor-levelling",
    description: "Ensure even, balanced flooring throughout your home."
  },
  // {
  //   name: "Jacking & Levelling",
  //   icon: <FaTools />,
  //   path: "jacking-levelling",
  //   description: "Raise and level homes to correct settlement issues."
  // },
  {
    name: "Partial Restumping",
    icon: <FaHammer />,
    path: "partial-restumping",
    description: "Targeted stump replacement for localized damage."
  },
  {
    name: "Relevelling Without Stump Replacement",
    icon: <FaLevelUpAlt />,
    path: "relevelling-no-replacement",
    description: "Adjust home levels without replacing stumps."
  },
  {
    name: "Termite-Damaged Timber Replacement",
    icon: <FaBug />,
    path: "termite-repair",
    description: "Replace structural timber damaged by pests."
  },
  {
    name: "Site Clearing Under House",
    icon: <FaTree />,
    path: "site-clearing",
    description: "Remove debris and prepare underfloor areas."
  },
  {
    name: "Subfloor Access Panel Installation",
    icon: <FaDoorOpen />,
    path: "access-panels",
    description: "Install hatches for easy subfloor access."
  },
  {
    name: "Council Permit Assistance",
    icon: <FaClipboardCheck />,
    path: "permit-assistance",
    description: "Help with permits and compliance paperwork."
  },
  {
    name: "Decking",
    icon: <FaTree />,
    path: "decking",
    description: "Design and build beautiful outdoor decks."
  },
  {
    name: "Underfloor Insulation",
    icon: <FaHardHat />,
    path: "underfloor-insulation",
    description: "Improve energy efficiency with insulation."
  }
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
          {coreServices.map((service, index) => (
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

        <div className="section-header" style={{ marginTop: '4rem' }}>
          <h2 className="section-title" data-aos="fade-down">Additional Services</h2>
        </div>

        <div className="services-grid">
          {additionalServices.map((service, index) => (
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
    </section>
  );
};

export default ServicesOverview;
