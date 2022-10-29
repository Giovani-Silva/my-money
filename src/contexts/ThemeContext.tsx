import React, { createContext, useContext, useReducer } from 'react';

import defaultTheme from '../styles/themes/default';
import darkTheme from '../styles/themes/dark';

export default React.createContext({
  theme: dark,
});
