import React from 'react'
import styled from 'styled-components'
import SmallCard from '../../components/Elements/SmallCard';
import Divider from '../../components/Elements/Divider';

const ProductListContainer = styled.div`
  width: 100%;
  height: auto;
`;

const CardPicture = styled.picture`
  width: 100px;
  height: 100px;
  & img {
    width: 100px;
    height: 100px;
  }
`;
// padding: 4px 8px;
// min-width: 250px;
export default function ProductList({ stripeProductList, setStripeProductIndex }) {
  return (
    <ProductListContainer>
      <Divider title="Products" />
      {stripeProductList.length ?
        stripeProductList.map((product, index) => (
          <SmallCard header={product.name} key={index} onClickHandler={() => setStripeProductIndex(index)}>
            <CardPicture>
              <source srcSet={product.images[0]} media="(min-width: 1024px)" />
              <img src={product.images[0]} alt="carousel_image" />
            </CardPicture>
            <div>
              {`${(product.price.unit_amount / 100).toFixed(2)}`}
            </div>
          </SmallCard>
        ))
        : <div>Loading</div>
      }
    </ProductListContainer>
  )
}
