import React from 'react'
import Highlight from './Elements/Highlight'
import Tooltip from './Elements/Tooltip'
import Textfield from './Elements/Textfield'

/* SASS METRICS */

export default function About() {
  return (
    <div className='About'>
      <div>
        <Textfield>
          <p>Welcome to NSA.</p><Tooltip message={'This is a test site, do not give us money.'} title={'Please Be Aware'}/>
          <p>Though in a prototypal stage, NSA will be offically launching ASAP with new and exciting items. Details will come. Perhaps You Would like to hear about them as soon as they come out?</p>
          <p>Created and currently maintained by <Highlight newtab link={`https://www.linkedin.com/in/310-nicholas-lopez/`}>Nicholas Lopez</Highlight>.</p>
        </Textfield>
      </div>

    </div>
  )
}

