import '../css/herosection.css'
import { FaArrowDown } from "react-icons/fa";
import React from 'react'


const HeroSection = () => {
  return (
    <div className='herosection-wrapper'> 
      <div className='text-wrapper'>
        <h1 className='logo-text'>Storyline</h1>
        <h3 className='h3-text'>Fantasy Subscription Box</h3>
        <p className='p-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor varius lobortis. In hac habitasse platea dictumst. Curabitur id porta risus. Vestibulum faucibus.</p>
      </div>
    <button className='arrow-btn'><FaArrowDown /></button>
    </div>
  )
}

export default HeroSection