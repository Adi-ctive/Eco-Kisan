// src/pages/ParaliPollutionSuggestions.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ParaliPollutionSuggestions = () => {
  const [name, setName] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [message, setMessage] = useState('');
  const [pastSuggestions, setPastSuggestions] = useState([
    { name: "Rajesh Kumar", suggestion: "Deploy more air quality monitoring stations in rural areas to get real-time data." },
    { name: "Anjali Singh", suggestion: "Introduce stricter regulations and incentives to prevent crop burning." },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSuggestion = { name, suggestion };
    setPastSuggestions([newSuggestion, ...pastSuggestions]);
    setMessage('Thank you for your suggestion!');
    setName('');
    setSuggestion('');
  };

  return (
    <div className="suggestions-container">
      <h2>Parali Pollution Suggestions</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input 
            type="text" 
            id="name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label htmlFor="suggestion">Suggestion:</label>
          <textarea 
            id="suggestion" 
            value={suggestion} 
            onChange={(e) => setSuggestion(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}

      <h3>Past Pollution Suggestions</h3>
      <div className="past-suggestions">
        {pastSuggestions.map((item, index) => (
          <motion.div
            key={index}
            className="suggestion-card"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h4>{item.name}</h4>
            <p>{item.suggestion}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ParaliPollutionSuggestions;
