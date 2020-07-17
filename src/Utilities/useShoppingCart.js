import { useState } from 'react';
import Axios from 'axios';

// Cart hook that returns a single cart object
// that has methods within it to add/remove/update price
// TODO i would love to add the methods to the prototype
//      to keep the cart object cleaner but its not working
//      currently
//! needs documentation!
function useShoppingCart() {
  const [cart, setCart] = useState({
    list: {},
    price: {},
  });

  // used to calculate prices on the server
  // every time the cart is updated

  const calculatePrice = (theoreticalList) => Axios.post('/calculatePrice', theoreticalList);

  // can be refactored!
  cart.returnPrice = async () => {
    const res = await calculatePrice(cart.list);
    const { data } = res;
    return data;
  };

  cart.incrementItem = async (itemID, quanity = 1) => {
    // if no item exists
    if (cart.list[itemID] === undefined) {
      const newList = { ...cart.list, [itemID]: quanity };
      const res = await calculatePrice(newList);
      const { data } = res;
      const newState = { ...cart, list: newList, price: data };
      setCart(newState);
    } else {
      const newList = { ...cart.list, [itemID]: cart.list[itemID] += quanity };
      const res = await calculatePrice(newList);
      const { data } = res;
      const newState = { ...cart, list: newList, price: data };
      setCart(newState);
    }
    console.log(cart, 'I Added an Item to the cart!');
  };

  cart.decrementItem = async (itemID, quanity = 1) => {
    // if delete item automatically
    if (cart.list[itemID] === 1) {
      const newList = { ...cart.list };
      delete newList[itemID];
      const res = await calculatePrice(newList);
      const { data } = res;
      const newState = { ...cart, list: newList, price: data };
      setCart(newState);
    } else {
      const newList = { ...cart.list, [itemID]: cart.list[itemID] -= quanity };
      const res = await calculatePrice(newList);
      const { data } = res;
      const newState = { ...cart, newList, price: data };
      setCart(newState);
    }
    console.log(cart, 'I deleted an item in the cart!');
  };

  cart.clearCart = () => {
    setCart({ ...cart, list: {}, price: {} });
  };

  return cart;
}

export default useShoppingCart;
