// src/components/Thumbnail.js
import React from 'react';

const Thumbnail = ({ src, onClick, isSelected }) => {
  return (
    <img
      src={src}
      alt="Thumbnail"
      onClick={onClick}
      className={`w-12 h-12 cursor-pointer mx-2 rounded-md transition duration-200 ${
        isSelected ? 'opacity-100 ring-2 ring-red-500' : 'opacity-50'
      }`}
      style={{ opacity: isSelected ? 1 : 0.5 }} 
    />
  );
};

export default Thumbnail;