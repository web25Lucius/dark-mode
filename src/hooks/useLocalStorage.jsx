import {useState} from 'react';

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(()=>{
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });
  const setValue = (value)=>{
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  return [storedValue, setStoredValue, setValue]; 
};



// const { useState } = require("react")
// import {useState} from 'react';

// export const useLocalStorage = (key, initialValue) => {
//     const [storedValue, setStoredValue] = useState(() => {
//     const item = window.localStorage.getItem(key);
//       return item ? JSON.parse(item) : initialValue;
//     });
//     const setValue = value => {
//       setStoredValue(value);
//       window.localStorage.setItem(key, JSON.stringify(value));
//     };
//     return [storedValue, setValue];
//   };




// import {useState} from 'react';

// export const useLocalStorage = ( key, initialValue ) => {
// const [mode, setMode] = useState (()=>{
//     const keyValue = window.localStorage.getItem(key);
// })

// }