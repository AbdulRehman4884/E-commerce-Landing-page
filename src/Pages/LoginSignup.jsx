import React from 'react'
import './LoginSignup.css'
function LoginSignup() {
  return (
    <div className='loginsignup'>
        <div className="logincontainer">
            <h1>Sign Up</h1>
            <div className="loginfield">
                <input type="text" placeholder='Your Name' />
                <input type="email" placeholder='Your Email' />
                <input type="password" placeholder='Your Password' />
            </div>
            <button>Continue</button>
            <p className="login">Already have an account? <span>Login here</span></p>
            <div className="agree">
              <input type="checkbox" name='' id=''/>
              <p>By Continuing, i agree to the terms of use & privacy policy.</p>
            </div>
        </div>
    </div>
  )
}

export default LoginSignup