import React,{useState} from 'react'




import ProductPage from './ProductPage'

import Modal from './Elements/Modal'
import About from './About'
import Header from './Header'
import Footer from './Footer'
import Ticker from './Ticker'
import Checkout from './Checkout' 
import Profile from './Profile'
import Cart from './Cart'

import {useToggle} from './utils'





export default function Body({stripePromise, shoppingCart, stripeProductList}) {

  const [checkout, toggleCheckout] = useToggle() //initiate the checkoutProcess
  const [shoppingCartIsShowing, toggleShoppingCart] = useToggle() // toggle the shopping cart
  const [stripeProductIndex, setStripeProductIndex] = useState(0) //display current product
  const [page, setPage] = useState('profile_page')

  const [introduction, toggleIntroduction] = useToggle(true)
  
  return (
    <div className='body'>
      <Header toggleShoppingCart={toggleShoppingCart} toggleCheckout={toggleCheckout} setPage={setPage}/>
      <Ticker />

      {page === 'product_page' 
        && <ProductPage 
            setStripeProductIndex={setStripeProductIndex}
            stripeProductList={stripeProductList}
            stripeProduct={stripeProductList[stripeProductIndex]} 
            toggleCheckout={toggleCheckout} 
            shoppingCart={shoppingCart}  
            />
      }
      {page === 'profile_page'
        && <Profile />
      }
      {page === 'about_page'
        && <About />
      }
 
      <Footer />


      {introduction &&   
        <Modal closeModal={toggleIntroduction}>
          <About />
        </Modal>}


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

