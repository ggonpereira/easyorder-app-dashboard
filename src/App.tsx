import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global';
import { themes } from './styles/themes';

export const App = () => (
  <ThemeProvider theme={themes.dark}>
    <GlobalStyles />
  </ThemeProvider>
);
