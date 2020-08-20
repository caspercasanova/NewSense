import React from 'react';
import styled from 'styled-components';
import TypedMessage from '../../components/Elements/TypedMessage';
import AccountSVG from '../../assets/svgs/AccountSVG';
import CartSVG from '../../assets/svgs/CartSVG';
import TShirtSVG from '../../assets/svgs/TShirtSVG';


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
const ProductsBtn = styled(TShirtSVG)`
  height: 35px;
  width: auto;
  cursor: pointer;
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
        <ProductsBtn onClickHandler={() => setPage('product_page')}/>
        <CartBtn onClickHandler={() => setPage('cart')} />
        <AccountBtn onClickHandler={() => setPage('profile_page')} />
      </ButtonContainer>
    </HeaderContainer>
  );
}
