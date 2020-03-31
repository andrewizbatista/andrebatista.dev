import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from '@material-ui/core/styles';

const styles = makeStyles(({ breakpoints }: Theme) =>
  createStyles({
    sidebar: {
      backgroundColor: 'rgba(0,0,0,0.5)',
      height: '100vh',
      '& div': {
        height: '99%',
      },
    },
    content: {
      boxShadow: '-5px 0px 3px 0px rgba(0,0,0,0.5)',
      height: '100vh',
      paddingLeft: '2rem',
      [breakpoints.down('xs')]: {
        paddingLeft: '1rem',
      },
    },
  }),
);

const useStyles = () => styles(useTheme());

export default useStyles;
