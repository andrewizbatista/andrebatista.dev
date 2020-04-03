import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from '@material-ui/core/styles';

const iconSize = '2rem !important';

const styles = makeStyles(({ palette }: Theme) =>
  createStyles({
    wrapper: {
      zIndex: 100,
    },
    socialIcon: {
      marginRight: '0.5rem',
      cursor: 'pointer',
      width: iconSize,
      height: iconSize,
      transition: 'color 0.2s ease',
      '&:hover': {
        color: palette.primary.light,
      },
    },
  }),
);

const useStyles = () => styles(useTheme());

export default useStyles;