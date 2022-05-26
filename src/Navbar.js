import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import navlogo from './images/TradExpress.svg'
import './Navbar.css'


const Navbar = () => {
  return (
    <div>
        <nav class="navbar nav navbar-expand-lg navbar-light position-fixed w-100">
            <div class="container">
                <Link to='/' class="navbar-brand">
                    <img src={navlogo} alt="" />
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav text-center text-md-start me-5">
                        <li class="nav-item">
                            <Link to='/Instant' class="nav-link active text-white mt-1 me-0 me-lg-4" aria-current="page">
                                Instant Buy/Sell
                            </Link>    
                        </li>
                        <li class="nav-item">
                            <Link to='/Learn' class="nav-link active text-white mt-1 me-0 me-lg-4" aria-current="page">
                                Learn
                            </Link>
                        </li>
                        <li class="nav-item">
                            <button className=' btn btn-outline-light btn-sm me-0 me-lg-4 mt-2 mt-lg-0 nav-btn'>
                                <Link to='/Login' class="nav-link active" aria-current="page">
                                    Log In
                                </Link>
                            </button>   
                        </li> 
                        <li class="nav-item">
                            <button className='btn btn-light btn-sm nav-btn mt-3 mt-lg-0'>
                                <Link to='/Started' class="nav-link active" aria-current="page">
                                    Get Started
                                </Link>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <Outlet/>

    </div>
  )
}

export default Navbar