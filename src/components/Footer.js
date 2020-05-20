import React from 'react'

export default function Footer() {
  let date = new Date()
  return (
    <footer>
      <div>
        <p>CopyWrite {date.getFullYear()} </p>
      </div>
      <div className='connection_thing'></div>
    </footer>
  )
}
