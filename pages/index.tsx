/**
 * HomePage
 */
import React from 'react';

// Components
import Grid from '@material-ui/core/Grid';
import PageLayout from 'components/PageLayout';
import Footer from 'components/Footer';
import Header from 'components/Header';
import TabsMenu from 'components/TabsMenu';

// Utils
import dataMe from 'src/data/me';
import dataPage from 'src/data/page';
import useGlobalStyles from 'src/styles';

const HomePage = ({ page, me }: HomePageProps) => {
  const globalClasses = useGlobalStyles();

  return (
    <PageLayout page={page}>
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="stretch"
        className={globalClasses.wrapper}
      >
        <Grid item className={globalClasses.spacingTop}>
          <Header me={me} />
          <TabsMenu />
        </Grid>
        <Grid item className={globalClasses.spacingBottom}>
          <Footer me={me} />
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
