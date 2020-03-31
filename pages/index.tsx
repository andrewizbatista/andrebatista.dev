import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';

// Mui
import Grid from '@material-ui/core/Grid';

// Components
import PageLayout from 'components/PageLayout';
import Socials from 'components/Socials';
import About from 'components/About';

// Data
import dataMe from 'app/data/me';
import dataPage from 'app/data/page';

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

const HomePage = ({ page, me }: HomePageProps) => {
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

HomePage.getInitialProps = async (): Promise<HomePageProps> => {
  return {
    page: dataPage,
    me: dataMe,
  };
};

export interface HomePageProps {
  page: Page;
  me: Me;
}

export default HomePage;
