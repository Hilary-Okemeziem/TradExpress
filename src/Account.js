import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import img5 from './images/Icon awesome-apple.svg'
import img6 from './images/Group 53.svg'


const Account = () => {
  return (
    <div className='Account-section pt-5 pb-5 text-center'>
        <div className='container'>
            <div className='mt-5 fs-5'>
            Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?
            </div>
            <div className='h2 mt-2'>
            Create your account for free and start trading today!
            </div>
            <div className='mt-5'>
                <Link to='/Started'>
                    <button className='btn btn-lg account-link1 text-white'>
                    Get Started
                    </button>
                </Link>    
            </div>  
            <div className='mt-5'>
                <button className='btn account-link2 d-inline-flex'>
                    <img src={img5} alt="" className='mt-2' />
                    <div className='ms-2' >
                    <small className='small'>Download on the</small>
                    <h5 className='text-start fw-bold'>App Store</h5>
                    </div>
                </button>
                
                <button className='btn account-link2 d-inline-flex ms-2'>
                    <img src={img6} alt="" className='mt-2' />
                    <div className='ms-2' >
                    <small className='small me-5 pe-4'>Get On</small>
                    <h5 className='text-start fw-bold'>Google Play </h5>
                    </div>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Account