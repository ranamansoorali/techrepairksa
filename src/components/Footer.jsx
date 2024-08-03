// import React from 'react';
// import './Footer.css';

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer__content">
//         <h2>Riyadh Repair</h2>
//         <ul>
//           <li>Product</li>
//           <li>Contact</li>
//           <li>Call Right Now</li>
//         </ul>
//       </div>
//       <div className="footer__copyright">
//         <p>© 2022 Riyadh Repair</p>
//       </div>
//                <div className="footer__social">
//           <a href="#facebook">Facebook</a>
//           <a href="#twitter">Twitter</a>
//           <a href="#instagram">Instagram</a>
//         </div>
//     </footer>
//   );
// }

// export default Footer;


// src/components/Footer.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer__content">
        <h2>{t('footer.title')}</h2>
        <ul>
          <li ><Link to="/recent-work">{t('footer.product')} </Link></li>
          <li> <Link to="/contact">{t('footer.contact')} </Link></li>
          <li> <Link to="/contact">{t('footer.callNow')} </Link></li>
        </ul>
      </div>
      <div className="footer__copyright">
        <p>{t('footer.copyright')}</p>
      </div>
      <div className="footer__social">
        <a href="#facebook">{t('footer.social.facebook')}</a>
        <a href="#twitter">{t('footer.social.twitter')}</a>
        <a href="#instagram">{t('footer.social.instagram')}</a>
      </div>
    </footer>
  );
}

export default Footer;
