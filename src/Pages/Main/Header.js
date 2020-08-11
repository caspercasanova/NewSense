import React from 'react';
import styled from 'styled-components';
import TypedMessage from '../../components/Elements/TypedMessage';
import useToggle from '../../Utilities/hooks/useToggle';
import AccountSVG from '../../assets/svgs/AccountSVG';
import CartSVG from '../../assets/svgs/CartSVG';

const HeaderContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.27) 0px 2px 3px 2px;
  display: flex;
  border-bottom: 1px solid var(--color-cyan);
  align-items: center;
  justify-content: space-around;
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


export default function Header({setPage}) {
  return (
    <HeaderContainer>
      <div>nusnseactv</div>
      <div>
        <CartBtn onClickHandler={() => setPage('cart')} />
        <AccountBtn onClickHandler={() => setPage('profile')} />
        <button type="button" className="green_btn" onClick={() => setPage('cart')}>Cart</button>
      </div>
    </HeaderContainer>
  );
}