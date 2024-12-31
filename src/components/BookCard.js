import React from 'react'
import "../css/bookcard.css";

const BookCard = ({bookInfo}) => {
  return (
    <div className='book-card-wrapper'> 
      <div key={bookInfo.id} className='book-card'>
        <div className='internal-book-wrapper'>
        <img src={bookInfo.image_url}/>
        <p><b>{bookInfo.title}</b></p>
        <p>by {bookInfo.authors}</p>
        <button id="book-btn" className="primary-btn">Add to cart</button>
        </div>
      </div>
  </div>
  )
}

export default BookCard