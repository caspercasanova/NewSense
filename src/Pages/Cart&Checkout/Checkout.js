import React,{useState} from 'react';
import PropTypes from 'prop-types'
// Stripe Imports
import {Elements} from '@stripe/react-stripe-js';
// Element
import CheckoutForm from './CheckoutForm';

import Cart from './Cart';

export default function Checkout({shoppingCart, stripeProductList, stripePromise}) {
  const [stage, setStage] = useState(0);

  const ConfirmCart = () => (
    <div>
      <div>
        Please Confirm Your Cart
      </div>
      <div>
        <Cart
          confirmOrder={() => setStage(stage + 1)}
          shoppingCart={shoppingCart}
          stripeProductList={stripeProductList}
        />
      </div>
    </div>
  );

  return (
    <div>
      {stage === 0 && <ConfirmCart />}
      {stage === 1 && (
      <Elements stripe={stripePromise}>
        <CheckoutForm shoppingCart={shoppingCart} />
      </Elements>
      )}
    </div>
  );
}

// Checkout.propTypes = {
//   shoppingCart
// }


