import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';

// Mui
import Grid from '@material-ui/core/Grid';

// Components
import PageLayout from 'components/Layout/PageLayout';
import Socials from 'components/Socials';
import About from 'components/About';

// Others
import IPage from 'app/entities/Page';
// import mockPage from 'app/mocks/mockPage';
import IMe from 'app/entities/Me';

// Data
import contentMe from 'app/content/me';
import contentPage from 'app/content/page';

// Styles
const useStyles = makeStyles(({ spacing }: Theme) => ({
  wrapper: {
    height: '100vh',
  },
  spacingTop: {
    paddingTop: spacing(5),
  },
  spacingBottom: {
    paddingBottom: spacing(2),
  },
}));

const Homepage = ({ page, me }: IHomepage) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { socials, work } = me;

  return (
    <PageLayout page={page}>
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="stretch"
        className={classes.wrapper}>
        <Grid item className={classes.spacingTop}>
          <About me={me} />
        </Grid>
        <Grid item className={classes.spacingBottom}>
          <Socials socials={socials} work={work} />
        </Grid>
      </Grid>
    </PageLayout>
  );
};

Homepage.getInitialProps = async (): Promise<IHomepage> => {
  return {
    page: contentPage,
    me: contentMe,
  };
};

export interface IHomepage {
  page: IPage;
  me: IMe;
}

export default Homepage;
