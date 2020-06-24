import React,{useState} from 'react'

export default function ComingSoonOverlay() {
  const [overlay, closeOverLay] = useState(true)
  return overlay ?(
      
      <div className='Coming_Soon_Overlay'>
          <div>Coming Soon...</div>
          <button className='basic_btn' onClick={()=>closeOverLay(false)}>Let Me See</button>
      </div>
      
  ):(<></>)
}
