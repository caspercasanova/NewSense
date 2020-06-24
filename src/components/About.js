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
          <p>This is simply dummy text of the printing and typesetting industry.</p><Tooltip message={'I really want this to be cool. And so i really really really hopee this shit murders the competition when it arrives'} title={'Please Be Sick Yo'}/>
          <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum <Highlight newtab link={`https://wordpress.org/support/topic/how-to-stop-line-break-after-span-element/`}>Explore</Highlight>.</p>
        </Textfield>
      </div>

    </div>
  )
}

