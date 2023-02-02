import React, { useState } from 'react'
import useToggle from '../../hooks/useToggle';

const Accordion = () => {
 const { status: expand, toggleStatus: toggleStatus} = useToggle()

  return (
    <div className='accordion'>
      <button className='event' onClick={toggleStatus}>Toggle <span>{expand ?'-' : '+'}</span></button>
      {expand && <p className='content'>showing content!</p>}
    </div>
  )
}

export default Accordion;