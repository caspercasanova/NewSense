import React,{useState} from 'react'

import styled from 'styled-components'

const ComingSoonOverLayDiv = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(15, 13, 13, 0.94);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid cyan;
`;


export default function ComingSoonOverlay() {
  const [overlay, closeOverLay] = useState(true)
  return overlay ?(
      
      <ComingSoonOverLayDiv>
          <div>Coming Soon...</div>
          <button className='basic_btn' onClick={()=>closeOverLay(false)}>Let Me See</button>
      </ComingSoonOverLayDiv>
      
  ):(<></>)
}
