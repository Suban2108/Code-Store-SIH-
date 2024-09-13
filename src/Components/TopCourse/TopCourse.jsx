import React from 'react'
import './TopCourse.css'
import data_product from '../Assets/CoursesData'
import CourseItem from '../CourseItem/CourseItem'

const TopCourse = (props) => {
  return (
    <div className='topcourse'>
      <h1>POPULAR COURSES</h1>
      <div className="topcourse-hr"></div>

      <div className="topcourse-item">
        {data_product.map((item, i) => {
          return <CourseItem key={i} id={item.id} title={item.title} imageurl={item.imageurl} description={item.description} new_price={item.new_price} old_price={item.old_price} category={item.category}/>
        })}
      </div>
    </div>
  )
}

export default TopCourse
