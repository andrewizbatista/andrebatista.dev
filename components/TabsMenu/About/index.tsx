import React from 'react';
import moment from 'moment';

// Components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const About = ({ me }: AboutProps) => {
  const lazyDate = moment('2020-03-30T00:00:00.000Z');
  const lazyDateDiff = moment().diff(lazyDate, 'days');

  return (
    <Grid container direction="column" alignItems="flex-start">
      <Grid item md={4}>
        <Typography variant="subtitle2">{me.about}</Typography>
        <Typography
          variant="caption"
          color="textSecondary"
        >{`${lazyDateDiff} days have passed and I'm still procrastinating on this...`}</Typography>
      </Grid>
    </Grid>
  );
};

export interface AboutProps {
  me: Me;
}

export default About;
