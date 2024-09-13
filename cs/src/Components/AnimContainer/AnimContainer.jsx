import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../Assets/guy-learning.json'; // Replace with the actual path to your JSON file

const AnimContainer = () => {
  return (
    <div className="flex items-center justify-between border-2 m-5">
  
      

   
      <div className="text-center w-1/2 p-3">
        <h1 className="font-bold text-[50px]">
        Welcome to Code Store
        <div className='text-[20px] font-thin'>
        where your goals meet a custom-tailored roadmap to success! We believe that no two learners are the same, which is why we create a personalized learning experience just for you.
        </div>
        </h1>
      </div>

      <div>
        <Lottie
          animationData={animationData}
          loop={true}
          style={{ height: '400px', width: '500px' }} // Adjust size as needed
        />
      </div>
    </div>
  );
};

export default AnimContainer;
