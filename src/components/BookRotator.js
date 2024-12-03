import '../css/bookrotator.css'
import React from 'react'
import { FaArrowDown } from "react-icons/fa";
import HeroSection from '../components/HeroSection'
import bookImg from '../imgFolder/book_logo.png'



const BookRotator = () => {
  return (
    <div className="hero-wrapper">
      <div className='bookwrapper'>
            <div className='hero-card'>
              <div className='hero-card-wrapper'>
                <img className='book-logo-img' src={bookImg} />
                <button type="submit" className='primary-btn'>Choose your adventure</button>
              </div>
            </div>
          {/* <div className='top-gradient'></div> */}
      </div>
      <HeroSection />
    </div>
  )
}

export default BookRotator