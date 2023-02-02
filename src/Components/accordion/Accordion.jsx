import useToggle from '../../hooks/useToggle';

const Accordion = () => {
 const { status: expand, toggleStatus: toggle} = useToggle()

  return (
    <div className='accordion'>
      <button className='event' onClick={toggle}>Toggle <span>{expand ?'-' : '+'}</span></button>
      {expand && <p className='content'>showing content!</p>}
    </div>
  )
}

export default Accordion;