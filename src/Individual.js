import React from 'react'
import './Started.css'
import {Link} from 'react-router-dom'

const Individual = () => {
  return (
    <div>
        <div className='started-section pt-5 pb-5'>
            <div className='container pt-5'>
                <div className='started-box mt-3 d-block m-auto p-5'>
                    <h2 className='text-center'>Welcome!</h2>
                    <div className='mt-4 btn-all'>
                        <button className='individual-button btn btn-sm'>
                            <Link to='/Individual' className='text-decoration-none text-dark'>Individual</Link>
                        </button>
                        <button className='business-button btn btn-sm'>
                            <Link to='/Business' className='text-decoration-none text-dark'>Business</Link>
                        </button>
                    </div>

                    <div className='mt-4' >
                        <form action="">
                            <div className='mt-5'>
                                <input type="text" class="form-control" placeholder="Username" aria-label="First name"/>
                            </div>
                            <div className='mt-4'>
                                <input type="text" class="form-control" placeholder="Full Name" aria-label="First name"/>  
                            </div> 
                            <div className='mt-4'>
                                <input type="email" class="form-control" placeholder="Email" aria-label="First name"/>  
                            </div> 
                            <div className='mt-4'>
                                <input type="tel" class="form-control" placeholder="Phone Number" aria-label="First name"/>  
                            </div>
                             <div className='mt-4'>
                                <input type="text" class="form-control" placeholder="Referral Code (optional) " aria-label="First name"/>  
                            </div>  
                        </form>

                        <div className='mt-2'>
                            <small>By clicking the Sign Up button below, you agree to TradExpress <a href="" className='individual-link'>terms and service</a></small>
                        </div>

                        <div className='mt-5'>
                            <Link to='/Mailing'>
                                <button className='btn btn individual-btn2 text-white'>Sign Up</button>
                            </Link>
                        </div>

                        <div className='text-center mt-3'>
                            <small>Already have an account? </small>
                            <Link to='/Login' className='individual-link'> Click here</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Individual