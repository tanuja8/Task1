import React from 'react'
import './Style.css'
import logo from "./Image/logo.png"
export default function Footer() {
    return (
        <div>
            <div className='fotterarea pb-5'>
                <div className='row px-5 mx-3'>
                    <div className='col-lg-8'>
                        <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top mr-3" />
                        < span >Hourglass</span>
                    </div>
                    <div className='col-lg-4'>
                        <p>Stay uo to date</p>
                        <form className="d-flex">
                            <input type='email' placeholder='Enter your email'></input>
                            <button class="btn  sbtn" type="submit">Subscribe</button>
                        </form>
                    </div>
                    <div className='row '>
                        <div className='col-lg-12'>
                            <ul id="menu" className="float-md-right ">
                                <li><a href="">Overview</a></li>
                                <li><a href="">Pricing</a></li>
                                <li><a href="">Careers</a></li>
                                <li><a href="">Help</a></li>
                                <li><a href="">Privacy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='endfooter py-5'>
                    <div className='row px-5 mx-3'>
                        <div className='col-lg-6'>
                                © 2077 Fake Company. All rights reserved
                        </div>
                        <div className='col-lg-6'>
                        <ul id="menu" className="float-md-right ">
                                <li><a href="">Term</a></li>
                                <li><a href="">Privacy</a></li>
                                <li><a href="">Cookies</a></li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
