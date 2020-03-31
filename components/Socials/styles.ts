import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from '@material-ui/core/styles';

const styles = makeStyles(({ palette }: Theme) =>
  createStyles({
    wrapper: {
      zIndex: 100,
    },
    socialIcon: {
      marginRight: '1rem',
      marginBottom: '1rem',
      cursor: 'pointer',
      width: '60px !important',
      height: '60px !important',
      transition: 'color 0.2s ease',
      '&:hover': {
        color: palette.primary.light,
      },
    },
    iconContainer: {
      width: '60px !important',
      height: '60px !important',
      display: 'inline-block',
      marginRight: '1rem',
    },
    location: {
      opacity: 0.6,
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
