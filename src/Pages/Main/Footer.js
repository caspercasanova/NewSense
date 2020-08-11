import React from 'react'
import styled from 'styled-components'
import Ticker from '../../components/Widgets/Ticker';

const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid var(--color-cyan);
`;
export default function Footer() {
  return (
    <FooterContainer>
      <Ticker />
    </FooterContainer>
  )
}
