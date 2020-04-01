import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from '@material-ui/core/styles';

const styles = makeStyles(({ spacing }: Theme) =>
  createStyles({
    skillWrapper: {
      marginTop: '1rem',
    },
    columnSpacing: {
      paddingRight: spacing(4),
    },
  }),
);

const useStyles = () => styles(useTheme());

export default useStyles;
