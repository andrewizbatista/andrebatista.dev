import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faSpotify,
} from '@fortawesome/free-brands-svg-icons';

// Components
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

// Others
import useStyles from './styles';

const Footer = ({ me }: FooterProps) => {
  const classes = useStyles();

  const { handler, socials } = me;
  const { github, linkedin, instagram, spotify } = socials;

  return (
    <div className={classes.wrapper}>
      {github && (
        <Link
          href={github}
          title={`${handler} on GitHub`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className={classes.socialIcon} icon={faGithub} />
        </Link>
      )}
      {linkedin && (
        <Link
          href={linkedin}
          title={`${handler} on LinkedIn`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className={classes.socialIcon} icon={faLinkedin} />
        </Link>
      )}
      {instagram && (
        <Link
          href={instagram}
          title={`${handler} on Instagram`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className={classes.socialIcon} icon={faInstagram} />
        </Link>
      )}
      {spotify && (
        <Link
          href={spotify}
          title={`${handler} on Spotify`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon className={classes.socialIcon} icon={faSpotify} />
        </Link>
      )}
      <Typography variant="body1" color="primary">
        {handler}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Lisboa, Portugal
      </Typography>
    </div>
  );
};

export interface FooterProps {
  me: Me;
}

export default Footer;
