import React from 'react'
import styled from 'styled-components'
import Ticker from '../../components/Widgets/Ticker';
import LogoPic from '../../assets/pics/NSAbrainDaggertrans.png'

const Logo = styled.div`
  margin-right: 10px;
`;

const Image = styled.img`
  width: 40px;
  height: auto;
  cursor: pointer;
`;


const FooterContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  border-top: 1px solid var(--color-cyan);
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;


export default function Footer({setPage}) {
  return (
    <FooterContainer>
      <Logo>
        <Image onClick={() => setPage('about_page')} src={LogoPic} alt='about_profile_btn'/>
      </Logo>
      <Ticker />
    </FooterContainer>
  )
}
