import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

// Mui
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

// Styles
const useStyles = makeStyles(({  }: Theme) => ({
  socialIcon: {
    marginRight: '1rem',
    cursor: 'pointer',
  },
}));

const SocialFooter = ({ socials }: ISocialFooter) => {
  const classes = useStyles(useTheme());

  const { github, twitter } = socials;

  return (
    <Grid container direction="column">
      <Grid item>
        <Link href={github} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className={classes.socialIcon} icon={faGithub} size="4x" />
        </Link>
        <Link href={twitter} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className={classes.socialIcon} icon={faTwitter} size="4x" />
        </Link>
      </Grid>
      <Grid item>
        <Typography>
          React Developer @{' '}
          <Link href="https://thevirtualforge.com" target="_blank" rel="noopener noreferrer">
            The Virtual Forge
          </Link>
        </Typography>
        <Typography variant="caption">Lisbon, Portugal</Typography>
      </Grid>
    </Grid>
  );
};

export interface ISocialFooter {
  socials: {
    github: string;
    twitter: string;
  };
}

export default SocialFooter;
