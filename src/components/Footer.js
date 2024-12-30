import '../css/footer.css'
import { Link } from 'react-scroll';
import { HashLink } from 'react-router-hash-link';
import React from 'react'

const Footer = () => {
  const element = document.getElementById("shop/#shop-wrapper");



  return (
    <div className='footer-column'>
      <div className='footer-wrapper'>
        <div className='customer-wrapper'>
          <h2>Customers</h2>
          <HashLink to='/contact#faq'>
            <button className='secondary-btn'>FAQ</button></HashLink>
          <HashLink to='/contact#customer-service'>
            <button className='secondary-btn'>Customer Support</button>
          </HashLink>
          <HashLink to='/contact#tos'>
            <button className='secondary-btn'>Terms of Service</button>
          </HashLink>
        </div>

        <div className='book-wrapper'>
          <h2>Books</h2>
          <HashLink to='/about#writers'>
            <button className='secondary-btn'>Our Writers</button></HashLink>
          <HashLink to='/about#artists'>
            <button className='secondary-btn'>Our Artists</button></HashLink>
          <HashLink to="/shop#shop">
            <button className='secondary-btn'>Past Editions</button></HashLink>
        </div>

        <div className='newsletter-wrapper'>
          <h2>Sign Up for our Newsletter</h2>
          <form>
            <input type='text' placeholder='Your email' className='email-input' />
            <button className='tertiary-btn'>SUBSCRIBE </button>
          </form>
        </div>
      </div>
      <div className='attribute'>
          <a href="https://www.flaticon.com/authors/upnow-graphic" title="icons">Icons created by Upnow Graphic - Flaticon</a>
          <p><a href="https://www.flaticon.com/free-stickers/reading" title="reading stickers">Reading sticker created by Stickers - Flaticon</a></p>
        </div>
    </div>
  )
}

export default Footer