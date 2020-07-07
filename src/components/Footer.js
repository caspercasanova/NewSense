import React from 'react'
import Countdown from './Widgets/Countdown'

export default function Footer() {
  let date = new Date()
  let version = process.env.NSA_APP_VERSION || '0.0.13' 
  return (
    <footer>
      <div>
        <p>All Be Demanded</p>
        <p>V. {`${version}`}</p>
        <p>CopyWrite {date.getFullYear()}. All Rights Reserved</p>
      </div>

      <Countdown />
    </footer>
  )
}
