import '../css/herosection.css'
import { FaArrowDown } from "react-icons/fa";
import React from 'react'


const HeroSection = () => {
  return (
    <div className='herosection-wrapper'> 
      <div className='text-wrapper'>
        <h1 data-aos="fade-up" delay="80" data-aos-duration="1050" className='logo-text'>Storyline</h1>
        <h3 data-aos="fade-up" delay="150" data-aos-duration="1200" className='h3-text'>Fantasy Subscription Box</h3>
        <p data-aos="fade-up" delay="150" data-aos-duration="1200" className='p-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor varius lobortis. In hac habitasse platea dictumst. Curabitur id porta risus. Vestibulum faucibus.</p>
      </div>

    </div>
  )
}

export default HeroSection