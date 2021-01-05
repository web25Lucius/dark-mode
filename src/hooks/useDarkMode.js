
import {useLocalStorage} from './useLocalStorage';
import React, {useEffect, useState} from 'react';

export const useDarkMode = (key, initialValue) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect (() => {
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode);
  };
    return className = {darkMode ? 'toggle toggled' : 'toggle'};
  }, [darkMode]);


  return [darkMode, setDarkMode, toggleMode];
  
};





// export const useInput = (key, initialValue) => {
//   const [value, setValue] = useLocalStorage(key, initialValue);
//   const handleChanges = updatedValue => {
//     setValue(updatedValue);
//   };
//   return [value, setValue, handleChanges];
// };










/*import {useEffect} from "react";

export const useDarkToggle = initialValue => {
    const [value, setValue] = useState(initialValue);
    const handleChanges = updatedValue => {
      setValue(updatedValue);
    };
    return [value, setValue, handleChanges];
  };


  .dark-mode__toggle  */