import '../css/bookrotator.css';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-scroll';
import HeroSection from '../components/HeroSection';
import bookImg from '../imgFolder/book_logo.png';


const BookRotator = () => {
  const [visible, setVisible] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const showNavbar = () => setNavbar(!navbar);
  useEffect(() => {
    document.addEventListener("scroll", e => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 5){
        setVisible(true)
      } else {
        setVisible(false)
      }
    })
  }, [])

  return (
    <div className="hero-wrapper">
      <div className='bookwrapper'>
            <div className='hero-card'>
              <div className='hero-card-wrapper'>
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

export default BookRotator