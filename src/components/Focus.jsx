import React from 'react'
import Card from './Card'
import Focus1 from '../assets/Focus1.png'
import Focus2 from '../assets/Focus2.png'
import Focus3 from '../assets/Focus3.png'

const Focus = () => {
  return (
    <>
    <div className="focus">
      <div className="container">
        <div className="focus-main">
          <div className='focus-box1'></div>
          <div>
            <Card design="focus-card" cardimg={Focus1} cardtitle="Make your business visible online" cardtext="Open an online store and become an international seller. Your customers will enjoy shopping online!"/>
          </div>
        </div>
        <div className="focus-main">
          <div>
            <Card design="focus-card2" cardimg={Focus2} cardtitle="Make your eCommerce business stand out" cardtext="We craft premium digital work for web, mobile and experiential with creative agencies and global brands alike – putting passion, pride and plenty of elbow grease into everything we do."/>
          </div>
          <div className='focus-box2'></div>
        </div>
        <div className="focus-main">
          <div className='focus-box3'></div>
          <div>
            <Card design="focus-card" cardimg={Focus3} cardtitle="Grow with your audience" cardtext="We marry creative insight with data to deliver successful user experiences. Through a process of iteration and prototyping, we design interfaces that bring joy to people."/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Focus
