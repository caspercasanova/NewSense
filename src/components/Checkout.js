import React,{useState} from 'react'

import {Elements} from '@stripe/react-stripe-js'
import CheckoutForm from './CheckoutForm.js'



import Cart from './Cart'


export default function Checkout({shoppingCart, stripeProductList, stripePromise}) {
  let [stage, setStage] = useState(0)


  

let ConfirmCart = () =>  (
    <div>
      <div>
        Please Confirm Your Cart
      </div>
      <div>
        <Cart confirmOrder={()=>setStage(stage += 1)} shoppingCart={shoppingCart} stripeProductList={stripeProductList}/>
      </div>
    </div>
  )


  return (
    <div>
      {stage === 0 && <ConfirmCart />}
      {stage === 1 && 
             
      <Elements stripe={stripePromise}>
            <CheckoutForm shoppingCart={shoppingCart} />
      </Elements> 
    }
    </div>
  )
}

