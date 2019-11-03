import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';

// Mui
// import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Others
import IMe from 'app/entities/Me';

// Styles
const useStyles = makeStyles(({  }: Theme) => ({
  handler: {
    paddingTop: '1rem',
  },
}));

const About = ({ me }: IAbout) => {
  const classes = useStyles(useTheme());

  const { firstName, lastName, handler } = me;

  return (
    <>
      <Typography variant="h1">
        {firstName}
        <br />
        {lastName}
      </Typography>
      <Typography variant="h2" color="primary" className={classes.handler}>
        {` ${handler}`}
      </Typography>
    </>
  );
};

export interface IAbout {
  me: IMe;
}

export default About;
