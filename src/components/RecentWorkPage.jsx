import React from "react";
import { useTranslation } from "react-i18next";
import "./RecentWork.css";
import Reviews from "./Reviews";
import ContactForm from "./ContactForm";
import image1 from '../Images/Recent1.png';
import image2 from '../Images/Recent2.png';
import image3 from '../Images/Recent3.png';
import image4 from '../Images/Recent4.png';

const RecentWorkPage = () => {
  const images = [image1, image2, image3, image4, image1, image2, image3, image4];
  const { t } = useTranslation();
  
  return (
    <>
    <section className="recent-work">
      <h2 className="recent-work__title">{t('recentSection.title')}</h2>
      <div className="recent-work__grid-container">
        <div className="recent-work__grid">
          {images.map((image, index) => (
            <div className="recent-work__item" key={index}>
              <img src={image} alt={`Work ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
      <Reviews />
      <ContactForm />
    </>
  );
};

export default RecentWorkPage;
