import React from 'react'
import styled from 'styled-components'


/* 
button container???? 

Greyed out == unavail
Red == error
Active == background color filled + sound
Innactive == grayed
Hover == border gets bigger color filled + sounds
  hover sound = major, minor

todo: scroll bar has text shadow
*/

const handleColor = (color) => {
  switch(color){
    case "inactive":
      return 'gray'
    case "error":
      return color
    default: //active
      return 'something'
  }
}




// const ButtonBase = styled.button`
// text-transform: uppercase;

// position: relative;
// cursor: pointer;
// padding: .5em .8em;
// z-index: 10;
// box-shadow: 0px 0px 0px 1px $bg;


// :disabled{
//   cursor: not-allowed;
// }
// :hover{ 
//   box-shadow:0px 0px 0px 4px $bg inset;
// }

// `;


const Button = () => {}



export default Button


