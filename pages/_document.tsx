import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/styles';

import appConfig from 'app/config';

class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  public setGoogleAnalytics() {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-151404517-1');`,
    };
  }

  public render() {
    return (
      <Html lang={appConfig.defaultLocale.code}>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta httpEquiv="Content-Language" content={appConfig.defaultLocale.code} />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="language" content={appConfig.defaultLocale.code} />
          <meta name="reference" content={appConfig.appName} />
          <meta name="theme-color" content={appConfig.appThemeColor} />
          <meta name="robots" content="index,follow" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700"
          />
          <link rel="stylesheet" href="/static/css/main.css" />
          <link rel="icon" type="image/png" sizes="192x192" href="/static/meta/icon-192x192.png" />
          {/* eslint-disable-next-line react/no-danger */}
          <script dangerouslySetInnerHTML={this.setGoogleAnalytics()} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const { renderPage } = ctx;

  ctx.renderPage = () =>
    renderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        {sheets.getStyleElement()}
      </>
    ),
  };
};

export default MyDocument;
