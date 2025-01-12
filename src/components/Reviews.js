import '../css/review.css'
import React from 'react'
import { Link } from "react-router-dom";
// import secondaryShapes from '../imgFolder/secondary_shapes.png'
import reviewOne from '../imgFolder/review_one.png'
import reviewTwo from '../imgFolder/review_two.png'
import reviewThree from '../imgFolder/review_three.png'

const Reviews = () => {
  return (
    <div className='reviews'>
      <div className='reviews-wrapper'>
        <div className='review-logo-text'>
          <p>What’s your Storyline?</p>
        </div>
        <div className='review-card-wrapper'>
          <div className='review-card'>
            <img className='review-img' alt='review-one-image' src={reviewOne} />
            <div className='review-text-wrapper'>
              <span><h1>“All the best books!”</h1></span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor varius lobortis. In hac habitasse platea dictumst. Curabitur id porta risus. Vestibulum faucibus.</p>
              <p id='italics'><i>Jane Doe, 5 year subscriber</i></p>
            </div>
          </div>

          <div className='review-card'>
            <img className='review-img' alt='review-two-image' src={reviewTwo} />
            <div className='review-text-wrapper'>
              <span><h1>“Love my Storyline Scifi Box!”</h1></span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor varius lobortis. In hac habitasse platea dictumst. Curabitur id porta risus. Vestibulum faucibus.</p>
              <p id='italics'><i>Jane Doe, 5 year subscriber</i></p>
            </div>
          </div>

          <div className='review-card'>
            <img className='review-img' alt='review-three-image' src={reviewThree} />
            <div className='review-text-wrapper'>
              <span><h1>“Amazing lineup!”</h1></span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor varius lobortis. In hac habitasse platea dictumst. Curabitur id porta risus. Vestibulum faucibus.</p>
              <p id='italics'><i>Jane Doe, 5 year subscriber</i></p>
            </div>
          </div>
        </div>
      <div className='review-final'>
        <p>Excited? So are we!</p>
        <Link to='/shop#top'><button className='primary-btn'>Get Started</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Reviews