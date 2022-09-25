import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { TransactionsProvider } from './contexts/TransactionsContext';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      </TransactionsProvider>
    </ThemeProvider>
  );
}

export default App;
