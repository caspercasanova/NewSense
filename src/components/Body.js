import React, { useState } from 'react';
// Pages
import ProductPage from '../Pages/ProductPage/ProductPage';
import Modal from './Elements/Modal';
import About from '../Pages/About/About';
import Navagation from '../Pages/Navagation/Navagation';
import Checkout from './Checkout';
import Profile from '../Pages/Profile/Profile';
import Cart from './Cart';
// Elements
import Tooltip from './Elements/Tooltip';
import Highlight from './Elements/Highlight';
// Functions
import { useToggle } from '../Utilities/utils';

export default function Body({ stripePromise, shoppingCart, stripeProductList }) {
  const [checkout, toggleCheckout] = useToggle(); // initiate the checkoutProcess
  const [shoppingCartIsShowing, toggleShoppingCart] = useToggle(); // toggle the shopping cart
  const [stripeProductIndex, setStripeProductIndex] = useState(0); // display current product
  const [page, setPage] = useState('profile_page');

  const [introduction, toggleIntroduction] = useToggle(true);

  return (

    <div className="Landing_Page">
      <div style={{
        display: 'flex', flexDirection: 'column', flex: '1 1 0', paddingRight: '10px',
      }}
      >
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
          <Modal closeModal={toggleIntroduction} header="Welcome to N.S.A. User">
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

    </div>
  );
}
