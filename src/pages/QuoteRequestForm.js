// src/pages/QuoteRequestForm.js
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaHome, FaTools, FaLevelUpAlt, FaHardHat, FaCheckCircle } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';
import '../styles/QuoteRequestForm.css';


const QuoteRequestForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    message: '',
    serviceTypes: [],
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      serviceTypes: prev.serviceTypes.includes(value)
        ? prev.serviceTypes.filter((item) => item !== value)
        : [...prev.serviceTypes, value]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.serviceTypes.length === 0) {
      toast.error('Please select at least one service type.');
      return;
    }

    setLoading(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      address: formData.address,
      message: formData.message,
      services: formData.serviceTypes.join(', '),
    };

    try {
      const response = await emailjs.send(
        process.env.REACT_APP_EMAILJS_QUOTE_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_QUOTE_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        toast.success('Your quote request was sent successfully!');
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          address: '',
          message: '',
          serviceTypes: [],
        });
      } else {
        toast.error('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className= "main">
    <div className="quote-request-page">
      <Helmet>
        <title>Request a Quote - East to West Reblocking</title>
        <meta name="description" content="Request a personalized quote for reblocking, restumping, underpinning, or floor levelling." />
        <script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Request a Quote - East to West Reblocking",
  "url": "https://easttowestreblocking.com.au/quote-request",
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "East to West Reblocking Pty Ltd",
    "telephone": "+61-433-185-183",
    "email": "east2westreblocking@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7 Wimba Ct",
      "addressLocality": "Coolaroo",
      "addressRegion": "VIC",
      "postalCode": "3048",
      "addressCountry": "AU"
    }
  }
})}
</script>

      </Helmet>

      <section className="hero-section0">
        <h1>Request a Free Quote</h1>
        <p>Let us know what service you’re interested in, and we’ll get back to you with a quote.</p>
      </section>

      <div className="quote-request-form">
        <h2>Quote Request Form</h2>
        <p className="quote-subheading">
          Fill out the form below and our expert team will contact you within 24 hours with a tailored quote.
        </p>

        {submitted ? (
          <div className="thank-you-message">
            <h3><FaCheckCircle className="icon" /> Thank you!</h3>
            <p>Your quote request has been received. We’ll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="form-container">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
              />
            </div>

            <div className="form-group">
              <label>Service Type (Select one or more)</label>
              <div className="checkbox-group">
                <label><input type="checkbox" value="Reblocking" onChange={handleServiceChange} checked={formData.serviceTypes.includes('Reblocking')} /> <FaHome /> Reblocking</label>
                <label><input type="checkbox" value="Restumping" onChange={handleServiceChange} checked={formData.serviceTypes.includes('Restumping')} /> <FaTools /> Restumping</label>
                <label><input type="checkbox" value="Underpinning" onChange={handleServiceChange} checked={formData.serviceTypes.includes('Underpinning')} /> <FaHardHat /> Underpinning</label>
                <label><input type="checkbox" value="Floor Levelling" onChange={handleServiceChange} checked={formData.serviceTypes.includes('Floor Levelling')} /> <FaLevelUpAlt /> Floor Levelling</label>
              </div>
            </div>

            <div className="form-group">
              <button type="submit" className="submit-button" disabled={loading}>
                {loading ? 'Submitting...' : 'Submit Request'}
              </button>
            </div>
          </form>
        )}
      </div>

      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar={false} />
      
    </div>
    <Footer />
    </div>
  );
};

export default QuoteRequestForm;
