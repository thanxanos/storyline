import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import '../css/loginsignup.css'

const SubscribeModal = (props) => {
  return (
    <div className='subscribe-full'>
      <div className='subscribe-wrapper'>
          <button 
            onClick={()=> props.setOpenPopup(false)}
            className="sub-close-btn">
              <FontAwesomeIcon icon={faX} />
          </button>
          <h2>Thank you for subscribing!</h2>
      </div>
    </div>
  )
}

export default SubscribeModal