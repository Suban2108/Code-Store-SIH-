import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo-color.png'
import instagram_icon from '../Assets/instagram_icon.png'
import youtube_icon from '../Assets/youtube.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import Linkedin_icon from '../Assets/Linkedin_icon.png'
import Facebook_icon from '../Assets/facebook_icon.png'
import Twitter_icon from '../Assets/twitter_icon.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
            </div>
            <ul className="footer-links">
                <li>Courses</li>
                <li>DSA</li>
                <li>Discussion Forum</li>
                <li>Lectures</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icon-container">
                    <img src={Facebook_icon} alt="" />
                </div>
                <div className="footer-icon-container">
                    <img src={instagram_icon} alt="" />
                </div>
                <div className="footer-icon-container">
                    <img src={youtube_icon} alt="" />
                </div>
                <div className="footer-icon-container">
                    <img src={whatsapp_icon} alt="" />
                </div>
                <div className="footer-icon-container">
                    <img src={Linkedin_icon} alt="" />
                </div>
                <div className="footer-icon-container">
                    <img src={Twitter_icon} alt="" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Code Store &copy; 2024 - All rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer
