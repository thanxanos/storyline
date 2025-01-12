import React from 'react'
import bookLogIn from '../imgFolder/book_login.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import '../css/loginsignup.css'

const LoginSignup = (props) => {
  return (
    <div className='login-full'>
      <div className='login-wrapper'>
        <div className='login-card'>
          <button 
            onClick={()=> props.setOpenPopup(false)}
            className="close-btn">
              <FontAwesomeIcon icon={faX} />
          </button>
          <img className='book-login-img' alt='book-logo-image' src={bookLogIn} />
          <h2>Your next book awaits!</h2>
          <form>
          <input type='text' placeholder='email' className='login-email-input' />
          <input type='text' placeholder='password' className='login-password-input' />
          <button type='submit' className='primary-btn'>Log in</button>
          <p><b>No account? <a href="/login">Register</a></b></p>
          </form>
        </div>
      </div>
    </div>
  ) 
}

export default LoginSignup