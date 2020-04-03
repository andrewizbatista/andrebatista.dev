import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from '@material-ui/core/styles';

const styles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    wrapper: {
      height: '100vh',
    },
    spacingTop: {
      paddingTop: spacing(5),
    },
    spacingBottom: {
      paddingBottom: spacing(2),
    },
  }),
);

const useGlobalStyles = () => styles(useTheme());

export default useGlobalStyles;
