import '../css/leftlogo.css';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-scroll';
import HeroSection from './HeroSection';
import bookImg from '../imgFolder/book_logo.png';


const LeftLogo = () => {
  return (
    <div className="hero-wrapper">
      <div className='bookwrapper'>
            <div className='hero-card-wrapper'>
              <div className='hero-card'>
                <img className='book-logo-img' src={bookImg} />
                <Link 
                to="book-sub" 
                spy={true}
                smooth={true} 
                duration={500}
                >
                <button type="submit" className='primary-btn'>Choose your adventure</button>
                </Link>
              </div>
            </div>
          {/* <div className='top-gradient'></div> */}
      </div>
      <HeroSection />
    </div>
  )
}

export default LeftLogo