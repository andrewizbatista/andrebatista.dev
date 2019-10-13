import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

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
    width: '60px !important',
    height: '60px !important',
    '&:hover': {
      color: palette.primary.light,
    },
  },
  iconContainer: {
    width: '60px !important',
    height: '60px !important',
    display: 'inline-block',
    marginRight: '1rem',
  },
}));

const Socials = ({ socials, work }: ISocials) => {
  const classes = useStyles(useTheme());

  const { github, linkedin, instagram } = socials;
  const { title, company, companyUrl } = work;

  return (
    <Grid container direction="column">
      <Grid item>
        {github && (
          <Link href={github} target="_blank" rel="noopener noreferrer">
            <div className={classes.iconContainer}>
              <FontAwesomeIcon className={classes.socialIcon} icon={faGithub} />
            </div>
          </Link>
        )}
        {linkedin && (
          <Link href={linkedin} target="_blank" rel="noopener noreferrer">
            <div className={classes.iconContainer}>
              <FontAwesomeIcon className={classes.socialIcon} icon={faLinkedin} />
            </div>
          </Link>
        )}
        {instagram && (
          <Link href={instagram} target="_blank" rel="noopener noreferrer">
            <div className={classes.iconContainer}>
              <FontAwesomeIcon className={classes.socialIcon} icon={faInstagram} />
            </div>
          </Link>
        )}
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
