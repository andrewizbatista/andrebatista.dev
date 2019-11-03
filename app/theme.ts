import { createMuiTheme } from '@material-ui/core/styles';

export const colors: {
  Primary: string;
  Secondary: string;
  Dark: string;
  Light: string;
  Error: string;
} = {
  Primary: '#ec4765',
  Secondary: '#00f99e',
  Dark: '#333',
  Light: '#fff',
  Error: '#ff4400',
};

export const theme = createMuiTheme({
  palette: {
    type: 'dark',
    background: {
      default: colors.Dark,
    },
    primary: {
      main: colors.Primary,
    },
    secondary: {
      main: colors.Secondary,
    },
    error: {
      main: colors.Error,
      // light:
      // dark:
      // contrastText:
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
