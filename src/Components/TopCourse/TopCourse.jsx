import React from 'react'
import './TopCourse.css'
import data_product from '../Assets/CoursesData'
import CourseItem from '../CourseItem/CourseItem'

const TopCourse = () => {
  return (
    <div className='topcourse'>
      <h1>POPULAR COURSES</h1>
      <div className="topcourse-hr"></div>

      <div className="topcourse-item">
        {data_product.map((item, i) => {
          return <CourseItem key={i} id={item.id} title={item.title} image={item.image} description={item.description} new_price={item.n_price} old_price={item.o_price} />
        })}
      </div>
    </div>
  )
}

export default TopCourse
