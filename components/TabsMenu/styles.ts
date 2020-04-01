import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from '@material-ui/core/styles';

const styles = makeStyles(({}: Theme) =>
  createStyles({
    wrapper: {
      marginTop: '1rem',
      marginBottom: '1rem',
    },
  }),
);

const useStyles = () => styles(useTheme());

export default useStyles;
