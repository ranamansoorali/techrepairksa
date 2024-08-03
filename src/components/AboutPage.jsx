import React from 'react';
import { useTranslation } from 'react-i18next';
import './AboutPage.css';
import ManImage from '../Images/ManImage.png';
import ContactForm from './ContactForm'; 

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <>
    <section className="about-section">
      <section className="about-section2">
        <section className="about-section3">
          <div className="text-container">
            <h1>{t('aboutSection.title')}</h1>
            <p>{t('aboutSection.description')}</p>
          </div>
        </section>
        <div className="image-container">
            <img src={ManImage} alt="Repair" />
          </div>
      </section>
    </section>

    <div className="about-text">  
      <h1>{t('aboutSection.title2')}</h1>
            <p>{t('aboutSection.longDesc')}</p>
      </div>
      <ContactForm />
    </>
  );
}

export default AboutPage;
