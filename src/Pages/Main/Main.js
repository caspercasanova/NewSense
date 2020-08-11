import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// Pages
import ProductPage from '../ProductPage/ProductPage';
import Modal from '../../components/Elements/Modal';
import About from '../About/About';
import Navagation from '../Navagation/Navagation';
import Profile from '../Profile/Profile';
import Checkout from '../Cart&Checkout/Checkout';
import Cart from '../Cart&Checkout/Cart';
// Elements
import Tooltip from '../../components/Elements/Tooltip';
import Highlight from '../../components/Elements/Highlight';
import Header from './Header'
import Footer from './Footer'
// Functions / Hooks
import useToggle from '../../Utilities/hooks/useToggle';
import { useAuth } from '../../Firebase/firebase_hooks/useAuth';
import NSAlogo from '../../assets/pics/NSAbrainDaggertrans.png'

const MainContainer = styled.div`
  font-family: 'digital-7';
  height: 100%;
  width: 100%;
  display: flex;
  border: 1px solid cyan;
  overflow: hidden;
  padding-right: 25px;
  position: relative;
  z-index: 10;
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
`;

export default function Main({ stripePromise, shoppingCart, stripeProductList }) {
  const auth = useAuth();
  const [checkout, toggleCheckout] = useToggle(); // initiate the checkoutProcess
  const [shoppingCartIsShowing, toggleShoppingCart] = useToggle(); // toggle the shopping cart
  const [stripeProductIndex, setStripeProductIndex] = useState(0); // display current product
  const [page, setPage] = useState('profile_page');

  const [introduction, toggleIntroduction] = useToggle(true);

  return (
    <>
      <Header />
      <MainContainer>
        <div style={{ display: 'flex', flexDirection: 'column', flex: '1 1 0', paddingRight: '10px' }}>
          <Navagation
            toggleShoppingCart={toggleShoppingCart}
            toggleCheckout={toggleCheckout}
            setPage={setPage}
          />
        </div>

        <div
          className=".scrollable-element"
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: '2 1 0',
            overflowY: 'auto',
            scrollbarColor: 'rgba(111,111,111,0.5) black',
            paddingRight: '15px',
          }}
        >
          {page === 'product_page'
            && (
              <ProductPage
                setStripeProductIndex={setStripeProductIndex}
                stripeProductList={stripeProductList}
                stripeProduct={stripeProductList[stripeProductIndex]}
                toggleCheckout={toggleCheckout}
                shoppingCart={shoppingCart}
              />
            )}
          {page === 'profile_page'
            && <Profile />}
          {page === 'about_page'
            && <About />}

        </div>

        {introduction
            && (
              <Modal closeModal={toggleIntroduction} header={`Welcome to N.S.A. ${auth.user.displayName}`}>
                <Tooltip message="This is a test site, do not give us money." title="Please Be Aware" />
                <p>Though in a prototypal stage, NSA will be offically launching ASAP with new and exciting items. Details will come. Perhaps You Would like to hear about them as soon as they come out?</p>
                <p>
                  Created and currently maintained by
                <Highlight newtab link="https://www.linkedin.com/in/310-nicholas-lopez/">Nicholas Lopez</Highlight>
                  .
              </p>
              </Modal>
            )}

        {shoppingCartIsShowing
            && (
              <Modal closeModal={toggleShoppingCart}>
                <Cart
                  shoppingCart={shoppingCart}
                  stripeProductList={stripeProductList}
                  toggleCheckout={toggleCheckout}
                />
              </Modal>
            )}

        {checkout
            && (
              <Modal closeModal={toggleCheckout} header={`Checkout: ${stripeProductList[stripeProductIndex].name}`}>
                <Checkout
                stripePromise={stripePromise}
                shoppingCart={shoppingCart}
                stripeProductList={stripeProductList}
              />
              </Modal>
            )}
      </MainContainer>
      <BackgroundImage />
      <Footer />
    </>
  );
}

Main.propTypes = {
  stripePromise: PropTypes.object,
  shoppingCart: PropTypes.object,
  stripeProductList: PropTypes.array,
};
