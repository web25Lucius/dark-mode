import {useState} from 'react';

export const useLocalStorage = ( key, initialValue ) => {
const [mode, setMode] = useState (()=>{
    const keyValue = window.localStorage.getItem(key);
})

}