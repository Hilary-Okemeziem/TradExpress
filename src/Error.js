import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

const Error = () => {
  return (
    <div>
      <div className=' pt-5 pb-5 text-center' style={{backgroundColor: "#f2f2f2"}}>
        <div className='container pt-5 pb-5'>
          <h1 className='mt-5'>404 ERROR</h1>
          <h5 className='mt-3'>Page not found</h5>
          <p className='mt-3'>To return to the Home page</p>
          <p>Click <Link to='/' style={{color: "#7c20bf"}}>HERE</Link></p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Error