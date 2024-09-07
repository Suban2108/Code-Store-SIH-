import React from 'react'
import './CourseCard.css'
import web_card from '../Assets/web-card.jpg'
// w-[25%] h-[40%]

const CourseCard = ({price}) => {
  return (
    <>
    <div className="coursecard rounded-lg shadow-2xl m-3">
        <div className="w-[100%]">
            <img src={web_card} alt="" className="rounded-lg "/>
        </div>

        <p className="ml-5 title text-2.2xl text-blue-400 mb-3 font-bold mr-5">Web Development Course for beginners</p>
        <p className="ml-5 text-justify mr-5 text-gray-600 mb-5">This course will cover all the basic concepts of web development including html,css,js along with practice projects</p>

        <div className="flex price justify-between pb-3 ml-4 mr-5">
            <div className="font-bold prices text-xl">
                PRICE - Rs.{price}
            </div>

            <div>
                <button className="rounded-full bg-blue-400 text-white font-bold mr-3 ml-[22px] py-2 mb-3">Buy Now</button>
            </div>
        </div>

    </div>
    </>
  )
}

export default CourseCard
