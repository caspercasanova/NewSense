import React from 'react'
import HamburgerSVG from '../svgs/HamburgerSVG'
import {useToggle} from './utils'
import {useAuth} from '../firebase/Auth'
import TypedMessage from './Widgets/TypedMessage'
import NSAlogo from '../NSAbrainDaggertrans.png'

export default function Header({toggleShoppingCart, setPage}) {

  const auth = useAuth()
  
  return (
      <header>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <div ><img style={{width: '50px'}} src={NSAlogo} alt='logo'/></div>
          <h1><TypedMessage message={"New Sense Active"}/></h1>
        </div>
        <div>
          <button className="basic_btn" onClick={() => setPage('profile_page')}>Profile</button>
          <button className="basic_btn" onClick={() => setPage('product_page')}>Products</button>
          <button className="basic_btn" onClick={() => setPage('about_page')}>About</button>
          <button onClick={auth.signout} className="basic_btn">Logout</button>
          <button onClick={toggleShoppingCart} className="green_btn">Cart</button>
        </div>
        <Hamburger>
          <button onClick={auth.signout} className="basic_btn">Logout</button>
          <button onClick={toggleShoppingCart} className="green_btn">Cart</button>
        </Hamburger>
      </header>   
  )
}





const Hamburger = ({children}) => {
  const [isOpen, toggleHamburger] = useToggle(false)
  return(
    <div onClick={toggleHamburger}>
      <HamburgerSVG  />
      {isOpen && [children]}
    </div>
  )
}


