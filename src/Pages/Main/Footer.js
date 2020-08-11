import React from 'react'
import styled from 'styled-components'
import Ticker from '../../components/Widgets/Ticker';

const FooterContainer = styled.div`
  display: flex;
  width: 100%;
`;
export default function Footer() {
  return (
    <FooterContainer>
      <Ticker />
    </FooterContainer>
  )
}
