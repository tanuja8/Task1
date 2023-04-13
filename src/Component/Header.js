import React from 'react'
import './Style.css'
import logo from "./Image/logo.png"
export default function Header() {
  return (
    <div className='header-section px-4'>
      <nav className="navbar navbar-expand-lg ">
        <img src={logo} alt="" width="30" height="24" className="d-inline-block align-text-top mr-3" />
        <a className="navbar-brand text-white" href="#">Hourglass</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Product</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Resources</a>
            </li>

          </ul>
          <li className="nav-item">
            <a className="nav-link" href="#">Support</a>
          </li>
          <li className="nav-item">
            <a id='talk' className="nav-link" href="#">Talk to sales</a>
          </li>
        </div>
      </nav>
    </div>


  )
}
