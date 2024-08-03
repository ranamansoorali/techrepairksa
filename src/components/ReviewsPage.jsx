import React from 'react';
import { useTranslation } from 'react-i18next';
import './ReviewsPage.css';
import PhoneImage from '../Images/Phone.png';
import ContactForm from './ContactForm'; 

const ReviewsPage = () => {
  const { t } = useTranslation();

  return (
    <>

    <div className="contact-text2">  
            <div className="review-header">
              <img src={PhoneImage} alt="Calender" className="reviewer-image3" />
              <div className="reviewer-details">
              <p>{t('reviewsSection.desc1')}</p>
              </div>
            </div>
      </div>
      <ContactForm />
    </>
  );
}

export default ReviewsPage;
