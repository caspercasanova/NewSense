import React from 'react';
import styled from 'styled-components';
import InnerCard from '../../components/Elements/InnerCard.js'
import Card from '../../components/Elements/Card';
import useToggle from '../../Utilities/hooks/useToggle';
import useShoppingCart from '../../Utilities/hooks/useShoppingCart';
// Stripe Imports
import {Elements} from '@stripe/react-stripe-js';
// Element
import CheckoutForm from './CheckoutForm';
import Row from '../../components/Elements/Row.js';

/*
  <Elements stripe={stripePromise}>
    <CheckoutForm shoppingCart={shoppingCart} />
  </Elements> 
*/

export default function CartPage({stripeProductList}) {
  const shoppingCart = useShoppingCart();
  return (
    <Card header="Cart" footer={`Last Updated: ${Date.now()}`}>
      <ul>
        {Object.keys(shoppingCart.list).length && Object.keys(shoppingCart.list).map((item, index) => (
          <Product
            key={index}
            shoppingCart={shoppingCart}
            stripeProductList={stripeProductList}
            item={item}
          />
        ))}
      </ul>
      <Row>
        Total: {Object.keys(shoppingCart.price).length ? ((shoppingCart.price.orderTotal / 100).toFixed(2)) : '0'}
        <button type="button" className="orange_btn" onClick={() => {}}>Checkout</button>
      </Row>
    </Card>
  );
}

const ProductCardBody = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & button{
    font-size: 22px;
  }
`;
const CartItemPicture = styled.img`
  width: 230px;
  height: auto;
`;

const ProductCardDetails = styled.div`
  display: flex; 
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
`;

const Product = ({ stripeProductList, shoppingCart, item }) => {
  const returnPictureAndName = (id) => {
    const product = stripeProductList.find((item) => item.id === id);
    return [product.images[0], product.name];
  };
  const [productImg, productName] = returnPictureAndName(item);

  return (
    <InnerCard>
      <ProductCardBody>
        <CartItemPicture src={`${productImg}`} alt="cart_picture" />
        <ProductCardDetails>
          <div>
            <div>ID: {productName}</div>
            <div>Price Per Unit</div>
            {`${(shoppingCart.price[item].unitPrice / 100).toFixed(2)}`}
          </div>
          <div>
            <div>Unit Total</div>
            {`${(shoppingCart.price[item].unitTotal / 100).toFixed(2)}`}
          </div>
          <div>
            <div>Quantity: {`${shoppingCart.list[item]}`}</div>
            <button type="button" className="basic_btn" onClick={() => shoppingCart.decrementItem(item)}>-</button>
            <button type="button" className="basic_btn" onClick={() => shoppingCart.incrementItem(item)}>+</button>
          </div>
        </ProductCardDetails>
      </ProductCardBody>
    </InnerCard>
  );
};

