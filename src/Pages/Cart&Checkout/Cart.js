import React from 'react';

export default function Cart({
  stripeProductList,
  toggleCheckout,
  shoppingCart,
  confirmOrder
}) {
  
  return (
    <div className="Cart">
      <div className="Cart_header">
        <h3>Cart</h3>
        <h6>last updated: {Date.now()}</h6>
      </div>
      <ul>
        {shoppingCart.list !== 0
        && Object.keys(shoppingCart.list).map((item, index) => (
          <Product
            key={index}
            shoppingCart={shoppingCart}
            stripeProductList={stripeProductList}
            item={item}
          />
        ))}
      </ul>

      <div>
        <div>
          Total: {shoppingCart.price === undefined ? '0' : ((shoppingCart.price.orderTotal / 100).toFixed(2))}
        </div>
        {toggleCheckout && <div><button type="button" className="yellow_btn" style={{ width: '100%' }} onClick={toggleCheckout}>Checkout</button></div>}
        {confirmOrder && <div><button type="button" className="yellow_btn" style={{ width: '100%' }} onClick={confirmOrder}>Confirm</button></div>}
      </div>
    </div>
  );
}

const Product = ({ stripeProductList, shoppingCart, item }) => {
  const returnPictureAndName = (id) => {
    const product = stripeProductList.find((item) => item.id === id);
    return [product.images[0], product.name];
  };
  const [productImg, productName] = returnPictureAndName(item);

  return(
    <li className="Cart_item">
      <div>
        <div>ID: {productName}</div>
        <img src={`${productImg}`} alt="cart_picture" className="Cart_item_picture" />
      </div>

      <div>
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
    </li>
  );
};
