import React from 'react';
import Particles from 'react-particles-js';

// Components
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import DynamicMetaTags from 'components/MetaTags/Dynamic';

// Others
import dataParticles from 'src/data/particles';
import useStyles from './styles';

const PageLayout = ({ page, children }: PageLayoutProps) => {
  const classes = useStyles();

  return (
    <>
      <DynamicMetaTags page={page} />
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

export interface PageLayoutProps {
  page: Page;
  children: any;
}

export default PageLayout;
