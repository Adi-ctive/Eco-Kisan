// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Suggestions from './pages/CustomerSuggestions';
import FakeChatbot from './components/Teacher';
import FarmingTechniques from './components/FarmingTechniques';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/suggestions" element={<Suggestions />} />
            <Route path="/chatbot" element={<FakeChatbot />} />
            <Route path="/farming-techniques" element={<FarmingTechniques />} /> {/* Corrected line */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
