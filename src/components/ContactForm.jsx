// import React from 'react';
// import './ContactForm.css';
// import contactImage from '../Images/Shape.png'; // Placeholder for the actual image path

// const ContactForm = () => {
//   return (
//     <section className="contact-form">
//       <div className="contact-form__container">
//         <div className="contact-form__text">
//           <h2>Get in touch!</h2>
//           <form>
//             <label htmlFor="name">Name</label>
//             <input type="text" id="name" placeholder="Placeholder" required />

//             <label htmlFor="email">Email</label>
//             <input type="email" id="email" placeholder="Placeholder" required />

//             <label htmlFor="message">Message</label>
//             <textarea id="message" placeholder="Placeholder" required></textarea>

//             <div className="contact-form__footer">
//               <label>
//                 <input type="checkbox" required /> I agree to Privacy Policy and Terms of Use
//               </label>
//               <button type="submit">Contact with us now</button>
//             </div>
//           </form>
//         </div>
//         <div className="contact-form__image">
//           <img src={contactImage} alt="Contact" />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ContactForm;


// src/components/ContactForm.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import './ContactForm.css';
import contactImage from '../Images/Shape.png';

const ContactForm = () => {
  const { t } = useTranslation();

  return (
    <section className="contact-form">
      <div className="contact-form__container">
        <div className="contact-form__text">
          <h2>{t('contactForm.title')}</h2>
          <form>
            <label htmlFor="name">{t('contactForm.name')}</label>
            <input type="text" id="name" placeholder={t('contactForm.name')} required />

            <label htmlFor="email">{t('contactForm.email')}</label>
            <input type="email" id="email" placeholder={t('contactForm.email')} required />

            <label htmlFor="message">{t('contactForm.message')}</label>
            <textarea id="message" placeholder={t('contactForm.message')} required></textarea>

            <div className="contact-form__footer">
              <label>
                <input type="checkbox" required /> {t('contactForm.checkbox')}
              </label>
              <button type="submit">{t('contactForm.submitButton')}</button>
            </div>
          </form>
        </div>
        <div className="contact-form__image">
          <img src={contactImage} alt="Contact" />
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
