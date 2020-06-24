import React from 'react'
import Tray from './Tray'

const Modal = ({closeModal, header, children}) => {
  return(
  <div className='Modal_background'>
      <Tray className='Modal'>
        <div className='modal_header'>
          <h3>{header}</h3>
          <button className='basic_btn' onClick={()=>closeModal()}>X</button>
        </div>
        <hr />
        <div className='modal_body'>
          {children}
        </div>
      </Tray>
  </div>  
  )
}

export default Modal