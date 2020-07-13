import React from 'react'
import styled from 'styled-components'








const TrayContainer = styled.div`
  position: relative;
  width: 100%;
`;



const Corners = styled.div`
  position: absolute;
  width: 100%;
  z-index: 3;
  &:before{
    content: '';
    position: absolute;
    border-color: #ABF0F9;
    border-style: solid;
    width: 8px;
    height: 8px;
    transition: .3s;
    
  }
  &:after{
    content: '';
    border-color: #ABF0F9;
    border-style: solid;
    position: absolute;
    width: 8px;
    height: 8px;
    transition: .3s;
   
  }  
`;



const TopCorners = styled(Corners)`
  top: 0px;
  &:before{
    border-width: 1px 0 0 1px;
    left: 0px;  
  }
  &:after{
    border-width: 1px 1px 0 0;
    right: 0px;  
  }
`;
const BottomCorners = styled(Corners)`
  bottom: 8px;
  &:before{
    left: 0;
    border-width:  0 0 1px 1px;
  }
  &:after{
    right: 0;
    border-width: 0 1px 1px 0;
  }
`;




export default function GlowCorners({children}) {
  return (
    <TrayContainer>
      {children}
      <TopCorners />
      <BottomCorners />
    </TrayContainer>
  )
}
