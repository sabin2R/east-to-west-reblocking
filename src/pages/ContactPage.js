import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/contact.css';
import Footer from '../components/Footer';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  

 

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  const templateParams = {
    name: formData.name,
    email: formData.email,
    message: formData.message,
  };

  try {
    const response = await emailjs.send(
      process.env.REACT_APP_EMAILJS_CONTACT_SERVICE_ID,    
      process.env.REACT_APP_EMAILJS_CONTACT_TEMPLATE_ID,    
      templateParams,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY    
    );

    if (response.status === 200) {
      toast.success("Message sent! We'll be in touch soon.");
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error("EmailJS Error:", error);
    toast.error("Failed to send message. Please try again later.");
  } finally {
    setLoading(false);
  }
};


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="contact-page">
      <Helmet>
        <title>Contact Us - East to West Reblocking</title>
        <meta name="description" content="Get in touch with us for any inquiries" />
      </Helmet>

      {/* Toast Notification Container */}
      <ToastContainer position="bottom-right" autoClose={4000} />

      {/* Hero Section */}
      <section className="hero-section0">
        <h1>Contact Us</h1>
        <p>We’re here to assist you with any questions or inquiries. Let us know how we can help you.</p>
      </section>

      {/* Contact Form */}
      <div className="contact-form-container">
        {submitted ? (
          <div className="thank-you-message">
            <h2>Thank you for contacting us!</h2>
            <p>We will respond to your inquiry shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
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
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
              />
            </div>

            <div className="form-group">
              <button type="submit" className="cta-button" disabled={loading}>
                {loading ? 'Sending...' : 'Submit'}
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Company Contact Info */}
      <div className="contact-info">
        <h3>Our Contact Information</h3>
        <p><strong>Phone:</strong> <a href="tel:+61433185183">(+61) 433 185 183</a></p>
        <p><strong>Email:</strong> <a href="mailto:east2westreblocking@gmail.com">east2westreblocking@gmail.com</a></p>
        <div className="google-maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3158.3856744465993!2d144.92733787564444!3d-37.663644472013544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65070f3ffdbc1%3A0x1885909825392e75!2s7%20Wimba%20Ct%2C%20Coolaroo%20VIC%203048!5e0!3m2!1sen!2sau!4v1742812606917!5m2!1sen!2sau"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="East to West Reblocking Location"
          ></iframe>
        </div>
      </div>

      {/* Scroll-to-top Button */}
      <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">↑ Back to Top</button>

      {/* Floating Call Button */}
      <a href="tel:+61433185183" className="floating-call" aria-label="Call us now">📞</a>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;
