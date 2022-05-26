import React from 'react'
import img3 from './images/Group 28.svg'
import { Link } from 'react-router-dom'

const Whycrypto = () => {
  return (
    <div className='whycrypto-section pt-5 pb-5'>
        <div className='container'>
            <h1 className='text-center'>Why do people get involved with cryptocurrencies?</h1>
            <div className='row mt-5'>
                <div className='col-lg-4 mb-5'>
                        <div className='box p-5 text-center'>
                        <img src={img3} alt="" className='img-fluid' width={200}/>
                        <h2 className='mt-3'>Easy Mode of Payment</h2>
                        <div className='mt-3'>
                            People can now easily send and receive moeny from anywhere in the world to purchase goods and pay for services.
                        </div>
                    </div>
                </div>
                <div className='col-lg-4 mb-5'>
                    <div className='box text-center p-5'>
                        <img src={img3} alt="" className='img-fluid' width={200}/>
                        <h2 className='mt-3'>Financial Freedom</h2>
                        <div className='mt-3'>
                            Just like the internet no single entity controls the Crypto network which provides users transparency and privacy, which puts you in absolute control of your money.
                        </div>
                    </div>
                    
                </div>
                <div className='col-lg-4 mb-5'>
                    <div className='box text-center p-5'>
                        <img src={img3} alt="" className='img-fluid' width={200}/>
                        <h2 className='mt-3'>Investment</h2>
                        <div className='mt-3'>
                            The constant demand as made Cryptocurrecies a Digital Gold used for alternative store of wealth on long term investments.
                        </div>
                    </div> 
                </div>
            </div>
            <div className='mt-3 text-center'>
                <Link to='/Learn'>
                    <button className='btn btn-outline-secondary learn-link'>
                    Learn More
                    </button>
                </Link>    
            </div>
        </div>
    </div>
  )
}

export default Whycrypto