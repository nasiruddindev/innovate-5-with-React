import React from 'react'
import Title from './Title'
import Pera from './Pera'

const Work = () => {
  const showText=()=>{
    let increment = document.querySelector(".button1")
    let decrement = document.querySelector(".button2")
    let animation = document.querySelector(".animation")
    increment.style.diplay="none"
    decrement.style.diplay="block"
    animation.style.diplay="block"
  }
  return (
    <>
      <div className="work" id='portfolio'>
        <div className="container">
          <div className="work-main">
            <div className="work-img"></div>
            <div className="work-content">
              <Title titletext="What We Do"/>
              <Pera type={true} peratext="We are an award-winning digital creative studio from London, in the business of creating unforgettable interactive experiences."/>
              <div className='animation-box'>
                <div className="aniTitle" onClick={showText}>
                  <h5>Understand whole customer story</h5>
                  <button className='button1'>+</button>
                  <button className='button2'> -</button>
                </div>
                <p className='animation'>
                    Hub gives you incomparable insight into what your customers are perusing, clicking, and craving.
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Work
