import {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';


export const useDarkMode = (key, initialValue) => {
  const [isDark, setIsDark, valueSet] = useLocalStorage(key, initialValue);
    useEffect(()=>{ //useEffect can never = anything
      !isDark ? document.body.classList.remove("dark-mode") : document.body.classList.add("dark-mode"); 
 }, [isDark, setIsDark, valueSet]);
  return [isDark, setIsDark, valueSet]
   };











// export const useDarkMode = ()=>{
//  const [isDark, setIsDark, valueSet] = useLocalStorage('dark', false);
//  useEffect=(()=>{
//   if (isDark !== 'dark'){
//     document.querySelector("body").classList.add("dark-mode")
//   } else {
//     document.querySelector("body").classList.remove("dark-mode");
//   }
//   return [isDark, setIsDark, valueSet]

//  }, [setIsDark])
  
// }















// import React, {useEffect} from 'react';
//import {useLocalStorage} from './useLocalStorage';
//import Navbar from './components/Navbar';


// export const useDarkMode = () => {
//   function useEffect(() => {
//    if (darkMode === true ) {
//           document.div.classList.replace('toggle', 'toggle toggled');
//           document.body.classList.add("dark-mode"); 
//         } else {  
//           document.div.classList.replace('toggle toggled', 'toggle');
//           document.body.classList.remove("dark-mode"); 
//         };
//         return [darkMode, toggleMode()]
//                [setDarkMode]}); //useEffect end

//      return toggleMode(); 
//     };






    
//const [darkMode, setDarkMode] = useState(false);

  // const [darkMode, setDarkMode] = useLocalStorage(useState, false);
  // const toggleMode = (e) => {
  //   e.preventDefault();
  //   setDarkMode(!darkMode);
  //   return [darkMode, setDarkMode, toggleMode]
  // };