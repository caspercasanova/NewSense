import React from 'react'
import styled from 'styled-components'

const InnerCardContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  min-height: 120px;
  border-radius: 4px;
  padding: 4px 8px;
  transition: box-shadow 0.2s ease 0s, filter 0.2s ease 0s, background-color 0.2s ease 0s;
  border: 1px solid var(--color-grey-ultra);
  background-color: hsla(0, 0%, 9%, .5);
  margin-top: 5px;
  margin-bottom: 5px;
  &:hover {
    cursor: pointer;
    box-shadow: var(--color-cyan) 2px 2px 2px 2px;
    filter: brightness(1.15);
  }
`;



export default function InnerCard({children, header}) {
  return (
    <InnerCardContainer>
      {header && <h3>{header}</h3>}
      {children}
    </InnerCardContainer>
  )
}
