import { createMuiTheme } from '@material-ui/core/styles';

const muiTheme = createMuiTheme();

export const colors: {
  Primary: string;
  Secondary: string;
  Dark: string;
  Light: string;
  Error: string;
} = {
  Primary: '#14ce78',
  Secondary: '#14ce78',
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
      fontSize: '6rem',
      fontWeight: 'bold',
      letterSpacing: '2px',
      fontFamily: ['Barlow Semi Condensed', 'monospace'].join(','),
      [muiTheme.breakpoints.down('xs')]: {
        fontSize: '4.5rem',
      },
    },
    h2: {
      fontSize: '1.6rem',
      fontWeight: 'normal',
      letterSpacing: '-1px',
      [muiTheme.breakpoints.down('xs')]: {
        fontSize: '1.5rem',
      },
    },
    subtitle1: {
      fontSize: '1rem',
      [muiTheme.breakpoints.down('xs')]: {
        fontSize: '0.8rem',
      },
    },
    subtitle2: {
      fontSize: '0.8rem',
      [muiTheme.breakpoints.down('xs')]: {
        fontSize: '0.8rem',
      },
    },
    fontFamily: ['Share Tech Mono', 'monospace'].join(','),
  },
  overrides: {
    MuiTab: {
      root: {
        minWidth: 'auto !important',
      },
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
});
