import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';

// Mui
// import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

// Others
import IMe from 'app/entities/Me';

// Styles
const useStyles = makeStyles(({  }: Theme) => ({
  myUsername: {
    paddingTop: '1rem',
    paddingLeft: '0.5rem',
    cursor: 'default',
    zIndex: 100,
  },
  myName: {
    cursor: 'default',
    opacity: 0.6,
    transition: 'opacity 0.5s ease-out',
    '&:hover': {
      opacity: 1,
    },
    zIndex: 100,
  },
  myPhoto: {
    position: 'absolute',
    width: 'auto',
    height: 'auto',
    right: 0,
    bottom: 0,
    opacity: 0,
    transition: 'opacity 0.4s ease-out',
    zIndex: -1,
  },
}));

const About = ({ me }: IAbout) => {
  const classes = useStyles(useTheme());

  const { firstName, lastName, handler } = me;

  const [showPhoto, setShowPhoto] = useState<boolean>(false);
  const showDezze = () => setShowPhoto(true);
  const hideDezze = () => setShowPhoto(false);

  return (
    <>
      <Typography
        variant="h1"
        className={classes.myName}
        onMouseEnter={showDezze}
        onMouseLeave={hideDezze}
        onTouchStart={showDezze}
        onTouchEnd={hideDezze}>
        {firstName}
        <br />
        {lastName}
      </Typography>
      <Typography variant="h2" color="primary" className={classes.myUsername}>
        {` ${handler}`}
      </Typography>
      <img
        src="/static/img/andrewizbatista.png"
        alt="André Batista"
        className={classes.myPhoto}
        style={{ opacity: showPhoto ? 0.2 : 0 }}
      />
    </>
  );
};

export interface IAbout {
  me: IMe;
}

export default About;
