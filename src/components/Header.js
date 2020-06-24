import React from 'react'
import HamburgerSVG from '../svgs/HamburgerSVG'
import {useToggle} from './utils'

export default function Header({setPage, logoutFunction}) {
  return (
      <header>
        <Hamburger>
          <button onClick={logoutFunction} className="basic_btn">Logout</button>
          <Cart />
        </Hamburger>
        <h1>New Sense Active</h1>
      </header>   
  )
}


const Cart = () => {
  return(
    <button className='buy_btn'>
      Cart
    </button>
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


