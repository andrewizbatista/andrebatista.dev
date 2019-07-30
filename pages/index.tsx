import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import { Theme } from '@material-ui/core/styles';

// Mui
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Components
import PageLayout from 'components/Layout/PageLayout';
import Socials from 'components/Socials';
import CuriosityStepper from 'components/CuriosityStepper';

// Others
import IPage from 'app/entities/Page';
import mockPage from 'app/mocks/mockPage';
import IMe from 'app/entities/Me';
import ICuriosity from 'app/entities/Curiosity';
import mockCuriosity from 'app/mocks/mockCuriosity';

// Data
import contentMe from 'content/me';

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

const Homepage = ({ page, me, curiosities }: IHomepage) => {
  const theme = useTheme();
  const classes = useStyles(theme);

  const { name, handler, about, socials, work } = me;

  return (
    <PageLayout page={page}>
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="stretch"
        className={classes.wrapper}>
        <Grid item className={classes.spacingTop}>
          <Typography variant="h1">{name}</Typography>
          <Typography variant="h2" color="primary">
            {handler}
          </Typography>
          <Typography variant="caption">{about}</Typography>
        </Grid>
        <Grid item>
          <CuriosityStepper curiosities={curiosities} />
        </Grid>
        <Grid item className={classes.spacingBottom}>
          <Socials socials={socials} work={work} />
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
    curiosities: mockCuriosity(100),
  };
};

export interface IHomepage {
  page: IPage;
  me: IMe;
  curiosities: ICuriosity[];
}

export default Homepage;
