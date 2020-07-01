import React from 'react'

export default function Carousel({selectFunction, children}) {

  return (
    <div className='Carousel'>
      <ul className='Carousel_Inner'>
        {[children]}
      </ul>
      <div className='Carousel_Progress_Bar' />
    </div>
  )
}
