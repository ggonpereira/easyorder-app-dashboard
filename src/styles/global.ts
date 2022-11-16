import { createGlobalStyle } from 'styled-components';

import GeneralSansRegularWoff2 from '../assets/fonts/GeneralSans-Regular.woff2';
import GeneralSansRegularWoff from '../assets/fonts/GeneralSans-Regular.woff';
import GeneralSansRegularTtf from '../assets/fonts/GeneralSans-Regular.ttf';
import GeneralSansMediumWoff2 from '../assets/fonts/GeneralSans-Medium.woff2';
import GeneralSansMediumWoff from '../assets/fonts/GeneralSans-Medium.woff';
import GeneralSansMediumTtf from '../assets/fonts/GeneralSans-Medium.ttf';
import GeneralSansSemiboldWoff2 from '../assets/fonts/GeneralSans-Semibold.woff2';
import GeneralSansSemiboldWoff from '../assets/fonts/GeneralSans-Semibold.woff';
import GeneralSansSemiboldTtf from '../assets/fonts/GeneralSans-Semibold.ttf';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'GeneralSans';
    font-weight: 400;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${GeneralSansRegularWoff2}') format('woff2'),
         url('${GeneralSansRegularWoff}') format('woff'),
         url('${GeneralSansRegularTtf}') format('truetype');
  }

  @font-face {
    font-family: 'GeneralSans';
    font-weight: 500;
    font-display: 'swap';
    font-style: 'normal';
    src: url('${GeneralSansMediumWoff2}') format('woff2'),
         url('${GeneralSansMediumWoff}') format('woff'),
         url('${GeneralSansMediumTtf}') format('truetype');
  }

  @font-face {
    font-display: 'swap';
    font-family: 'GeneralSans';
    font-style: 'normal';
    font-weight: 600;
    src: url('${GeneralSansSemiboldWoff2}') format('woff2'),
         url('${GeneralSansSemiboldWoff}') format('woff'),
         url('${GeneralSansSemiboldTtf}') format('truetype');
  }

  * {
    box-sizing: border-box;
    font-family: 'GeneralSans', sans-serif;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${({ theme }) => theme.colors.gray[100]};
    color: ${({ theme }) => theme.colors.gray[500]};
  }

  button {
    color: ${({ theme }) => theme.colors.gray[500]};
    cursor: pointer;
    font-size: 1rem;
  }
`;
