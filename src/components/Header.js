import React from 'react'
import {
  Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import '../css/header.css'

const Header = () => {
  return (
    <div className='header-wrapper'>
      <div className='sub-header-wrapper'>
        <div className='link-wrapper'>
          <ul>
            <li><Link to='/'>home</Link></li>
            <li><Link to='/shop'>shop</Link></li>
            <li><Link to='/about'>about us</Link></li>
            <li><Link to='/contact'>contact</Link></li>
          </ul>
        </div>
        <div className='side-wrapper'>
          <button type="submit" className='secondary-btn'>Subscribe Now</button>
          <Link to='/login'><button type="submit" className='user-btn'>            
          <FontAwesomeIcon icon={faUser} />
          </button></Link>
      </div>
      </div>
    </div>
  )
}

export default Header