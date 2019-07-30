import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Mui
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

// Others
import { ISocial, IWork } from 'app/entities/Me';

// Styles
const useStyles = makeStyles(({ palette }: Theme) => ({
  socialIcon: {
    marginRight: '1rem',
    marginBottom: '1rem',
    cursor: 'pointer',
    transition: 'color 0.2s ease',
    '&:hover': {
      color: palette.primary.light,
    },
  },
}));

const Socials = ({ socials, work }: ISocials) => {
  const classes = useStyles(useTheme());

  const { github, twitter, linkedin } = socials;
  const { title, company, companyUrl } = work;

  return (
    <Grid container direction="column">
      <Grid item>
        <Link href={linkedin} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className={classes.socialIcon} icon={faLinkedin} size="4x" />
        </Link>
        <Link href={github} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className={classes.socialIcon} icon={faGithub} size="4x" />
        </Link>
        <Link href={twitter} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon className={classes.socialIcon} icon={faTwitter} size="4x" />
        </Link>
      </Grid>
      <Grid item>
        <Typography>
          {`${title} @ `}
          <Link href={companyUrl} target="_blank" rel="noopener noreferrer">
            {company}
          </Link>
        </Typography>
        <Typography variant="caption">Lisbon, Portugal</Typography>
      </Grid>
    </Grid>
  );
};

export interface ISocials {
  socials: ISocial;
  work: IWork;
}

export default Socials;
