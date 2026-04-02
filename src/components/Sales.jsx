import React from 'react'
import Title from '../Title'
import Card from './Card'
import Card1 from '../assets/Card1.png'

const Sales = () => {
  return (
    <>
      <div className="sales">
        <div className="container">
          <Title titletext="We help you to go online and increase your sales" />
          <div className="sales-card">
            <div>
              <Card cardimg={Card1} cardtitle="E-commerce consulting" cardtext="Better eCommerce businesses by creating joyful digital ideas and experiences that connect the  hearts of their consumers."/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sales
