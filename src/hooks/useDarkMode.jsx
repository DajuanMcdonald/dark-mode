import React, {useEffect} from 'react';
import useLocalStorage from './useLocalStorage';

export const useDarkMode = () => {
   const [someValue, setSomeValue] = useLocalStorage('dots')
};

useEffect(() => {
    useLocalStorage ? console.log('dark-mode') : console.log('not-dark-mode')
}, [ontoggle]);