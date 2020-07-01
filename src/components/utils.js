import {useState, useCallback, useRef, useEffect, useLayoutEffect} from 'react'
import Axios from 'axios'  

// TODO  https://usehooks.com/useAuth/ + firebase




// generic inclusive random function
// random(1, 101)
export const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;



// taken from dan abramov
// save reference of interval between renders
export const useInterval = (callback, delay) => { 
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  })

  useEffect(() => {
    function tick(){
      savedCallback.current();
    }

    let id = setInterval(tick, delay);
    return () => clearInterval(id)
  }, [delay])

}




//taken from joshwcomeau
export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => {
    setValue(v => !v);
  }, []);
  return [value, toggle];
}



// Cart hook that returns a single cart object 
// that has methods within it to add/remove/update price
// TODO i would love to add the methods to the prototype 
  // to keep the cart object cleaner but its not working 
  // currently
export function useShoppingCart(){  //! needs documentation!

  const [cart, setCart] = useState({
    list: {},
    price: {}
  })

  // used to calculate prices on the server 
  // every time the cart is updated

  let calculatePrice = (theoreticalList) => {
    return  Axios.post('/calculatePrice', theoreticalList)
  }

  
  // can be refactored!
  cart.returnPrice = async() => {
    let res = await calculatePrice(cart.list)
    let {data} = res
    return data
  }


  cart.incrementItem =  async (itemID, quanity = 1) => {
    if(cart.list[itemID] === undefined){ //if no item exists
      
      let newList = {...cart.list, [itemID]: quanity}
      let res = await calculatePrice(newList) 
      let {data} = res
      let newState = {...cart, list: newList, price: data} 
      setCart(newState)
      

    } else {

      let newList = {...cart.list, [itemID]: cart.list[itemID] += quanity}
      let res = await calculatePrice(newList)
      let {data} = res
      let newState = {...cart, list: newList, price: data}
      setCart(newState)
    
    }
    console.log(cart, 'I Added an Item to the cart!')
  }

  cart.decrementItem = async (itemID, quanity = 1) => {
    if(cart.list[itemID] === 1){ //if delete item automatically
      
      let newList = {...cart.list}
      delete newList[itemID]
      let res = await calculatePrice(newList)
      let {data} = res
      let newState = {...cart, list: newList, price: data}
      setCart(newState)

    } else {

      let newList = {...cart.list, [itemID]: cart.list[itemID] -= quanity}
      let res = await calculatePrice(newList)
      let {data} = res
      let newState = {...cart, newList, price: data}
      setCart(newState)

    }
    console.log(cart, 'I deleted an item in the cart!')
  }


  cart.clearCart = () => {
    setCart({...cart, list:{}, price: {}})
  }



  return cart
}


// might need to debounce or throttle if the 
// profiler is showing we are making mistakes
// taken from joshwcomeau
// ! https://usehooks.com/useLocalStorage/ research this!
export const useStickyState = (defaultValue, key) =>{  
  const [value, setValue] = useState(() => {
    const stickyValue = window.localStorage.getItem(key)

    return stickyValue !== null 
      ? JSON.parse(stickyValue)
      : defaultValue
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value])

  return [value, setValue]
}