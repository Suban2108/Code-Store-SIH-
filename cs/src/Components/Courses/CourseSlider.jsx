import React from "react";
//taking price as a prop
function CourseSlider({price}){
    return (
        <>
        <div className="w-[25%] h-[40%] rounded-lg shadow-2xl m-5">
            <div className="w-[100%]">
                <img src="/src/assets/webdev.jpeg" alt="" className="rounded-lg mb-5"/>
            </div>

            <p className="ml-5 text-2xl text-blue-400 mb-5 font-bold mr-5">Web Development Course for beginners</p>
            <p className="ml-5 text-justify mr-5 text-gray-600 mb-5">This course will cover all the basic concepts of web development including html,css,js along with practice projects</p>

            <div className="flex justify-between pb-3 ml-5 mr-5">
                <div className="font-bold text-xl">
                    PRICE - Rs.{price}
                </div>

                <div>
                    <button className="rounded-full bg-blue-400 text-white font-bold mr-5 px-5 py-2">Buy Now</button>
                </div>
            </div>

        </div>
        </>
    )
}

export default CourseSlider