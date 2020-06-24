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

import {useToggle} from './utils'




export default function Body({logoutFunction, stripePromise, shoppingCart, stripeProductList}) {

  const [checkout, toggleCheckout] = useToggle() //initiate the checkoutProcess
  
  const [stripeProductIndex, setStripeProductIndex] = useState(0) //display current product


  const ProductsCarousel = () => {
    return (
      <>
        <Divider title={"Products"}/>
        <Carousel>
          {stripeProductList.length 
          ?   stripeProductList.map((product, index) => (
              <div key={index} className={'Practice_card'}onClick={()=>setStripeProductIndex(index)}></div>
            ))
          : <div>Loading</div>}
        </Carousel>

      </>
    )
  }

  
  return (
    <>
      
      <Header logoutFunction={logoutFunction} shoppingCart={shoppingCart}/>
      
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

      {checkout === true && 
        <Modal closeModal={toggleCheckout} header={`Checkout: ${stripeProductList[stripeProductIndex].name}`}>
          <Checkout stripePromise={stripePromise} />
        </Modal>}
    </>
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

