import React from 'react'
import {useAuth} from '../../firebase/Auth'
import NSAlogo from '../../NSAbrainDaggertrans.png'
import Divider from '../../components/Elements/Divider'
import Rewards from './Rewards'
import PreviousPurchases from './PreviousPurchases'

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
let purchasesArray = [
  {
    productList: [
      {name: 'NewSenseCap', quantity: 2, img: NSAlogo, price: 1200},
      {name: 'Keep Dreaming', quantity: 2, img: NSAlogo, price: 1200}
    ],
    dateOrdered: '2020-07-12',
    orderNumber: '123lkhasdjo1i23u09as8dlkj12',
    orderComplete: false,
    hasShipped: true,
    orderPrice: '$123.00',
    pointsEarned: "20",
    discountsApplied: 'None'
  },
  {
    productList: [
      {name: 'NewSenseCap', quantity: 2, img: NSAlogo, price: 1200},
      {name: 'Keep Dreaming', quantity: 2, img: NSAlogo, price: 1200}
    ],
    dateOrdered: '2020-10-12',
    orderNumber: '123lkhasdjo1i23u09as8dlkj12',
    orderComplete: false,
    hasShipped: false,
    orderPrice: '$123.00',
    pointsEarned: "20",
    discountsApplied: 'None'
  }
]

export default function Profile() {
  const auth = useAuth()
  const defaultProfile = {
    displayName: auth.user.displayName || 'New Sense Conscript',
    photoURL: auth.user.photoURL || NSAlogo,
    uid: auth.user.uid || '_0131310',
    email: auth.user.email || 'nsa@gmail.com',
    currentPoints: auth.user.points || '0',
    previousPurchases: auth.user.previousPurchases || purchasesArray,
  }

  return (
    <div>
      <Divider title={'Profile'}/>
      <div>
        <div style={{display: 'flex'}}>
         <h3>Display Name: {defaultProfile.displayName}</h3>
         <button className="basic_btn">Update Username</button>
        </div>
        <div style={{display: 'flex'}}>
         <div><img style={{width: '100px'}} src={defaultProfile.photoURL} alt='logo'/></div>
         <button className="basic_btn">Update Photo</button>
        </div>
        <div style={{display: 'flex'}}>
          <h3>Email: {defaultProfile.email}</h3>  
          <button className="basic_btn">Update Email</button>
        </div>
        <div style={{display: 'flex'}}>
          <h3>UID: {defaultProfile.uid}</h3>
        </div>
        <div style={{display: 'flex'}}>
          <button className="basic_btn">Delete Account</button>
        </div>
      </div>
      
      <Rewards currentPoints={defaultProfile.currentPoints}/>
      
      <PreviousPurchases purchasesArray={defaultProfile.previousPurchases}/>
    </div>
  )
}



