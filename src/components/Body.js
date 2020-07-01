import React,{useState} from 'react'



import ChartMedium from './Charts/ChartMedium.js'
import ProductPage from './ProductPage'
import Divider from './Elements/Divider'
import Modal from './Elements/Modal'
import About from './About'
import Header from './Header'
import Footer from './Footer'
import Ticker from './Ticker'
import Checkout from './Checkout' 
import Carousel from './Elements/Carousel'
import Cart from './Cart'

import {useToggle} from './utils'




export default function Body({logoutFunction, stripePromise, shoppingCart, stripeProductList}) {

  const [checkout, toggleCheckout] = useToggle() //initiate the checkoutProcess
  const [shoppingCartIsShowing, toggleShoppingCart] = useToggle() // toggle the shopping cart


  const [stripeProductIndex, setStripeProductIndex] = useState(0) //display current product


  const ProductsCarousel = () => {
    return (
      <>
        <Divider title={"Products"}/>
        <Carousel>
          {stripeProductList.length 
          ?   stripeProductList.map((product, index) => (
            <li key={index}  className='Carousel_Item' onClick={()=>setStripeProductIndex(index)}>
              <div className='Carousel_item_body'>
                <picture  className='Carousel_Picture' >
                  <source srcSet={product.images[0]} media="(min-width: 1024px)"/>
                  <img src={product.images[0]} alt='carousel_image'/>
                </picture>
                <div>
                  <div>{product.name}</div>
                  <div>${(product.price.unit_amount / 100).toFixed(2)}</div>
                </div>
              </div>
            </li>
            ))
          : <div>Loading</div>}
        </Carousel>

      </>
    )
  }

  
  return (
    <div className='body'>
      
      <Header logoutFunction={logoutFunction} toggleShoppingCart={toggleShoppingCart} toggleCheckout={toggleCheckout} />
      
      <Ticker />
      <About />

      
      <ProductsCarousel  stripeProductList={stripeProductList} />
      
      <ProductPage 
        stripeProduct={stripeProductList[stripeProductIndex]} 
        toggleCheckout={toggleCheckout} 
        shoppingCart={shoppingCart}  
        />
 

      <Donation />
      <Footer />
      {shoppingCartIsShowing &&   
        <Modal closeModal={toggleShoppingCart}>
          <Cart shoppingCart={shoppingCart} stripeProductList={stripeProductList} toggleCheckout={toggleCheckout}/>
        </Modal>}

      {checkout && 
        <Modal closeModal={toggleCheckout} header={`Checkout: ${stripeProductList[stripeProductIndex].name}`}>
          <Checkout stripePromise={stripePromise} shoppingCart={shoppingCart} stripeProductList={stripeProductList} />
        </Modal>}
    </div>
  )
}

const Donation = () => {
  /* Goal of 1k */
  return(
    <>
      <Divider title={"Donation"}/>
      <ChartMedium />
    </>
  )
}

