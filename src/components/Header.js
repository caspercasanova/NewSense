import React from 'react'


export default function Header() {
  return (
      <header>
        <nav>
          <button className='basic_btn'>HOME</button>
          <button className='basic_btn'>ABOUT</button>
          <button className='basic_btn'>SOMETHING</button>
          <button className='basic_btn'>Clothes</button>
          <div className='search_input'>
            <input></input>
            <label>Search</label>
          </div>
        </nav>
      </header>
      
  )
}
