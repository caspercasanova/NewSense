import React from 'react'
import {useAuth} from '../firebase/Auth'
import NSAlogo from '../NSAbrainDaggertrans.png'
/* 
UID
photoURL
display Name
email
  - User ID
  - Biography
  - Age
  - Current Discount
  - Reputation Level

*/


export default function Profile() {
  const auth = useAuth()
  const defaultProfile = {
    displayName: auth.user.displayName || 'New Sense Conscript',
    photoURL: auth.user.photoURL || NSAlogo,
    uid: auth.user.uid || '_0131310',
    email: auth.user.email || 'nsa@gmail.com'
  }

  return (
    <div>
      <div ><img style={{width: '50px'}} src={defaultProfile.photoURL} alt='logo'/></div>
      <div >{defaultProfile.displayName}</div>
      <div >{defaultProfile.uid}</div>
      <div >{defaultProfile.email}</div>
      
    </div>
  )
}
