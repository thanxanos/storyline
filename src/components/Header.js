import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faX, faBars } from '@fortawesome/free-solid-svg-icons'
import LoginSignup from './LoginSignup';
// import bookStack from '../imgFolder/magic-book.png'
import '../css/header.css'

// { !openPopup ? <div className='nav-toggle'></div> : <div className='nav-toggle'><div className='bar'><FontAwesomeIcon icon={faBars} />
//       <FontAwesomeIcon icon={faXmark} /></div></div> }

const Header = () => {
  const [openPopup, setOpenPopup] = useState(false)
  const [openNav, setOpenNav] = useState(false)
  const showSideNavbar = () => setOpenNav(!openNav);
  return (
    <div className='header-wrapper' id='top'>
    <div>
      <div className='navbar'>
        <div className={ openNav ? 'link-wrapper active' : 'link-wrapper' }>
          <ul >
            {/* <li><Link to='/'><img className='book-stack' src={bookStack} /></Link></li> */}
            <li><Link to='/' onClick={() => setOpenNav(false)}>storyline</Link></li>
            <li><Link to='/boxes' onClick={() => setOpenNav(false)}>boxes</Link></li>
            <li><Link to='/shop' onClick={() => setOpenNav(false)}>shop</Link></li>
            <li><Link to='/about' onClick={() => setOpenNav(false)}>about us</Link></li>
            <li><Link to='/contact' onClick={() => setOpenNav(false)}>contact</Link></li>
            {!openNav ? '' : <li onClick={() => setOpenPopup(true)} ><a>log in</a></li>}
          </ul>
        </div>

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
      <div className='nav-toggle'>
          <div className="menu-btn" onClick={showSideNavbar}>
            {openNav ? 
            <FontAwesomeIcon className='side-btn' id='grab-icon' icon={faX} onClick={()=> setOpenNav(false)} />
            :
            <FontAwesomeIcon className='side-btn' icon={faBars} onClick={()=> setOpenNav(true)}/>

            }
          </div>
        </div>
    </div>
  )
}

export default Header