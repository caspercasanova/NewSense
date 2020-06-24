import React from 'react'

export default function Footer() {
  let date = new Date()
  return (
    <footer>
      <div>
        <p>All Be Demanded</p>
        <p>Last Update: </p>
        <p>CopyWrite {date.getFullYear()}. All Rights Reserved</p>
      </div>

      <div className='connection_thing'></div>
    </footer>
  )
}
