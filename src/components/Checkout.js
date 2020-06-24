import React,{useState} from 'react'

import {Elements} from '@stripe/react-stripe-js'
import CheckoutForm from './CheckoutForm.js'



export default function Checkout({shoppingList, stripePromise}) {
  let [stage, setStage] = useState(0)


  return (
    <div>
      {stage === 0 && <ConfirmCart confirmOrder={()=>setStage(stage += 1)}/>}
      {stage === 1 && 
             
      <Elements stripe={stripePromise}>
            <CheckoutForm />
      </Elements> 
    }
    </div>
  )
}



const ConfirmCart = ({shoppingList, confirmOrder}) => {
  let ProductCard = ({name = 'Sick', pricePer = 100, quantity = 1}) => (
    <li className='ProductCard'>
      <div>{name}</div>
      <div>{quantity}</div>
      <div>
          <div>
            price per unit: {pricePer}
          </div>
          <div>
            {pricePer * quantity}
          </div>
        </div>
    </li>
  )
  
  return(
    <div className='ConfirmCart'>
      <ul className='CartList'>
        {shoppingList.map((product, index) => (
          <ProductCard  name={product.name} quantity={product.quantity} pricePer={product.price} />
        ))}
      </ul>
      <button className='basic_btn' onClick={confirmOrder}>Confirm Order</button>
    </div>
  )
}
