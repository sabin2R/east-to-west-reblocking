import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuoteRequestForm from './pages/QuoteRequestForm';
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar'; // Add Navbar if it exists

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quote-request" element={<QuoteRequestForm />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/service/:serviceName" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;
