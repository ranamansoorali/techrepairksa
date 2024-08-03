// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import ReviewsPage from './components/ReviewsPage';
import RecentWorkPage from './components/RecentWorkPage';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ContactPage />} />
        <Route path="/contact" element={<ReviewsPage />} />
        <Route path="/recent-work" element={<RecentWorkPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
