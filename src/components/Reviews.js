import '../css/review.css'
import React from 'react'
import secondaryShapes from '../imgFolder/secondary_shapes.png'

const Reviews = () => {
  return (
    <div className='reviews-wrapper'>
      <div className='review-logo-text'>
        <p>What’s your Storyline?</p>
      </div>
      <div className='review-card-wrapper'>
        <div className='review-card'>
        </div>

        <div className='review-card'>
        </div>

        <div className='review-card'>
        </div>
      </div>
    <div className='review-final'><p>Excited? So are we!</p><button className='primary-btn'>Get Started</button></div>
    {/* <img className='secondary-shapes' src={secondaryShapes} /> */}
    </div>
  )
}

export default Reviews