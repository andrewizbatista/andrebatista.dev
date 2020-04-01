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
    skillName: {
      paddingBottom: '0.4rem',
    },
    columnSpacing: {
      paddingRight: spacing(6),
    },
  }),
);

const useStyles = () => styles(useTheme());

export default useStyles;
