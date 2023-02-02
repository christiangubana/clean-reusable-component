import React, { useState } from 'react'

const Accordion = () => {
 const [expand, setExpand] = useState(false)
 const toggle = () => setExpand(prevExpand => !prevExpand);
 
  return (
    <div className='accordion'>
      <button onClick={toggle}>Toggle <span>{expand ? '-' : '+'}</span></button>
      {expand && <p className='content'>showing content!</p>}
    </div>
  )
}

export default Accordion;