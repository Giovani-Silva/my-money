import { createContext, useState } from 'react';

import { darkTheme } from '../styles/themes/dark';
import { defaultTheme } from '../styles/themes/default';

const [theme, setTheme] = useState(defaultTheme);

const themes = { defaultTheme, darkTheme };

const toggleTheme = (theme: any) => {
  setTheme({
    theme,
  });
};
const contextTheme = createContext({
  theme,
});

export  { themes, toggleTheme, contextTheme };
