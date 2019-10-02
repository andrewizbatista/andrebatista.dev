import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

import { ServerStyleSheets } from '@material-ui/styles';

class MyDocument extends Document {
  public render() {
    return (
      <Html>
        <Head />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700" />
        <link rel="stylesheet" href="/static/css/main.css" />
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
