import React from 'react';
import ReactStars from "react-rating-stars-component";

const Review = ({ review }) => {
  const { img, email, name, desc, rating } = review;

  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-between max-w-sm mx-auto">
      {/* User Info */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-16 h-16 rounded-full overflow-hidden">
          <img className="w-full h-full object-cover" src={`data:image/jpeg;base64,${img}`} alt={name} />
        </div>
        <div>
          <h3 className="text-xl font-semibold">{name}</h3>
          <p className="text-sm text-gray-400">{email}</p>
        </div>
      </div>

      {/* Review Description */}
      <div className="text-gray-300 mb-4">
        <p>{desc}</p>
      </div>

      {/* Rating */}
      <ReactStars
        count={5}
        value={Number(rating)}
        isHalf={true}
        edit={false}
        size={24}
        color="#ffd700"
      />
    </div>
  );
};

export default Review;
