import React from 'react'
import './Style.css'
import heroimage from "./Image/hero-image.jpg"
import layers from "./Image/company-logo-layer.png"
import sisyphus from "./Image/company-logo-sisyphus.png"
import circools from "./Image/company-logo-circooles.png"
import cotalog from "./Image/company-logo-catalog.png"
import quotient from "./Image/company-logo-quotient.png"
export default function Hero() {
    return (
        <div>
            <div className='hero-area'>
                <div className='row px-5 mx-3'>
                    <div className='col-lg-5'>
                        <h2 >We design physical experiances that create more  happy in the world</h2>
                    </div>
                </div>
                <div className='row px-5 mx-3'>
                    <div className='col-lg-4'>
                        <p className='py-2'>- we're a full-service interior design agency who specialise in simple, useful and beautiful solution for any space</p>
                    </div>
                </div>
                <div className='herobutton'>
                    <div className='row px-5 mx-3'>
                        <div className='col-md-3 '>
                            <button type="button" id="showbtn" className="btn mx-3 px-4">Showreel</button>
                            <button type="button" id='getbtn' className="btn text-white">Get in touch</button>
                        </div>
                    </div>
                </div>
                <div className='image-area'>
                    <div className='row  px-5 mx-3'>
                        <div className=' col-lg-12 hero_image'>
                            <img src={heroimage} alt="" srcset="" />
                        </div>
                    </div>
                </div>
                <div>
                    <div className='row px-5 mx-3'>
                        <div className='col-lg-12'>
                            <p className='text-center pb-3'>We've worked with some great startups</p>
                        </div>
                    </div>
                    <div>
                        <div className='row px-5 mx-3 pb-3'>
                            <div className=' col-md-6 col-sm-6 col-lg-2 '>
                                <img src={layers} alt="" width="80" height="50" className="d-inline-block align-text-top mr-3" />
                            </div>
                            <div className=' col-md-6 col-sm-6 col-lg-2 '>
                                <img src={sisyphus} alt="" width="80" height="50" className="d-inline-block align-text-top mr-3" />
                            </div>
                            <div className=' col-md-6 col-sm-6 col-lg-2 '>
                                <img src={circools} alt="" width="80" height="50" className="d-inline-block align-text-top mr-3" />
                            </div>
                            <div className=' col-md-6 col-sm-6 col-lg-2 '>
                                <img src={cotalog} alt="" width="80" height="50" className="d-inline-block align-text-top mr-3" />
                            </div>
                            <div className=' col-md-6  col-sm-6 col-lg-2 '>
                                <img src={quotient} alt="" width="80" height="50" className="d-inline-block align-text-top mr-3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
