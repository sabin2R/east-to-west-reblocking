import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuoteRequestForm from './pages/QuoteRequestForm';
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar'; 
import FAQ from './pages/FAQ';
import ServicesOverview from './components/ServicesOverview';
import AOS from 'aos';
import 'aos/dist/aos.css';


const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quote-request" element={<QuoteRequestForm />} />
        <Route path="/service" element={<ServicesOverview />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/service/:serviceName" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path = "/faq" element = {<FAQ/>} />  
      </Routes>
    </Router>
  );
};

export default App;
