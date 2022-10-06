import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { TitleProvider } from './contexts/TitleContext';
import { TransactionsProvider } from './contexts/TransactionsContext';
import { WalletsProvider } from './contexts/WalletsContext';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TitleProvider>
        <WalletsProvider>
          <TransactionsProvider>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </TransactionsProvider>
        </WalletsProvider>
      </TitleProvider>
    </ThemeProvider>
  );
}

export default App;
