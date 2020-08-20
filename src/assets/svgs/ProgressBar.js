import React from 'react'

export default function ProgressBar({progress = 1, label}) {
  return (
    <svg width='100%' height='10px' viewBox='0 0 200 10'>
      <text>{label}</text>
      <line x1={0} y1={0} x2={"100%"} y2={0} strokeWidth={"1px"} />
      <line x1={0} y1={0} x2={`${progress}%`} y2={0} strokeWidth={"3px"} className='thin' />
    </svg>
  )
}


