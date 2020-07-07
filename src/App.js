import React,{useState, useEffect} from 'react';
import './App.scss';
import Axios from 'axios'

import Body from './components/Body'
import LandingPage from './components/LandingPage'


import {useShoppingCart} from './components/utils' // custom hooks & functions


import {loadStripe} from '@stripe/stripe-js' //returns a stripe key or something

import {useAuth} from './firebase/Auth'
import {fireStore} from './firebase/firebase'




function App() {

  
  const auth = useAuth()



  const shoppingCart = useShoppingCart() 
  
  const [stripePromise, setStripePromise] = useState(null) // stripe promise return stripe key
  const [stripeProductList, setStripeProductList] = useState([]) // all products from stripe
  
  useEffect(()=>{
    const fetchData = async() =>{
      let response = await Axios.get("/get_stripe_api_key") 
      setStripePromise(loadStripe(response.data))
    }
    const fetchProduct = async() =>{
      try{
        let response = await Axios.get(`/all_products_and_prices`)
        console.log(response.data.data)
        setStripeProductList(response.data.data)
        
      }catch(error){
        console.log(error)
      }
    }
    
    fetchData()
    fetchProduct()
  }, [])

 
  


  console.log(auth.user)
  return auth.user ?(
    <div className="App">
      <Body 
        stripePromise={stripePromise} 
        shoppingCart={shoppingCart}
        stripeProductList={stripeProductList}
      />
    </div>
  ):( 
    <div className='App'>
      <LandingPage/>
    </div>

  )
}

export default App;
