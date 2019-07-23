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
import IMe from 'app/entities/Me';

// Data
import contentMe from 'content/me';

// Styles
const useStyles = makeStyles({
  wrapper: {
    height: '100vh',
  },
});

const Homepage = ({ page, me }: IHomepage) => {
  const classes = useStyles();

  const { name, handler, about, socials } = me;

  return (
    <PageLayout page={page}>
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="stretch"
        className={classes.wrapper}>
        <Grid item>
          <Typography variant="h1">{name}</Typography>
          <Typography variant="h2" color="primary">
            {handler}
          </Typography>
          <Typography variant="caption">{about}</Typography>
        </Grid>
        <Grid item>
          <SocialFooter socials={socials} />
        </Grid>
      </Grid>
    </PageLayout>
  );
};

Homepage.getInitialProps = async (): Promise<IHomepage> => {
  // do your queries here and build up all the props the Page will need.

  return {
    page: mockPage(1, { metaTitle: 'André Batista' }),
    me: contentMe,
  };
};

export interface IHomepage {
  page: IPage;
  me: IMe;
}

export default Homepage;
