import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from '@material-ui/core/styles';

const styles = makeStyles(({}: Theme) =>
  createStyles({
    sectionSpacing: {
      marginTop: '2rem',
    },
    followSpotify: {
      display: 'block',
      marginTop: '1rem',
    },
  }),
);

const useStyles = () => styles(useTheme());

export default useStyles;
