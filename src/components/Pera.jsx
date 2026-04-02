import React from 'react'

const Pera = ({peratext,type}) => {
  return (
    <>
    {
      type?<p className='work-pera'>{peratext}</p>:<p>{peratext}</p>
    }
    </>
  )
}

export default Pera
