import React from 'react'
import styled from 'styled-components'

const StyledDivider = styled.div`
  width: 100%;
  border: none;  
  margin-top: 10px;
  margin-bottom: 10px;
  & h2{
    color: #fe7a15;
  }

  & hr{
    color: #fe7a15;
    width: 100%;
    height: 2px;
  }
`


const Divider = ({title = 'xx0001xxx'}) => {
  return(
    <StyledDivider>
      <h2>{title}</h2>
      <hr></hr>
    </StyledDivider>
  )
}


export default Divider