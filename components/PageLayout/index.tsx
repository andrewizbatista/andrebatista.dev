import React from 'react';
import Particles from 'react-particles-js';

// Mui
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

// Components
import MetaTags from 'components/MetaTags';

// Others
import dataParticles from 'src/data/particles';
import useStyles from './styles';

const PageLayout = ({ page, children }: PageLayoutProps) => {
  const classes = useStyles();

  return (
    <>
      <MetaTags page={page} />
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="stretch"
      >
        <Hidden smDown>
          <Grid item xs={12} sm={3} lg={2} className={classes.sidebar}>
            <Particles height="100%" params={dataParticles} />
          </Grid>
        </Hidden>
        <Grid item xs={12} sm={9} lg={10} className={classes.content}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default PageLayout;

export interface PageLayoutProps {
  page: Page;
  children: any;
}
