import React, { useState, useEffect } from 'react';
import './App.scss';
import Axios from 'axios';
// Pages
import { loadStripe } from '@stripe/stripe-js'; // returns a stripe key or something
import Body from './components/Body';
import LandingPage from './components/LandingPage';
// Functions
import { useShoppingCart } from './components/utils'; // custom hooks & functions
import { useAuth } from './firebase/Auth';
// import {fireStore} from './firebase/firebase'
import Theme from './styles/Theme';

function App() {
  const auth = useAuth();

  const shoppingCart = useShoppingCart();
  const [stripePromise, setStripePromise] = useState(null); // stripe promise return stripe key
  const [stripeProductList, setStripeProductList] = useState([]); // all products from stripe
  useEffect(() => {
    const fetchData = async () => {
      const response = await Axios.get('/get_stripe_api_key');
      setStripePromise(loadStripe(response.data));
    };
    const fetchProduct = async () => {
      try {
        const response = await Axios.get('/all_products_and_prices');
        console.log(response.data.data, 'I RECIEVED DATA FROM THE API');
        setStripeProductList(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
    fetchProduct();
  }, []);

  console.log(auth.user, 'I AM THE USER');

  return auth.user ? (
    <Theme>
      <div className="App">
        <Body
          stripePromise={stripePromise}
          shoppingCart={shoppingCart}
          stripeProductList={stripeProductList}
        />
      </div>
    </Theme>
  ) : (
    <Theme>
      <div className="App">
        <LandingPage />
      </div>
    </Theme>
  );
}

export default App;
