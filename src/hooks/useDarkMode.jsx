import React, {useState, useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';


export const useDarkMode = ()=>{
 const [isDark, setisDark] = useLocalStorage('dark');
 useEffect=(()=>{
  if (isDark == 'dark'){
    document.body.classList.add("dark-mode")
  } else {
    document.body.classList.remove("dark-mode");
  }
  return [isDark, setisDark]

 }, [useLocalStorage])
  
}















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