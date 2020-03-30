import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';

// Mui
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

// Components
import MetaTags from 'components/Core/MetaTags';
import ParticlesSidebar from 'components/Layout/ParticlesSidebar';

// Others
import IPage from 'app/entities/Page';

// Data
import contentParticles from 'app/content/particles';

// Styles
const useStyles = makeStyles(({ breakpoints }: Theme) => ({
  sidebar: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: '100vh',
    '& div': {
      height: '99%',
    },
  },
  content: {
    boxShadow: '-5px 0px 3px 0px rgba(0,0,0,0.5)',
    height: '100vh',
    paddingLeft: '2rem',
    [breakpoints.down('xs')]: {
      paddingLeft: '1rem',
    },
  },
}));

const PageLayout = ({ page, children }: IPageLayout) => {
  const classes = useStyles(useTheme());

  return (
    <>
      <MetaTags page={page} />
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="stretch">
        <Hidden smDown>
          <Grid item xs={12} sm={3} lg={2} className={classes.sidebar}>
            <ParticlesSidebar particles={contentParticles} />
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

export interface IPageLayout {
  page: IPage;
  children: any;
}
