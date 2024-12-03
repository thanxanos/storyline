import React from 'react'
import '../css/loginsignup.css'

const LoginSignup = (props) => {

  return (props.trigger) ? (
    <div className='login-wrapper'>
      <div className='login-card'>
        <button className="close-btn">close</button>
        <p>testing</p>
      </div>
    </div>
  ) : "";
}

export default LoginSignup