import React from 'react'
import { Link } from 'react-router-dom'
import './Instant.css'


const Buy = () => {
  return (
    <div>
        <div className='instant section pt-5'>
            <div className='container pt-5'>
                <div className='instant-box mt-3 d-block m-auto text-center p-5'>
                    <h2>Buy/Sell Instantly</h2>
                    <div className='mt-4'>
                        <button className='instant-button btn btn-sm'>
                            <Link to='/Buy'>Buy</Link>
                        </button>
                        <button className='instant-button btn btn-sm'>
                            <Link to='/Sell'>Sell</Link>
                        </button>
                    </div>

                    <h1>Buyyyyyyyy</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Buy