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
        <div className="box-wrapper">
          <div id="fantasy">
            <div className="box-desc">
              <h3>Fantasy</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor varius lobortis.</p>
              <button className="primary-btn">Add to cart</button>
            </div>
          </div>
          <div id="romance">
            <div className="box-desc">
              <h3>Romance</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor varius lobortis.</p>
              <button className="primary-btn">Add to cart</button>
            </div>
          </div>
          <div id="science-fiction">
            <div className="box-desc">
              <h3>Science Fiction</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor varius lobortis.</p>
              <button className="primary-btn">Add to cart</button>
            </div>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default BoxPage