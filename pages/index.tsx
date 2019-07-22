import React from 'react';
import { styled } from '@material-ui/styles';

import PageLayout from 'components/PageLayout';
import ParticlesBackground from 'components/ParticlesBackground';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

import IPage, { mockPage } from 'app/entities/Page';

const Homepage = ({ page }: IHomepage): any => {
  return (
    <PageLayout page={page}>
      <Grid container direction="row" justify="space-between" alignItems="stretch">
        <ParticlesWrapper item xs={12} sm={3}>
          <ParticlesBackground />
        </ParticlesWrapper>
        <ContentWrapper item xs={12} sm={9}>
          <Content2Wrapper
            container
            direction="column"
            justify="space-between"
            alignItems="stretch">
            <Grid item>
              <Typography variant="h1">andré batista</Typography>
              <Typography variant="h2" color="primary">
                @andrewizbatista
              </Typography>
              <Typography variant="caption">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </Grid>
            <Grid item>
              <Grid container direction="column">
                <Grid item>
                  <FontAwesomeIcon icon={faGithub} size="4x" />
                  <FontAwesomeIcon icon={faTwitter} size="4x" />
                </Grid>
                <Grid item>
                  <Typography>
                    React Developer @{' '}
                    <Link
                      href="https://thevirtualforge.com"
                      target="_blank"
                      rel="noopener noreferrer">
                      The Virtual Forge
                    </Link>
                  </Typography>
                  <Typography variant="caption">Lisbon, Portugal</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Content2Wrapper>
        </ContentWrapper>
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

const ParticlesWrapper = styled(Grid)({
  backgroundColor: '#8e3545',
  height: '100vh',
  '& div': {
    height: '99%',
  },
});

const ContentWrapper = styled(Grid)({
  boxShadow: '-5px 0px 3px -1px rgba(0,0,0,0.5)',
  height: '100vh',
  paddingLeft: '2rem',
});

const Content2Wrapper = styled(Grid)({
  height: '100vh',
});
