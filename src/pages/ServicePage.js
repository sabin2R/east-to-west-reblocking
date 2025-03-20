// src/pages/ServicePage.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const serviceDetails = {
  reblocking: {
    title: "Reblocking",
    description: "Detailed information about our reblocking service.",
    images: ['/images/reblocking-before.jpg', '/images/reblocking-after.jpg'],
  },
  restumping: {
    title: "Restumping",
    description: "Detailed information about our restumping service.",
    images: ['/images/restumping-before.jpg', '/images/restumping-after.jpg'],
  },
  underpinning: {
    title: "Underpinning",
    description: "Detailed information about our underpinning service.",
    images: ['/images/underpinning-before.jpg', '/images/underpinning-after.jpg'],
  },
  'floor-levelling': {
    title: "Floor Levelling",
    description: "Detailed information about our floor levelling service.",
    images: ['/images/floor-levelling-before.jpg', '/images/floor-levelling-after.jpg'],
  },
};

const ServicePage = () => {
  const { serviceType } = useParams();
  const service = serviceDetails[serviceType];

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="service-page">
      <Helmet>
        <title>{service.title} - East to West Reblocking</title>
        <meta name="description" content={`Learn more about our ${service.title} service.`} />
      </Helmet>
      <h1>{service.title}</h1>
      <p>{service.description}</p>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {service.images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`${service.title} before and after`} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="request-quote">
        <Link to="/quote-request" className="cta-button">
          Request a Quote
        </Link>
      </div>
    </div>
  );
};

export default ServicePage;
