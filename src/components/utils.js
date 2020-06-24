  import {useState, useCallback, useRef, useEffect, useLayoutEffect, useReducer} from 'react'
  
  
export const useInterval = (callback, delay) => { //taken from dan abramov
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





export function useToggle(initialValue = false) { //taken from joshwcomeau
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => {
    setValue(v => !v);
  }, []);
  return [value, toggle];
}






export function useShoppingCart(state, action){


  const [cart, setCart] = useState({})
  
  
  
  cart.AddItem = (itemID) => {
    setCart({...cart, [itemID]: 1}) 
    console.log(cart.prototype)
  }
  cart.DeleteItem = (itemID) => {
    let newObj = cart
    delete newObj[itemID]
    setCart(newObj)
    console.log(cart)
  }
  cart.incrementItem = (itemID) => {
    if(cart[itemID] === undefined){
      cart.AddItem(itemID)
    } else {
      setCart({...cart, [itemID]: cart[itemID] += 1})
      console.log(cart)
    }
  }
  cart.decrementItem = (itemID) => {
    if(cart[itemID] === 0){
      cart.DeleteItem(itemID)
    } else {
      setCart({...cart, [itemID]: cart[itemID] -= 1})
      console.log(cart)
    }
  }

  return cart
}








export const random = (min, max) =>               //(inclusive) random(1, 101)
  Math.floor(Math.random() * (max - min)) + min;



// might need to debounce or throttle if the profiler is showing we are making mistakes
// ! https://usehooks.com/useLocalStorage/ research this!
export const useStickyState = (defaultValue, key) =>{  //taken from joshwcomeau
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






//! https://usehooks.com/useAuth/







/* Need To solve This */
export const useRect = (ref) => {
  const [rect, setRect] = useState(getRect(ref ? ref.current : null))

  const handleResize = useCallback(() => {
    if (!ref.current) {
      return
    }

    // Update client rect
    setRect(getRect(ref.current))
  }, [ref])

  useLayoutEffect(() => {
    const element = ref.current
    if (!element) {
      return
    }

    handleResize()

    if (typeof ResizeObserver === 'function') {
      let resizeObserver = new ResizeObserver(() => handleResize())
      resizeObserver.observe(element)

      return () => {
        if (!resizeObserver) {
          return
        }

        resizeObserver.disconnect()
        resizeObserver = null
      }
    } else {
      // Browser support, remove freely
      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [ref.current])

  return rect
}

function getRect(element) {
  if (!element) {
    return {
      bottom: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0,
      width: 0,
    }
  }

  return element.getBoundingClientRect()
}