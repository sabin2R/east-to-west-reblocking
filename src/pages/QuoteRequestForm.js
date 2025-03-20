import React, { useState } from 'react';

const QuoteRequestForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [areaSize, setAreaSize] = useState('');
  const [estimatedCost, setEstimatedCost] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission logic (e.g., send data to Formspree or EmailJS)
    console.log({ name, email, serviceType, areaSize, estimatedCost });
  };

  const calculateCost = () => {
    // Simple cost calculation logic for demo purposes
    if (serviceType && areaSize) {
      setEstimatedCost(areaSize * 10); // Example: $10 per unit area
    }
  };

  return (
    <div className="quote-request-form">
      <h2>Request a Quote</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <select
          value={serviceType}
          onChange={(e) => setServiceType(e.target.value)}
          required
        >
          <option value="">Select Service Type</option>
          <option value="Reblocking">Reblocking</option>
          <option value="Restumping">Restumping</option>
          <option value="Underpinning">Underpinning</option>
          <option value="Floor Levelling">Floor Levelling</option>
        </select>
        <input
          type="number"
          placeholder="Area Size (m²)"
          value={areaSize}
          onChange={(e) => setAreaSize(e.target.value)}
          required
        />
        <button type="button" onClick={calculateCost}>
          Calculate Estimated Cost
        </button>
        <p>Estimated Cost: ${estimatedCost}</p>
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default QuoteRequestForm;
