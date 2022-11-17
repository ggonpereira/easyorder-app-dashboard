import { ThemeProvider } from 'styled-components';
import { Header } from './components/Header';
import { Orders } from './components/Orders';
import { GlobalStyles } from './styles/global';
import { themes } from './styles/themes';

export const App = () => (
  <ThemeProvider theme={themes.dark}>
    <GlobalStyles />
    <Header />
    <Orders />
  </ThemeProvider>
);
