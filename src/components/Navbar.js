import React from 'react'
import './style.css'

const Navbar = () => {
  return (
    <>
      <navbar className="navbar">
        <div className="logo">
          <h1>Weather Times</h1>
        </div>
        <div className="menu">
          <ul>
           <li className="nav-itmes"><a href="http://">About Us</a></li>
           <li className="nav-itmes"><a href="http://">Contact Us</a></li>
           <li className="nav-itmes"><a href="http://">Menu</a></li>
          </ul>
        </div>
      </navbar>
    </>
  ) 
}

export default Navbar
