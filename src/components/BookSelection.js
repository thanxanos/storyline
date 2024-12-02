import React from 'react'
import '../css/bookselection.css'
import bookImg from '../imgFolder/book.png'
import romanceImg from '../imgFolder/wedding-invitation.png'
import scienceImg from '../imgFolder/science.png'
import magicpotionImg from '../imgFolder/magic-potion.png'

const BookSelection = () => {
  return (
    <div className='book-selection-wrapper'>
      <div className='card'>
          <div className='card-wrapper'>
            <img className='book-img' src={romanceImg} />
            <h3 className='card-title'>Lorem ipsum dolor</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor varius lobortis. In hac habitasse platea dictumst. Curabitur id porta risus. Vestibulum faucibus.</p>
            <button type="submit" className='primary-btn'>Read More</button>
          </div>
      </div>
      <div className='card'>
          <div className='card-wrapper'>
            <img className='book-img' src={scienceImg} />
            <h3 className='card-title'>Lorem ipsum dolor</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor varius lobortis. In hac habitasse platea dictumst. Curabitur id porta risus. Vestibulum faucibus.</p>
            <button type="submit" className='primary-btn'>Read More</button>
          </div>
      </div>
      <div className='card'>
          <div className='card-wrapper'>
            <img className='book-img' src={magicpotionImg} />
            <h3 className='card-title'>Lorem ipsum dolor</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor varius lobortis. In hac habitasse platea dictumst. Curabitur id porta risus. Vestibulum faucibus.</p>
            <button type="submit" className='primary-btn'>Read More</button>
          </div>
      </div>
    </div>

  )
}

export default BookSelection