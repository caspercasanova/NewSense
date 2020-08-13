import React from 'react';
import styled from 'styled-components';
import TypedMessage from '../../components/Elements/TypedMessage';
import useToggle from '../../Utilities/hooks/useToggle';
import AccountSVG from '../../assets/svgs/AccountSVG';
import CartSVG from '../../assets/svgs/CartSVG';
import Row from '../../components/Elements/Row';
import LogoPic from '../../assets/pics/NSAbrainDaggertrans.png'

const HeaderContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.27) 0px 2px 3px 2px;
  display: flex;
  border-bottom: 1px solid var(--color-cyan);
  align-items: center;
  justify-content: space-evenly;
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

const NewRow = styled.div`
  display: flex;
  align-items: center;
`;
const Picture = styled.img`
  width: 35px;
  height: auto;
  cursor: pointer;
`;

export default function Header({setPage}) {
  return (
    <HeaderContainer>
      <div>nusnseactv</div>
      <NewRow>
        <CartBtn onClickHandler={() => setPage('cart')} />
        <AccountBtn onClickHandler={() => setPage('profile_page')} />
        <div>
          <Picture onClick={() => setPage('about_page')} src={LogoPic} alt='about_profile_btn'/>
        </div>
      </NewRow>
    </HeaderContainer>
  );
}
