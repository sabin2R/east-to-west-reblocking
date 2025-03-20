// src/components/ServicesOverview.js
import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  { name: "Reblocking", path: "reblocking", description: "Details about reblocking." },
  { name: "Restumping", path: "restumping", description: "Details about restumping." },
  { name: "Underpinning", path: "underpinning", description: "Details about underpinning." },
  { name: "Floor Levelling", path: "floor-levelling", description: "Details about floor levelling." },
];

const ServicesOverview = () => {
  return (
    <section className="services-overview">
      {services.map(service => (
        <div key={service.path} className="service-card">
          <h2>{service.name}</h2>
          <p>{service.description}</p>
          <Link to={`/service/${service.path}`} className="service-link">
            Learn More
          </Link>
        </div>
      ))}
    </section>
  );
};

export default ServicesOverview;
