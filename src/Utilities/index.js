import {
  useState, useEffect,
} from 'react';

// generic inclusive random function
// random(1, 101)
export const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

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
