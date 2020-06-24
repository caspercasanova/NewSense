import React from 'react'



const Divider = ({title = 'xx0001xxx', expand, setExpand}) => {
  return(
    <div className='Divider' onClick={setExpand}>
      <h2>{title}</h2>
      <hr></hr>
      {expand === false && <div>^^^^^^^^^^^</div>}
    </div>
  )
}


export default Divider