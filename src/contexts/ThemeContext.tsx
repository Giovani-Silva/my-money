import React, { createContext, useContext, useReducer, useState } from 'react';

import defaultTheme from '../styles/themes/default';
import darkTheme from '../styles/themes/dark';


const [theme, setTheme ] = useState(defaultTheme);

const themes = { defaultTheme, darkTheme }

 const toggleTheme = (theme) => {
  setTheme({
    theme
  });
 };
const contextTheme = createContext({
  theme,
});

export { themes, toggleTheme, contextTheme };
