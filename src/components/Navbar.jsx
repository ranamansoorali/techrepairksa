// // src/components/Navbar.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = () => {
  
//   return (
//     <nav className="navbar">
//       <div className="navbar__logo"><Link to="/">Riyadh Repair</Link></div>
//       <ul className="navbar__menu">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About Us</Link></li>
//         <li><Link to="/contact">Contact Us</Link></li>
//         <li><Link to="/reviews">Services</Link></li>
//         <li><Link to="/recent-work">Recent Work</Link></li>
//       </ul>
//       <button className="navbar__cta2"></button>
//       <button className="navbar__cta">Book Now</button>
//     </nav>
//   );
// }

// export default Navbar;


// src/components/Navbar.js
// src/components/Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Navbar.css';
import ukFlag from '../Images/UkFlag.webp';  // Update the path based on your folder structure
import saudiFlag from '../Images/SaudiFlag2.webp'; 
import menuIcon from '../Images/menu-icon.png'; // Add a menu icon image

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLanguageChange = () => {
    const newLanguage = currentLanguage === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLanguage);
    setCurrentLanguage(newLanguage);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <NavLink to="/">{t('navbar.title')}</NavLink>
      </div>
      <ul className={`navbar__menu ${menuOpen ? 'navbar__menu--open' : ''}`}>
        <li><NavLink exact to="/" activeClassName="active">{t('navbar.home')}</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">{t('navbar.about')}</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">{t('navbar.contact')}</NavLink></li>
        <li><NavLink to="/services" activeClassName="active">{t('navbar.services')}</NavLink></li>
        <li><NavLink to="/recent-work" activeClassName="active">{t('navbar.recentWork')}</NavLink></li>
      </ul>
      <button className="navbar__cta3" onClick={handleLanguageChange}>
        <img src={currentLanguage === 'en' ? saudiFlag : ukFlag} alt="flag" />
      </button>
      <a href="https://wa.me/966545473163" target="_blank" rel="noopener noreferrer" className="navbar__cta">
        {t('navbar.bookNow')}
      </a>
      <button className="navbar__menu-icon" onClick={toggleMenu}>
        <img src={menuIcon} alt="menu" />
      </button>
    </nav>
  );
};

export default Navbar;
