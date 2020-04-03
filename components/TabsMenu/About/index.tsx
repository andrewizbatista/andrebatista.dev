import React from 'react';
import moment from 'moment';

// Components
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// import Link from '@material-ui/core/Link';

// Others
import dataMe from 'src/data/me';
// import commaSeparatedStrings from 'src/helpers/commaSeparatedStrings';
// import useStyles from './styles';

const About = ({}: AboutProps) => {
  // const classes = useStyles();

  const lazyDate = moment('2020-03-30T00:00:00.000Z');
  const lazyDateDiff = moment().diff(lazyDate, 'days');

  return (
    <Grid container direction="column" alignItems="flex-start">
      <Grid item md={4}>
        <Typography variant="subtitle2">{dataMe.about}</Typography>
        <Typography
          variant="caption"
          color="textSecondary"
        >{`${lazyDateDiff} days have passed and I'm still procrastinating on this...`}</Typography>
      </Grid>
      {/* <Section title="Games" data={dataMe.games} />
      <Section title="Shows" data={dataMe.shows} />
      <Section title="Music" data={dataMe.music} />
      <Typography variant="body2" className={classes.followSpotify}>
        Follow me on{' '}
        <Link
          href={dataMe.socials.spotify}
          target="_blank"
          rel="noopener noreferrer"
        >
          Spotify
        </Link>
        , I have 50+ public playlists.
      </Typography> */}
    </Grid>
  );
};

// const Section = ({ title, data }: { title: string; data: string[] }) => {
//   const classes = useStyles();

//   return (
//     <Grid item md={5} className={classes.sectionSpacing}>
//       <Typography variant="subtitle2" color="primary">
//         {title}
//       </Typography>
//       <Typography variant="body1">
//         {`${commaSeparatedStrings(data)}...`}
//       </Typography>
//     </Grid>
//   );
// };

export interface AboutProps {}

export default About;
