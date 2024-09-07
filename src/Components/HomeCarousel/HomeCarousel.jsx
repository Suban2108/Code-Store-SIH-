import React, { useState, useEffect } from 'react';
import './HomeCarousel.css'
import onlineLearning from '../Assets/online-learning.png'
import clipkart_coding from '../Assets/clipart-coding.png'
import coding_guy from '../Assets/coding-guy.png'
import bcoding_guys from '../Assets/black-guy-learning.png'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  // Auto scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        if (prevIndex === 3) { // When reaching the pseudo "4th slide"
          setIsAnimating(false); // Disable animation to reset
          return 0; // Reset to first slide index
        }
        setIsAnimating(true); // Enable animation for normal transitions
        return prevIndex + 1;
      });
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Determine the translateX based on the currentIndex
  const getTransformValue = () => {
    return `translateX(-${currentIndex * 100}%)`;
  };

  return (
    <div className="relative w-full mt-10 overflow-hidden">
      {/* Carousel wrapper */}
      <div
        className={`flex ${isAnimating ? 'transition-transform duration-700 ease-in-out' : ''}`}
        style={{ transform: getTransformValue() }}
        onTransitionEnd={() => {
          if (currentIndex === 0 && !isAnimating) {
            setIsAnimating(true); // Re-enable animation after resetting
          }
        }}
      >
      {/* Slide 1 */}
      <div className="w-full flex-shrink-0 h-[50vh] bg-slate-300 flex items-center justify-center text-white text-2xl p-2">
          <img className="h-[100%] rounded-lg shadow-lg" src={onlineLearning} alt="" />
        </div>
        {/* Slide 2 */}
        <div className="w-full flex-shrink-0 h-[50vh] bg-slate-300 flex items-center justify-center text-white text-2xl p-2">
        <img className="h-[100%] rounded-lg shadow-lg" src={clipkart_coding} alt="" />
        </div>
        {/* Slide 3 */}
        <div className="w-full flex-shrink-0 h-[50vh] bg-slate-300 flex items-center justify-center text-white text-2xl p-2">
        <img className="h-[100%] rounded-lg shadow-lg" src={coding_guy} alt="" />
        </div>
        {/* Pseudo Slide 4 (identical to Slide 1) */}
        <div className="w-full flex-shrink-0 h-[50vh] bg-slate-300 flex items-center justify-center text-white text-2xl p-2">
        <img className="h-[100%] rounded-lg shadow-lg" src={bcoding_guys} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;

