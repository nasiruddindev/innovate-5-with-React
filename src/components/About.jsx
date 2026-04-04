import React from 'react'
import Title from './Title'
import Aboutcard from './Aboutcard'


const About = () => {
  return (
    <>
    <div className="about">
      <div className="container">
        <Title titletext="What Pepople Thinks About Us"/>
        <div className="about-card">
          <Aboutcard/>
          <Aboutcard/>
          <Aboutcard/>
        </div>
      </div>
    </div>
    </>
  )
}

export default About
