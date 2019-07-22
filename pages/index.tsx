import React from 'react';

import PageLayout from 'components/PageLayout';
import ParticlesBackground from 'components/ParticlesBackground';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import IPage, { mockPage } from 'app/entities/Page';

const Homepage = ({ page }: IHomepage): any => {
  return (
    <PageLayout page={page}>
      <Grid container>
        <Grid item>
          <ParticlesBackground />
        </Grid>
        <Grid item>
          <Typography variant="h1">andre batista</Typography>
        </Grid>
      </Grid>
    </PageLayout>
  );
};

Homepage.getInitialProps = async (): Promise<IHomepage> => {
  // do your queries here and build up all the props the Page will need.

  return {
    page: mockPage(1),
  };
};

export interface IHomepage {
  page: IPage;
}

export default Homepage;
