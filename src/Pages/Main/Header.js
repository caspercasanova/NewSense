import React from 'react';
import styled from 'styled-components';
import TypedMessage from '../../components/Elements/TypedMessage';
import AccountSVG from '../../assets/svgs/AccountSVG';
import CartSVG from '../../assets/svgs/CartSVG';
import LogoPic from '../../assets/pics/NSAbrainDaggertrans.png'

const HeaderContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.27) 0px 2px 3px 2px;
  display: flex;
  border-bottom: 1px solid var(--color-cyan);
  align-items: center;
  padding-left: 10px;
  padding-right: 40px;
  justify-content: space-between;
  width: 100%;
  `;

const AccountBtn = styled(AccountSVG)`
  height: 40px;
  width: auto;
  cursor: pointer;
`;

const CartBtn = styled(CartSVG)`
  height: 40px;
  width: auto;
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  * {
     margin-left: 10px;
  }
`;

export default function Header({setPage}) {
  return (
    <HeaderContainer>
      <h1><TypedMessage message="New Sense Active" /></h1>
      <ButtonContainer>
        <CartBtn onClickHandler={() => setPage('cart')} />
        <AccountBtn onClickHandler={() => setPage('profile_page')} />
      </ButtonContainer>
    </HeaderContainer>
  );
}
