import React from 'react';

// Mui
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

// Assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faSpotify,
} from '@fortawesome/free-brands-svg-icons';

// Others
import useStyles from './styles';

const Footer = ({ me }: FooterProps) => {
  const classes = useStyles();

  const { handler, socials } = me;
  const { github, linkedin, instagram, spotify } = socials;

  return (
    <Grid container direction="column" className={classes.wrapper}>
      <Grid item>
        {github && (
          <Link href={github} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className={classes.socialIcon} icon={faGithub} />
          </Link>
        )}
        {linkedin && (
          <Link href={linkedin} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className={classes.socialIcon} icon={faLinkedin} />
          </Link>
        )}
        {instagram && (
          <Link href={instagram} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon
              className={classes.socialIcon}
              icon={faInstagram}
            />
          </Link>
        )}
        {spotify && (
          <Link href={spotify} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon className={classes.socialIcon} icon={faSpotify} />
          </Link>
        )}
        <Typography variant="body1" color="primary">
          {handler}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body2" className={classes.location}>
          Lisboa, Portugal
        </Typography>
      </Grid>
    </Grid>
  );
};

export interface FooterProps {
  me: Me;
}

export default Footer;
