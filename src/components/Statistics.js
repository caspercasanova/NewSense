import React from 'react'

import Divider from './Elements/Divider'

import ChartLarge from './Charts/ChartLarge.js'
import ChartMedium from './Charts/ChartMedium.js'

export default function Statistics() {
  return (
    <>
      <Divider title={"Statistics"}/>
      <div>
        <div className='Statistics_Minor'>
          <div className='Minor Chart'></div>
          <div className='Minor Count'>
            <svg viewBox="0 0 56 18">
              <text x="50%" y="50%">102</text>
            </svg>
          </div>
        </div>
        <ChartLarge />
      </div>
    </>
  )
}
