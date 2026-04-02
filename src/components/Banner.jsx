import React from 'react'
import Pera from './Pera'
import Button from './Button'
import Bannerimg from '../assets/banner.png'

const Banner = () => {
  return (
    <>
    <div className="banner">
      <div className="container">
        <div className="banner-main">
          <div className="banner-content">
            <h1>We build E-commerce solutions your business</h1>
            <Pera peratext="Use customer data to bulid great and solid Product experience that convert. Digital marketring developmet has changed the way brands and business use technology for marketing"/>
            <div className='banner-btn'>
              <Button buttontext="Contact Us"/>
              <Button buttontext="Learn More"/>
            </div>
          </div>
          <div className="banner-img">
            <img src={Bannerimg} alt="" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Banner
