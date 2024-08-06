import React, { useState, useEffect } from 'react';
import './Slideshow.css';

const products = [
  { image: process.env.PUBLIC_URL + './images/flipkart1.jpg' },
  { image: process.env.PUBLIC_URL + './images/flipkart11.jpg' },
  { image: process.env.PUBLIC_URL + './images/flipkart10.jpg' },
  { image: process.env.PUBLIC_URL + './images/flipkart7.jpg' },
];


const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      {/* Slideshow */}
      <div className="slideshow-container">
        <button className="arrow left-arrow" onClick={handlePrevClick}>
          &#10094;
        </button>
        <div className="slides">
          {products.map((product, index) => (
            <div
              key={index}
              className={`slide ${index === currentIndex ? 'active' : ''}`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <img src={product.image} alt={`Slide ${index}`} />
            </div>
          ))}
        </div>
        <button className="arrow right-arrow" onClick={handleNextClick}>
          &#10095;
        </button>
        <div className="navigation">
          {products.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
