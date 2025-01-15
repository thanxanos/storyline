import { React, useState } from 'react'
import bookLogIn from '../imgFolder/book_login.png'
import bookRegister from '../imgFolder/book_register.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import '../css/loginsignup.css'

const LoginSignup = (props) => {
  const [showRegister, setShowRegister] = useState(false)

  const registerView = () => {
    return (
      <div className='register-card'>
          <button 
            onClick={()=> props.setOpenPopup(false)}
            className="close-btn">
              <FontAwesomeIcon icon={faX} />
          </button>
          <img className='book-login-img' alt='book-logo-image' src={bookRegister} />
          <h2>Welcome to Storyline!</h2>
          <form>
          <input type='text' placeholder='username' className='login-email-input' />
          <input type='text' placeholder='email' className='login-email-input' />
          <input type='text' placeholder='password' className='login-password-input' />
          <button type='submit' className='primary-btn'>Register</button>
          <p><b>Have an account? <u onClick={() => setShowRegister(false)}>Login</u></b></p>
          </form>
        </div>
    )
  }
  return (
    <div className='login-full'>
      <div className='login-wrapper'>
        {!showRegister ? 
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
          <p><b>No account? <u onClick={() => setShowRegister(true)}>Register</u></b></p>
          </form>
        </div>
        : registerView() }
      </div>
    </div>
  ) 
}

export default LoginSignup