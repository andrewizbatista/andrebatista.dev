import React, { useState } from 'react';

// Mui
import Typography from '@material-ui/core/Typography';

// Others
import useStyles from './styles';

const About = ({ me }: AboutProps) => {
  const classes = useStyles();

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
        style={{ opacity: showPhoto ? 0.3 : 0 }}
      />
    </>
  );
};

export interface AboutProps {
  me: Me;
}

export default About;