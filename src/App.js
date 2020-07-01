import React,{useState, useEffect} from 'react';
import Axios from 'axios'
import './App.scss';

import {firestore} from './firebase/firebase'

import Body from './components/Body'
import LandingPage from './components/LandingPage'


import {loadStripe} from '@stripe/stripe-js' //returns a stripe key or something

import {useShoppingCart, useToggle} from './components/utils' // custom hooks & functions




function App() {
  
  
  const [isLoggedIn, toggleLogin] = useToggle(true) //defaults to false


  const shoppingCart = useShoppingCart() 
  const [showCart, toggleShowCart] = useToggle()  //! need to complete for debugging 

   
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



  useEffect(() => {
    const fetchFireStoreData = async() => {
      return await firestore.collection('posts')
    }
    let data = fetchFireStoreData()
    console.log(data)
  }, [])
  



  return isLoggedIn ?(
    <div className="App">
      <Body 
        logoutFunction={toggleLogin} 
        stripePromise={stripePromise} 
        shoppingCart={shoppingCart}
        stripeProductList={stripeProductList}
        />
    </div>
  ):( 
    <div className='App'>
      <LandingPage  loginFunction={toggleLogin}/>
    </div>

  )
}

export default App;
