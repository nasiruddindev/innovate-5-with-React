import React from 'react'

const Card = ({design,cardimg,cardtitle,cardtext}) => {
  return (
    <>
    <div className={design}>
      <img src={cardimg} alt="" />
      <h4>{cardtitle}</h4>
      <p>{cardtext}</p>
    </div>
    </>
  )
}

export default Card
