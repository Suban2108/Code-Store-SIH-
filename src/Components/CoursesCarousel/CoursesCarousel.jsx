import React, { useState } from 'react';
import './CoursesCarousel.css';
import arrow_right from '../Assets/arrow_right.png';
import arrow_left from '../Assets/arrow_left.png';
import CourseItem from '../CourseItem/CourseItem';
import data_product from '../Assets/CoursesData';

const Carousel = ({ slides = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Number of slides to show per view
  const slidesToShow = 2;

  // Total number of slides
  const totalSlides = data_product.length+2;

  // Calculate the maximum number of slide positions
  const maxSlideIndex = Math.ceil(totalSlides / slidesToShow) - 1;

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? maxSlideIndex : prevSlide - 2
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide >= maxSlideIndex ? 0 : prevSlide + 2
    );
  };

  const isPrevButtonDisabled = currentSlide === 0;
  const isNextButtonDisabled = currentSlide === maxSlideIndex;

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
        <div
          className="carousel-slide-wrapper"
          style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}
        >
          {data_product.map((item, i) => (
            <div className="carousel-slide" key={i}>
              <CourseItem
                id={item.id}
                title={item.title}
                imageurl={item.imageurl}
                description={item.description}
                new_price={item.new_price}
                old_price={item.old_price}
                category={item.category}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-indicators">
        {Array.from({ length : maxSlideIndex + 1 }).map((_, index) => (
          <span
            key={index}
            className={`carousel-indicator ${currentSlide === index ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
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
