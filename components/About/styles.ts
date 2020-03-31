import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from '@material-ui/core/styles';

const styles = makeStyles(({}: Theme) =>
  createStyles({
    myUsername: {
      paddingTop: '1rem',
      paddingLeft: '0.5rem',
      cursor: 'default',
      zIndex: 100,
    },
    myName: {
      cursor: 'default',
      opacity: 0.6,
      transition: 'opacity 0.5s ease-out',
      '&:hover': {
        opacity: 1,
      },
      zIndex: 100,
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
  }),
);

const useStyles = () => styles(useTheme());

export default useStyles;
