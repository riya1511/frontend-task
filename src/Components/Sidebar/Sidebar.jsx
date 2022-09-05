import React from 'react'
import "../Sidebar/Sidebar.css";
import { GoThreeBars } from 'react-icons/go';
import { FaTwitter, FaTelegramPlane, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

function Sidebar({ isOpen, toggle }) {
  return (
    <div className='sidebar' onClick={toggle}
        style={isOpen ? { opacity: '100%', top: '0' } : { opacity: '0', top: '-100', display: 'none' }}
    >
        <button className="hamburger" onClick={toggle}>
        <GoThreeBars />
      </button>
        <div className='sidebar-wrapper'>
            <ul className='sidebar-menu'>
                <li><a href='/' className='sidebar-link'>Home</a></li>
                <li><a href='/about' className='sidebar-link'>About Us</a></li>
                <li><a href='/' className='sidebar-link'>FAQ</a></li>
                <li><a href='/' className='sidebar-link'>Roadmap</a></li>
                <li><a href='/' className='sidebar-link'>Careers</a></li>
                <li><a href='/' className='sidebar-link'>Blog</a></li>
            </ul>
            <div className='sidebar-icons'>
                <p>Join the community</p>
                <div className='icons'>
                <a href='/'><FaTwitter /></a>
                <a href='/'><FaTelegramPlane /></a>
                <a href='/'><FaLinkedinIn /></a>
                <a href='/'><FaYoutube /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar