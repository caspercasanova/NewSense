import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// Pages
import ProductPage from '../ProductPage/ProductPage';
import Modal from '../../components/Elements/Modal';
import About from '../About/About';
import Navagation from '../Navagation/Navagation';
import Profile from '../Profile/Profile';
import ProductList from  '../ProductPage/ProductList'
// Elements
import Tooltip from '../../components/Elements/Tooltip';
import Highlight from '../../components/Elements/Highlight';
import Header from './Header';
import Footer from './Footer';
// Functions / Hooks
import useToggle from '../../Utilities/hooks/useToggle';
import { useAuth } from '../../Firebase/firebase_hooks/useAuth';
import NSAlogo from '../../assets/pics/NSAbrainDaggertrans.png';
import CartPage from '../Cart&Checkout/CartPage';

const MainContainer = styled.div`
  font-family: 'digital-7';
  max-width: 1300px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  width: 100%;
  overflow: hidden;
  `;

const MainBody = styled.div`
  display: flex;
  height: 100%;
  overflow: hidden;
`;

const SideContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  overflow-y: auto;
  scrollbar-color: rgba(111,111,111,0.5) black;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2 1 0;
  overflow-y: auto;
  scrollbar-color: rgba(111,111,111,0.5) black;

`;

const BackgroundImage = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url(${NSAlogo});
  background-size: 500px 500px;
  background-repeat: no-repeat;
  background-position: center;
  filter: brightness(10%);
  z-index: -1;
`;

export default function Main({ stripePromise, stripeProductList }) {
  const auth = useAuth();
  const [stripeProductIndex, setStripeProductIndex] = useState(0); // display current product
  const [page, setPage] = useState('product_page');
  const [introduction, toggleIntroduction] = useToggle(true);

  return (
    <>
      <Header setPage={setPage} />
      <MainContainer>
        <div>
          New Nav Coming
        </div>
        <MainBody>
          <SideContainer>
            <ProductList setStripeProductIndex={setStripeProductIndex} stripeProductList={stripeProductList} />
          </SideContainer>

          <BodyContainer>
            {page === 'product_page'
              && <ProductPage stripeProduct={stripeProductList[stripeProductIndex]} /> }
            {page === 'profile_page'
              && <Profile />}
            {page === 'about_page'
              && <About />}
            {page === 'cart'
              && <CartPage stripeProductList={stripeProductList} stripePromise={stripePromise} />}
          </BodyContainer>
        </MainBody>
        {introduction
          && (
            <Modal closeModal={toggleIntroduction} header={`Welcome to N.S.A. ${auth.user.displayName}`}>
              <Tooltip message="This is a test site, do not give us money." title="Please Be Aware" />
              <p>
                Though in a prototypal stage, NSA will be offically launching ASAP with new and exciting items. Details will come. Perhaps You Would like to hear about them as soon as they come out?
              </p>
              <p>
                Created and currently maintained by
                <Highlight newtab link="https://www.linkedin.com/in/310-nicholas-lopez/">Nicholas Lopez</Highlight>
                .
              </p>
            </Modal>
          )}
      </MainContainer>
      <Footer setPage={setPage} />
      <BackgroundImage />
    </>
  );
}

Main.propTypes = {
  stripePromise: PropTypes.object,
  shoppingCart: PropTypes.object,
  stripeProductList: PropTypes.array,
};
