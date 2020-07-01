import React from 'react'
import HamburgerSVG from '../svgs/HamburgerSVG'
import {useToggle} from './utils'

export default function Header({toggleShoppingCart, logoutFunction}) {
  return (
      <header>
        <Hamburger>
          <button onClick={logoutFunction} className="basic_btn">Logout</button>
          <button onClick={toggleShoppingCart} className="green_btn">Cart</button>

        </Hamburger>
        <h1>New Sense Active</h1>
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


