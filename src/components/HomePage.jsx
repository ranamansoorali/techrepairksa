// src/components/HomePage.js
import React from 'react';
import HeroSection from './HeroSection';
import ServiceSection from './ServiceSection';
import Reviews from './Reviews';
import ContactForm from './ContactForm';

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ServiceSection />
      <Reviews />
      <ContactForm />
    </div>
  );
};

export default HomePage;
