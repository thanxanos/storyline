import '../css/footer.css'
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import SubscribeModal from './SubscribeModal';

const Footer = () => {
    const [openPopup, setOpenPopup] = useState(false)
  
  const {hash, key} = useLocation()
  useEffect(()=>{
      if(hash){
        const targetElement = document.getElementById(hash.slice(1))
          targetElement?.scrollIntoView({behavior: 'smooth'})
      }
  }, [key, hash])

  return (
    <div className='footer-column'>
      <div className='footer-wrapper'>
        <div className='customer-wrapper'>
          <h2>Customers</h2>
          <Link 
          to='/contact#faq'
          >
            <button className='secondary-btn'>FAQ</button></Link>
          <Link to='/contact#customer-service'>
            <button className='secondary-btn'>Customer Support</button>
          </Link>
          <Link to='/contact#tos'>
            <button className='secondary-btn'>Terms of Service</button>
          </Link>
        </div>

        <div className='book-wrapper'>
          <h2>Books</h2>
          <Link to='/about#writers'>
            <button className='secondary-btn'>Our Writers</button></Link>
          <Link to='/about#artists'>
            <button className='secondary-btn'>Our Artists</button></Link>
          <Link to="/shop#shop">
            <button className='secondary-btn'>Past Editions</button></Link>
        </div>

        <div className='newsletter-wrapper' id='newsletter-wrapper'>
          <h2>Sign Up for our Newsletter</h2>
          <div className='sub-form'>
            <input type='text' placeholder='Your email' className='email-input' />
            <button 
            className='tertiary-btn'
            onClick={() => setOpenPopup(true)}
            >SUBSCRIBE </button>
          </div>
        </div>
      </div>
      <div className='attribute'>
          <a href="https://www.flaticon.com/authors/upnow-graphic" title="icons">Icons created by Upnow Graphic - Flaticon</a>
          <p><a href="https://www.flaticon.com/free-stickers/reading" title="reading stickers">Reading sticker created by Stickers - Flaticon</a></p>
        </div>
        {
        openPopup && 
        <SubscribeModal openPopup={openPopup} setOpenPopup={setOpenPopup} />
      }
    </div>
  )
}

export default Footer