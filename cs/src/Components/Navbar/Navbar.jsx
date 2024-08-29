import React, { useState } from 'react'
import "./Navbar.css"
import {Link} from 'react-router-dom';
import logo from '../Assets/logo-color.png';
import cart_icon from '../Assets/cart-icon.png'
import profile_icon from '../Assets/profile_icon.png'



const Navbar = () => {

    const[menu,setMenu] = useState("Courses");

  return (
    <div className = 'navbar'>
      <div className="nav-logo">
        <Link to="/"><img src={logo} alt="logo" onClick={()=>{setMenu("Courses")}}/></Link>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("Courses")}}><Link to="/" style={{textDecoration:'none'}}>Courses</Link>{menu === "Courses"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Discussion")}}><Link to="/Discussion" style={{textDecoration:'none'}}>Discussion</Link>{menu === "Discussion"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("DSA")}}><Link to="/DSA" style={{textDecoration:'none'}}>DSA</Link>{menu === "DSA"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Lectures")}}><Link to="/Lectures" style={{textDecoration:'none'}}>Lectures</Link>{menu === "Lectures"?<hr/>:<></>}</li>
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
