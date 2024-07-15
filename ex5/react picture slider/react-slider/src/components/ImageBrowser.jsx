// src/components/ImageBrowser.js
import React, { useState } from 'react';
import MainImage from './MainImage';
import Thumbnail from './Thumbnail';

const ImageBrowser = () => {
  const images = [
    'https://picsum.photos/id/11/350/350',
    'https://picsum.photos/id/12/350/350',
    'https://picsum.photos/id/13/350/350',
    'https://picsum.photos/id/14/350/350',
    'https://picsum.photos/id/15/350/350',
    'https://picsum.photos/id/16/350/350',
    'https://picsum.photos/id/17/350/350',
    'https://picsum.photos/id/18/350/350',
    'https://picsum.photos/id/19/350/350'
    // Add more images as needed
  ];

  const thumbnails = [
    'https://picsum.photos/id/11/50/50',
    'https://picsum.photos/id/12/50/50',
    'https://picsum.photos/id/13/50/50',
    'https://picsum.photos/id/14/50/50',
    'https://picsum.photos/id/15/50/50',
    'https://picsum.photos/id/16/50/50',
    'https://picsum.photos/id/17/50/50',
    'https://picsum.photos/id/18/50/50',
    'https://picsum.photos/id/19/50/50'
  ];


  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePrev = () => {
    setSelectedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="container mx-auto p-4 flex justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md">
        <MainImage src={images[selectedIndex]} onPrev={handlePrev} onNext={handleNext} />
        <div className="flex justify-center mt-4 space-x-2">
          {thumbnails.map((thumbnail, index) => (
            <Thumbnail
              key={index}
              src={thumbnail}
              onClick={() => setSelectedIndex(index)}
              isSelected={selectedIndex === index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageBrowser;