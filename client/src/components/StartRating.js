
import React from 'react';

const StarRating = ({ rating }) => {
  const stars = Array.from({ length: rating }, (_, index) => (
    <span key={index} className={index < rating ? 'star filled' : 'star'}>
      ⭐️
    </span>
  ));

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
