import React from 'react';
import App, { Container } from 'next/app';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';

import theme, { GlobalStyles } from 'app/theme';

class MyApp extends App {
  public render(): JSX.Element {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <GlobalStyles>
            <Component {...pageProps} />
          </GlobalStyles>
        </ThemeProvider>
      </Container>
    );
  }
}

MyApp.getInitialProps = async ({ Component, ctx }: any): Promise<any> => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default MyApp;
