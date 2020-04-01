import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from '@material-ui/core/styles';

const styles = makeStyles(({ palette }: Theme) =>
  createStyles({
    myTitle: {
      paddingLeft: '0.2rem',
      cursor: 'default',
      zIndex: 100,
    },
    myName: {
      display: 'inline-block',
      cursor: 'pointer',
      opacity: 0.6,
      transition: 'opacity 0.5s ease-out',
      userSelect: 'none',
      '&:hover': {
        opacity: 1,
      },
      zIndex: 100,
    },
    sayHi: {
      userSelect: 'none',
      display: 'inline-block',
      paddingLeft: '1rem',
      transition: 'opacity 0.5s ease-out',
      opacity: 1,
    },
    myPhoto: {
      position: 'absolute',
      width: 'auto',
      height: 'auto',
      right: 0,
      bottom: 0,
      opacity: 0,
      transition: 'opacity 0.4s ease-out',
      zIndex: -1,
    },
    company: {
      transition: 'color 0.2s ease',
      '&:hover': {
        textDecoration: 'none',
        color: palette.primary.light,
      },
    },
  }),
);

const useStyles = () => styles(useTheme());

export default useStyles;
