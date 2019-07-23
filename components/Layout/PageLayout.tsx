import React from 'react';
import { makeStyles } from '@material-ui/styles';

// Mui
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

// Components
import MetaTags from 'components/Core/MetaTags';
import ParticlesSidebar from 'components/Layout/ParticlesSidebar';

// Others
import IPage from 'app/entities/Page';

// Styles
const useStyles = makeStyles({
  sidebar: {
    backgroundColor: '#8e3545',
    height: '100vh',
    '& div': {
      height: '99%',
    },
  },
  content: {
    boxShadow: '-5px 0px 3px -1px rgba(0,0,0,0.5)',
    height: '100vh',
  },
});

const PageLayout = ({ page, children }: IPageLayout): any => {
  const classes = useStyles();

  return (
    <>
      <MetaTags page={page} />
      <Grid container direction="row" justify="space-between" alignItems="stretch">
        <Grid item xs={12} sm={3} className={classes.sidebar}>
          <ParticlesSidebar />
        </Grid>
        <Grid item xs={12} sm={9} className={classes.content}>
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
  noSidebar?: boolean;
}
