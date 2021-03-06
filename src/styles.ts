import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from '@material-ui/core/styles';

const styles = makeStyles(({}: Theme) =>
  createStyles({
    wrapper: {
      height: '100vh',
    },
    footer: {
      marginTop: 'auto',
    },
  }),
);

const useGlobalStyles = () => styles(useTheme());

export default useGlobalStyles;
