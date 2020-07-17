import {
  useState, useCallback, useRef, useEffect,
} from 'react';

// generic inclusive random function
// random(1, 101)
export const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

// taken from dan abramov
// save reference of interval between renders
export const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
};

// taken from joshwcomeau
export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => {
    setValue((v) => !v);
  }, []);
  return [value, toggle];
}

// might need to debounce or throttle if the
// profiler is showing we are making mistakes
// taken from joshwcomeau
// ! https://usehooks.com/useLocalStorage/ research this!
export const useStickyState = (defaultValue, key) => {
  const [value, setValue] = useState(() => {
    const stickyValue = window.localStorage.getItem(key);

    return stickyValue !== null
      ? JSON.parse(stickyValue)
      : defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
