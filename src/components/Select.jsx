import React from 'react'
import Title from './Title'
import Pera from './Pera'

const Select = () => {
  return (
    <>
    <div className="select">
      <div className="container">
        <div className="select-main">
          <div className="select-content">
          <Title titletext="Selected works"/>
          <Pera peratext="We are convinced that aesthetics leads to a form of harmony and provides well-being."/>
        </div>
        <div className="position">
          <div className="select1">
            <div className="position-content">
              <h4>01.Fresh and care (Grocery store)</h4>
            </div>
          </div>
          <div className="select2"><div className="position-content">
              <h4>01.Fresh and care (Grocery store)</h4>
            </div></div>
          <div className="select3"><div className="position-content">
              <h4>01.Fresh and care (Grocery store)</h4>
            </div></div>
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Select
