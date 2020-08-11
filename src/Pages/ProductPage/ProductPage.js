import React, { useState } from 'react';

import Product from '../../components/Elements/Product'
import Divider from '../../components/Elements/Divider';
import Card from '../../components/Elements/Card';

import ChartLarge from '../../components/Charts/ChartLarge';
import Statistics from './Statistics';
import Carousel from '../../components/Elements/Carousel';
import SmallCard from '../../components/Elements/SmallCard';


// TODO ADD LITTLE BONUS CHARACTERISTICS FOR EACH PRODUCT :P META DATA LIKE OPENBASE.io

export default function ProductPage({
  stripeProduct,
  shoppingCart,
  toggleCheckout,
  stripeProductList,
  setStripeProductIndex
}) {
  return (
    <>
      <ProductsCarousel
        stripeProductList={stripeProductList}
        setStripeProductIndex={setStripeProductIndex}
      />
      <div className="Product_Section">
        <Product
          stripeProduct={stripeProduct}
          shoppingCart={shoppingCart}
          toggleCheckout={toggleCheckout}
        />
        <Statistics />
        <Comments />
      </div>
    </>
  );
}

const ProductsCarousel = ({ stripeProductList, setStripeProductIndex }) => {
  return (
    <>
      <Divider title="Products" />
      <Carousel>
        {stripeProductList.length ?
          stripeProductList.map((product, index) => (
            <SmallCard header={product.name} key={index} onClickHandler={() => setStripeProductIndex(index)}>
              <div className="Carousel_item_body">
                <picture className="Carousel_Picture">
                  <source srcSet={product.images[0]} media="(min-width: 1024px)" />
                  <img src={product.images[0]} alt="carousel_image" />
                </picture>
                <div>{`${(product.price.unit_amount / 100).toFixed(2)}`}</div>
              </div>
            </SmallCard>
          ))
          : <div>Loading</div>
        }
      </Carousel>
    </>
  );
};




const Comments = () => {
  /* User Pic, user rank,  */
  return (
    <>
      <Divider title="Comments" />
      <ChartLarge />
    </>
  );
};
