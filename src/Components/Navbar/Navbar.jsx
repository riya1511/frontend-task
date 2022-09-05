import React from "react";
import logo from "../../images/logo.png";
import { GoThreeBars } from 'react-icons/go';
import { BsArrowDown } from 'react-icons/bs';
import '../Navbar/Navbar.css';

function Navbar({ toggle }) {
  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <button className="hamburger" onClick={toggle}>
        <GoThreeBars />
      </button>
      <div className="nav-menu">
        <ul className="nav-item">
          <li><a className="nav-links" href="/">Home</a></li>
          <li><a className="nav-links" href="/about">About Us</a></li>
          <li><a className="nav-links" href="/">FAQ</a></li>
          <li><a className="nav-links" href="/">Roadmap</a></li>
          <li><a className="nav-links" href="/">Careers</a></li>
          <li><a className="nav-links" href="/">Blog</a></li>
        </ul>
      </div>
        <button className="download-btn">Download Now <div><BsArrowDown /></div></button>
    </div>
  );
}

export default Navbar;
