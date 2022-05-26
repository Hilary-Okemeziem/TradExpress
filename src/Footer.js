import React from 'react'
import logo from './images/Group 79.svg'
import copyright from './images/Group 78.svg'

const Footer = () => {
  return (
    <div className='footer-section pt-5'>
      <div className='container'>
        <div className='row pb-5'>
          <div className='col-lg'>
            <h2>Products</h2>
              <div>Bitcoin</div>
              <div>Alt</div>
              <div>Fiat</div>
              <div>Refil</div>
              <div>P2P</div>

          </div>
          <div className='col-lg mt-4 mt-lg-0'>
            <h2>Learn</h2>
              <div>Blog</div>
              <div>Help Center</div>

          </div>
          <div className='col-lg mt-4 mt-lg-0'>
            <h2>Contact</h2>
              <div>hello@tradeexpress.com</div>
              <div>support@tradeexpress.com</div>
              <div><img src={logo} alt="" /></div>

          </div>
          <div className='col-lg mt-4 mt-lg-0'>
            <h2>Company</h2>
              <div>About Us</div>
              <div>Careers</div>
              <div>Rates</div>
              <div>Mobile</div>
          </div>
          <div className='col-lg mt-4 mt-lg-0'>
            <h2>Legal</h2>
              <div>Privacy Policy</div>
              <div>Anti-Money Laundering</div>
              <div>Terms and Conditions</div>
          </div>
        </div>
      </div>
      <div className='copyright-section text-center pt-3 pb-3'>
          <img src={copyright} alt="" width={370}/>
        </div>

    </div>
  )
}

export default Footer