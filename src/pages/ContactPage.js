// src/pages/ContactPage.js
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle submission via EmailJS or a similar service
    console.log(formData);
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      <Helmet>
        <title>Contact Us - East to West Reblocking</title>
        <meta name="description" content="Get in touch with us for any inquiries" />
      </Helmet>
      <h1>Contact Us</h1>
      {submitted ? (
        <div className="thank-you-message">
          <h2>Thank you for contacting us!</h2>
          <p>We will respond to your inquiry shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit" className="cta-button">Submit</button>
        </form>
      )}
      <div className="contact-info">
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@easttowestreblocking.com</p>
        {/* Optionally, add a Google Maps embed or a link to a map */}
      </div>
    </div>
  );
};

export default ContactPage;
