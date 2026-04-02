import React from 'react'

const Button = ({ buttontext, type }) => {
  return (
    <div>
      <button className="btn">{buttontext}</button>
    </div>
  )
}

export default Button
