import React from 'react';
import {useDarkMode} from '../hooks/useDarkMode';


const Navbar = () => {
  const initialValue = false;
  const [darkMode, setDarkMode, valueSet] = useDarkMode('darkMode', initialValue);
  const toggleMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
    return [darkMode, setDarkMode, valueSet, toggleMode]
  };
  return (
    <nav className="navbar">
         <h1>Crypto Tracker</h1>
           <div className="dark-mode__toggle">
             <div
               onClick={toggleMode}
               className={darkMode ? 'toggle toggled' : 'toggle'}
             />
           </div>
         </nav>
  )
};

export default Navbar;







  //   <nav className="navbar">
  //     <h1>Crypto Tracker</h1>
  //     <div className="dark-mode__toggle">
  //       <div 
  //            onClick={toggleMode} 
  //            className={useDarkMode}>
  //       </div>
  //     </div>
  //   </nav>
  // );



 //const [darkMode, setDarkMode] = useState(false);
  // const toggleMode = e => {
  //   e.preventDefault();
  //   setDarkMode(!darkMode);
  //   return [darkMode, setDarkMode, toggleMode]
  // };


// const Navbar = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const toggleMode = e => {
//     e.preventDefault();
//     setDarkMode(!darkMode);
//   };
//   return (
//     <nav className="navbar">
//       <h1>Crypto Tracker</h1>
//       <div className="dark-mode__toggle">
//         <div
//           onClick={toggleMode}
//           className={darkMode ? 'toggle toggled' : 'toggle'}
//         />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
