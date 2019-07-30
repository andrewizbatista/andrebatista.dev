import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';

// Mui
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

// Components
import MetaTags from 'components/Core/MetaTags';
import ParticlesSidebar from 'components/Layout/ParticlesSidebar';

// Others
import IPage from 'app/entities/Page';

// Data
import contentParticles from 'content/particles';

// Styles
const useStyles = makeStyles(({ palette }: Theme) => ({
  sidebar: {
    backgroundColor: palette.primary.dark,
    height: '100vh',
    '& div': {
      height: '99%',
    },
  },
  content: {
    boxShadow: '-5px 0px 3px 0px rgba(0,0,0,0.5)',
    height: '100vh',
  },
}));

const PageLayout = ({ page, children }: IPageLayout) => {
  const classes = useStyles(useTheme());

  return (
    <>
      <MetaTags page={page} />
      <Grid container direction="row" justify="space-between" alignItems="stretch">
        <Grid item xs={12} sm={3} lg={2} className={classes.sidebar}>
          <ParticlesSidebar particles={contentParticles} />
        </Grid>
        <Grid item xs={12} sm={9} lg={10} className={classes.content}>
          <Container>{children}</Container>
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
