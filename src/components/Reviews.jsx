// import React from 'react';
// import './Reviews.css';
// import placeholderImage from '../Images/Image1.png';
// // Placeholder image URL (replace with actual image paths if available)

// const Reviews = () => {
//   const reviewList = [
//     { name: 'Amina Shaikh', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', rating: 5 },
//     { name: 'Salim Ali Gulab', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', rating: 4 },
//     { name: 'John Doe', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam', rating: 5 },
//   ];

//   return (
//     <section className="reviews">
//       <h2>Reviews</h2>
//       <div className="reviews__list">
//         {reviewList.map((review, index) => (
//           <div className="review-item" key={index}>
//             <div className="review-header">
//               <img src={placeholderImage} alt={review.name} className="reviewer-image" />
//               <div className="reviewer-details">
//                 <h4 className="reviewer">{review.name}</h4>
//               </div>
//               <span className="rating">{'⭐'.repeat(review.rating)}</span>
//             </div>
//             <p>{review.text}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Reviews;


// src/components/Reviews.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Reviews.css';
import placeholderImage from '../Images/Image1.jpg';

const Reviews = () => {
  const { t } = useTranslation();
  const reviewList = t('reviews.reviewList', { returnObjects: true });

  return (
    <section className="reviews">
      <h2>{t('reviews.title')}</h2>
      <div className="reviews__list">
        {reviewList.map((review, index) => (
          <div className="review-item" key={index}>
            <div className="review-header">
              <img src={placeholderImage} alt={review.name} className="reviewer-image" />
              <div className="reviewer-details">
                <h4 className="reviewer">{review.name}</h4>
              </div>
              <span className="rating">{'⭐'.repeat(review.rating)}</span>
            </div>
            <p>{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
