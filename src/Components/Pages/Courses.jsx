import React from 'react';
import './CSS/Courses.css';
import SearchBar from '../SearchBar/SearchBar';
import Carousel from '../CoursesCarousel/CoursesCarousel';
import TopCourse from '../TopCourse/TopCourse';

const slidePrices = [2000, 3000, 4000, 5000, 6000, 7000, 8500, 1500, 9000];

const Courses = (props) => {
  return (
    <div className='courses'>
      <SearchBar />
      <h1>OUR COURSES</h1>
      <div className="courses-hr"></div>
      <div className="Courses-coursescard">
        <Carousel slides={slidePrices} />
        <TopCourse/>
      </div>
    </div>
  );
};

export default Courses;
