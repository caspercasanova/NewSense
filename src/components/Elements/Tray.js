import React from 'react'

export default function Tray({className='', backgroundImage='none', children}) {
  let background;
  background === 'none' ? background = 'none' : background = `url(${backgroundImage})`

  

  return (
    <div className={className}>
      <div className='tray'>
        <div className='tray_body'>
          {children}
        </div>
        <div className='tray_bg'  style={{backgroundImage: `${background}`}}/>
        <div className='glow_corner top_corners' />
        <div className='glow_corner bottom_corners' />
      </div>
    </div>
  )
}
