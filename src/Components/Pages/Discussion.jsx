import React from 'react'
import './CSS/Discussion.css'
import ChatSection from '../ChatSection/ChatSection'
import DissSideBar from '../DissSideBar/DissSideBar'

const Discussion = () => {
  return (
    <div className='discussion'>
      <div className="discussion-sidebar bg-gray-100">
        <DissSideBar />
      </div>
      <div className="discussion-chatsection">
        <ChatSection />
      </div>
    </div>
  )
}

export default Discussion
