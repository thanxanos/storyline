import React from 'react';
import BookRotator from './LeftLogo.js'
import MidSection from './MidSection.js'
import Reviews from './Reviews.js'
import BookSelection from './BookSelection.js'

const Landing = () => {
  return (
    <div>
      <BookRotator />
      <MidSection />
      <BookSelection />
      <Reviews />
    </div>
  )
}

export default Landing