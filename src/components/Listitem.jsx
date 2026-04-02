import React from 'react'

const Listitem = ({list,tag}) => {
  return (
    <>
    {
     tag==="sales" ?<li><a href="#sales">{list}</a></li>:<li>{list}</li>
    }
    </>
  )
}

export default Listitem
