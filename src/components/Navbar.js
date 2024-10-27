// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      className="navbar"
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="navbar-logo">Eco-Kisan</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/suggestions">Suggestions</Link>
        <Link to="/chatbot">ChatBot</Link>
        <Link to="/farming-techniques">Techniques</Link>
      </div>
    </motion.nav>
  );
};

export default Navbar;
