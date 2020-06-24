import React,{useState} from 'react'



/* 
use react spring!
TODO CONVERT UNDERLINE TO SINE WAVE 

*/


export default function Highlight({children, link, newtab}) {
  const [isHovered, setIsHovered]= useState(false) 


  return (
    <span className='Highlight' >
      <a href={link} target={newtab ? '_blank' : ''} onMouseOver={()=>setIsHovered(true)} onMouseOut={()=>setIsHovered(false)}>
        {children}
        <span className={`Underline ${isHovered ? 'active' : ''}`}/>
      </a>
    </span>
  )
}


