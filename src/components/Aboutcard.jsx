import React from 'react'
import Aboutimg from '../assets/about.png'

const Aboutcard = () => {
  return (
    <>
    <div className="about-card-design">
            <div className="about-card-img">
              <img src={Aboutimg} alt="" />
              <div className="about-heading">
                <h4>Denis Zakerburg</h4>
                <p>Marketing Management Remmi</p>
              </div>
            </div>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration .</p>
          </div>
    </>
  )
}

export default Aboutcard
