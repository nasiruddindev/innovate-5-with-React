import React from 'react'
import Fotterimg from '../assets/fotter.png'

const Fotter = () => {
  return (
    <>
    <div className="fotter">
      <div className="container">
        <div className="fotter-content">
          <div className="fotter-first">
            <img src={Fotterimg} alt="" />
            <p>Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
          </div>
          <div className="fotter-sec">
            <h4>Features</h4>
            <p>Home</p>
            <p>About</p>
            <p>Benifit</p>
            <p>Pricing</p>
            <p>Blog</p>
          </div>
          <div className="fotter-third">
            <h4>Products</h4>
            <p>Task Management</p>
            <p>Company Growth</p>
            <p>Time Tracking</p>
          </div>
          <div className="fotter-four">
            <h4>Support</h4>
            <p>Customer Service</p>
            <p>Accessbility</p>
            <p>Contact us</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Fotter
