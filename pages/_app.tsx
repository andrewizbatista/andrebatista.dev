import React, { StrictMode } from 'react';
import App from 'next/app';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';

import { theme } from 'app/theme';

class MyApp extends App {
  public componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  public render() {
    const { Component, pageProps } = this.props;

    return (
      <StrictMode>
        <ThemeProvider theme={theme}>
          {/* <ImTheBackground> */}
          <CssBaseline />
          <Component {...pageProps} />
          {/* </ImTheBackground> */}
        </ThemeProvider>
      </StrictMode>
    );
  }
}

// MyApp.getInitialProps = async ({ Component, ctx }) => {
//   let pageProps = {};

//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps(ctx);
//   }

//   return { pageProps };
// };

// const ImTheBackground = styled('div')({
//   height: '100vh',
//   width: '100vw',
//   backgroundImage: 'url(static/img/andrebatista.png)',
//   backgroundPosition: 'right',
//   backgroundRepeat: 'no-repeat',
//   backgroundSize: 'contain',
// });

export default MyApp;
