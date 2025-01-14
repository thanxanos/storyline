import '../css/leftlogo.css';
import React from 'react';
import { Link } from 'react-scroll';
import HeroSection from './HeroSection';
import bookImg from '../imgFolder/book_logo.png';


const LeftLogo = () => {
  return (
    <div className="hero-wrapper">
      <div className='bookwrapper'>
            <div className='hero-card-wrapper'>
              <div data-aos="fade-up" delay="80" data-aos-duration="1100" className='hero-card'>
                <img className='book-logo-img' alt='book-logo'
                src={bookImg} />
                <Link 
                to="book-sub" 
                spy={true}
                smooth={true} 
                duration={500}
                >
                <button data-aos="fade-up" delay="150" data-aos-duration="1200" type="submit" className='primary-btn'>Choose your adventure</button>
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