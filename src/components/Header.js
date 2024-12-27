import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import LoginSignup from './LoginSignup';
import bookStack from '../imgFolder/magic-book.png'
import '../css/header.css'

const Header = () => {
  const [openPopup, setOpenPopup] = useState(false)
  
  return (
    <div className='header-wrapper'>
      <div className='sub-header-wrapper'>
        <div className='link-wrapper'>
          <ul>
            {/* <li><Link to='/'><img className='book-stack' src={bookStack} /></Link></li> */}
            <li><Link to='/'>storyline</Link></li>
            <li><Link to='/boxes'>boxes</Link></li>
            <li><Link to='/shop'>shop</Link></li>
            <li><Link to='/about'>about us</Link></li>
            <li><Link to='/contact'>contact</Link></li>
          </ul>
        </div>
        <div className='side-wrapper'>
          <button type="submit" className='secondary-btn'>Subscribe Now</button>
          <button
          onClick={() => setOpenPopup(true)}
          className='user-btn'>            
          <FontAwesomeIcon icon={faUser} />
          </button>
      </div>
      </div>

      {
        openPopup && 
        <LoginSignup openPopup={openPopup} setOpenPopup={setOpenPopup} />
      }

    </div>
  )
}

export default Header