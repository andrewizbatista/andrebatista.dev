import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from '@material-ui/core/styles';

const styles = makeStyles(({ palette }: Theme) =>
  createStyles({
    wrapper: {
      maxWidth: '50vw',
    },
    timelineTitle: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
    },
    timelineCompany: {
      fontSize: '0.9rem',
      color: palette.primary.main,
    },
    timelineDate: {
      fontSize: '0.7rem',
    },
  }),
);

const useStyles = () => styles(useTheme());

export default useStyles;
