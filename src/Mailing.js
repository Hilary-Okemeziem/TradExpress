import React from 'react'
import './Mailing.css'
import mailimg from'./images/mailing.svg'
import { Link } from 'react-router-dom'

const Mailing = () => {
  return (
    <div>
        <div className='mailing-section pt-5 pb-5'>
            <div className='container pt-5'>
                <div className='mailing-box mt-3 d-block m-auto p-5'>
                    <div className='text-center'>
                        <div className='display-6 text-secondary'>You're Almost In!</div>
                        <div className='h1 mt-3'>Welcome Iretiayo</div>
                        <div className='mt-2'>
                            <img src={mailimg} alt="" className='img-fluid' />
                        </div>
                        <div className='mt-3'>
                            <small>An activation link has been sent to <a href="#" className='mail-link'>Ireti4tech@gmail.com</a> Please click on the link to verify your email and <br /> activate your TradExpress account.</small>
                        </div>
                        <div className='mt-5'>
                            <Link to='/Login'>
                                <button className='btn btn mail-btn'>Continue</button>
                            </Link>
                        </div>
                        <div className='mt-2'>
                            <small>Didn't get an email? Kindly click <a href="#" className='mail-link'>resend email</a> <br /> Wrong email supplied? <a href="#" className='mail-link'>Edit email address</a></small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mailing