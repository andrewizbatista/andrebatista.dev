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
} from '@fortawesome/free-brands-svg-icons';

// Others
import useStyles from './styles';

const Socials = ({ socials, work }: SocialsProps) => {
  const classes = useStyles();

  const { github, linkedin, instagram } = socials;
  const { title, company, companyUrl } = work;

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
      </Grid>
      <Grid item>
        <Typography variant="subtitle1">
          {`${title} @ `}
          <Link
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.company}>
            {company}
          </Link>
        </Typography>
        <Typography variant="subtitle2" className={classes.location}>
          Lisbon, Portugal
        </Typography>
      </Grid>
    </Grid>
  );
};

export interface SocialsProps {
  socials: Socials;
  work: Work;
}

export default Socials;
