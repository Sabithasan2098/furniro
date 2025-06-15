import React from "react";

type StarRatingProps = {
  rating: number; // Example: 4.3
  totalStars?: number; // default: 5
};

const StarRating: React.FC<StarRatingProps> = ({ rating, totalStars = 5 }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  const emptyStars = totalStars - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex text-[12px] md:text-[16px] lg:text-[20px] font-extrabold items-center space-x-1 text-yellow-400">
      {Array.from({ length: fullStars }).map((_, i) => (
        <span key={`full-${i}`}>★</span>
      ))}

      {hasHalfStar && <span>⯨</span> /* optional: use custom half-star */}

      {Array.from({ length: emptyStars }).map((_, i) => (
        <span key={`empty-${i}`} className="text-gray-300">
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
