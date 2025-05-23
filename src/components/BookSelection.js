import React from 'react'
import '../css/bookselection.css'
import { Link } from 'react-router-dom';
import romanceImg from '../imgFolder/wedding-invitation.png'
import scienceImg from '../imgFolder/science.png'
import magicpotionImg from '../imgFolder/magic-potion.png'

const BookSelection = () => {
  return (
      <div className='book-selection-wrapper' id='book-sub'>
        <div data-aos="fade-up" delay="150" data-aos-duration="1200" className='book-animation'>
          <div className='card'>
              <div className='card-wrapper'>
                <img className='book-img' alt='book-fantasy-image' src={magicpotionImg} />
                <p className='card-title'>Fantasy</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor varius lobortis. In hac habitasse platea dictumst. Curabitur id porta risus. Vestibulum faucibus.</p>
                <section className='hover-text'>✨ Hover ✨</section>
                <Link
                to="/boxes#fantasy"
                ><button className='secondary-btn'>Learn More</button></Link>
              </div>
          </div>
          <div className='card'>
              <div className='card-wrapper'>
                <img className='book-img' alt='book-romance-image' src={romanceImg} />
                <p className='card-title'>Romance</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor varius lobortis. In hac habitasse platea dictumst. Curabitur id porta risus. Vestibulum faucibus.</p>
                <section className='hover-text'>✨ Hover ✨</section>
                <Link 
                to="/boxes#romance"
                ><button className='secondary-btn'>Learn More</button></Link>
              </div>
          </div>
          <div className='card'>
              <div className='card-wrapper'>
                <img className='book-img' alt='book-scifi-image' src={scienceImg} />
                <p className='card-title'>Science Fiction</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor varius lobortis. In hac habitasse platea dictumst. Curabitur id porta risus. Vestibulum faucibus.</p>
                <section className='hover-text'>✨ Hover ✨</section>
                <Link
                to="/boxes#science-fiction"
                ><button className='secondary-btn'>Learn More</button></Link>
              </div>
          </div>
        </div>
      </div>
  )
}

export default BookSelection