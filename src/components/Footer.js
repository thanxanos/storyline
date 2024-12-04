import '../css/footer.css'
import { Link } from "react-router-dom";
import React from 'react'

const Footer = () => {
  return (
    <div className='footer-column'>
      <div className='footer-wrapper'>
        <div className='customer-wrapper'>
          <h2>Customers</h2>
          <Link to='/contact'>
            <button className='secondary-btn'>FAQ</button></Link>
          <Link to='/contact'>
            <button className='secondary-btn'>Customer Support</button>
          </Link>
          <Link to='/contact'>
            <button className='secondary-btn'>Terms of Service</button>
          </Link>
        </div>

        <div className='book-wrapper'>
          <h2>Books</h2>
          <Link to='/about'>
            <button className='secondary-btn'>Our Writers</button></Link>
          <Link to='/about'>
            <button className='secondary-btn'>Our Artists</button></Link>
          <Link to='/shop'>
            <button className='secondary-btn'>Past Editions</button>
          </Link>
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