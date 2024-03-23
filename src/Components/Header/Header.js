import React from 'react'
import { CgProfile } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa6";
import './Header.css';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <div className='headerMain'>
      <div className='headerTop'>
        <div className='headerLeft'>
          <img src='https://www.needledust.com/cdn/shop/files/logo-store-image_155x.png?v=1614301519'  />
        </div>
        <div className='headerRight' >
          <div className='headerRight1'>
            <label htmlFor="currency">INR</label>
            <select id="currency">
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="INR">INR</option>
            </select>
          </div>
          <div className='headerLogo1'><CgProfile /></div>
          <div className='headerLogo2'><IoSearch /></div>
          <div className='headerLogo3'><FaCartArrowDown /></div>
        </div>
      </div>
      <div className='headerBottom'>
      <div class="menu">
    
      <Link to="/women">
      <span>Women</span>
    </Link>

      <div class="submenu">
      <Link to="/juttis">
      <p>JUTTIS</p>
    </Link>

    <Link to="/heels">
    <p>HEELS</p>
  </Link>

  <Link to="/kolha">
  <p>KOLHAPAIRS</p>
</Link>

<Link to="/sandals">
<p>SANDALS</p>
</Link>

<Link to="/mules">
<p>MULES</p>
</Link>

      </div>
    </div>

    <div class="menu2">
    <Link to="/needledust-x-abhinav-mishra">
          <span>NEEDLEDUST X ABHINAV MISHRA</span>
        </Link>
    <div class="submenu2">
    <Link to="/juttis">
    <p>JUTTIS</p>
  </Link>
  <Link to="/heels">
  <p>HEELS</p>
</Link>
<Link to="/purses">
<p>PURSES</p>
</Link>
<Link to="/man">
<p>MAN</p>
</Link>
<Link to="/view">
<p>VIEW ALL</p>
</Link>
    </div>
  </div>

  <Link to="/purses">
  <span>Purses</span>
</Link>
<Link to="/man">
<span>Man</span>
</Link>
<Link to="/kids">
<span>Kids</span>
</Link>
       
        <div class="menuGifting">
        <Link to="/gifting">
          <span>Gifting</span>
        </Link>
        <div class="submenuGifting">
          <p>GIFT SET</p>
          <p>HIS & ME GIFT SETS</p>
          <p>MOM & ME GIFT SETS </p>
        <p>GIFT CARDS</p>
          </div>
      </div>

      <Link to="/celebrities">
      <span>Celebrities</span>
    </Link>
    <a href="https://sandbyshirin.com/">
    <img src='https://sandbyshirin.com/cdn/shop/files/SAN_200x.png?v=1614949992' alt='not found' />
  </a>
  
      </div>
    </div>
  );
}

export default Header;
