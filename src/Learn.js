import React from 'react'
import learnimg from './images/crypto.png'
import Footer from './Footer'
import './Learn.css'
import img3 from './images/Group 28.svg'

const Learn = () => {
  return (
    <div>
      <div className='learn-page pt-5'>
        <div className='container pt-5 pb-5'>
          <div className='h1 text-center mt-5'>
            Learn More About CryptoCurrency
          </div>
          <div className='text-center mt-5'>
            <img src={learnimg} alt="" className='img-fluid' width={900} style={{borderRadius: 50}}/>
          </div>
          <div className='mt-5 h2'>
            What Is Cryptocurrency?
          </div>
          <div className='mt-2 fs-5 learn-text'>
            A cryptocurrency is a digital or virtual currency that is secured by cryptography, which makes it nearly impossible to counterfeit or double-spend. Many cryptocurrencies are decentralized networks based on blockchain technology—a distributed ledger enforced by a disparate network of computers. A defining feature of cryptocurrencies is that they are generally not issued by any central authority, rendering them theoretically immune to government interference or manipulation.
          </div>
          <div className='h2 mt-5'>Key Takeaways</div>
          <div className='mt-3 fs-5 learn-text'>
            <ul>
              <li>
              A cryptocurrency is a form of digital asset based on a network that is distributed across a large number of computers. This decentralized structure allows them to exist outside the control of governments and central authorities.
              </li>
              <li className='mt-3'>
              Experts believe that blockchain and related technology will disrupt many industries, including finance and law.
              </li>
              <li className='mt-3'>
              The advantages of cryptocurrencies include cheaper and faster money transfers and decentralized systems that do not collapse at a single point of failure.
              </li>
              <li className='mt-3'>
              The disadvantages of cryptocurrencies include their price volatility, high energy consumption for mining activities, and use in criminal activities.
              </li>
            </ul>
          </div>
          <div className='mt-5'>
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
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Learn