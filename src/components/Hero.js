// src/components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="hero-content">
        <motion.h1
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
        >
          Eco-Kisan
        </motion.h1>
        <p>Discover the latest in Drone pollution automation, research, and technology.</p>
      </div>
    </motion.div>
  );
};

export default Hero;
