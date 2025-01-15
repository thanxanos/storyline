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
        <div data-aos="fade-down" delay="150" data-aos-duration="1100" className='review-logo-text'>
          <p>What’s your Storyline?</p>
        </div>
        <div className='review-card-wrapper'>
          <div data-aos="fade-down" delay="200" data-aos-duration="1000" className='review-card'>
            <img className='review-img' alt='review-one-image' src={reviewOne} />
            <div className='review-text-wrapper'>
              <span><h1>“All the best books!”</h1></span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor varius lobortis. In hac habitasse platea dictumst. Curabitur id porta risus. Vestibulum faucibus.</p>
              <p id='italics'><i>Jane Doe, 5 year subscriber</i></p>
            </div>
          </div>

          <div data-aos="fade-down" delay="200" data-aos-duration="1000" className='review-card'>
            <img className='review-img' alt='review-two-image' src={reviewTwo} />
            <div className='review-text-wrapper'>
              <span><h1>“Love my Storyline Scifi Box!”</h1></span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor varius lobortis. In hac habitasse platea dictumst. Curabitur id porta risus. Vestibulum faucibus.</p>
              <p id='italics'><i>Jane Doe, 5 year subscriber</i></p>
            </div>
          </div>

          <div data-aos="fade-down" delay="200" data-aos-duration="1000" className='review-card'>
            <img className='review-img' alt='review-three-image' src={reviewThree} />
            <div className='review-text-wrapper'>
              <span><h1>“Amazing lineup!”</h1></span>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor varius lobortis. In hac habitasse platea dictumst. Curabitur id porta risus. Vestibulum faucibus.</p>
              <p id='italics'><i>Jane Doe, 5 year subscriber</i></p>
            </div>
          </div>
        </div>
      <div className='review-final'>
        <p data-aos="fade-up" delay="150" data-aos-duration="1000">Excited? So are we!</p>
        <Link data-aos="fade-up" delay="150" data-aos-duration="1000" to='/boxes#top'><button className='primary-btn'>Get Started</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Reviews