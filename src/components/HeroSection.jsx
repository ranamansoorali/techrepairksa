// import React from 'react';
// import './HeroSection.css';
// import NutBoltImage from '../Images/NutBolt.png';

// const HeroSection = () => {
//   return (
//     <section className="hero-section">
//       <section className="hero-section2">
//         <section className="hero-section3">
//           <div className="text-container">
//             <h1>Your Repairing Partner</h1>
//             <p>Looking for a repair?
//               <br/> No worries, we are here for you...</p>
              
//           </div>
//           <div className="image-container">
//             <img src={NutBoltImage} alt="Repair" />
//           </div>
//         </section>
//       </section>
//     </section>
//   );
// }

// export default HeroSection;


// src/components/HeroSection.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import './HeroSection.css';
import NutBoltImage from '../Images/NutBolt.png';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="hero-section">
      <section className="hero-section2">
        <section className="hero-section3">
          <div className="text-container">
            <h1>{t('heroSection.title')}</h1>
            <p>{t('heroSection.description')}</p>
          </div>
          <div className="image-container">
            <img src={NutBoltImage} alt="Repair" />
          </div>
        </section>
      </section>
    </section>
  );
}

export default HeroSection;
