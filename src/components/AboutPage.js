import React from 'react'
import '../css/aboutpage.css'

const AboutPage = () => {
  return (
    <div className='about-wrapper'>
      <div id='writers'>
        <div className='writer-div'><h2>Our Writers</h2></div>
        <div className='writer-p'><p>Lorem ipsum odor amet, consectetuer adipiscing elit. Lorem auctor ac platea leo hendrerit cursus. Pretium accumsan vivamus montes facilisi ut turpis erat semper. Dis dolor vitae turpis rutrum montes sem quisque. Nascetur taciti est lacus; primis torquent litora.</p></div>
      </div>
      <div id='artists'>
        <div className='artist-p'><p>Lorem ipsum odor amet, consectetuer adipiscing elit. Lorem auctor ac platea leo hendrerit cursus. Pretium accumsan vivamus montes facilisi ut turpis erat semper. Dis dolor vitae turpis rutrum montes sem quisque. Nascetur taciti est lacus; primis torquent litora.</p></div>
        <div className='artist-div'><h2>Our Artists</h2></div>
      </div>
      <div id='writers'>
        <div className='writer-div'><h2>Our Quality</h2></div>
        <div className='writer-p'><p>Lorem ipsum odor amet, consectetuer adipiscing elit. Lorem auctor ac platea leo hendrerit cursus. Pretium accumsan vivamus montes facilisi ut turpis erat semper. Dis dolor vitae turpis rutrum montes sem quisque. Nascetur taciti est lacus; primis torquent litora.</p></div>
      </div>
    </div>
  )
}

export default AboutPage