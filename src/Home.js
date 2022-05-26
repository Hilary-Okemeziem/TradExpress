import React from 'react'
import Account from './Account'
import Buyandsell from './Buyandsell'
import Data from './Data'
import Hero from './Hero'
import Review from './Review'
import Whycrypto from './Whycrypto'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Data/>
      <Whycrypto/>
      <Buyandsell/>
      <Account/>
      <Review/>
      <Footer/>
      
    </div>
  )
}

export default Home