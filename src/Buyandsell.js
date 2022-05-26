import React from 'react'
import img3 from './images/Group 28.svg'
import img4 from './images/Group 52.svg'
import './Home.css'

const Buyandsell = () => {
  return (
    <div className='buysell-section pt-5 pb-5'>
        <div className='container'>
            <h1 className='text-center'>Buy and Sell your Cryptocurrency in 3 simple steps</h1>

            <div className="row text-center text-md-start mt-5 pt-5">
                <div className="col-md-7 mt-5 pt-0 pt-md-5">
                    <div className='d-inline-flex mb-3'>
                        <div className='number'>1</div>
                        <h1 className="fw-bold">Create a free Account</h1>
                    </div>
                    
                    <div>Sign up for your free TradExpress Wallet on web, iOS, or Android devices and follow our easy process to set up your profile.</div>
                </div>

                <div className="col-md-5 mt-5 mt-lg-0">
                    <img src={img4} alt="" className='img-fluid' />
                    
                </div>  
            </div>

            <div className="row text-center text-md-start mt-5 deposit">
                <div className="col-md-5 mt-5 mt-lg-0">
                    <img src={img3} alt="" className='img-fluid'/>
                </div>

                <div className="col-md-7 mt-5">
                    <div className='d-inline-flex mb-3'>
                        <div className='number'>2</div>
                        <h1 className="fw-bold">Deposit</h1>
                    </div>
                    <div>Choose your preferred deposit option like bank transfer, credit/debit card or send digital asset directly to your wallet for easy funding/withdrawal.</div>
                </div> 
            </div>

            <div className="row text-center text-md-start mt-5">
                <div className="col-md-7 mt-5 pt-0 pt-md-5">
                    <div className='d-inline-flex mb-3'>
                        <div className='number'>3</div>
                        <h1 className="fw-bold">Buy/ Sell Crypto</h1>
                    </div>
                    <div>Buy BTC, USDT, ETH, LTC, XRP, DOGE and securely store it in your wallet or send it easily to friends and family.</div>
                </div>
                    
                <div className="col-md-5 mt-5 mt-lg-0">
                    <img src={img4} alt="" className='img-fluid'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Buyandsell