// import React from 'react';
// import './ServiceSection.css';
// import WashingMachineImage from '../Images/Washing2.png';
// import PizzaOvenImage from '../Images/Oven2.png';

// const ServiceSection = () => {
//   return (
//     <section className="service-section">
//       <div className="service service-left">
//         <img src={WashingMachineImage} alt="Washing Machine" />
//         <div className="service-text">
//           <h2>Washing Machine</h2>
//           <p>We do every kind of <br/> service including <br/> repair and much more.</p>
//         </div>
//       </div>
//       <div className="service service-right">
//         <div className="service-text">
//           <h2>Pizza Oven</h2>
//           <p>We do every kind of  <br/> service including <br/> repair and much more.</p>
//         </div>
//         <img src={PizzaOvenImage} alt="Pizza Oven" />
//       </div>
//     </section>
//   );
// }

// export default ServiceSection;


// src/components/ServiceSection.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import './ServiceSection.css';
import WashingMachineImage from '../Images/Washing2.png';
import PizzaOvenImage from '../Images/Oven2.png';

const ServiceSection = () => {
  const { t } = useTranslation();

  return (
    <section className="service-section">
      <div className="service service-left">
        <img src={WashingMachineImage} alt="Washing Machine" />
        <div className="service-text">
          <h2>{t('serviceSection.washingMachineTitle')}</h2>
          <p>{t('serviceSection.washingMachineDescription')}</p>
        </div>
      </div>
      <div className="service service-right">
        <div className="service-text">
          <h2>{t('serviceSection.pizzaOvenTitle')}</h2>
          <p>{t('serviceSection.pizzaOvenDescription')}</p>
        </div>
        <img src={PizzaOvenImage} alt="Pizza Oven" />
      </div>
    </section>
  );
}

export default ServiceSection;
