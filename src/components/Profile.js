import React from 'react'
import {useAuth} from '../firebase/Auth'
import NSAlogo from '../NSAbrainDaggertrans.png'
import Divider from './Elements/Divider'
import { useToggle } from './utils'
import TypedMessage from './Elements/TypedMessage'
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
    email: auth.user.email || 'nsa@gmail.com',
    currentPoints: auth.user.points || '0'
  }

  return (
    <div>
      <Divider title={'Profile'}/>
      <div>
        <h3>Display Name: {defaultProfile.displayName}</h3>
        <div><img style={{width: '100px'}} src={defaultProfile.photoURL} alt='logo'/></div>
        <h3>UID: {defaultProfile.uid}</h3>
        <h3>Email: {defaultProfile.email}</h3>  
      </div>
      <div>
        <button className="basic_btn">Delete Account</button>
      </div>
      
      <Rewards currentPoints={defaultProfile.currentPoints}/>
      <Divider title="Previous Orders"/>
    </div>
  )
}



const Rewards = ({currentPoints}) => {
  let rewardsArrays = [
//  pointsReq     reward                 tier
    [0,       "None",                    "Ghost"],
    [13,      "Unlock Reward System",    "New_Sense"],
    [100,     "Free Shipping For Life",  "Consript"],
    [200,     "Stickers In Every Order", "Cutthroat"], 
    [300,     "5% Off For Life",         "Squire"],
    [400,     "Something Sicker",        "Vanguard"],
    [500,     "Unknown",                 "Maverick"]

  ]

  

  return(
    <>

      <Divider title={'Rewards'}/>
      <div>
        <div>
          <h3>Current Points: {currentPoints}</h3>
          <h3>Current Rank: {currentPoints}</h3>
          <h3>Points Needed Till Next Rank: </h3>
        </div>


        <h3>Ranks & Rewards</h3>
        <div style={{border: '1px solid rgba(70, 70, 70, 0.8)'}}>
          <div style={{display: 'flex', padding: '10px 14px'}}>
            <h4 style={{width: '100%'}}>Rank</h4>
            <h4 style={{width: '100%'}}>Points Req.</h4>
            <h4 style={{width: '100%'}}>Reward</h4>
          </div>
          <hr></hr>
          <ul style={{padding: '10px'}}>
            {rewardsArrays.map((rewardsArr, index) => {
              let hasRank = currentPoints >= rewardsArr[0]
              return(
                <Reward 
                  key={index} 
                  pointsRequired={rewardsArr[0]} 
                  reward={rewardsArr[1]}  
                  tier={rewardsArr[2]}
                  hasRank={hasRank}
                />
              )  
            })}
          </ul>
        </div>
      </div>
    
    </>
  )
}



const Reward = ({tier, reward, pointsRequired, hasRank}) => {
  const [show, toggleShow] = useToggle()
  return(
    <li
      onMouseEnter={toggleShow}
      onMouseLeave={toggleShow}
    >
      <div style={{display: 'flex', color: `${hasRank ? 'green' : 'rgba(70, 70, 70, 0.8)'}`, padding: '4px 10px'}}>
        <div style={{width: '100%'}} className={hasRank ? 'blink_soft' : ''}>{tier}</div>
        <div style={{width: '100%'}} className={hasRank ? 'blink_soft' : ''}>{show ? <TypedMessage message={`${pointsRequired}`}/> : '...'}</div>
        <div style={{width: '100%'}} className={hasRank ? 'blink_soft' : ''}>{show ? <TypedMessage message={reward}/> : '$$$'}</div>
      </div>
      <hr></hr>
    </li>
  )
}