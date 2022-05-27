import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <div>
      <div className='login-section pt-5 pb-5'>
        <div className='container pt-5'>
          <div className='login-box mt-3 d-block m-auto p-5'>
            <h2 className='text-center'>Welcome Back!</h2>

            <div className='mt-5'>
              <form action="">
                <div className='mt-4'>
                  <input type="text" class="form-control" placeholder="Username" aria-label="First name"/>
                </div>
                <div className='mt-5'>
                  <input type="password" class="form-control" placeholder="Password" aria-label="First name"/>  
                </div>

                <div class="form-check mt-3">
                  <input class="form-check-input" type="checkbox" id="autoSizingCheck"/>
                  <label class="form-check-label" for="autoSizingCheck">
                  Remember me
                </label>
                <a href="#" className='forgot-password' >forgot password?</a>
              </div>
              </form>

              <div className='mt-5'>
                  <button className='btn btn login-btn text-white'>Log In</button>
              </div>

              <div className='mt-4 text-center'>
                <small>New User?</small>
                <Link to='/Started' className='text-decoration-none login-link'>
                  Click here
                </Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login