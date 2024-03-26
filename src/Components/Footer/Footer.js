import React from 'react'
import './Footer.css';
function Footer() {
  return (
    <div className='footerMain'>
    <div className='footerDiv1'><img src='https://www.needledust.com/cdn/shop/files/logo-store-image_155x.png?v=1614301519'></img>
    <p>Hand Crafted by some of India's finest artisans, NEEDLEDUST brings to you a line of handcrafted fine leather juttis that speak the charm of a true old school artisan with the design sensibilities of a modern, luxury shoe brand.</p>
    <input type='text' placeholder='Enter your email address'></input>&nbsp;<button>JOIN</button>
    </div>
    <div className='footerDiv2'>
    <h4>MAIN MENU</h4>
    <ul>
    <li>WOMEN</li>
    <li>NEEDLEDUST X ABHINAV</li>
    <li>PURSES</li>
    <li>MAN</li>
    <li>KIDS</li>
    <li>GIFTING</li>
    <li>CELEBRITIES</li>
    <li>SAND x ND</li>
    </ul>
    </div>
   
    <div className='footerDiv3'><h4>REACH US</h4><ul>
    <li>Contact Us</li>
    <li>care@needledust.com</li>
    <li>+919871511115</li>
    <li>11am t0 5pm|Mon-Fri</li>
    <li></li>
  </ul></div>
   
  <div className='footerDiv4'><h4>NEEDLEDUST</h4><ul>
  <li>NEEDLEDUST Diaries</li>
  <li>About</li>
  <li>Press</li>
  <li>Stores</li>
  <li>Testmonials</li>
  <li>NEEDLEDUST Gifts</li>
  <li>Track Order</li>
  </ul></div>
    
  <div className='footerDiv5'>
  <h4>POLICIES</h4>
  <ul>
  <li>Term & Condition</li>
  <li>Return & Exchange</li>
  <li>Shipping Policy</li>
  <li>Privacy Policy</li>
  </ul>

  
  </div>
      
    </div>
  )
}

export default Footer
