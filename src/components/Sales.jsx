import React from 'react'
import Title from '../Title'
import Card from './Card'
import Card1 from '../assets/Card1.png'
import Card2 from '../assets/Card2.png'
import Card3 from '../assets/Card3.png'

const Sales = () => {
  return (
    <>
      <div className="sales">
        <div className="container">
          <Title titletext="We help you to go online and increase your sales" />
          <div className="sales-card">
            <div>
              <Card design="card" cardimg={Card1} cardtitle="E-commerce consulting" cardtext="Better eCommerce businesses by creating joyful digital ideas and experiences that connect the  hearts of their consumers."/>
            </div>
            <div>
              <Card design="card" cardimg={Card2} cardtitle="Branding Strategy" cardtext="Brands are ideas that keep growing. We think of them like machine learning. When you build a brand, you build in the power."/>
            </div>
            <div>
              <Card design="card" cardimg={Card3} cardtitle="Analyse and Optimise" cardtext="With features that let you tag and identify every action, you can see the whole story behind every unique customer."/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sales
