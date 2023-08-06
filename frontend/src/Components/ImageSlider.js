import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="w-full relative">
      <div className="overflow-hidden rounded-lg">
        {images.length > 0 &&
          images.map((imageUrl, index) => (
            <div
              key={index}
              className={index === currentIndex ? "block w-full" : "hidden"}
              style={{ width: "100%", paddingTop: "56.25%" }} // 16:9 aspect ratio
            >
              <img
                src={imageUrl}
                alt={`Image ${index}`}
                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          ))}
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center">
        <div className="flex items-center p-2 bg-black/20 text-white cursor-pointer" onClick={prevSlide}>
          <BsChevronCompactLeft size={30} />
        </div>
        <div className="flex items-center p-2 bg-black/20 text-white cursor-pointer" onClick={nextSlide}>
          <BsChevronCompactRight size={30} />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
