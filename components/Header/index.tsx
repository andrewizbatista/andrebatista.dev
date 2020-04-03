import React, { useState, useCallback } from 'react';

// Components
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

// Others
import useStyles from './styles';

const Header = ({ me }: HeaderProps) => {
  const classes = useStyles();

  const { firstName, lastName, work } = me;
  const { title, company, companyUrl } = work;

  const [sayHi, setSayHi] = useState<boolean>(false);

  const showGreetings = useCallback(() => {
    if (!sayHi) {
      setSayHi(true);
      setTimeout(() => setSayHi(false), 1000);
    }
  }, [sayHi]);

  return (
    <>
      <Typography
        variant="h1"
        className={classes.myName}
        onClick={showGreetings}
      >
        {`${firstName} ${lastName}`}
      </Typography>
      <Typography
        variant="body1"
        color="primary"
        className={classes.sayHi}
        style={{ opacity: sayHi ? 1 : 0 }}
      >
        Oh hi there!
      </Typography>
      <Typography variant="h2" className={classes.myTitle}>
        {`${title} @ `}
        <Link
          href={companyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.company}
        >
          {company}
        </Link>
      </Typography>
    </>
  );
};

export interface HeaderProps {
  me: Me;
}

export default Header;
