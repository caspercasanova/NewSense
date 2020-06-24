import React,{useState} from 'react'
import LightningBolt from '../../svgs/LightningBolt'
/* 
TODO Covnert to react spring
*/

export default function Tooltip({message, title}) {
  const [isHovered, setIsHovered]= useState(false)



  return (
    <span className='ToolTip'>
      <button onMouseOver={()=>setIsHovered(true)} onMouseOut={()=>setIsHovered(false)}>
        <LightningBolt />
      </button>
      {isHovered === true &&  <TooltipDisplay title={title} message={message}/>}
    </span>
  )
}

const TooltipDisplay = ({message, title}) => {
  return(
    <div className='ToolTipDisplay'>
      <h5>{title}</h5>
      <hr/>
      <div className='ToolTipDisplayBody'>
        <p>{message}</p>
      </div>
    </div>
  )
}