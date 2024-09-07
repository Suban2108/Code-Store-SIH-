import React from 'react'
import './LectureContainer.css'
import arrow_down_icon from '../Assets/arrowdown_icon.png'


const LectureContainer = () => {
  return (
    <div className='lecturecontainer'>
       {/* <div className='lecturecontainer-progress'>
       </div> */}
       <div className="lecturecontainer-hr"></div>
      <div className="lecturecontainer-container-section">
        <div className="lecturecontainer-left">
          <p><strong>Step - 1:</strong> Learn tha basics</p>
          <div className="lecturecontainer-left-count">31/31 <img src={arrow_down_icon} alt="" /></div>
        </div>
      </div>
    </div>
  )
}

export default LectureContainer
