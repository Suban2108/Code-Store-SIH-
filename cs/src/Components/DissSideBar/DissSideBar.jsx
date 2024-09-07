import React from 'react'
import './DissSideBar.css'
import logo from '../Assets/icon.png'
import inbox_icon from '../Assets/inbox_icon.png'
import draft_icon from '../Assets/draft_icon.png'
import sidebar_icon from '../Assets/Sidebar_icon.png'

const DissSideBar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebar-logo bg-white-100">
        <img className='img-logo bg-gray-100' src={logo} alt="" />
        <div className="sidebar-p">
          <p>CODE STORE</p>
        </div>
        <img className='img_sidebar' src={sidebar_icon} alt="" />
      </div>
      <div className="sidebar-down">
        <h5>General</h5>
        <p></p>
        <div className="inbox-img">
          <img src={inbox_icon} alt="" />
          <p>Inbox</p>
          <p></p>
          <div className="count-of-msg-inbox bg-gray-300">0</div>
        </div>
        <div className="inbox-img">
          <img src={draft_icon} alt="" />
          <p>Draft</p>
          <p></p>
          <div className="count-of-msg"></div>
        </div>
        <h5>Channels</h5>
      </div>
    </div>
  )
}

export default DissSideBar
