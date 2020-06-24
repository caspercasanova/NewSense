import React,{useState} from 'react'
import Countdown from './Widgets/Countdown'
import Checklist from './Widgets/Checklist'



/* 
TODO: Hashing Animation
TODO: Add a lazy loader Loading at bottom of screen to soft load APIs


[encoding, mutating, ]
*/
import TypedMessage from './Widgets/TypedMessage'


export default function LandingPage({loginFunction}) {
  return (
     
        <div  className='Landing_Page'>
          <div>
            <h1> <TypedMessage message={"New Sense Active"}/></h1>
          </div>
          
          <div>
            <button onClick={loginFunction} className="basic_btn blink_soft">Enter</button>
          </div>

          <Countdown />   
          <Checklist />
        </div>
 

  )
}




