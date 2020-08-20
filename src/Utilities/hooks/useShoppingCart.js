import React, { useState, useContext, createContext } from 'react';
import Axios from 'axios';

// Cart hook that returns a single shoppingCart object
// that has methods within it to add/remove/update price
// TODO i would love to add the methods to the prototype
//      to keep the shoppingCart object cleaner but its not working
//      currently
//! needs documentation!

function useProvideShoppingCart() {
  const [shoppingCart, setCart] = useState({
    list: {},
    price: {},
  });

  // used to calculate prices on the server
  // every time the shoppingCart is updated

  const calculatePrice = (theoreticalList) => Axios.post('/calculatePrice', theoreticalList);

  // can be refactored!
  shoppingCart.returnPrice = async () => {
    const res = await calculatePrice(shoppingCart.list);
    const { data } = res;
    return data;
  };

  shoppingCart.incrementItem = async (itemID, quanity = 1) => {
    // if no item exists
    if (shoppingCart.list[itemID] === undefined) {
      const newList = { ...shoppingCart.list, [itemID]: quanity };
      const res = await calculatePrice(newList);
      const { data } = res;
      const newState = { ...shoppingCart, list: newList, price: data };
      setCart(newState);
    } else {
      const newList = { ...shoppingCart.list, [itemID]: shoppingCart.list[itemID] += quanity };
      const res = await calculatePrice(newList);
      const { data } = res;
      const newState = { ...shoppingCart, list: newList, price: data };
      setCart(newState);
    }
    console.log(shoppingCart, 'I Added an Item to the shoppingCart!');
  };

  shoppingCart.decrementItem = async (itemID, quanity = 1) => {
    // if delete item automatically
    if (shoppingCart.list[itemID] === 1) {
      const newList = { ...shoppingCart.list };
      delete newList[itemID];
      const res = await calculatePrice(newList);
      const { data } = res;
      const newState = { ...shoppingCart, list: newList, price: data };
      setCart(newState);
    } else {
      const newList = { ...shoppingCart.list, [itemID]: shoppingCart.list[itemID] -= quanity };
      const res = await calculatePrice(newList);
      const { data } = res;
      const newState = { ...shoppingCart, newList, price: data };
      setCart(newState);
    }
    console.log(shoppingCart, 'I deleted an item in the shoppingCart!');
  };

  shoppingCart.clearCart = () => {
    setCart({ ...shoppingCart, list: {}, price: {} });
  };

  return shoppingCart;
}
// react context
const shoppingCartContext = createContext();
// Hook for child components to get the cart obj
// and re render when it changes
export default function useShoppingCart() {
  return useContext(shoppingCartContext);
}
// provider that wraps the app and makes cart obj
// available to any child component

export function ProvideShoppingCart({ children }) {
  const shoppingObj = useProvideShoppingCart();
  return <shoppingCartContext.Provider value={shoppingObj} >{children}</shoppingCartContext.Provider>
}
