import React from 'react'

//import {useToggle} from './utils'
import {useAuth} from '../firebase/Auth'
import TypedMessage from './Elements/TypedMessage'
import NSAlogo from '../NSAbrainDaggertrans.png'
import Countdown from './Widgets/Countdown'
import Ticker from './Widgets/Ticker'
export default function Navagation({toggleShoppingCart, setPage}) {

  const auth = useAuth()
  let date = new Date()
  let version = process.env.NSA_APP_VERSION || '0.0.13' 
  return (
        <div style={{display: 'flex', margin: 'auto auto'}}> 
          <div><img style={{width: '50px'}} src={NSAlogo} alt='logo'/></div>

          <div style={{width: '22em'}}>
            <h1 className='blink_soft'> <TypedMessage message={"New Sense Active"}/></h1>
            <div style={{display: 'flex', flexDirection:'column'}}>
              <button className="basic_btn" onClick={() => setPage('profile_page')}>Profile</button>
              <button className="basic_btn" onClick={() => setPage('product_page')}>Products</button>
              <button className="basic_btn" onClick={() => setPage('about_page')}>About</button>
              <button onClick={toggleShoppingCart} className="green_btn">Cart</button>
              <button onClick={auth.signout} className="basic_btn">Logout</button>
            </div>
            <Ticker /> 
            <Countdown />
            <hr></hr>
            <div>
              <p>All Be Demanded</p>
              <p>V. {`${version}`}</p>
              <p>CopyWrite {date.getFullYear()}. All Rights Reserved</p>
            </div>

          </div>

        </div>
  )
}