// src/components/MainImage.js
import React from 'react';

const MainImage = ({ src, onPrev, onNext }) => {
  return (
    <div className="relative flex justify-center items-center h-96 bg-white shadow-lg rounded-md p-4">
      <button
        onClick={onPrev}
        className="absolute left-0 p-2 bg-gray-800 text-white rounded-full focus:outline-none"
      >
        &#9664;
      </button>
      <img src={src} alt="Main" className="max-h-full max-w-full rounded-md" />
      <button
        onClick={onNext}
        className="absolute right-0 p-2 bg-gray-800 text-white rounded-full focus:outline-none"
      >
        &#9654;
      </button>
    </div>
  );
};

export default MainImage;