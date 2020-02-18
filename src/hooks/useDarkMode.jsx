import {useEffect} from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (e) => {
   const [darkMode, setDarkMode] = useLocalStorage('darkmode', e);


useEffect(() => {
    darkMode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')
}, [darkMode]);

   return [darkMode, setDarkMode];

};

export default useDarkMode;

