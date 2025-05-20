import React from 'react'
import '../css/boxpage.css'
import bookImg from '../imgFolder/bookboximg.jpg'

function BoxPage() {
  return (
    <div id="top">
      <div className='bookbox-wrapper'>
        <div className='bookbox-desc'>
          <img className="bookbox" alt='book-example' src={bookImg} />
          <p>At Storyline, our goal is to deliver high quality, newly designed books to our subscribers. You can choose between one book box or all three! Miss a previous release? Our shop page has all prior released books available to purchase.</p>
        </div>
        <div><h1>Book Box Subscriptions</h1></div>
        <div id="fantasy">Fantasy</div>
        <div id="romance">Romance</div>
        <div id="science-fiction">Science Fiction</div> 
      </div>
    </div>
  )
}

export default BoxPage