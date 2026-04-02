import React from 'react'
import Listitem from './Listitem'
import Button from './Button'
import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="container">
          <div className="nav-main">
            <div className="img">
              <img src={Logo} alt="" />
            </div>
            <div className="list">
              <ul className="nav-ul">
                <Listitem list="Home" />
                <Listitem list="About" />
                <Listitem list="Service" />
                <Listitem list="Portfolio" />
                <Listitem list="Price" />
                <Listitem list="Blog" />
              </ul>
            </div>
            <div>
              <Button buttontext="Contact Us"/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
