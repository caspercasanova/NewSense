import React,{ useState }  from 'react'
import Card from './Card'
import InnerCard from './InnerCard'
import useShoppingCart from '../../Utilities/hooks/useShoppingCart.js'

export default function Product({
  stripeProduct = { price: { unit_amount: '0.13' } }, 
}) {
  let imageSrc;
  stripeProduct.images === undefined ? imageSrc = 'none' : imageSrc = stripeProduct.images[0];

  return (
    <Card header={stripeProduct.name}>
      <MainPicture imageSrc={imageSrc} />
      <Checkout stripeProduct={stripeProduct} />
    </Card>
  )
}

const MainPicture = ({ imageSrc }) => (
  <picture>
    <source srcSet={imageSrc} media="(max-width: 768px)" />
    <img alt="main_pic" className="MainPicture" src={imageSrc} />
  </picture>
);

const Checkout = ({stripeProduct = { price: { unit_amount: '0.13' } }}) => {
  const [quantity, setQuantity] = useState(1);
  const shoppingCart = useShoppingCart()
  return (
    <InnerCard>
      <h1 style={{color: 'var(--color-orange)'}}>$ {(stripeProduct.price.unit_amount / 100).toFixed(2)}</h1>
      <p>{stripeProduct.description}</p>
      {stripeProduct.metadata && (
        <ul>
          {Object.keys(stripeProduct.metadata).map((key, index) => (
            <li key={index}>{`${key}: ${stripeProduct.metadata[key]}`}</li>
          ))}
        </ul>
      )}
      <QuantitySelector setQuantity={setQuantity} quantity={quantity} />

      <button
        type="button"
        className="basic_btn buy_btn"
        style={{width: "100%"}}
        onClick={() => {
          shoppingCart.incrementItem(stripeProduct.id, quantity);
          setQuantity(1);
        }}
      >
        Add To Cart
      </button>
    </InnerCard>
  );
};

const QuantitySelector = ({setQuantity, quantity}) => {
  return(
    <div className="quantity_container">
      Select Your Quanity
      <div className="quantity_field">
        {/*
          //! NEED TO MAKE A UNAVAILABLE BUTTON SO YOU CAN MAKE NEGATIVE INPUTS
          //! Need DATA sanitation for input
        */}
        <button type="button" className="basic_btn" onClick={() => setQuantity(quantity + 1)}>-</button>
        <input className="quantity_selector" value={quantity} onChange={(e) => setQuantity(e)} />
        <button type="button" className="basic_btn" onClick={() => setQuantity(quantity + 1)}>+</button>
      </div>
    </div>
  )
}
