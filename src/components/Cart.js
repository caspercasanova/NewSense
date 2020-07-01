import React from 'react'



export default function Cart({stripeProductList, toggleCheckout, shoppingCart, confirmOrder}) {


  const returnPicture = (item) => {
    for(let product of stripeProductList){
      if(product.id === item){
        return product.images[0]
      }
    }
  } 

  const returnName = (item) => {
    for(let product of stripeProductList){
      if(product.id === item){
        return product.name
      }
    }
  } 


  
  return (
    <div className='Cart'>
      <div className='Cart_header'>
        <h3>Cart</h3>
        <h6>last updated: {Date.now()}</h6>
      </div>
      <ul>
      {shoppingCart.list !== 0  &&  Object.keys(shoppingCart.list).map((item, index) => ( 
        <li key={index} className='Cart_item'>
          <div>          
            <div>ID: {returnName(item)}</div>
            <img src={`${returnPicture(item)}`} alt='cart_picture' className='Cart_item_picture'/> 
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
            <button className='basic_btn' onClick={() => shoppingCart.decrementItem(item)}>-</button>
            <button className='basic_btn' onClick={() => shoppingCart.incrementItem(item)}>+</button>
          </div>  
        </li>
      )) 
    
      }
      </ul>

      <div>
          <div>Total: {shoppingCart.price === undefined ? `0` : (shoppingCart.price.orderTotal/ 100).toFixed(2)}</div>
          {toggleCheckout && <div><button className='yellow_btn' style={{width: "100%"}} onClick={toggleCheckout}>Checkout</button></div>}
          {confirmOrder && <div><button className='yellow_btn' style={{width: "100%"}} onClick={confirmOrder}>Confirm</button></div>}
      </div>
    </div>
  )
}
