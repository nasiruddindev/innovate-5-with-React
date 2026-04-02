import React from 'react'

const Card = ({cardimg,cardtitle,}) => {
  return (
    <>
    <div className="card">
      <img src={cardimg} alt="" />
      <h4>{cardtitle}</h4>

    </div>
    </>
  )
}

export default Card
