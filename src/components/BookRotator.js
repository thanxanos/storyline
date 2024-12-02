import '../css/bookrotator.css'
import React from 'react'
import { FaArrowDown } from "react-icons/fa";
import HeroSection from '../components/HeroSection'
import bookImg from '../imgFolder/book.png'



const BookRotator = () => {
  return (
    <div className="hero-wrapper">
      <div className='bookwrapper'>
            <div className='hero-card'>
              <div className='hero-card-wrapper'>
                <img className='book-img' src={bookImg} />
                <h3 className='card-title'>Lorem ipsum dolor</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor varius lobortis. In hac habitasse platea dictumst. Curabitur id porta risus. Vestibulum faucibus.</p>
                <button type="submit" className='primary-btn'>Read More</button>
              </div>
            </div>
          {/* <div className='top-gradient'></div> */}
      </div>
      <HeroSection />
    </div>
  )
}

export default BookRotator