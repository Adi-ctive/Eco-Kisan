// src/components/FakeChatbot.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './FakeChatBot.css'; // Ensure to import your CSS styles

const FakeChatbot = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple logic to respond to specific questions
    if (input.toLowerCase().includes("how can farmers reduce parali burning")) {
      setResponse(
        "Farmers can adopt sustainable practices like converting Parali into biofuel or compost, which reduces pollution and enhances soil quality. Many state governments now offer incentives and machinery subsidies to help farmers transition."
      );
    } else {
      setResponse("I'm sorry, I don't have an answer for that. Please ask about Parali burning.");
    }

    // Clear input
    setInput('');
  };

  return (
    <motion.div
      className="chatbot"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="chatbot-container">
        <h2>Ask our Parali Expert</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your question here..."
            className="chat-input"
          />
          <button type="submit">Ask</button>
        </form>
        <div className="chat-box">
          <p><strong>Response:</strong> {response}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default FakeChatbot;
