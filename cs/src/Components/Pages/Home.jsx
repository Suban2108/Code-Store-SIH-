import React from 'react'
import HomeCarousel from '../HomeCarousel/HomeCarousel'
import NewsLetter from '../NewsLetter/NewsLetter'
import TopCourse from '../TopCourse/TopCourse'
import HomeRefVideo from '../HomeRefVideo/HomeRefVideo'
import WhyHomeComp from '../WhyHomeComp/WhyHomeComp'

const Home = () => {
  return (
    <div>
      <HomeCarousel />
      <TopCourse/>
      <HomeRefVideo/>
      <WhyHomeComp/>
      <NewsLetter/>
    </div>
  )
}

export default Home
