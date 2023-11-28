/* eslint-disable react/prop-types */
import '../styles/rating.css';
export const Rating = ({ rating }) => {
  const totalStars = 5;
  let stars = [];

  for (let i = 1; i <= totalStars; i++) {
    if (i <= rating) {
      stars.push(
        <span key={i} className='full-star'>
          ★
        </span>
      );
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(
        <span key={i} className='half-star'>
          ★
        </span>
      );
    } else {
      stars.push(
        <span key={i} className='empty-star'>
          ☆
        </span>
      );
    }
  }

  return <div className='star-rating'>{stars}</div>;
};
