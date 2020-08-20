import React from 'react'
import styled from 'styled-components'

const SmallCardContainer = styled.div`
  border-radius: 4px;
  margin: 4px 12px;
  padding: 4px 8px;
  min-height: 120px;
  min-width: 250px;
  position: relative;
  background-color:  hsla(0, 0%, 9%, .3);
  border: 1px solid  hsl(0, 0%, 9%);
  &:hover {
    cursor: pointer;
    box-shadow: var(--color-cyan) 2px 2px 2px 2px;
    filter: brightness(1.15);
  }
`;
const SmallCardHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 0px 6px 3px;
`;
const SmallCardBody = styled.div`
  width: 100%;
`;
export default function SmallCard({children, header, onClickHandler}) {
  return (
    <SmallCardContainer onClick={onClickHandler}>
      {header && <SmallCardHeader>{header}</SmallCardHeader>}
      <SmallCardBody>
        {children}
      </SmallCardBody>
    </SmallCardContainer>
  )
}
