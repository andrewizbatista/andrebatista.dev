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
      fontSize: '1rem',
      fontWeight: 'bold',
    },
    timelineSubtitle: {
      fontSize: '0.7rem',
    },
  }),
);

const useStyles = () => styles(useTheme());

export default useStyles;
