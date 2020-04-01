import React, { useState } from 'react';

// Mui
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

// Others
import dataMe from 'app/data/me';
import commaSeparatedStrings from 'app/helpers/commaSeparatedStrings';
import useStyles from './styles';

const About = ({}: AboutProps) => {
  const classes = useStyles();

  return (
    <Grid container direction="column" alignItems="flex-start">
      <Grid item md={8}>
        <Typography variant="subtitle1">About Me</Typography>
        <Typography variant="body2">{dataMe.about}</Typography>
      </Grid>
      <Grid item md={5} className={classes.sectionSpacing}>
        <Typography variant="subtitle1" color="primary">
          Games
        </Typography>
        <Typography variant="body2">
          {`${commaSeparatedStrings(dataMe.games)}...`}
        </Typography>
      </Grid>
      <Grid item md={5} className={classes.sectionSpacing}>
        <Typography variant="subtitle1" color="primary">
          Shows
        </Typography>
        <Typography variant="body2">
          {`${commaSeparatedStrings(dataMe.shows)}...`}
        </Typography>
      </Grid>
      <Grid item md={5} className={classes.sectionSpacing}>
        <Typography variant="subtitle1" color="primary">
          Music
        </Typography>
        <Typography variant="body2">
          {`${commaSeparatedStrings(dataMe.music)}...`}
        </Typography>
        <Typography variant="caption" className={classes.followSpotify}>
          Follow me on{' '}
          <Link
            href={dataMe.socials.spotify}
            target="_blank"
            rel="noopener noreferrer"
          >
            Spotify
          </Link>
          , I have 50+ public playlists.
        </Typography>
      </Grid>
    </Grid>
  );
};

export interface AboutProps {}

export default About;
