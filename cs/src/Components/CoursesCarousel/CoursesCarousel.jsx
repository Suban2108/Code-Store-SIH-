import React, { useState } from 'react';
import './CoursesCarousel.css';
import arrow_right from '../Assets/arrow_right.png';
import arrow_left from '../Assets/arrow_left.png';
import CourseCard from '../CourseCard/CourseCard';

const Carousel = ({ slides = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? (slides.length - 3)%4 : (prevSlide - 1)%4
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide >= (slides.length - 3)%4 ? 0 : (prevSlide + 1)%4
    );
  };


  const isPrevButtonDisabled = currentSlide === 0;
  const isNextButtonDisabled = currentSlide === (slides.length - 1)%5-1;

  return (
    <>
      <button
        className={`carousel-button prev ${isPrevButtonDisabled ? 'disabled' : ''}`}
        onClick={goToPreviousSlide}
        disabled={isPrevButtonDisabled} // Disable button when currentSlide is 0
      >
        <img src={arrow_left} alt="Previous" />
      </button>

      <div className="carousel">
        <div className="carousel-slide-wrapper" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((price, index) => (
            <div className="carousel-slide" key={index}>
              <CourseCard price={price} />
            </div>
          ))}
        </div>
      </div>

      <button
        className={`carousel-button next ${isNextButtonDisabled ? 'disabled' : ''}`}
        onClick={goToNextSlide}
        disabled={isNextButtonDisabled} // Disable button when currentSlide is at the last slide
      >
        <img src={arrow_right} alt="Next" />
      </button>
    </>
  );
};

export default Carousel;
