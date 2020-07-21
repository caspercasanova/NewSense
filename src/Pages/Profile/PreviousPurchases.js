/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// ELements
import Divider from '../../components/Elements/Divider';
// Functions / Hooks
import { useToggle } from '../../Utilities/utils';

export default function PreviousPurchases({ purchasesArray }) {
  return (
    <>
      <Divider title="Previous Purchases" />

      <h3>Ranks & Rewards</h3>
      <div style={{ border: '1px solid rgba(70, 70, 70, 0.8)' }}>
        <div style={{ display: 'flex', padding: '10px 14px' }}>
          <h4 style={{ width: '100%' }}>Order Number</h4>
          <h4 style={{ width: '100%' }}>Purchase Date</h4>
          <h4 style={{ width: '100%' }}>Shipping Status</h4>
        </div>
        <hr />
        <ul style={{ padding: '10px' }}>
          {purchasesArray
            .sort((a, b) => new Date(b.dateOrdered) - new Date(a.dateOrdered))
            .map((purchase, index) => (
              <Purchase purchase={purchase} key={index} />
            ))}
        </ul>
      </div>
    </>
  );
}

PreviousPurchases.propTypes = { purchasesArray: PropTypes.array.isRequired };

/* --------------------------- Children Components -------------------------- */

const PurchaseContainer = styled.div``;

const PurchaseHeader = styled.div`
  display: flex;
  padding: 4px 10px;
`;

const HasShippedContainer = styled.div`
  color:  ${(props) => props.hasShipped ? 'green' : '#fa2e46a4'};
  animation: ${(props) => props.hasShipped && 'blink 2.5s linear infinite'};
  width: 100%;
`;

const Purchase = ({ purchase }) => {
  const [show, toggleShow] = useToggle(false);
  return (
    <li>
      <PurchaseContainer>
        <PurchaseHeader>
          <div style={{ width: '100%' }}>{purchase.orderNumber}</div>
          <div style={{ width: '100%' }}>{purchase.dateOrdered}</div>
          <HasShippedContainer hasShipped={purchase.hasShipped}>{purchase.hasShipped ? 'Delivered' : 'En Route'}</HasShippedContainer>
        </PurchaseHeader>
        {show
        && purchase.productList.map((product, index) => (
          <div key={index} style={{ display: 'flex' }}>
            <div><img style={{ width: '100px' }} src={product.img} alt={`product${index}`} /></div>
            <div>
              <div>Product Name: {product.name}</div>
              <div>Quantity: {product.quantity}</div>
              <div>Product Price: {product.price / 100}</div>
              <div>Total: $ {product.quantity * (product.price / 100)}</div>
            </div>
          </div>
        ))}
        <div>Order Total: $ {purchase.orderPrice}</div>
        <button type="button" onClick={toggleShow} className="basic_btn">Show {show ? 'Less' : 'More'}</button>
      </PurchaseContainer>
      <hr />
    </li>
  );
};

Purchase.propTypes = {
  purchase: PropTypes.shape({
    orderNumber: PropTypes.string,
    dateOrdered: PropTypes.string,
    hasShipped: PropTypes.bool,
    orderPrice: PropTypes.string,
    productList: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};
