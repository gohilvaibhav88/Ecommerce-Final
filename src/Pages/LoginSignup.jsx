import React from 'react'
import './CSS/LoginSignup.css'

const loginSignup = () => {
  return (
    <div className="login-signup">
      <div className="loginsignup-conatiner">
        <h1>SignUp</h1>
        <div className="container-fields">
            <input type="text" placeholder='Enter your name' />
            <input type="email" placeholder='Enter Email' />
            <input type="password" placeholder='Enter Password' />
        </div>
        <button >Continue</button>
        <div className="loginsignup-login">Already have an account? <span>Login</span>
        </div>
        <div className="agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing you agree our terms and conditions.</p>
        </div>
      </div>
      
    </div>
  )
}

export default loginSignup
