import React from 'react'
import '../css/midsection.css'
import logoImg from '../imgFolder/logo.png'

const MidSection = () => {
  return (
    <div className='mid-wrapper'>
      <h1 className='mid-logo-text'>Rare covers, rare selection</h1>
      <h3 className='mid-h3-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor varius lobortis. In hac habitasse platea dictumst. Curabitur id porta risus. Vestibulum faucibus.</h3>
      <img className='logo-img' src={logoImg} />
    </div>
  )
}

export default MidSection