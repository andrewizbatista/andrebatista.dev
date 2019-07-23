import React from 'react';
import { makeStyles } from '@material-ui/styles';

// Mui
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Components
import PageLayout from 'components/Layout/PageLayout';
import SocialFooter from 'components/SocialFooter';

// Others
import IPage from 'app/entities/Page';
import mockPage from 'app/mocks/mockPage';

// Styles
const useStyles = makeStyles({
  wrapper: {
    height: '100vh',
  },
});

const Homepage = ({ page }: IHomepage) => {
  const classes = useStyles();

  return (
    <PageLayout page={page}>
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="stretch"
        className={classes.wrapper}>
        <Grid item>
          <Typography variant="h1">André Batista</Typography>
          <Typography variant="h2" color="primary">
            @andrewizbatista
          </Typography>
          <Typography variant="caption">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Typography>
        </Grid>
        <Grid item>
          <SocialFooter />
        </Grid>
      </Grid>
    </PageLayout>
  );
};

Homepage.getInitialProps = async (): Promise<IHomepage> => {
  // do your queries here and build up all the props the Page will need.

  return {
    page: mockPage(1, { metaTitle: 'André Batista' }),
  };
};

export interface IHomepage {
  page: IPage;
}

export default Homepage;
