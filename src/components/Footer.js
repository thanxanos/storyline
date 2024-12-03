import '../css/footer.css'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer-column'>
      <div className='footer-wrapper'>
        <div className='customer-wrapper'>
          <h2>Customers</h2>
          <button className='secondary-btn'>FAQ</button>
          <button className='secondary-btn'>Customer Support</button>
          <button className='secondary-btn'>Terms of Service</button>
        </div>

        <div className='book-wrapper'>
          <h2>Books</h2>
          <button className='secondary-btn'>Our Writers</button>
          <button className='secondary-btn'>Our Artists</button>
          <button className='secondary-btn'>Past Editions</button>
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
          <a href="https://www.flaticon.com/free-icons/startup" title="startup icons">Startup icons created by Upnow Graphic - Flaticon</a>
          <p><a href="https://www.flaticon.com/free-stickers/reading" title="reading stickers">Reading sticker created by Stickers - Flaticon</a></p>
        </div>
    </div>
  )
}

export default Footer