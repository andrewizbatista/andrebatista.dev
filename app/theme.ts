import { createMuiTheme } from '@material-ui/core/styles';

const muiTheme = createMuiTheme();

export const colors: {
  Primary: string;
  Secondary: string;
  Dark: string;
  Light: string;
  LightDarker: string;
  Error: string;
} = {
  Primary: '#14ce78',
  Secondary: '#14ce78',
  Dark: '#333',
  Light: '#e2e2e2',
  LightDarker: '#a1a1a1',
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
    text: {
      primary: colors.Light,
      secondary: colors.LightDarker,
    },
  },
  typography: {
    h1: {
      fontSize: '5rem',
      fontWeight: 'bold',
      letterSpacing: '2px',
      fontFamily: ['Barlow Semi Condensed', 'monospace'].join(','),
      [muiTheme.breakpoints.down('xs')]: {
        fontSize: '4rem',
      },
    },
    h2: {
      fontSize: '1.4rem',
      fontWeight: 'normal',
      letterSpacing: '-1px',
      [muiTheme.breakpoints.down('xs')]: {
        fontSize: '1.5rem',
      },
    },
    subtitle1: {
      fontSize: '1.1rem',
      fontWeight: 'bold',
      // textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    subtitle2: {
      fontSize: '0.9rem',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },
    body1: {
      fontSize: '1rem',
    },
    body2: {
      fontSize: '0.9rem',
    },
    fontFamily: ['Barlow Semi Condensed', 'monospace'].join(','),
  },
  overrides: {
    MuiTab: {
      root: {
        minWidth: 'auto !important',
        letterSpacing: '1px',
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: 'transparent',
      },
    },
    MuiStepper: {
      root: {
        padding: 0,
      },
    },
    MuiStepLabel: {
      iconContainer: {
        paddingRight: '1.8rem',
      },
    },
    MuiStepContent: {
      root: {
        paddingLeft: '2.5rem',
      },
    },
    MuiStepButton: {
      vertical: {
        textAlign: 'left',
      },
    },
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
});
