import React, { useState } from 'react'
import "./Navbar.css"
import {Link} from 'react-router-dom';
import logo from '../Assets/logo-color.png';
import cart_icon from '../Assets/cart-icon.png'
import profile_icon from '../Assets/profile_icon.png'



const Navbar = () => {

    const[menu,setMenu] = useState("Home");

  return (
    <div className = 'navbar'>
      <div className="nav-logo">
        <Link to="/"><img src={logo} alt="logo" onClick={()=>{setMenu("Home")}}/></Link>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("Home")}}><Link to="/" style={{textDecoration:'none',color:'#0e0ead'}}>Home</Link>{menu === "Home"?<div className="nav-hr"></div>:<></>}</li>
        <li onClick={()=>{setMenu("Courses")}}><Link to="/Courses" style={{textDecoration:'none',color:'#0e0ead'}}>Courses</Link>{menu === "Courses"?<div className="nav-hr"></div>:<></>}</li>
        <li onClick={()=>{setMenu("Discussion")}}><Link to="/Discussion" style={{textDecoration:'none',color:'#0e0ead'}}>Discussion</Link>{menu === "Discussion"?<div className="nav-hr"></div>:<></>}</li>
        <li onClick={()=>{setMenu("DSA")}}><Link to="/leetcode-94c79.web.app" style={{textDecoration:'none',color:'#0e0ead'}}>DSA</Link>{menu === "DSA"?<div className="nav-hr"></div>:<></>}</li>
        <li onClick={()=>{setMenu("Lectures")}}><Link to="/Lectures" style={{textDecoration:'none',color:'#0e0ead'}}>Lectures</Link>{menu === "Lectures"?<div className="nav-hr"></div>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><img src={cart_icon} alt="cart_icon"/></Link>
        <div className="nav-cart-count">0</div>
        <div className="profile-icon-cont">
          <Link to="/cart"><img src={profile_icon} className='profile-icon' alt="cart_icon" /></Link>
        </div>
      </div>
    </div>
  ) 
}

export default Navbar
