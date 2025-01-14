import React from 'react'
import '../css/midsection.css'
import logoImg from '../imgFolder/logo.png'

const MidSection = () => {
  return (
    <div className='mid-wrapper'>
      <h1 data-aos-duration="800" data-aos="fade-up"className='mid-logo-text'>Rare covers, rare selection</h1>
      <h3 data-aos-duration="800" data-aos="fade-up" className='mid-h3-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor varius lobortis. In hac habitasse platea dictumst. Curabitur id porta risus. Vestibulum faucibus.</h3>
      <img data-aos="fade-up" delay="200" data-aos-duration="1000" className='logo-img' alt='logo-img' src={logoImg} />
    </div>
  )
}

export default MidSection