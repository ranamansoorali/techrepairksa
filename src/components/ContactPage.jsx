import React from 'react';
import { useTranslation } from 'react-i18next';
import './ContactPage.css';
import CalenderImage from '../Images/Calender.png';
import TickImage from '../Images/Tick.png';
import PhoneImage from '../Images/Phone.png';
import ContactForm from './ContactForm'; 

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <>
    <section className="contact-section">
      <section className="contact-section2">
        <section className="contact-section3">
          <div className="text-container">
            <h1>{t('contactSection.title')}</h1>
            <p>{t('contactSection.description')}</p>
          </div>
        </section>
        <div className="image-container">
            <img src={CalenderImage} alt="Calender" />
          </div>
      </section>
    </section>

    <div className="contact-text2">  
      <h1>{t('contactSection.title2')}</h1>
            <div className="review-header">
              <img src={PhoneImage} alt="Calender" className="reviewer-image5" />
              <div className="reviewer-details">
              <p>{t('contactSection.desc1')}</p>
              </div>
            </div>
            <div className="review-header">
              <img src={CalenderImage} alt="Calender" className="reviewer-image2" />
              <div className="reviewer-details">
              <p>{t('contactSection.desc2')}</p>
              </div>
            </div>
            <div className="review-header">
              <img src={TickImage} alt="Calender" className="reviewer-image5" />
              <div className="reviewer-details">
              <p>{t('contactSection.desc3')}</p>
              </div>
            </div>
      </div>
      <ContactForm />
    </>
  );
}

export default ContactPage;
