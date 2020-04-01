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
    forMoreDetails: {
      marginTop: '2rem',
      marginLeft: '2rem',
    },
  }),
);

const useStyles = () => styles(useTheme());

export default useStyles;
