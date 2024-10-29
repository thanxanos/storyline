import React from 'react'
import '../css/header.css'

const Header = () => {
  return (
    <div className='header-wrapper'>
      <div className='link-wrapper'>
        <ul>
          <li>boxes</li>
          <li>shop</li>
          <li>about us</li>
          <li>contact</li>
        </ul>
      </div>
      <div className='side-wrapper'>
        <input type="text" placeholder="search"></input>
        <button type="submit" className='primary-btn'>Sign Up</button>
      </div>
    </div>
  )
}

export default Header