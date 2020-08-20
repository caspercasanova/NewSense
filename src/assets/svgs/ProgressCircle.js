import React from 'react'


export default function ProgressCircle({progress}){
  let degree = (progress * 360) / 100
    // Note: Math.sin and Math.cos accept a radian value and 360 degrees equal 2 * pi radians
  // The sin value is in minus because coordinates in SVGs increase from top to bottom
  const sin = value => -Math.sin(value/180*Math.PI)
  const cos = value => Math.cos(value/180*Math.PI)
    return(
      <svg width='100px' height='100px' viewBox='-100 120 150 -120'>
        
        <g >
        <circle className='thin' cx='0' cy='0' r='100' />
        
        {/* This is the arc showing the progress (M: move to, A: arc to)*/}
        <path d={`
          M 30 0 
          A 30 30 0 ${degree <= 180 ? 0 : 1} 0 ${cos(degree) * 30} ${sin(degree) * 30}
        `} />
  
        {/* These are the two sides of the angle */}
        <line 
          className='thin'
          x1='0'
          y1='0' 
          x2='100' 
          y2='0' 
        />
        <line 
          className='thin' 
          x1='0' 
          y1='0'
          x2={cos(degree) * 100} 
          y2={sin(degree) * 100} 
        />
  
        {/* This is the degree of the angle */}
        <text 
          x={cos(degree) * 100 + 10} 
          y={sin(degree) * 100}
        >
          {Math.round(degree)}°
        </text>
      </g>
   
  
      </svg>
    )
  }