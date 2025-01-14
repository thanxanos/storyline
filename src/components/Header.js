import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faXmark, faBars } from '@fortawesome/free-solid-svg-icons'
import LoginSignup from './LoginSignup';
// import bookStack from '../imgFolder/magic-book.png'
import '../css/header.css'

const Header = () => {
  const [openPopup, setOpenPopup] = useState(false)

  return (
    <div className='header-wrapper' id='top'>
      <div className='navbar'>
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
        <FontAwesomeIcon icon={faXmark} />
        <FontAwesomeIcon icon={faBars } />
        <div className='side-wrapper'>
          <HashLink smooth to='#newsletter-wrapper'><button type="submit" className='secondary-btn'>Subscribe Now</button></HashLink>
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