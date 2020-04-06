/**
 * HomePage
 */
import React from 'react';
import { GetStaticProps } from 'next';

// Components
import Grid from '@material-ui/core/Grid';
import PageLayout from 'components/PageLayout';
import Footer from 'components/Footer';
import Header from 'components/Header';
import PageContent from 'components/PageContent';

// Utils
import dataMe from 'src/data/me';
import dataPage from 'src/data/page';
import dataSkills from 'src/data/skills';
import dataTimeline from 'src/data/timeline';
import useGlobalStyles from 'src/styles';

const HomePage = ({ me, page, skills, timeline }: HomePageProps) => {
  const globalClasses = useGlobalStyles();

  return (
    <PageLayout page={page}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="stretch"
        className={globalClasses.wrapper}
      >
        <Grid item xs={12}>
          <Header me={me} />
          <PageContent me={me} skills={skills} timeline={timeline} />
        </Grid>
        <Grid item xs={12} className={globalClasses.footer}>
          <Footer me={me} />
        </Grid>
      </Grid>
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      me: dataMe,
      page: dataPage,
      skills: dataSkills,
      timeline: dataTimeline,
    },
  };
};

export interface HomePageProps {
  me: Me;
  page: Page;
  skills: Skills;
  timeline: Timeline;
}

export default HomePage;
