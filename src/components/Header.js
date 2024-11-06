import React from 'react'
import { LuSearch } from "react-icons/lu";
import '../css/header.css'

const Header = () => {
  return (
    <div className='header-wrapper'>
      <div className='sub-header-wrapper'>
        <div className='link-wrapper'>
          <ul>
            <li><a href="#0">boxes</a></li>
            <li><a href="#0">shop</a></li>
            <li><a href="#0">about us</a></li>
            <li><a href="#0">contact</a></li>
          </ul>
        </div>
        <div className='side-wrapper'>
          <div className='search-wrapper'><input type="text" placeholder="search"></input><LuSearch className="search-icon" />
          </div>
          <button type="submit" className='primary-btn'>Sign Up</button>
      </div>
      </div>
    </div>
  )
}

export default Header