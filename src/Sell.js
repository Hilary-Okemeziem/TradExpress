import React from 'react'
import { Link } from 'react-router-dom'
import './Instant.css'

const Sell = () => {
  return (
    <div>
        <div className='instant section pt-5 pb-5'>
            <div className='container pt-5'>
                <div className='instant-box mt-3 d-block m-auto p-5'>
                    <h2 className='text-center'>Buy/Sell Instantly</h2>
                    <div className='mt-4 btn-all'>
                        <button className='sell-button btn btn-sm'>
                            <Link to='/Buy' className='text-decoration-none text-dark'>Buy</Link>
                        </button>
                        <button className='buy-button btn btn-sm'>
                            <Link to='/Sell' className='text-decoration-none text-dark'>Sell</Link>
                        </button>
                    </div>

                    <div className='mt-4' >
                        <form action="">
                            <div>
                                <label for="inputState" class="form-label text-start"><b>Coin to Sell</b></label>
                                <select id="inputState" class="form-select">
                                <option selected>Bitcoin(BTC)</option>
                                <option>...</option>
                                </select>
                            </div>

                            <div className='mt-5'>
                                <label for="inputState" class="form-label text-start"><b>Currency</b></label>
                                <select id="inputState" class="form-select">
                                <option selected>Naira(NGN)</option>
                                <option>...</option>
                                </select>
                            </div>

                            <div className='mt-5'>
                                <label for="inputAmount" class="form-label"><b>Amount</b></label>
                                <label class="visually-hidden" for="autoSizingInputGroup">Username</label>
                                <div class="input-group">
                                <div class="input-group-text">USD</div>
                                <input type="text" class="form-control" id="autoSizingInputGroup" placeholder="10,000.00"/>
                                </div>
                            </div>
                        </form>

                        <div className='mt-5'>
                            <button className='btn btn buy-btn2'>Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sell