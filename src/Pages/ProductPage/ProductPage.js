import React from 'react';
import Product from '../../components/Elements/Product'
import Divider from '../../components/Elements/Divider';
import ChartLarge from '../../components/Charts/ChartLarge';
import Statistics from './Statistics';

// TODO ADD LITTLE BONUS CHARACTERISTICS FOR EACH PRODUCT :P META DATA LIKE OPENBASE.io

export default function ProductPage({stripeProduct}) {
  return (
    <div className="Product_Section">
      <Product stripeProduct={stripeProduct} />
      <Statistics />
      <Comments />
    </div>
  );
}


const Comments = () => {
  /* User Pic, user rank,  */
  return (
    <>
      <Divider title="Comments" />
      <ChartLarge />
    </>
  );
};
