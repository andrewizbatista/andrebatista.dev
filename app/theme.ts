import { styled } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: '#333',
    },
    primary: {
      main: '#ec4765',
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#ff4400',
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    error: {
      main: '#ff4400',
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  },
  typography: {
    h1: {
      fontSize: '8rem',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 'normal',
      letterSpacing: '-1px',
    },
    fontFamily: ['Roboto Mono', 'monospace'].join(','),
  },
  overrides: {},
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
});

export const GlobalStyles = styled('div')({
  height: '100vh',
  width: '100vw',
  backgroundImage: 'url(static/andrebatista.png)',
  backgroundPosition: 'right',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
});

// background: rgba(0, 249, 158, 0.99);
// color: #333;
