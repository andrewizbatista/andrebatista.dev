import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from '@material-ui/core/styles';

const styles = makeStyles(({}: Theme) =>
  createStyles({
    wrapper: {
      maxWidth: '50vw',
    },
    timelineTitle: {
      fontSize: '1.2rem',
      fontWeight: 'normal',
      textTransform: 'none',
    },
    forMoreDetails: {
      marginTop: '2rem',
      marginLeft: '2rem',
    },
  }),
);

const useStyles = () => styles(useTheme());

export default useStyles;
